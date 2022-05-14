import React from "react"
import styled from "styled-components"

const LocationWidget = () => {
  const enterAddressPrompt =
    "Enter an address above to see the weather for that location!"

  return (
    <>
      <SearchBar placeholder="Enter a Location" />
      <WeatherDisplay>{enterAddressPrompt}</WeatherDisplay>
    </>
  )
}

export default LocationWidget

const SearchBar = styled.input`
  padding: 0.5rem;
  box-shadow: none;
  border: none;
  border-radius: 0.5rem;

  width: 80%;
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
  width: 18rem;
  max-width: 450px;
  max-height: 800px;
`
