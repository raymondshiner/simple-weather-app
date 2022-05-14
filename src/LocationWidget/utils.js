const getQueryURL = (query) => {
  return `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${query}&unit=m`
}

const getAdjacentLatLonQueryValues = (lat, lon) => {
  const numLat = Number(lat)
  const numLon = Number(lon)

  return {
    queryA: `${numLat + 0.5},${numLon + 0.5}`,
    queryB: `${numLat - 0.5},${numLon - 0.5}`,
  }
}

const parseWeatherInformation = (result) => {
  return {
    name: result.location.name,
    temp: result.current.temperature,
    description: result.current.weather_descriptions,
    weatherIcons: result.current.weather_icons,
    humidity: result.current.humidity,
    windSpeed: result.current.wind_speed,
  }
}

export { getQueryURL, getAdjacentLatLonQueryValues, parseWeatherInformation }
