import { IAnswer } from "../models/contentInterface";

const getCaloriesResult = (answers: Array<IAnswer>): { value: number, averageValue?: number } => {
    const childCalories = 5110000 // age 0 - 10
    let preTeenCalories = 2920000 // age 11 - 14
    let teenCalories = 4088000 // age 15 - 18
    let adultCaloriesPerDay = 2000 // age 18+

    const sex = answers.find(answer => answer.inputComponentTag === "sex")?.value
    const age = answers.find(answer => answer.inputComponentTag === "age")?.value
    const weight = answers.find(answer => answer.inputComponentTag === "weight")?.value
    const height = answers.find(answer => answer.inputComponentTag === "height")?.value

    if (sex && age && height && weight) {
        preTeenCalories *= sex === "male" ? 1.136 : 1
        teenCalories *= sex === "male" ? 1.36 : 1

        let adultCalories = adultCaloriesPerDay * (Number(age) - 18) * 365
        const averageAdultCalories = adultCalories * (sex === "male" ? 1.136 + 1 * 0.005 : 1 + 1 * 0.005)
        const averageCalories = Math.round(childCalories + preTeenCalories + teenCalories + averageAdultCalories)

        adultCalories *= sex === "male" ? 1.136 + (Number(weight) - 80) * 0.01 : 1 + (Number(weight) - 65) * 0.01

        if (age < 10) return { value: (Math.round(childCalories * Number(age) / 10)) }
        else if (age < 14) return { value: Math.round(childCalories + preTeenCalories * Number(age) / 14) }
        else if (age < 18) return { value: Math.round(childCalories + preTeenCalories + teenCalories * Number(age) / 18) }
        else return { value: Math.round(childCalories + preTeenCalories + teenCalories + adultCalories), averageValue: averageCalories }

    } else return { value: 0 }
}

export default getCaloriesResult;
