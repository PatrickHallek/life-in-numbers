import JSONContent from '../assets/content.json'
import { IContent } from '../models/contentInterface.jsx'

const initialState: IContent = {
    "topic": "",
    "title": "",
    "colorTheme": {
        "primary": "",
        "secondary": "",
        "background": ""
    },
    "resultText": "",
    "formula": { "additions": [] },
    "questionnaire": [
        {
            "title": "",
            "inputComponentTag": ""
        }
    ]
}

const getContent = (topic: string) => {
    const content: IContent | undefined = JSONContent.find((content: IContent) => content.topic === topic)
    if (content !== undefined) { return content }
    else return initialState
}

export default getContent;
