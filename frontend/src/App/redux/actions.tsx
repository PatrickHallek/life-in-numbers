import types from './types';
import { IAnswer, IContent, IResult } from '../models/contentInterface';


export const addAnswer = (answer: IAnswer) => {
    return {
        type: types.ADD_ANSWER,
        payload: answer
    }
}

export const updateAnswer = (answer: IAnswer) => {
    return {
        type: types.UPDATE_ANSWER,
        payload: answer
    }
}

export const changeContent = (content: IContent) => {
    return {
        type: types.CHANGE_CONTENT,
        payload: content
    }
}

export const addResult = (result: IResult) => {
    return {
        type: types.UPDATE_RESULT,
        payload: result
    }
}