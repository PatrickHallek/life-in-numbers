import { IAnswer, IResult } from "../models/contentInterface";

const getCaloriesResultService = (answers: Array<IAnswer>): IResult | undefined => {
    const childCalories = 5110000 // age 0 - 10
    let preTeenCalories = 2920000 // age 11 - 14
    let teenCalories = 4088000 // age 15 - 18
    let adultCaloriesPerDay = 2000 // age 18+
    const childDefinitionAge = 10
    const preTeenDefinitionAge = 14
    const adultDefinitionAge = 18
    const preTeenMaleFactor = 1.136
    const teenMaleFactor = 1.136
    const adultMaleFactor = 1.136
    const femaleFactor = 1
    const weightFactor = 0.01
    const averageFemaleWeigth = 65
    const averageMaleWeigth = 65

    const sex = answers.find(answer => answer.inputComponentTag === "sex")?.value
    const age = answers.find(answer => answer.inputComponentTag === "age")?.value
    const weight = answers.find(answer => answer.inputComponentTag === "weight")?.value
    const height = answers.find(answer => answer.inputComponentTag === "height")?.value

    if (sex && age && height && weight) {
        preTeenCalories *= sex === "male" ? preTeenMaleFactor : femaleFactor
        teenCalories *= sex === "male" ? teenMaleFactor : femaleFactor

        let adultCalories = adultCaloriesPerDay * (Number(age) - adultDefinitionAge) * 365
        const averageAdultCalories = adultCalories * (sex === "male" ? adultMaleFactor : femaleFactor)
        const averageCalories = Math.round(childCalories + preTeenCalories + teenCalories + averageAdultCalories)

        adultCalories *= sex === "male" ?
            adultMaleFactor + (Number(weight) - averageMaleWeigth) * weightFactor :
            femaleFactor + (Number(weight) - averageFemaleWeigth) * weightFactor

        if (age < childDefinitionAge)
            return { value: (Math.round(childCalories * Number(age) / childDefinitionAge)) }
        else if (age < preTeenDefinitionAge)
            return { value: Math.round(childCalories + preTeenCalories * Number(age) / preTeenDefinitionAge) }
        else if (age < adultDefinitionAge)
            return { value: Math.round(childCalories + preTeenCalories + teenCalories * Number(age) / adultDefinitionAge) }
        else
            return { value: Math.round(childCalories + preTeenCalories + teenCalories + adultCalories), averageValue: averageCalories }

    } else return
}

export default getCaloriesResultService;
