const getLatestFlights = async (city) => {
  try {
    const uri =
      "https://api.aviationstack.com/v1/flights?access_key=734ccb8f9140106899dec86a380be870";

    const uri2 =
      import.meta.env.VITE_AVIATIONSTACK_URI +
      "?access_key=" +
      import.meta.env.VITE_AVIATIONSTACK_APIKEY;
    console.dir(uri2);
    const res = await fetch(uri2);
    const data = await res.json();
    if (!res.ok) {
      // Throw an error if we get a response that doesn't
      // hold valid starship data.
      throw new Error("Failed to fetch starships.");
    }
    return data;
  } catch (err) {
    console.log(err);
  }
  return testDate;
};

export { getLatestFlights };
