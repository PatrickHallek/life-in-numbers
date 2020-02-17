import JSONContent from './content.json'
import { Subject } from 'rxjs';

export interface ContentI {
    id: number,
    topic: string,
    title: string,
    colorTheme: {
        primary: string,
        secondary: string,
        background: string
    },
    result_text: string,
    formula: string,
    questionnaire: any
}

// const content = new Subject<ContentI>();

// const ContentService: any = {
//     setContent: (topic: string) => {
//         const newContent = JSONContent.find((content: ContentI) => content.topic === topic)
//         content.next(newContent)
//     },
//     getContent: () => {
//         console.log("Observe")
//         console.log(content.subscribe())
//         return content.asObservable()
//     },
// };

const GetContent = (topic: string) => {
    const content = JSONContent.find((content: ContentI) => content.topic === topic)
    return content
}

/*const ContentTopics = () => {
    const content: Array<ContentI> = JSONContent
    content.map(content => content.topic)
    return content
};*/

export default GetContent;
