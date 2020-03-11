import types from '../types';
import { IContent } from '../../models/contentInterface';
import getContent from '../../services/contentService'

const initialState: IContent = getContent("calories");

const contentReducer = (contentState: IContent = initialState, action: { type: string, payload: IContent }): IContent => {

    switch (action.type) {

        case types.CHANGE_CONTENT:
            return { ...action.payload }

        default:
            return contentState
    }
}

export default contentReducer