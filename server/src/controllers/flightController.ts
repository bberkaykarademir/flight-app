import { Request, Response } from "express";
import { fetchExternalFlightData } from "../controllers/externalFlightApi";
import { IExternalFlightResponse } from "../controllers/externalFlightApi";

const airports = [
  { code: "JFK", city: "New York", name: "John F. Kennedy International" },
  { code: "LHR", city: "London", name: "Heathrow" },
  { code: "CDG", city: "Paris", name: "Charles de Gaulle" },
  { code: "AMS", city: "Amsterdam", name: "Schiphol" },
  { code: "DXB", city: "Dubai", name: "Dubai International" },
  { code: "HND", city: "Tokyo", name: "Haneda" },
  { code: "SIN", city: "Singapore", name: "Changi" },
  { code: "SYD", city: "Sydney", name: "Kingsford Smith" },
  { code: "LAX", city: "Los Angeles", name: "Los Angeles International" },
  { code: "HKG", city: "Hong Kong", name: "Hong Kong International" },
];

const airlines = [
  "American Airlines",
  "British Airways",
  "Air France",
  "KLM",
  "Emirates",
  "Qatar Airways",
  "Lufthansa",
  "Singapore Airlines",
  "Qantas",
  "Cathay Pacific",
];

const stopsOptions = ["Nonstop", "1 Stop", "2+ Stops"];

export async function getFlights(req: Request, res: Response) {
  try {
    const externalData = await fetchExternalFlightData({
      sort: req.query.sort as string,
      fromDateTime: req.query.fromDateTime as string,
      toDateTime: req.query.toDateTime as string,
    });

    const { departureCity, arrivalCity, roundTrip, airline, stops } =
      req.query;

    if ("flights" in externalData) {
      const enrichedFlights = (
        externalData as IExternalFlightResponse
      ).flights.map((flight) => {
        const randomDeparture =
          airports[Math.floor(Math.random() * airports.length)];
        const randomArrival =
          airports[Math.floor(Math.random() * airports.length)];
        const randomAirline =
          airlines[Math.floor(Math.random() * airlines.length)];
        const randomStops =
          stopsOptions[Math.floor(Math.random() * stopsOptions.length)];
        const randomPrice = Math.floor(Math.random() * (300 - 200 + 1)) + 200;
        const randomRoundTrip = Math.random() < 0.5 ? "Round Trip" : "One Way";

        return {
          flightName: flight.flightName,
          flightNumber: flight.flightNumber,
          belts: flight.baggageClaim?.belts?.[0] || 0,
          visa: flight.route?.visa || false,
          departureDateTime: flight.scheduleDateTime,
          arrivalDateTime: flight.estimatedLandingTime,

          departureCity: randomDeparture.city,
          departureAirport: randomDeparture.name,
          departureCode: randomDeparture.code,

          arrivalCity: randomArrival.city,
          arrivalAirport: randomArrival.name,
          arrivalCode: randomArrival.code,

          airline: randomAirline,
          price: randomPrice,
          stops: randomStops,

          roundTrip: randomRoundTrip,
        };
      });

      const filteredFlights = enrichedFlights.filter((flight) => {
        return (
          (departureCity ? flight.departureCity === departureCity : true) &&
          (arrivalCity ? flight.arrivalCity === arrivalCity : true) &&
          (airline ? flight.airline === airline : true) &&
          (stops ? flight.stops === stops : true) &&
          (roundTrip ? flight.roundTrip === roundTrip : true)
        );
      });

      if (req.query.sort === "lowestPrice") {
        filteredFlights.sort((a, b) => a.price - b.price);
      } else if (req.query.sort === "highestPrice") {
        filteredFlights.sort((a, b) => b.price - a.price);
      }

      res.json(filteredFlights);
    } else {
      res.status(500).json({
        message: "Failed to fetch valid flight data",
      });
    }
  } catch (error) {
    console.error("Error processing flights data:", error);
    res.status(500).send({
      message: "Failed to fetch flight data",
      error: error,
    });
  }
}
