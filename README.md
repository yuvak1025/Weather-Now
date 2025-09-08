# Weather Now 🌤️

**Weather Now** is a simple, responsive, and user-friendly web application built with **React** and **TailwindCSS** that allows users to fetch live weather information for any city.  
It uses the **Open-Meteo API** to get real-time weather data including temperature, windspeed, and weather conditions.

---

## 📑 Table of Contents
- [Project Overview](#project-overview)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [File Structure](#file-structure)  
- [Installation and Setup](#installation-and-setup)  
- [Usage](#usage)  
- [Responsive Design](#responsive-design)  
- [Error Handling](#error-handling)  
- [Test Cases](#test-cases)  
- [Deployment](#deployment)  

---

## 📌 Project Overview
This project provides a minimalistic and straightforward weather application for users to quickly check the weather of any city.

Users can:
- Enter a city name  
- Click a button to fetch weather  
- See results displayed in a neat card  

The app fetches latitude and longitude of the city using the **Open-Meteo Geocoding API**, then retrieves current weather data for that location using the **Open-Meteo Weather API**.

---

## ✨ Features
- **Responsive Design** – Works on mobile, tablet, and desktop  
- **Live Weather Data** – Shows temperature, windspeed, and weather conditions  
- **Error Handling** – Handles empty input, invalid cities, network errors, and loading states  
- **Clean UI** – Neatly styled card displaying the city’s weather information  
- **Simple & Lightweight** – Minimal dependencies, easy to deploy  

---

## 🛠️ Tech Stack
- **Frontend:** ReactJS  
- **Styling:** TailwindCSS  
- **APIs:** Open-Meteo (Geocoding & Weather)  
- **Build Tool:** Create React App  

---

## 📂 File Structure

- weather-now/
- │── public/
- │ ├── index.html
- │ ├── favicon.ico
- │ ├── manifest.json
- │ └── robots.txt
- │
- │── src/
- │ ├── components/
- │ │ └── WeatherCard.jsx
- │ ├── App.jsx
- │ ├── index.js
- │ └── index.css
- │
- │── package.json
- │── tailwind.config.js

---

## ⚙️ Installation and Setup

Clone the repository and install dependencies:

```bash
git clone <repo-url>
cd weather-now
npm install
npm start

## ✅ Test Cases

| Test Case       | Expected Result                                                                 |
|-----------------|---------------------------------------------------------------------------------|
| **Valid city**   | Displays city, temperature, windspeed, and weather description                 |
| **Invalid city** | Shows error: `"City not found. Please try another."`                           |
| **Empty input**  | Shows error: `"Please enter a city name."`                                     |
| **No internet**  | Shows error: `"Unable to fetch weather. Check your internet and try again."`   |
| **Loading state**| Shows `"Fetching weather..."` before results appear                            |

📂 You can check detailed screenshots and results in the [`testing/`](./testing) folder.

## 🧪 Notes
- Each case ensures the app handles **user errors** and **network issues** gracefully.  
- UI remains responsive across **mobile, tablet, and desktop**.  
- 📂 UI screenshots for different devices are available in the [`differentdevices/`](./differentdevices) folder.  





