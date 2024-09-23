import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

interface IAircraftType {
  iataMain: string;
  iataSub: string;
}

interface IBaggageClaim {
  belts: string[];
}

interface ICodeshares {
  codeshares: string[];
}

interface IPublicFlightState {
  flightStates: string[];
}

interface IRoute {
  destinations: string[];
  eu: string;
  visa: boolean;
}

interface IExternalFlight {
  lastUpdatedAt: string;
  actualLandingTime: string;
  aircraftType: IAircraftType;
  baggageClaim: IBaggageClaim;
  codeshares: ICodeshares;
  estimatedLandingTime: string;
  expectedTimeOnBelt: string;
  flightDirection: string;
  flightName: string;
  flightNumber: number;
  id: string;
  isOperationalFlight: boolean;
  mainFlight: string;
  prefixIATA: string;
  prefixICAO: string;
  airlineCode: number;
  publicFlightState: IPublicFlightState;
  route: IRoute;
  scheduleDateTime: string;
  scheduleDate: string;
  scheduleTime: string;
  serviceType: string;
  terminal: number;
  schemaVersion: string;
}

export interface IExternalFlightResponse {
  flights: IExternalFlight[];
}

interface ErrorResponse {
  status?: number;
  error: string;
  requestId?: string;
  details?: string[];
}

const appId = process.env.APP_ID as string;
const appKey = process.env.APP_KEY as string;

export async function fetchExternalFlightData(filters?: {
  sort?: string;
  fromDateTime?: string;
  toDateTime?: string;
}): Promise<IExternalFlightResponse | ErrorResponse> {
  try {
    const params: Record<string, string> = {
      includedelays: "false",
      page: "0",
    };

    if (filters?.sort !== "-scheduleTime") {
      params.sort = "+scheduleTime";
    } else {
      params.sort = "-scheduleTime";
    }


    if (filters?.fromDateTime) {
      params.fromDateTime = filters.fromDateTime;
    }

    if (filters?.toDateTime) {
      params.toDateTime = filters.toDateTime;
    }

    const response = await axios.get(
      "https://api.schiphol.nl/public-flights/flights",
      {
        headers: {
          Accept: "application/json",
          app_id: appId,
          app_key: appKey,
          ResourceVersion: "v4",
        },
        params,
      }
    );

    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const errorData = error.response?.data;

      if (errorData && errorData.parameters && errorData.parameters.errors) {
        return {
          status: status,
          error: errorData.type || "API Error",
          requestId: errorData.parameters.requestId,
          details: errorData.parameters.errors,
        };
      }

      return {
        status: status,
        error: errorData?.message || "Failed to fetch flight data",
      };
    } else {
      return {
        error: "An unexpected error occurred",
      };
    }
  }
}
