import React from "react";
import Sex from "./sex"
import Age from "./age"
import Height from "./height";
import Weight from "./weight";

interface IInputComponentLibrary {
    sex: any;
    age: any;
    height: any;
    weight: any;
}

const InputComponentMapping = (componentTag: string) => {
    return Object(InputComponentLibrary)[componentTag]
}

const InputComponentLibrary: IInputComponentLibrary = { sex: <Sex />, age: <Age />, height: <Height />, weight:<Weight /> }

export default InputComponentMapping