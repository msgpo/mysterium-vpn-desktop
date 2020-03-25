/**
 * Copyright (c) 2020 BlockDev AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import tequilapi from "../tequila"
import { action, observable, reaction } from "mobx"
import { RootStore } from "../store"
import { AppState, AppStateChangeEvent, eventBus, Identity, IdentityRegistrationStatus } from "../tequila-sse"
import { TransactorFeesResponse } from "mysterium-vpn-js"

export class IdentityStore {
    @observable
    loading = false
    @observable
    identity?: Identity
    @observable
    identities: Identity[] = []

    root: RootStore

    constructor(root: RootStore) {
        this.root = root
    }

    setupReactions(): void {
        eventBus.on(AppStateChangeEvent, (state: AppState) => {
            this.setIdentities(state.identities ?? [])
        })
        reaction(
            () => this.identities,
            async identities => {
                this.refreshIdentity(identities)
                if (!this.identity) {
                    const id = await this.selectIdentity()
                    if (id) {
                        this.setIdentity(id)
                    } else {
                        await this.create()
                    }
                }
            },
        )
        reaction(
            () => this.identity,
            async identity => {
                if (!identity) {
                    return
                }
                await this.unlock()
                const canRegister =
                    identity.registrationStatus &&
                    [
                        IdentityRegistrationStatus.Unregistered,
                        IdentityRegistrationStatus.InProgress,
                        IdentityRegistrationStatus.RegistrationError,
                    ].includes(identity.registrationStatus)
                if (canRegister) {
                    await this.register(identity)
                }
            },
        )
    }

    @action
    refreshIdentity = (identities: Identity[]): void => {
        if (!this.identity) {
            return
        }
        const matchingId = identities.find(id => id.id == this.identity?.id)
        if (!matchingId) {
            this.setIdentity(undefined)
            return
        }
        this.identity.balance = matchingId.balance
        this.identity.registrationStatus = matchingId.registrationStatus
    }

    @action
    selectIdentity = async (): Promise<Identity | undefined> => {
        if (!this.identities) {
            return undefined
        }
        return this.identities.find(id => id.registrationStatus != IdentityRegistrationStatus.RegisteredProvider)
    }

    @action
    async create(): Promise<void> {
        await tequilapi.identityCreate("")
    }

    @action
    async unlock(): Promise<void> {
        if (!this.identity) {
            return
        }
        const i = this.identity.id
        return await tequilapi.identityUnlock(i, "", 10000)
    }

    @action
    async register(id: Identity): Promise<void> {
        const fees = await this.transactorFees()
        console.log("Transactor fees: ", JSON.stringify(fees))
        return tequilapi.identityRegister(id.id, { fee: fees.registration })
    }

    @action
    async transactorFees(): Promise<TransactorFeesResponse> {
        return await tequilapi.transactorFees()
    }

    @action
    setLoading = (b: boolean): void => {
        this.loading = b
    }

    @action
    setIdentity = (identity?: Identity): void => {
        this.identity = identity
    }

    @action
    setIdentities = (identities: Identity[]): void => {
        this.identities = identities
    }
}
