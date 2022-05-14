import React from "react"
import styled from "styled-components"

const WeatherDisplay = ({ location }) => {
  return (
    <WeatherDisplayWrapper>
      <Name>{location.name}</Name>
      <FlexBox>
        <img src={location.icon} alt="weather icon" />
        <Column>
          <Text>{location.description}</Text>
          <Text>{location.temp}°C</Text>
          <Text>Wind: {location.windSpeed} km/h</Text>
          <Text>Humidity: {location.humidity}%</Text>
          <Text>Precip: {location.precip}%</Text>
        </Column>
      </FlexBox>
    </WeatherDisplayWrapper>
  )
}

export default WeatherDisplay

const FlexBox = styled.div`
  display: flex;
  text-align: left;
`

const Column = styled(FlexBox)`
  flex-direction: column;
  padding: 0px 5px;
`

const WeatherDisplayWrapper = styled(Column)`
  display: flex;
  flex-direction: column;
  color: #dfdfdf;
  background-color: #565656;
  align-items: flex-start;
  padding: 10px;
  border-radius: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: max-content;
`

const Name = styled.h4`
  margin: 0 5px;
  margin-bottom: 10px;
`

const Text = styled.div`
  font-size: medium;
  margin: 0;
  padding: 0;
`
