import axios from "axios";
import { Flight } from "./flights";

export const getFlights = async (sort: string) => {
  try {
    const response = await axios.get("http://localhost:8000/my-flights", {
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

export const bookFlight = async (flight: Flight) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/my-flights",
      flight
    );
    return response.data;
  } catch (error) {
    console.error("Error booking flight:", error);
    throw error;
  }
};
