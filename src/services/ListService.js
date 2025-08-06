const uri =
  import.meta.env.VITE_AIRTABLE_BASE_URI +
  import.meta.env.VITE_AIRTABLE_BASE_ID +
  import.meta.env.VITE_AIRTABLE_LIST_TABLE_ID;

const storeList = async (data) => {
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
              //TODO
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

export { storeList, getList };
