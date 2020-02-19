import JSONContent from './content.json'

export interface IContent {
    id: number,
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
    id: number,
    title: string,
    inputComponent: any
}

const GetContent = (topic: string) => {
    const content: IContent | undefined = JSONContent.find((content: IContent) => content.topic === topic)
    if (content !== undefined) { return content }
    else return initialContent
}

const initialContent = {
    "id": 1,
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
        "id": 1,
        "title": "How old are you?",
        "inputComponent": 1
    },
    {
        "id": 2,
        "title": "How tall are you?",
        "inputComponent": 1
    },
    {
        "id": 3,
        "title": "How much do you weigt?",
        "inputComponent": 1
    },
    {
        "id": 4,
        "title": "Wich sex do you have?",
        "inputComponent": 1
    }
    ]
}

export default GetContent;
