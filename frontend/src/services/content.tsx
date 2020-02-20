import JSONContent from './content.json'

export interface IContent {
    topic: string,
    title: string,
    colorTheme: {
        primary: string,
        secondary: string,
        background: string
    },
    resultText: string,
    formula: string,
    questionnaire: Array<IContentQuestionnaire>
}

export interface IContentQuestionnaire {
    title: string,
    inputComponentTag: string
}

const GetContent = (topic: string) => {
    const content: IContent | undefined = JSONContent.find((content: IContent) => content.topic === topic)
    if (content !== undefined) { return content }
    else return initialContent
}

const initialContent = {
    "topic": "calories",
    "title": "Test Title, Please Edit This Page",
    "colorTheme": {
        "primary": "#257C62",
        "secondary": "#A5FFD4",
        "background": "#CCFFE7"
    },
    "resultText": "this is the result",
    "formula": "1+2+3",
    "questionnaire": [{
        "title": "How old are you?",
        "inputComponentTag": "sex"
    },
    {
        "title": "How tall are you?",
        "inputComponentTag": "sex"
    },
    {
        "title": "How much do you weigt?",
        "inputComponentTag": "sex"
    },
    {
        "title": "Wich sex do you have?",
        "inputComponentTag": "sex"
    }
    ]
}

export default GetContent;
