import debounce from "lodash.debounce"
import React from "react"
import styled from "styled-components"
import {
  getAdjacentLatLonQueryValues,
  getQueryURL,
  parseWeatherInformation,
} from "./utils"

const enterAddressPrompt =
  "Enter a city name above to see the weather for that location!"

const LocationWidget = () => {
  const [result, setResult] = React.useState("")

  const fetchWeatherInformation = debounce(async (event) => {
    const cityName = event.target.value
    console.log("ran")

    if (cityName.trim() !== "") {
      const mainResult = await fetch(getQueryURL(cityName))
        .then((response) => response.json())
        .then((data) => data)

      if (mainResult.success === false) {
        setResult("error")
        return
      }

      const closeLatLonValues = getAdjacentLatLonQueryValues(
        mainResult.location.lat,
        mainResult.location.lon
      )

      const closeResultA = await fetch(getQueryURL(closeLatLonValues.queryA))
        .then((response) => response.json())
        .then((data) => data)

      const closeResultB = await fetch(getQueryURL(closeLatLonValues.queryB))
        .then((response) => response.json())
        .then((data) => data)

      setResult({
        main: parseWeatherInformation(mainResult),
        closeA: parseWeatherInformation(closeResultA),
        closeB: parseWeatherInformation(closeResultB),
      })
    } else {
      setResult("")
    }
  }, 500)

  return (
    <>
      <SearchBar
        placeholder="Enter a Location"
        onChange={fetchWeatherInformation}
      />
      <WeatherDisplay>
        {!!result ? "Something" : enterAddressPrompt}
      </WeatherDisplay>
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
  max-width: 400px;
`

const WeatherDisplay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: larger;
  letter-spacing: 0.15rem;

  margin: 3rem;
  border: 0.3rem dotted aqua;
  padding: 1rem;

  height: 60vh;
  width: 80vw;
  max-width: 800px;
  max-height: 800px;
`
