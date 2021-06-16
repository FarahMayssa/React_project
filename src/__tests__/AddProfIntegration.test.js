import React from "react"
import {render, fireEvent} from "@testing-library/react"
import AddProf from "../components/AddProf/AddProf"

import{
    addProf as mockAddProf
} from "../Services/Prof.service"
import AdminProfPage from "../components/Page/AdminProfPage/AdminProfPage"
jest.mock("../Services/Prof.service")

describe("test add prof ", ()=>{
    test("test the integration of add prof with mocking", async()=>{
        const mockProfWithOneProf = [
            {
                name:"mayssa",
                email:"mayssa@gmail.com",
                phone: 20202020,
                dept:"multimédia",
            },
        ]

        //mockAddProf.mockResolvedValue(mockProfWithOneProf)
        const promise = Promise.resolve({success:true,})
       mockAddProf.mockImplementation(()=>promise)
       const{getByTestId, debug, container, findByTestId, getByText}= render(
           <AdminProfPage/>
       ) 
       
    })
})
