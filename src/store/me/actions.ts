import { ActionCreator } from "redux";

//файкт реквеста
export const ME_REQUEST = 'ME_REQUEST';
export type MeRequestAction = {
    type: typeof ME_REQUEST;
}

export const meRequest: ActionCreator<MeRequestAction> = () => ({
       type: ME_REQUEST 
    });



//Данные из успешного реквеста
export interface IUserData {
    name?: string;
    iconImg?: string;
}

export const ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';
export type MeRequestSuccessAction = {
    type: typeof ME_REQUEST_SUCCESS;
    data: IUserData;
}

export const meRequestSuccess: ActionCreator<MeRequestSuccessAction> = (data:IUserData) => ({
       type: ME_REQUEST_SUCCESS,
       data,
    });



// неуспешный рексест и данные об ошибке
export const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';
export type MeRequestErrorAction = {
    type: typeof ME_REQUEST_ERROR;
    error: string;
}

export const meRequestError: ActionCreator<MeRequestErrorAction> = (error:string) => ({
       type: ME_REQUEST_ERROR,
       error
    });