import { Action } from '@ngrx/store';

export const WIT_SEND_MESSAGE = '[WitAI] Send Message';
export const WIT_RECEIVE_MESSAGE = '[WitAI] Receive Message';

export class SendMessage implements Action {
    readonly type = WIT_SEND_MESSAGE;
    constructor(public payload: any) { }
}

export class ReceiveMessage implements Action {
    readonly type = WIT_RECEIVE_MESSAGE;
    constructor(public payload: any) { }
}

export type WitAiActions =
    SendMessage |
    ReceiveMessage;
