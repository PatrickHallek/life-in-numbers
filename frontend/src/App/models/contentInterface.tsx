export interface IContent {
    topic: string,
    title: string,
    colorTheme: {
        primary: string,
        secondary: string,
        background: string
    },
    resultText: string,
    formula: Array<any>,
    questionnaire: Array<IContentQuestionnaire>,
    answers?: Array<IAnswer>,
    result?: number|undefined
}

export interface IContentQuestionnaire {
    title: string,
    inputComponentTag: string
}

export interface IAnswer {
    inputComponentTag: string,
    value: number
}