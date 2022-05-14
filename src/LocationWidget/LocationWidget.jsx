import React from "react"
import styled from "styled-components"

const LocationWidget = () => {
  return (
    <>
      <SearchBar placeholder="Enter a Location" />
      <WeatherDisplay>
        <Description>
          Enter an address above to see the weather for that location!
        </Description>
      </WeatherDisplay>
    </>
  )
}

export default LocationWidget

const SearchBar = styled.input`
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 80%;
  min-width: 180px;
  max-width: 400px;
  box-shadow: none;
  border: none;
`

const WeatherDisplay = styled.div`
  font-size: medium;
  letter-spacing: 0.15rem;
  margin-bottom: 3rem;
  margin: 2rem;
  max-width: 450px;
  border: 0.3rem dotted aqua;
  padding: 1rem;
  height: 65vh;
  width: 18rem;
  max-width: 450px;
  max-height: 800px;
`

const Description = styled.p``
