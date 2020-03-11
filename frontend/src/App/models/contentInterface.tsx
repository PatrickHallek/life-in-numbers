export interface IContent {
    topic: string,
    title: string,
    theme: {
        primary: string,
        secondary: string,
        background: string,
        backgroundImage: string,
        topEllipse: string,
        bottomEllipse: string,

    },
    resultText: string,
    questionnaire: Array<IContentQuestionnaire>,
}

export interface IContentQuestionnaire {
    title: string,
    inputComponentTag: string
}

export interface IAnswer {
    inputComponentTag?: string,
    value?: number | string
}

export interface IResult {
    value?: number,
    averageValue?: number
}