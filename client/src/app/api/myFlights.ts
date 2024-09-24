import axios from "axios";
import { Flight } from "./flights";

export const getFlights = async (sort: string) => {
  try {
    const response = await axios.get(
      "https://9bke6xuwy2.execute-api.eu-central-1.amazonaws.com/prod/my-flights",
      {
        params: {
          sort,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching flights:", error);
    throw error;
  }
};

export const bookFlight = async (flight: Flight) => {
  try {
    const response = await axios.post(
      "https://9bke6xuwy2.execute-api.eu-central-1.amazonaws.com/prod/my-flights",
      flight
    );
    return response.data;
  } catch (error) {
    console.error("Error booking flight:", error);
    throw error;
  }
};
