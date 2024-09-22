import axios from "axios";

interface FlightParams {
  sort?: string;
  fromDateTime?: string;
  toDateTime?: string;
  departureCity?: string;
  arrivalCity?: string;
  roundTrip?: string;
  airline?: string;
  stops?: string;
}

export interface Flight {
  flightName: string;
  flightNumber: number;
  belts: string;
  visa: boolean;
  departureDateTime: Date;
  arrivalDateTime: Date;
  departureCity: string;
  departureAirport: string;
  departureCode: string;
  arrivalCity: string;
  arrivalAirport: string;
  arrivalCode: string;
  airline: string;
  price: number;
  stops: string;
  roundTrip: string;
}

export const getFlights = async (params: FlightParams): Promise<Flight[]> => {
  try {
    const filteredParams = Object.keys(params).reduce((acc, key) => {
      const value = params[key as keyof FlightParams];
      if (value !== undefined && value !== "") {
        acc[key] = value;
      }
      return acc;
    }, {} as Record<string, string>);

    if (!filteredParams.sort) {
      filteredParams.sort = "+scheduleTime";
    }

    const response = await axios.get<Flight[]>(
      "http://localhost:8000/flights",
      {
        params: filteredParams,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching flights:", error);
    throw error;
  }
};
