import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"
import WeatherDisplay from "../WeatherDisplay"

describe("WeatherDisplay", () => {
  it("should render without crashing", () => {
    render(<WeatherDisplay />)

    //grab a default element from the component
    screen.getByText(/wind/i)
  })

  it("should display the expected values of the location passed in", () => {
    const mockLocation = {
      name: "Test name",
      description: "Test description",
      temp: "Test temp",
      windSpeed: "Test windSpeed",
      humidity: "Test humidity",
      precip: "Test precip",
    }

    render(<WeatherDisplay location={mockLocation} />)

    screen.getByText(mockLocation.name)
    screen.getByText(mockLocation.description)
    screen.getByText(`${mockLocation.temp}°C`)
    screen.getByText(`Wind: ${mockLocation.windSpeed} km/h`)
    screen.getByText(`Humidity: ${mockLocation?.humidity}%`)
    screen.getByText(`Precip: ${mockLocation?.precip}%`)
  })

  it("should contain an image with a src attribute of the location.icon value passed in", () => {
    const mockLocation = {
      icon: "Test Icon Path",
    }

    render(<WeatherDisplay location={mockLocation} />)

    expect(screen.getByAltText("weather-icon")).toHaveAttribute(
      "src",
      mockLocation.icon
    )
  })
})
