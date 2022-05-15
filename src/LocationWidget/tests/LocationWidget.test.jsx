import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import React from "react"
import LocationWidget from "../LocationWidget"

describe("LocationWidget", () => {
  it("should render a basic input and a enter city prompt upon loading", () => {
    render(<LocationWidget />)

    screen.getByRole("textbox")
    screen.getByText(/enter a city/i)
  })

  it("should still display the enter city prompt if only empty chracters are typed by the user", () => {
    render(<LocationWidget />)

    screen.getByText(/enter a city/i)
    userEvent.type(screen.getByRole("textbox"), "     ")
    screen.getByText(/enter a city/i)
  })

  it("should render a loading prompt if non space characters are entered into the searchbar", async () => {
    render(<LocationWidget />)

    expect(screen.queryByText(/loading some results.../i)).toBeNull()
    userEvent.type(screen.getByRole("textbox"), "Testing")
    await screen.findByText(/loading some results.../i)
  })

  it("should render an error message and remove the loading prompt if garbage is input into the searchbar", async () => {
    render(<LocationWidget />)

    expect(screen.queryByText(/loading some results.../i)).toBeNull()
    expect(screen.queryByText(/We're unable to find that location/i)).toBeNull()
    userEvent.type(screen.getByRole("textbox"), "__--GARBAGE--__")

    //loading prompt renders
    await screen.findByText(/loading some results.../i)

    //error message renders after loading period, and loading prompt de-renders
    await screen.findByText(/We're unable to find that location/i)
    expect(screen.queryByText(/loading some results.../i)).toBeNull()
  })
})
