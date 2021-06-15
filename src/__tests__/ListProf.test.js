import React from "react"
import {render, fireEvent} from "@testing-library/react"

describe("test professor list", ()=>{
    const ProfsComponent = render(
        <ProfList />
    )
    //expect(ProfsComponent).toMatchSnapshot()
})