import { Handler } from "@netlify/functions";
import axios from "axios";

// netlify serverless function handler  
export const handler: Handler = async (event) => {
  const origin = event.headers.origin || ""; // Get request origin
  const allowedOrigins = [
    "http://localhost:5173", // Local Dev
    "" // Production
  ];


  try {
    if (event.httpMethod === "OPTIONS") {  // Handle preflight requests
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": allowedOrigins.includes(origin) ? origin : "",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        body: "",
      };
    }

    if (!event.body) { // Check if request body is missing
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing request body." }),
        headers: {
          "Access-Control-Allow-Origin": allowedOrigins.includes(origin) ? origin : "",
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',

        },
      };
    }

    const { query } = JSON.parse(event.body);

    if (!query) { // Check if query parameter is missing
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Query parameter is required." }),
        headers: {
          "Access-Control-Allow-Origin": allowedOrigins.includes(origin) ? origin : "",
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      };
    }

    const response = await axios.get(`${process.env.WEATHER_URL}/forecast.json`, {
      params: {
        key: process.env.WEATHER_API_KEY ,
        q: query,
        days: 3,
      },
    });

    // Return successful response
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
      headers: {
        "Access-Control-Allow-Origin": allowedOrigins.includes(origin) ? origin : "",
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    };
  } catch (error) {
    let statusCode = 500; // Default to Internal Server Error
    let errorMessage = "An unexpected error occurred.";
    
    // check if there is an axios error
    if (axios.isAxiosError(error)) {
      statusCode = error.response?.status || 500;
      errorMessage = error.response?.data?.error?.message || error.message;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    // Return error response
    return {
      statusCode,
      body: JSON.stringify({ error: errorMessage }),
      headers: {
        'Access-Control-Allow-Origin': '*', // Allow all origins or specify domains
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    };
  }
};
