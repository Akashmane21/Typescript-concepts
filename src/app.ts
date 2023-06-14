console.log("Hello");

const data = {
  cod: "200",
  message: 0,
  cnt: 5,
  list: [
    {
      dt: 1659096000,
      main: {
        temp: 305.5,
        feels_like: 312.39,
        temp_min: 305.5,
        temp_max: 306.11,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 978,
        humidity: 64,
        temp_kf: -0.61,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: { all: 83 },
      wind: { speed: 3.36, deg: 309, gust: 4.1 },
      visibility: 10000,
      pop: 0.8,
      rain: { "3h": 1.47 },
      sys: { pod: "d" },
      dt_txt: "2022-07-29 12:00:00",
    },
    {
      dt: 1659106800,
      main: {
        temp: 303.39,
        feels_like: 308.53,
        temp_min: 302.48,
        temp_max: 303.39,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 979,
        humidity: 69,
        temp_kf: 0.91,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" },
      ],
      clouds: { all: 92 },
      wind: { speed: 3.91, deg: 305, gust: 6.62 },
      visibility: 10000,
      pop: 0.76,
      rain: { "3h": 0.62 },
      sys: { pod: "n" },
      dt_txt: "2022-07-29 15:00:00",
    },
    {
      dt: 1659117600,
      main: {
        temp: 302.37,
        feels_like: 306.36,
        temp_min: 302.37,
        temp_max: 302.37,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 980,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 2.92, deg: 307, gust: 4.66 },
      visibility: 10000,
      pop: 0.87,
      rain: { "3h": 0.13 },
      sys: { pod: "n" },
      dt_txt: "2022-07-29 18:00:00",
    },
    {
      dt: 1659128400,
      main: {
        temp: 302.15,
        feels_like: 306.06,
        temp_min: 302.15,
        temp_max: 302.15,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 978,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 1.74, deg: 301, gust: 2.9 },
      visibility: 10000,
      pop: 0.08,
      sys: { pod: "n" },
      dt_txt: "2022-07-29 21:00:00",
    },
    {
      dt: 1659139200,
      main: {
        temp: 302.2,
        feels_like: 305.62,
        temp_min: 302.2,
        temp_max: 302.2,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 978,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 2.04, deg: 303, gust: 3.52 },
      visibility: 10000,
      pop: 0.65,
      rain: { "3h": 0.9 },
      sys: { pod: "n" },
      dt_txt: "2022-07-30 00:00:00",
    },
  ],
  city: {
    id: 1273294,
    name: "Delhi",
    coord: { lat: 28.6667, lon: 77.2167 },
    country: "IN",
    population: 10927986,
    timezone: 19800,
    sunrise: 1659053429,
    sunset: 1659102271,
  },
};