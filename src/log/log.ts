/**
 * Copyright (c) 2020 BlockDev AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import electronLog from "electron-log"

electronLog.transports.console.level = "silly"
electronLog.transports.file.level = "debug"

export const log = electronLog
