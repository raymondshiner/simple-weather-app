import debounce from "lodash.debounce"
import { useState } from "react"

const useWeatherInformation = () => {
  const [locations, setResult] = useState("empty")
  const [isLoading, setIsLoading] = useState(false)

  const fetchWeatherInformation = debounce(async (query) => {
    if (query.trim() !== "") {
      setIsLoading(true)

      const mainResult = await fetch(getQueryURL(query))
        .then((response) => response.json())
        .then((data) => data)

      if (mainResult.success === false) {
        setIsLoading(false)
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

      setResult([
        parseWeatherInformation(mainResult),
        parseWeatherInformation(closeResultA),
        parseWeatherInformation(closeResultB),
      ])

      setIsLoading(false)
    } else {
      setResult("empty")
    }
  }, 500)

  return { locations, fetchWeatherInformation, isLoading }
}

export default useWeatherInformation

const getQueryURL = (query) => {
  return `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${query}&unit=m`
}

const getAdjacentLatLonQueryValues = (lat, lon) => {
  const numLat = Number(lat)
  const numLon = Number(lon)

  return {
    queryA: `${numLat},${numLon + 0.3}`,
    queryB: `${numLat + 0.3},${numLon}`,
  }
}

const parseWeatherInformation = (result) => {
  return {
    name: result.location.name,
    temp: result.current.temperature,
    description: result.current.weather_descriptions,
    icon: result.current.weather_icons[0],
    humidity: result.current.humidity,
    windSpeed: result.current.wind_speed,
    precip: result.current.precip,
  }
}
