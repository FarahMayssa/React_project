import React from "react"
import {render, fireEvent} from "@testing-library/react"
import AddProf from "../components/AddProf/AddProf"


describe("test add professor",()=>{
    test("Should work without crashing", ()=>{
        const mockAddProf = jest.fn()
        const {debug} = render(<AddProf addProf={mockAddProf}/>)
        //debug()
    })

    test("should contains name, email, phone, dept and a button", ()=>{
        const mockAddProf = jest.fn()
        const {debug, getByLabelText, getByTestId, getByText}=render(
            <AddProf addProf={mockAddProf}/>
        )
        const input = getByLabelText(/FullName/i)
        //debug(input)
        expect(input).toBeTruthy()
        expect(input).toHaveAttribute("type", "text")

        const inputEmail = getByLabelText(/email/i)
        expect(inputEmail).toBeTruthy()
        expect(inputEmail).toHaveAttribute("type", "text")

        const inputPhone = getByLabelText(/phone/i)
        expect(inputPhone).toBeTruthy()
        expect(inputPhone).toHaveAttribute("type", "Number")

        expect(getByTestId("addProf")).toBeTruthy()

        expect(getByText(/Department/i)).toBeTruthy()

    })

    test("should fire event", ()=>{
        const mockAddProf = jest.fn()
        const {debug, getByLabelText, getByTestId, getByText}=render(
            <AddProf addProf={mockAddProf}/>
        )
        //name
        const input = getByLabelText(/FullName/i)
        const profName = "Med"

        fireEvent.change(input, {target:{value: profName}})
        //debug(input)

        expect(input.value).toContain(profName)

        //email
        const inputEmail = getByLabelText(/email/i)
        const profEmail = "Med@gmail.com"
        fireEvent.change(inputEmail, {target:{value: profEmail}})
        expect(inputEmail.value).toContain(profEmail)

        //phone
        const inputPhone = getByLabelText(/phone/i)
        const profPhone = 20202020
        fireEvent.change(inputPhone, {target:{value: profPhone}})
        expect(inputPhone.value).toContain(profPhone)
        //department
        const inputDepartment = getByLabelText(/department/i)
        const profDepartment = "Multimédia"
        fireEvent.change(inputDepartment, {target:{value: profDepartment}})
        expect(inputDepartment.value).toContain(profDepartment)
        //button
        const addProfButton = getByTestId("addProf")
        fireEvent.click(addProfButton)

        expect(mockAddProf).toHaveBeenCalled()
        expect(mockAddProf).toHaveBeenCalledTimes(1)
    })
    
})