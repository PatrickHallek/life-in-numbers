import JSONContent from '../assets/content.json'
import { IContent } from '../models/contentInterface.jsx'

const initialState: IContent = {
    "topic": "calories",
    "title": "How many calories have you burned in your entire life?",
    "theme": {
        "primary": "#257C62",
        "secondary": "#A5FFD4",
        "background": "#CCFFE7",
        "backgroundImage": "avocado.png",
        "topEllipse": "ellipse.png",
        "bottomEllipse": "ellipse.png"
    },
    "resultText": ["You burned", "result", "calories in your entire life!"],
    "questionnaire": [{
        "title": "How old are you?",
        "inputComponentTag": "age"
    },
    {
        "title": "How much do you weigt?",
        "inputComponentTag": "weight"
    },
    {
        "title": "Wich sex do you have?",
        "inputComponentTag": "sex"
    },
    {
        "title": "How tall are you?",
        "inputComponentTag": "height"
    }
    ]
}

const getContent = (topic: string) => {
    const content: IContent | undefined = JSONContent.find((content: IContent) => content.topic === topic)
    if (content !== undefined) { return content }
    else return initialState
}

export default getContent;
