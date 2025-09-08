const weatherDescriptions = {
  0: "Clear sky ☀️",
  1: "Mainly clear 🌤️",
  2: "Partly cloudy ⛅",
  3: "Overcast ☁️",
  45: "Fog 🌫️",
  48: "Depositing rime fog 🌫️",
  51: "Light drizzle 🌦️",
  61: "Slight rain 🌧️",
  71: "Slight snow ❄️",
  80: "Rain showers 🌧️",
  95: "Thunderstorm ⛈️",
};

export default function WeatherCard({ weather }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-sm text-center">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
        {weather.city}
      </h2>
      <p className="text-2xl sm:text-3xl font-bold text-blue-600 mt-2">
        {weather.temperature}°C
      </p>
      <p className="text-gray-500 mt-1">Wind: {weather.windspeed} km/h</p>
      <p className="text-gray-700 mt-2 font-medium">
        {weatherDescriptions[weather.weathercode] || "Unknown"}
      </p>
    </div>
  );
}
