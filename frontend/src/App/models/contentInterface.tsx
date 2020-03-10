export interface IContent {
    topic: string,
    title: string,
    colorTheme: {
        primary: string,
        secondary: string,
        background: string
    },
    resultText: string,
    questionnaire: Array<IContentQuestionnaire>,
    answers?: Array<IAnswer>,
    result?: { value: number | undefined, averageValue?: number }
}

export interface IContentQuestionnaire {
    title: string,
    inputComponentTag: string
}

export interface IAnswer {
    inputComponentTag: string,
    value: number | string
}