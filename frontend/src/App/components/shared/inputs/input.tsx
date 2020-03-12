import React from "react";
import Sex from "./inputElements/sex"
import Age from "./inputElements/age"
import Height from "./inputElements/height";
import Weight from "./inputElements/weight";
import ActivityLevel from "./inputElements/activityLevel";
import TeenageActivityLevel from "./inputElements/teenageActivityLevel";
import Job from "./inputElements/job";

interface IInputComponentLibrary {
    sex: any;
    age: any;
    height: any;
    weight: any;
    activityLevel: any;
    teenageActivityLevel: any;
    job: any;
}

const InputComponentMapping = (componentTag: string) => {
    return Object(InputComponentLibrary)[componentTag]
}

const InputComponentLibrary: IInputComponentLibrary = {
    sex: <Sex />,
    age: <Age />,
    height: <Height />,
    weight: <Weight />,
    activityLevel: <ActivityLevel />,
    teenageActivityLevel: <TeenageActivityLevel />,
    job: <Job />
}

export default InputComponentMapping