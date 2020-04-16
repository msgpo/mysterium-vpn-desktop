/**
 * Copyright (c) 2020 BlockDev AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react"
import { observer } from "mobx-react-lite"
import styled from "styled-components"

import { useStores } from "../../../store"
import { perGiB, perMinute } from "../../../payment/rate"

const Container = styled.div`
    color: #c0b3c9;
    margin: 16px auto 32px;
`

const Row = styled.div`
    margin-bottom: 14px;
    display: flex;
    flex-direction: row;
`

const Label = styled.span`
    width: 120px;
`

export const ConnectionProposal: React.FC = observer(() => {
    const {
        connection: { proposal: { paymentMethod, providerId } = {} },
    } = useStores()
    const price = paymentMethod ? `${perMinute(paymentMethod)}/min ＋ ${perGiB(paymentMethod)}/GiB` : ""
    return (
        <Container>
            <Row>
                <Label>Provider ID</Label>
                {providerId ?? ""}
            </Row>
            <Row>
                <Label>Price</Label>
                {price}
            </Row>
        </Container>
    )
})
