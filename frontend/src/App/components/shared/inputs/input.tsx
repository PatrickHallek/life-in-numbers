import React from "react";
import Sex from "./inputElements/sex"
import Age from "./inputElements/age"
import Height from "./inputElements/height";
import Weight from "./inputElements/weight";

interface IInputComponentLibrary {
    sex: any;
    age: any;
    height: any;
    weight: any;
}

const InputComponentMapping = (componentTag: string) => {
    return Object(InputComponentLibrary)[componentTag]
}

const InputComponentLibrary: IInputComponentLibrary = { sex: <Sex />, age: <Age />, height: <Height />, weight: <Weight /> }

export default InputComponentMapping