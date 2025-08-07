# Abstract

The flight data project pulls in realtime flight infomation from [AviationStack](https://aviationstack.com/) and stores favourites into a list managed by [Airtable](https://airtable.com/). Multiple lists are supported.

# .env variables

- VITE_AVIATIONSTACK_URI : the base uri for avation stack
- VITE_AVIATIONSTACK_APIKEY
- VITE_AIRTABLE_URI : fallback base uri for airtable
- VITE_AIRTABLE_APITOKEN
- VITE_AIRTABLE_LIST_TABLE_ID : the ID for the metadata table that records the tables in the base
- VITE_AIRTABLE_BASE_ID
- VITE_AIRTABLE_BASE_URI
- VITE_AIRTABLE_DEFAULT_LIST_ID : the table to show during inital launch when no list has been selected for that session

# Component Tree

![Component Tree](image.png "Component Tree")

# Airtable List Columns

All columns are of the `singleLineText` type.

- FlightNumber
- Status
- DepartureAirport
- DepartureTerminal
- DepartureGate
- DepartureScheduled
- DepartureActual
- ArrivalAirport
- ArrivalTerminal
- ArrivalGate
- ArrivalScheduled
- ArrivalActual

# Airtable Metalist Columns

All columns are of the `singleLineText` type.

- ListID
- ListName

> You will need to create a table called DefaultList, manually find the ID, and add the data to this metalist before attempting to store a favourite.

# Known limitations

## Aviationstack

A free account of AviationStack only allows 100 queries per month per account.

## Airtable

- Airtable has no API to directly call the table IDs from the base itself. A call must be made to `VITE_AIRTABLE_LIST_TABLE_ID` to pull data from a metalist, which can resulted in orphaned tables or invalid table calls if this is bypassed.
- Airtable also has no API call to directly delete a table from a base.

> If you wish to fork the project, consider using an alternative database provider to add these missing features.
