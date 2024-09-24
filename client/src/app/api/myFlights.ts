import axios from "axios";
import { Flight } from "./flights";

export const getFlights = async (sort: string) => {
  try {
    const url =
      process.env.NODE_ENV === "production"
        ? "https://3.71.174.250:8000/my-flights"
        : "http://3.71.174.250:8000/my-flights";
    const response = await axios.get(url, {
      params: {
        sort,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching flights:", error);
    throw error;
  }
};

const url =
  process.env.NODE_ENV === "production"
    ? "https://3.71.174.250:8000/my-flights"
    : "http://3.71.174.250:8000/my-flights";

export const bookFlight = async (flight: Flight) => {
  try {
    const response = await axios.post(url, flight);
    return response.data;
  } catch (error) {
    console.error("Error booking flight:", error);
    throw error;
  }
};
