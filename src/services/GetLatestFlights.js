const getLatestFlights = async () => {
  try {
    const uri =
      import.meta.env.VITE_AVIATIONSTACK_URI +
      "?access_key=" +
      import.meta.env.VITE_AVIATIONSTACK_APIKEY;
    const res = await fetch(uri);
    const data = await res.json();
    if (!res.ok) {
      // Throw an error if we get a response that doesn't
      // hold valid starship data.
      throw new Error("Failed to fetch starships.");
    }
    return data;
  } catch (err) {
    return err;
  }
};

export { getLatestFlights };
