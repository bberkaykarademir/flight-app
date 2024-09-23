import mongoose from "mongoose";

const Schema = mongoose.Schema;

export interface IFlight extends mongoose.Document {
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

const FlightSchema = new Schema({
  flightName: { type: String, required: true },
  flightNumber: { type: Number, required: true },
  belts: { type: String, required: true },
  visa: { type: Boolean, required: true },
  departureDateTime: { type: Date, required: true },
  arrivalDateTime: { type: Date, required: true },
  departureCity: { type: String, required: true },
  departureAirport: { type: String, required: true },
  departureCode: { type: String, required: true },
  arrivalCity: { type: String, required: true },
  arrivalAirport: { type: String, required: true },
  arrivalCode: { type: String, required: true },
  airline: { type: String, required: true },
  price: { type: Number, required: true },
  stops: { type: String, required: true },
  roundTrip: { type: String, required: true },
});

const Flight = mongoose.model<IFlight>("Flight", FlightSchema);

export default Flight;
