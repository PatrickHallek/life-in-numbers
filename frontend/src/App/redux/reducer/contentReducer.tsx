import types from './types';
import { IContent } from '../../models/contentInterface';
import getContent from '../../services/contentService'

const initialState: IContent = getContent("calories");

const contentReducer = (contentState: IContent = initialState, action: any): IContent => {
    switch (action.type) {

        case types.CHANGE_CONTENT:
            return { ...action.content }

        case types.ADD_ANSWER:
            return { ...contentState, answers: [...contentState?.answers, action.answer] }

        case types.UPDATE_ANSWER:
            // Check if answer was answered before
            const isAnswer = contentState.answers?.find(answer => answer.inputComponentTag == action.answer.inputComponentTag)
            if (isAnswer === undefined) return { ...contentState, answers: [...contentState?.answers, { ...action.answer }] } // Add answer
            else return { // Update answer
                ...contentState, answers: contentState.answers?.map(answer => {
                    if (answer.inputComponentTag === action.answer.inputComponentTag) return { ...answer, ...action.answer }
                    else return answer
                })
            }

        default:
            return contentState

    }
}

export default contentReducer