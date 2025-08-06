const uri =
  import.meta.env.VITE_AIRTABLE_BASE_URI +
  import.meta.env.VITE_AIRTABLE_BASE_ID +
  "/" +
  import.meta.env.VITE_AIRTABLE_LIST_TABLE_ID;

const createNewList = async (tableName) => {
  const uri =
    import.meta.env.VITE_AIRTABLE_BASE_URI +
    "meta/bases/" +
    import.meta.env.VITE_AIRTABLE_BASE_ID +
    "/tables";

  console.log("Creating new list with URI:", uri);

  console.log("Creating new list with name:", tableName);

  try {
    const res = await fetch(uri, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_APITOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: [
          {
            name: "FlightNumber",
            type: "singleLineText",
          },
          {
            name: "Status",
            type: "singleLineText",
          },
          {
            name: "DepartureAirport",
            type: "singleLineText",
          },
          {
            name: "DepartureTerminal",
            type: "singleLineText",
          },
          {
            name: "DepartureGate",
            type: "singleLineText",
          },
          {
            name: "DepartureScheduled",
            type: "singleLineText",
          },
          {
            name: "DepartureActual",
            type: "singleLineText",
          },
          {
            name: "ArrivalAirport",
            type: "singleLineText",
          },
          {
            name: "ArrivalTerminal",
            type: "singleLineText",
          },
          {
            name: "ArrivalGate",
            type: "singleLineText",
          },
          {
            name: "ArrivalScheduled",
            type: "singleLineText",
          },
          {
            name: "ArrivalActual",
            type: "singleLineText",
          },
        ],
        name: tableName,
      }),
    });

    const responseData = await res.json();
    if (res.ok) {
      console.log("List created successfully:", responseData);
      await storeList(responseData.id, tableName);
    } else {
      throw new Error("Failed to add list to base.");
    }

    return responseData;
  } catch (err) {
    console.log(err);
  }
};

const storeList = async (id, name) => {
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
              ListID: id,
              ListName: name,
            },
          },
        ],
      }),
    });
    const responseData = await res.json();
    if (!res.ok) {
      throw new Error("Failed to add list to metalist.");
    }
    return responseData;
  } catch (err) {
    console.log(err);
  }
};
const getList = async () => {
  console.log(uri);

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

export { createNewList, getList };
