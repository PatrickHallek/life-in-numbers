import { IResult } from "../../models/contentInterface"
import types from "../types"

export const resultReducer = (resultState: IResult = {}, action: { type: string, payload?: IResult }): IResult => {

    switch (action.type) {

        case types.CLEAR_RESULT:
            return {}

        case types.UPDATE_RESULT:
            return { ...action.payload }

        default:
            return { ...resultState }
    }
}