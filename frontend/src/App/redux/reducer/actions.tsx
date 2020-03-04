import types from './types';
import { IAnswer, IContent } from '../../models/contentInterface';

export const addAnswer = (answer: IAnswer) => {
    return {
        type: types.ADD_ANSWER,
        answer: answer
    }
}

export const updateAnswer = (answer: IAnswer) => {
    return {
        type: types.UPDATE_ANSWER,
        answer: answer
    }
}

export const changeContent = (content: IContent) => {
    return {
        type: types.CHANGE_CONTENT,
        content: content
    }
}