const storeFavourites = async (data) => {
  try {
    const uri = "https://api.airtable.com/v0/appjKPSOnobqpMfUt/Table%201";

    // const uri2 =
    //   import.meta.env.VITE_AVIATIONSTACK_URI +
    //   "?access_key=" +
    //   import.meta.env.VITE_AVIATIONSTACK_APIKEY;\

    console.dir(uri);
    const res = await fetch(uri, {
      method: "POST",
      headers: {
        Authorization:
          "Bearer patAbEww3Wcy9NVEU.165c4a3229f132f91cbd2245576cc3106cb72d886fcecb9275a087e892611473",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              FlightNumber: data.flight.iata || "",
              Status: data.flight_status || "",
              DepartureAirport: data.departure.airport || "",
              DepartureTerminal: data.departure.terminal || "",
              DepartureGate: data.departure.gate || "",
              DepartureScheduled: data.departure.scheduled || "",
              DepartureActual: data.departure.actual || "",
              ArrivalAirport: data.arrival.airport || "",
              ArrivalTerminal: data.arrival.terminal || "",
              ArrivalGate: data.arrival.gate || "",
              ArrivalScheduled: data.arrival.scheduled || "",
              ArrivalActual: data.arrival.actual || "",
            },
          },
        ],
      }),
    });
    const responseData = await res.json();
    if (!res.ok) {
      throw new Error("Failed to add favourite.");
    }
    return responseData;
  } catch (err) {
    console.log(err);
  }
  //return testDate;
};

export default storeFavourites;
