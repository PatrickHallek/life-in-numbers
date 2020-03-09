import types from './types';
import { IContent } from '../../models/contentInterface';
import getContent from '../../services/contentService'

const initialState: IContent = getContent("calories");

const contentReducer = (contentState: IContent = initialState, action: any): IContent => {
    switch (action.type) {

        case types.CHANGE_CONTENT:
            return { ...action.content }

        case types.UPDATE_ANSWER:
            // Check if answer was answered before
            const isAnswer = contentState.answers?.find(answer => answer.inputComponentTag === action.answer.inputComponentTag)
            if (contentState.answers) {
                if (isAnswer === undefined)
                    return { ...contentState, answers: [...contentState?.answers, { ...action.answer }] } // Add answer
                else return {
                    ...contentState, answers: contentState.answers?.map(answer => {
                        if (answer.inputComponentTag === action.answer.inputComponentTag) return { ...answer, ...action.answer }
                        else return answer
                    }) // Update answer
                }
            }
            else return { ...contentState, answers: [{ ...action.answer }] } // Add initial answer

        default:
            return contentState

    }
}

export default contentReducer