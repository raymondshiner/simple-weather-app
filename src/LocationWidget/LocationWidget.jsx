import React from "react"
import styled from "styled-components"
import useWeatherInformation from "./useWeatherInformation"
import WeatherDisplay from "./WeatherDisplay"

const enterQueryPrompt =
  "Enter a city name above to see the weather for that location!"

const queryErrorPrompt = "We're unable to find that location, please try again!"

const LocationWidget = () => {
  const { locations, fetchWeatherInformation } = useWeatherInformation()

  console.log("locations", locations)

  let mainContent

  switch (locations) {
    case "empty":
      mainContent = enterQueryPrompt
      break
    case "error":
      mainContent = queryErrorPrompt
      break
    default:
      mainContent = locations.map((location, index) => (
        <React.Fragment key={location.name}>
          <WeatherDisplay location={location} />
          {index === 0 && (
            <Divider>Here are some places close to {location.name}</Divider>
          )}
        </React.Fragment>
      ))
  }

  return (
    <>
      <SearchBar
        placeholder="Enter a Location"
        onChange={(e) => fetchWeatherInformation(e.target.value)}
      />
      <WeatherDisplayWrapper>{mainContent}</WeatherDisplayWrapper>
    </>
  )
}

export default LocationWidget

const SearchBar = styled.input`
  padding: 0.5rem;
  box-shadow: none;
  border: none;
  border-radius: 0.5rem;

  width: 70%;
  min-width: 180px;
  max-width: 350px;
`

const WeatherDisplayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: larger;
  letter-spacing: 0.15rem;

  margin: 3rem;
  border: 0.3rem dotted aqua;
  padding: 0 1rem;

  width: fit-content;
  max-width: 1200px;
`

const Divider = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid white;
`
