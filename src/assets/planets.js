const TIME_SCALE = 1; // 1 day per second
const PHA_TIME_SCALE = 100; // 1 day per second
const ORBIT_SCALE = 1.5; // 1 unit per AU
const NEO_ORBIT_SCALE = 1.2; // 1 unit per AU
const PHA_ORBIT_SCALE = 80;
const COMET_SIZE_SCALE = 1; // Adjust this value to control comet size
const PLANET_SIZE_SCALE = 1; // Adjust this value to control planet size
const NEO_SIZE_SCALE = 1; // Adjust this value to control NEO size

const planets = [
  {
    name: "Mercury",
    textureUrl: "/textures/2k_mercury.jpg",
    radius: 0.383 * PLANET_SIZE_SCALE,
    semiMajorAxis: 3.9 * ORBIT_SCALE,
    eccentricity: 0.2056,
    inclination: (Math.PI * 7.0) / 180,
    longitudeOfAscendingNode: (Math.PI * 48.331) / 180,
    argumentOfPeriapsis: (Math.PI * 29.124) / 180,
    orbitalPeriod: 88 * TIME_SCALE,
    moons: [],
  },
  {
    name: "Venus",
    textureUrl: "/textures/2k_venus_surface.jpg",
    radius: 0.949 * PLANET_SIZE_SCALE,
    semiMajorAxis: 7.2 * ORBIT_SCALE,
    eccentricity: 0.0067,
    inclination: (Math.PI * 3.39) / 180,
    longitudeOfAscendingNode: (Math.PI * 76.68) / 180,
    argumentOfPeriapsis: (Math.PI * 54.884) / 180,
    orbitalPeriod: 224.7 * TIME_SCALE,
    moons: [],
  },
  {
    name: "Earth",
    textureUrl: "/textures/2k_earth_daymap.jpg",
    radius: 1 * PLANET_SIZE_SCALE,
    semiMajorAxis: 10 * ORBIT_SCALE,
    eccentricity: 0.0167,
    inclination: (Math.PI * 0.00005) / 180, // relative to ecliptic
    longitudeOfAscendingNode: (Math.PI * -11.26064) / 180,
    argumentOfPeriapsis: (Math.PI * 114.20783) / 180,
    orbitalPeriod: 365.2 * TIME_SCALE,
    moons: [
      {
        name: "Moon",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.1,
        semiMajorAxis: 3,
        orbitalPeriod: 27.3,
      },
    ],
    nearEarthAsteroids: [
      {
        name: "Apophis",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.03 * PLANET_SIZE_SCALE,
        semiMajorAxis: 0.922 * NEO_ORBIT_SCALE, // in AU
        eccentricity: 0.191,
        inclination: (Math.PI * 3.331) / 180, // in radians
        longitudeOfAscendingNode: (Math.PI * 204.435) / 180,
        argumentOfPeriapsis: (Math.PI * 126.4) / 180,
        orbitalPeriod: 0.9 * TIME_SCALE, // in Earth years
      },
      {
        name: "Bennu",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.05 * PLANET_SIZE_SCALE,
        semiMajorAxis: 1.126 * NEO_ORBIT_SCALE,
        eccentricity: 0.203,
        inclination: (Math.PI * 6.034) / 180,
        longitudeOfAscendingNode: (Math.PI * 2.0608) / 180,
        argumentOfPeriapsis: (Math.PI * 66.223) / 180,
        orbitalPeriod: 1.2 * TIME_SCALE,
      },
      {
        name: "Eros",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.04 * PLANET_SIZE_SCALE,
        semiMajorAxis: 1.458 * NEO_ORBIT_SCALE,
        eccentricity: 0.223,
        inclination: (Math.PI * 10.827) / 180,
        longitudeOfAscendingNode: (Math.PI * 304.446) / 180,
        argumentOfPeriapsis: (Math.PI * 178.22) / 180,
        orbitalPeriod: 1.8 * TIME_SCALE,
      },
      {
        name: "Florence",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.06 * PLANET_SIZE_SCALE,
        semiMajorAxis: 1.767 * NEO_ORBIT_SCALE,
        eccentricity: 0.422,
        inclination: (Math.PI * 22.135) / 180,
        longitudeOfAscendingNode: (Math.PI * 173.045) / 180,
        argumentOfPeriapsis: (Math.PI * 50.4) / 180,
        orbitalPeriod: 2.4 * TIME_SCALE,
      },
      {
        name: "Ganymed",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.07 * PLANET_SIZE_SCALE,
        semiMajorAxis: 2.664 * NEO_ORBIT_SCALE,
        eccentricity: 0.534,
        inclination: (Math.PI * 26.682) / 180,
        longitudeOfAscendingNode: (Math.PI * 174.789) / 180,
        argumentOfPeriapsis: (Math.PI * 129.203) / 180,
        orbitalPeriod: 4.3 * TIME_SCALE,
      },
      {
        name: "Icarus",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.03 * PLANET_SIZE_SCALE,
        semiMajorAxis: 1.078 * NEO_ORBIT_SCALE,
        eccentricity: 0.827,
        inclination: (Math.PI * 22.818) / 180,
        longitudeOfAscendingNode: (Math.PI * 87.989) / 180,
        argumentOfPeriapsis: (Math.PI * 31.407) / 180,
        orbitalPeriod: 1.1 * TIME_SCALE,
      },
      {
        name: "Phaethon",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.04 * PLANET_SIZE_SCALE,
        semiMajorAxis: 1.271 * NEO_ORBIT_SCALE,
        eccentricity: 0.89,
        inclination: (Math.PI * 22.266) / 180,
        longitudeOfAscendingNode: (Math.PI * 265.2) / 180,
        argumentOfPeriapsis: (Math.PI * 322.16) / 180,
        orbitalPeriod: 1.4 * TIME_SCALE,
      },
      {
        name: "Toutatis",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.06 * PLANET_SIZE_SCALE,
        semiMajorAxis: 2.529 * NEO_ORBIT_SCALE,
        eccentricity: 0.633,
        inclination: (Math.PI * 0.448) / 180,
        longitudeOfAscendingNode: (Math.PI * 122.9) / 180,
        argumentOfPeriapsis: (Math.PI * 278.5) / 180,
        orbitalPeriod: 3.7 * TIME_SCALE,
      },
      {
        name: "Anteros",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.05 * PLANET_SIZE_SCALE,
        semiMajorAxis: 1.43 * NEO_ORBIT_SCALE,
        eccentricity: 0.256,
        inclination: (Math.PI * 8.705) / 180,
        longitudeOfAscendingNode: (Math.PI * 209.0) / 180,
        argumentOfPeriapsis: (Math.PI * 72.76) / 180,
        orbitalPeriod: 1.69 * TIME_SCALE,
      },
      {
        name: "Geographos",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.07 * PLANET_SIZE_SCALE,
        semiMajorAxis: 1.245 * NEO_ORBIT_SCALE,
        eccentricity: 0.336,
        inclination: (Math.PI * 13.337) / 180,
        longitudeOfAscendingNode: (Math.PI * 337.251) / 180,
        argumentOfPeriapsis: (Math.PI * 276.52) / 180,
        orbitalPeriod: 1.39 * TIME_SCALE,
      },
    ],
    nearEarthComets: [
      {
        name: "1P/Halley",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.1 * COMET_SIZE_SCALE,
        semiMajorAxis: 17.8 * NEO_ORBIT_SCALE,
        eccentricity: 0.967,
        inclination: (Math.PI * 162.26) / 180,
        longitudeOfAscendingNode: (Math.PI * 58.42) / 180,
        argumentOfPeriapsis: (Math.PI * 111.33) / 180,
        orbitalPeriod: 75.3 * TIME_SCALE,
      },
      {
        name: "2P/Encke",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.05 * COMET_SIZE_SCALE,
        semiMajorAxis: 2.22 * NEO_ORBIT_SCALE,
        eccentricity: 0.85,
        inclination: (Math.PI * 11.76) / 180,
        longitudeOfAscendingNode: (Math.PI * 334.57) / 180,
        argumentOfPeriapsis: (Math.PI * 186.52) / 180,
        orbitalPeriod: 3.3 * TIME_SCALE,
      },
      {
        name: "55P/Tempel-Tuttle",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.06 * COMET_SIZE_SCALE,
        semiMajorAxis: 10.33 * NEO_ORBIT_SCALE,
        eccentricity: 0.905,
        inclination: (Math.PI * 162.48) / 180,
        longitudeOfAscendingNode: (Math.PI * 172.51) / 180,
        argumentOfPeriapsis: (Math.PI * 137.14) / 180,
        orbitalPeriod: 33.2 * TIME_SCALE,
      },
      {
        name: "109P/Swift-Tuttle",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.09 * COMET_SIZE_SCALE,
        semiMajorAxis: 26.1 * NEO_ORBIT_SCALE,
        eccentricity: 0.963,
        inclination: (Math.PI * 113.45) / 180,
        longitudeOfAscendingNode: (Math.PI * 139.44) / 180,
        argumentOfPeriapsis: (Math.PI * 153.29) / 180,
        orbitalPeriod: 133.3 * TIME_SCALE,
      },
      {
        name: "45P/Honda-Mrkos-Pajdusakova",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.04 * COMET_SIZE_SCALE,
        semiMajorAxis: 3.0 * NEO_ORBIT_SCALE,
        eccentricity: 0.824,
        inclination: (Math.PI * 4.25) / 180,
        longitudeOfAscendingNode: (Math.PI * 89.41) / 180,
        argumentOfPeriapsis: (Math.PI * 327.88) / 180,
        orbitalPeriod: 5.3 * TIME_SCALE,
      },
      {
        name: "169P/NEAT",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.05 * COMET_SIZE_SCALE,
        semiMajorAxis: 1.9 * NEO_ORBIT_SCALE,
        eccentricity: 0.672,
        inclination: (Math.PI * 11.04) / 180,
        longitudeOfAscendingNode: (Math.PI * 109.82) / 180,
        argumentOfPeriapsis: (Math.PI * 188.39) / 180,
        orbitalPeriod: 4.2 * TIME_SCALE,
      },
      {
        name: "73P/Schwassmann-Wachmann",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.03 * COMET_SIZE_SCALE,
        semiMajorAxis: 3.07 * NEO_ORBIT_SCALE,
        eccentricity: 0.693,
        inclination: (Math.PI * 11.36) / 180,
        longitudeOfAscendingNode: (Math.PI * 198.67) / 180,
        argumentOfPeriapsis: (Math.PI * 48.18) / 180,
        orbitalPeriod: 5.4 * TIME_SCALE,
      },
      {
        name: "103P/Hartley",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.02 * COMET_SIZE_SCALE,
        semiMajorAxis: 3.47 * NEO_ORBIT_SCALE,
        eccentricity: 0.695,
        inclination: (Math.PI * 13.61) / 180,
        longitudeOfAscendingNode: (Math.PI * 219.16) / 180,
        argumentOfPeriapsis: (Math.PI * 190.01) / 180,
        orbitalPeriod: 6.5 * TIME_SCALE,
      },
      {
        name: "19P/Borrelly",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.06 * COMET_SIZE_SCALE,
        semiMajorAxis: 3.61 * NEO_ORBIT_SCALE,
        eccentricity: 0.624,
        inclination: (Math.PI * 30.31) / 180,
        longitudeOfAscendingNode: (Math.PI * 75.4) / 180,
        argumentOfPeriapsis: (Math.PI * 338.92) / 180,
        orbitalPeriod: 6.9 * TIME_SCALE,
      },
      {
        name: "96P/Machholz",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.07 * COMET_SIZE_SCALE,
        semiMajorAxis: 3.03 * NEO_ORBIT_SCALE,
        eccentricity: 0.961,
        inclination: (Math.PI * 58.3) / 180,
        longitudeOfAscendingNode: (Math.PI * 94.35) / 180,
        argumentOfPeriapsis: (Math.PI * 39.27) / 180,
        orbitalPeriod: 5.2 * TIME_SCALE,
      },
    ],

    potentiallyHazardousAsteroids: [
      {
        name: "99942 Apophis",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.325 * NEO_SIZE_SCALE,
        semiMajorAxis: 0.1 * PHA_ORBIT_SCALE, // Updated AU
        eccentricity: 0.191,
        inclination: (Math.PI * 3.33) / 180, // degrees to radians
        longitudeOfAscendingNode: (Math.PI * 18.18) / 180,
        argumentOfPeriapsis: (Math.PI * 104.83) / 180,
        orbitalPeriod: 0.5 * PHA_TIME_SCALE, // Increased to slow down the orbit
      },
      {
        name: "101955 Bennu",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.16 * NEO_SIZE_SCALE,
        semiMajorAxis: 0.12 * PHA_ORBIT_SCALE, // Updated AU
        eccentricity: 0.203,
        inclination: (Math.PI * 6.934) / 180,
        longitudeOfAscendingNode: (Math.PI * 127.34) / 180,
        argumentOfPeriapsis: (Math.PI * 80.78) / 180,
        orbitalPeriod: 0.45 * PHA_TIME_SCALE, // Increased to slow down the orbit
      },
      {
        name: "2004 BL86",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.13 * NEO_SIZE_SCALE,
        semiMajorAxis: 0.08 * PHA_ORBIT_SCALE, // Updated AU
        eccentricity: 0.018,
        inclination: (Math.PI * 12.14) / 180,
        longitudeOfAscendingNode: (Math.PI * 200.44) / 180,
        argumentOfPeriapsis: (Math.PI * 159.89) / 180,
        orbitalPeriod: 0.6 * PHA_TIME_SCALE, // Increased to slow down the orbit
      },
      {
        name: "1999 AN10",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.14 * NEO_SIZE_SCALE,
        semiMajorAxis: 0.09 * PHA_ORBIT_SCALE, // Updated AU
        eccentricity: 0.217,
        inclination: (Math.PI * 1.5) / 180,
        longitudeOfAscendingNode: (Math.PI * 210.31) / 180,
        argumentOfPeriapsis: (Math.PI * 32.53) / 180,
        orbitalPeriod: 0.55 * PHA_TIME_SCALE, // Increased to slow down the orbit
      },
      {
        name: "2013 SD220",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.18 * NEO_SIZE_SCALE,
        semiMajorAxis: 0.11 * PHA_ORBIT_SCALE, // Updated AU
        eccentricity: 0.438,
        inclination: (Math.PI * 5.26) / 180,
        longitudeOfAscendingNode: (Math.PI * 230.33) / 180,
        argumentOfPeriapsis: (Math.PI * 302.91) / 180,
        orbitalPeriod: 0.5 * PHA_TIME_SCALE, // Increased to slow down the orbit
      },
      {
        name: "4183 Cuno",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.125 * NEO_SIZE_SCALE,
        semiMajorAxis: 0.1 * PHA_ORBIT_SCALE, // Updated AU
        eccentricity: 0.126,
        inclination: (Math.PI * 12.81) / 180,
        longitudeOfAscendingNode: (Math.PI * 299.44) / 180,
        argumentOfPeriapsis: (Math.PI * 219.37) / 180,
        orbitalPeriod: 0.55 * PHA_TIME_SCALE, // Increased to slow down the orbit
      },
      {
        name: "2014 JO25",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.27 * NEO_SIZE_SCALE,
        semiMajorAxis: 0.12 * PHA_ORBIT_SCALE, // Updated AU
        eccentricity: 0.469,
        inclination: (Math.PI * 5.76) / 180,
        longitudeOfAscendingNode: (Math.PI * 210.74) / 180,
        argumentOfPeriapsis: (Math.PI * 123.76) / 180,
        orbitalPeriod: 0.5 * PHA_TIME_SCALE, // Increased to slow down the orbit
      },
      {
        name: "2000 SG344",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.11 * NEO_SIZE_SCALE,
        semiMajorAxis: 0.07 * PHA_ORBIT_SCALE, // Updated AU
        eccentricity: 0.098,
        inclination: (Math.PI * 4.37) / 180,
        longitudeOfAscendingNode: (Math.PI * 130.48) / 180,
        argumentOfPeriapsis: (Math.PI * 300.43) / 180,
        orbitalPeriod: 0.45 * PHA_TIME_SCALE, // Increased to slow down the orbit
      },
      {
        name: "2001 YQ",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.095 * NEO_SIZE_SCALE,
        semiMajorAxis: 0.08 * PHA_ORBIT_SCALE, // Updated AU
        eccentricity: 0.028,
        inclination: (Math.PI * 6.9) / 180,
        longitudeOfAscendingNode: (Math.PI * 199.54) / 180,
        argumentOfPeriapsis: (Math.PI * 154.28) / 180,
        orbitalPeriod: 0.5 * PHA_TIME_SCALE, // Increased to slow down the orbit
      },
      {
        name: "1998 OR2",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.29 * NEO_SIZE_SCALE,
        semiMajorAxis: 0.12 * PHA_ORBIT_SCALE, // Updated AU
        eccentricity: 0.352,
        inclination: (Math.PI * 5.62) / 180,
        longitudeOfAscendingNode: (Math.PI * 150.73) / 180,
        argumentOfPeriapsis: (Math.PI * 280.39) / 180,
        orbitalPeriod: 0.55 * PHA_TIME_SCALE, // Increased to slow down the orbit
      },
    ],
  },
  {
    name: "Mars",
    textureUrl: "/textures/2k_mars.jpg",
    radius: 0.532 * PLANET_SIZE_SCALE,
    semiMajorAxis: 15.2 * ORBIT_SCALE,
    eccentricity: 0.0934,
    inclination: (Math.PI * 1.85) / 180,
    longitudeOfAscendingNode: (Math.PI * 49.558) / 180,
    argumentOfPeriapsis: (Math.PI * 286.502) / 180,
    orbitalPeriod: 687 * TIME_SCALE,
    moons: [
      {
        name: "Phobos",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.05,
        semiMajorAxis: 1.5,
        orbitalPeriod: 10,
      },
      {
        name: "Deimos",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.03,
        semiMajorAxis: 3.2,
        orbitalPeriod: 12,
      },
    ],
  },
  {
    name: "Jupiter",
    textureUrl: "/textures/2k_jupiter.jpg",
    radius: 11.21 * PLANET_SIZE_SCALE,
    semiMajorAxis: 52.0 * ORBIT_SCALE,
    eccentricity: 0.0489,
    inclination: (Math.PI * 1.303) / 180,
    longitudeOfAscendingNode: (Math.PI * 100.464) / 180,
    argumentOfPeriapsis: (Math.PI * 273.867) / 180,
    orbitalPeriod: 4331 * TIME_SCALE,
    moons: [
      {
        name: "Io",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.1,
        semiMajorAxis: 6,
        orbitalPeriod: 1.77,
      },
      {
        name: "Europa",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.09,
        semiMajorAxis: 9.7,
        orbitalPeriod: 3.55,
      },
      {
        name: "Ganymede",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.13,
        semiMajorAxis: 15,
        orbitalPeriod: 7.15,
      },
      {
        name: "Callisto",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.12,
        semiMajorAxis: 26,
        orbitalPeriod: 16.69,
      },
    ],
  },
  {
    name: "Saturn",
    textureUrl: "/textures/2k_saturn.jpg",
    radius: 9.45 * PLANET_SIZE_SCALE,
    semiMajorAxis: 95.4 * ORBIT_SCALE,
    eccentricity: 0.0565,
    inclination: (Math.PI * 2.485) / 180,
    longitudeOfAscendingNode: (Math.PI * 113.665) / 180,
    argumentOfPeriapsis: (Math.PI * 339.392) / 180,
    orbitalPeriod: 10747 * TIME_SCALE,
    moons: [
      {
        name: "Titan",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.2,
        semiMajorAxis: 20,
        orbitalPeriod: 15.95,
      },
      {
        name: "Rhea",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.1,
        semiMajorAxis: 8,
        orbitalPeriod: 4.52,
      },
    ],
  },
  {
    name: "Uranus",
    textureUrl: "/textures/2k_uranus.jpg",
    radius: 4.01 * PLANET_SIZE_SCALE,
    semiMajorAxis: 161.9 * ORBIT_SCALE,
    eccentricity: 0.0457,
    inclination: (Math.PI * 0.772) / 180,
    longitudeOfAscendingNode: (Math.PI * 74.006) / 180,
    argumentOfPeriapsis: (Math.PI * 96.998857) / 180,
    orbitalPeriod: 30589 * TIME_SCALE,
    moons: [
      {
        name: "Miranda",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.05,
        semiMajorAxis: 3.4,
        orbitalPeriod: 1.41,
      },
      {
        name: "Ariel",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.07,
        semiMajorAxis: 5.8,
        orbitalPeriod: 2.52,
      },
      {
        name: "Umbriel",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.06,
        semiMajorAxis: 8.4,
        orbitalPeriod: 4.14,
      },
      {
        name: "Titania",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.08,
        semiMajorAxis: 13.5,
        orbitalPeriod: 8.71,
      },
      {
        name: "Oberon",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.08,
        semiMajorAxis: 15,
        orbitalPeriod: 13.46,
      },
    ],
  },
  {
    name: "Neptune",
    textureUrl: "/textures/2k_neptune.jpg",
    radius: 3.88 * PLANET_SIZE_SCALE,
    semiMajorAxis: 200.6 * ORBIT_SCALE,
    eccentricity: 0.0086,
    inclination: (Math.PI * 1.769) / 180,
    longitudeOfAscendingNode: (Math.PI * 131.784) / 180,
    argumentOfPeriapsis: (Math.PI * 273.187) / 180,
    orbitalPeriod: 59800 * TIME_SCALE,
    moons: [
      {
        name: "Triton",
        textureUrl: "/textures/2k_moon.jpg",
        radius: 0.12,
        semiMajorAxis: 7.5,
        orbitalPeriod: 5.88,
      },
    ],
  },
];

export default planets;
