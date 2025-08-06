const storeFavourites = async (data) => {
  const uri = import.meta.env.VITE_AIRTABLE_URI;

  try {
    const res = await fetch(uri, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_APITOKEN}`,
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
};

const getFavourites = async (id) => {
  const uri =
    import.meta.env.VITE_AIRTABLE_BASE_URI +
    import.meta.env.VITE_AIRTABLE_BASE_ID +
    "/" +
    id;
  try {
    const res = await fetch(uri, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_APITOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const responseData = await res.json();
    if (!res.ok) {
      throw new Error("Failed to add favourite.");
    }
    return responseData;
  } catch (err) {
    console.log(err);
  }
};

const delFavourite = async (data) => {
  try {
    let fullURI = uri + "/" + data;

    console.log(data);

    const res = await fetch(fullURI, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_APITOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const responseData = await res.json();
    if (!res.ok) {
      throw new Error("Failed to add favourite.");
    }
    return responseData;
  } catch (err) {
    console.log(err);
  }
};

export { storeFavourites, getFavourites, delFavourite };
