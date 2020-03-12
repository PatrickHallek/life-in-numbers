import JSONContent from '../assets/content.json'
import { IContent } from '../models/contentInterface.jsx'

const getContent = (topic: string) => {
    const content: IContent | undefined = JSONContent.find((content: IContent) => content.topic === topic)
    if (content !== undefined) { return content }
    else return JSONContent[0]
}

export default getContent;
