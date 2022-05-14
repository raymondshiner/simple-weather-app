import styled from "styled-components"
import LocationWidget from "./LocationWidget/LocationWidget"

const App = () => {
  return (
    <AppWrapper>
      <Title>My Weather App</Title>
      <LocationWidget />
    </AppWrapper>
  )
}

export default App

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 100%;
  text-align: center;
`

const Title = styled.h1`
  color: aqua;
  margin-bottom: 3rem;
`
