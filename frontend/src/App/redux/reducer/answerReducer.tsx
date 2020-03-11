import types from "../types"
import { IAnswer } from "../../models/contentInterface"

export const answerReducer = (answersState: Array<IAnswer> = [], action: { type: string, payload: IAnswer }): Array<IAnswer> => {
    const aswersExists = answersState.find(answer => answer.inputComponentTag === action.payload.inputComponentTag)
    if (aswersExists !== undefined) action.type = "UPDATE_ANSWER"

    switch (action.type) {

        case types.ADD_ANSWER:
            return answersState.length ? [...answersState, action.payload] : [{ ...action.payload }]

        case types.UPDATE_ANSWER:
            return answersState.map(answer =>
                answer.inputComponentTag === action.payload.inputComponentTag ?
                    { ...action.payload } : { ...answer })

        default:
            return [...answersState]
    }
}