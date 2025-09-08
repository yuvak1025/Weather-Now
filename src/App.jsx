import { useState } from "react";
import WeatherCard from "./components/WeatherCard";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name.");
      setWeather(null);
      return;
    }

    try {
      setError("");
      setWeather(null);
      setLoading(true);

      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
      );
      if (!geoRes.ok) throw new Error("Geo API request failed");

      const geoData = await geoRes.json();
      if (!geoData.results || geoData.results.length === 0) {
        setError("City not found. Please try another.");
        return;
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      if (!weatherRes.ok) throw new Error("Weather API request failed");

      const weatherData = await weatherRes.json();
      const { temperature, windspeed, weathercode } =
        weatherData.current_weather;

      setWeather({
        city: `${name}, ${country}`,
        temperature,
        windspeed,
        weathercode,
      });
    } catch (err) {
      setError("Unable to fetch weather. Check your internet and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-blue-700 text-center">
        Weather Now
      </h1>

      {/* Input + Button responsive layout */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6 w-full max-w-md">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="border p-2 rounded-md flex-1"
        />
        <button
          onClick={fetchWeather}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Get Weather
        </button>
      </div>

      {/* Loading */}
      {loading && <p className="text-blue-600 mb-4">Fetching weather...</p>}

      {/* Error */}
      {error && !loading && <p className="text-red-500 mb-4">{error}</p>}

      {/* Weather Card */}
      {weather && !loading && <WeatherCard weather={weather} />}
    </div>
  );
}
