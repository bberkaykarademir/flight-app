import Flight from "../models/Flight";
import { Request, Response } from "express";

export const getFlights = async (req: Request, res: Response) => {
  try {
    const flights = await Flight.find();
    const { sort } = req.query;
    if (sort === "earliest") {
      flights.sort(
        (a, b) =>
          new Date(a.departureDateTime).getTime() -
          new Date(b.departureDateTime).getTime()
      );
    } else if (sort === "latest") {
      flights.sort(
        (a, b) =>
          new Date(b.departureDateTime).getTime() -
          new Date(a.departureDateTime).getTime()
      );
    }

    res.status(200).json(flights);
  } catch (error) {
    res.status(404).json({ message: (error as Error).message });
  }
};

export const bookFlight = async (req: Request, res: Response) => {
  const { flightNumber, departureDateTime } = req.body;

  try {
    const existingFlight = await Flight.findOne({ flightNumber });

    if (existingFlight) {
      return res.status(409).json({ message: "Flight already booked." });
    }

    const currentDateTime = new Date();
    const flightDepartureTime = new Date(departureDateTime);

    if (flightDepartureTime < currentDateTime) {
      return res
        .status(400)
        .json({ message: "Can not book a flight that has already departed." });
    }
    const newFlight = new Flight(req.body);
    await newFlight.save();
    res.status(201).json(newFlight);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
