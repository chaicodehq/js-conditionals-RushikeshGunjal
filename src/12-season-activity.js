/**
 * 🗺️ WanderLust Travel Planner
 *
 * WanderLust is a travel planning app that suggests fun activities
 * based on the month and the current temperature. Users enter the
 * month number and temperature, and the app recommends what to do!
 *
 * Step 1 — Determine the season from the month:
 *   - December, January, February  (12, 1, 2)   → "Winter"
 *   - March, April, May            (3, 4, 5)     → "Spring"
 *   - June, July, August           (6, 7, 8)     → "Summer"
 *   - September, October, November (9, 10, 11)   → "Autumn"
 *
 * Step 2 — Suggest an activity based on season AND temperature (°C):
 *   - Winter + temp < 0     → "skiing"
 *   - Winter + temp >= 0    → "ice skating"
 *   - Spring + temp > 20    → "hiking"
 *   - Spring + temp <= 20   → "museum visit"
 *   - Summer + temp > 35    → "swimming"
 *   - Summer + temp <= 35   → "cycling"
 *   - Autumn + temp > 15    → "nature walk"
 *   - Autumn + temp <= 15   → "reading at a cafe"
 *
 * Return an object: { season: string, activity: string }
 *
 * Rules:
 *   - If month is not 1–12, return null
 *
 * @param {number} month - Month of the year (1-12)
 * @param {number} temperature - Current temperature in Celsius
 * @returns {{ season: string, activity: string } | null}
 */
export function getSeasonActivity(month, temperature) {
  const season = {
    1: "Winter",
    2: "Winter",
    12: "Winter",
    3: "Spring",
    4: "Spring",
    5: "Spring",
    6: "Summer",
    7: "Summer",
    8: "Summer",
    9: "Autumn",
    10: "Autumn",
    11: "Autumn",
  };

  if (month < 1 || month > 12) {
    return null;
  }

  if (season[month] == "Winter" && temperature < 0) {
    return { season: season[month], activity: "skiing" };
  } else if (season[month] == "Winter" && temperature >= 0) {
    return { season: season[month], activity: "ice skating" };
  } else if (season[month] == "Spring" && temperature > 20) {
    return { season: season[month], activity: "hiking" };
  } else if (season[month] == "Spring" && temperature <= 20) {
    return { season: season[month], activity: "museum visit" };
  } else if (season[month] == "Summer" && temperature > 35) {
    return { season: season[month], activity: "swimming" };
  } else if (season[month] == "Summer" && temperature <= 35) {
    return { season: season[month], activity: "cycling" };
  } else if (season[month] == "Autumn" && temperature > 15) {
    return { season: season[month], activity: "nature walk" };
  } else if (season[month] == "Autumn" && temperature <= 15) {
    return { season: season[month], activity: "reading at a cafe" };
  }
}
