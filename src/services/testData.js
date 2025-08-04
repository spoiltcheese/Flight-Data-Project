const testData = JSON.parse(`{
    "pagination": {
        "limit": 100,
        "offset": 0,
        "count": 100,
        "total": 234138
    },
    "data": [
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Perth International",
                "timezone": "Australia/Perth",
                "iata": "PER",
                "icao": "YPPH",
                "terminal": "1",
                "gate": null,
                "delay": null,
                "scheduled": "2025-08-01T21:55:00+00:00",
                "estimated": "2025-08-01T21:55:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Singapore Changi",
                "timezone": "Asia/Singapore",
                "iata": "SIN",
                "icao": "WSSS",
                "terminal": "1",
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-02T03:25:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Scoot",
                "iata": "TR",
                "icao": "TGW"
            },
            "flight": {
                "number": "17",
                "iata": "TR17",
                "icao": "TGW17",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Perth International",
                "timezone": "Australia/Perth",
                "iata": "PER",
                "icao": "YPPH",
                "terminal": "1",
                "gate": null,
                "delay": null,
                "scheduled": "2025-08-01T21:55:00+00:00",
                "estimated": "2025-08-01T21:55:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Singapore Changi",
                "timezone": "Asia/Singapore",
                "iata": "SIN",
                "icao": "WSSS",
                "terminal": "1",
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-02T03:25:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Singapore Airlines",
                "iata": "SQ",
                "icao": "SIA"
            },
            "flight": {
                "number": "8495",
                "iata": "SQ8495",
                "icao": "SIA8495",
                "codeshared": {
                    "airline_name": "scoot",
                    "airline_iata": "tr",
                    "airline_icao": "tgw",
                    "flight_number": "17",
                    "flight_iata": "tr17",
                    "flight_icao": "tgw17"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Perth International",
                "timezone": "Australia/Perth",
                "iata": "PER",
                "icao": "YPPH",
                "terminal": "1",
                "gate": null,
                "delay": null,
                "scheduled": "2025-08-01T20:50:00+00:00",
                "estimated": "2025-08-01T20:50:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Ngurah Rai International",
                "timezone": "Asia/Makassar",
                "iata": "DPS",
                "icao": "WADD",
                "terminal": "I",
                "gate": null,
                "baggage": "2",
                "scheduled": "2025-08-02T00:30:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "AirAsia",
                "iata": "AK",
                "icao": "AXM"
            },
            "flight": {
                "number": "537",
                "iata": "AK537",
                "icao": "AXM537",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Perth International",
                "timezone": "Australia/Perth",
                "iata": "PER",
                "icao": "YPPH",
                "terminal": "1",
                "gate": null,
                "delay": 35,
                "scheduled": "2025-08-01T20:30:00+00:00",
                "estimated": "2025-08-01T20:30:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Kuala Lumpur International Airport (klia)",
                "timezone": "Asia/Kuala_Lumpur",
                "iata": "KUL",
                "icao": "WMKK",
                "terminal": "2",
                "gate": "P15",
                "baggage": null,
                "scheduled": "2025-08-02T02:05:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "AirAsia",
                "iata": "AK",
                "icao": "AXM"
            },
            "flight": {
                "number": "607",
                "iata": "AK607",
                "icao": "AXM607",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Perth International",
                "timezone": "Australia/Perth",
                "iata": "PER",
                "icao": "YPPH",
                "terminal": "1",
                "gate": null,
                "delay": null,
                "scheduled": "2025-08-01T19:50:00+00:00",
                "estimated": "2025-08-01T19:50:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Auckland International",
                "timezone": "Pacific/Auckland",
                "iata": "AKL",
                "icao": "NZAA",
                "terminal": "I",
                "gate": "10",
                "baggage": null,
                "scheduled": "2025-08-02T06:05:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Air New Zealand",
                "iata": "NZ",
                "icao": "ANZ"
            },
            "flight": {
                "number": "176",
                "iata": "NZ176",
                "icao": "ANZ176",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Perth International",
                "timezone": "Australia/Perth",
                "iata": "PER",
                "icao": "YPPH",
                "terminal": "1",
                "gate": null,
                "delay": null,
                "scheduled": "2025-08-01T19:50:00+00:00",
                "estimated": "2025-08-01T19:50:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Auckland International",
                "timezone": "Pacific/Auckland",
                "iata": "AKL",
                "icao": "NZAA",
                "terminal": "I",
                "gate": "10",
                "baggage": null,
                "scheduled": "2025-08-02T06:05:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Virgin Australia",
                "iata": "VA",
                "icao": "VOZ"
            },
            "flight": {
                "number": "7076",
                "iata": "VA7076",
                "icao": "VOZ7076",
                "codeshared": {
                    "airline_name": "air new zealand",
                    "airline_iata": "nz",
                    "airline_icao": "anz",
                    "flight_number": "176",
                    "flight_iata": "nz176",
                    "flight_icao": "anz176"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Perth International",
                "timezone": "Australia/Perth",
                "iata": "PER",
                "icao": "YPPH",
                "terminal": "1",
                "gate": null,
                "delay": null,
                "scheduled": "2025-08-01T19:50:00+00:00",
                "estimated": "2025-08-01T19:50:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Auckland International",
                "timezone": "Pacific/Auckland",
                "iata": "AKL",
                "icao": "NZAA",
                "terminal": "I",
                "gate": "10",
                "baggage": null,
                "scheduled": "2025-08-02T06:05:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "United Airlines",
                "iata": "UA",
                "icao": "UAL"
            },
            "flight": {
                "number": "6788",
                "iata": "UA6788",
                "icao": "UAL6788",
                "codeshared": {
                    "airline_name": "air new zealand",
                    "airline_iata": "nz",
                    "airline_icao": "anz",
                    "flight_number": "176",
                    "flight_iata": "nz176",
                    "flight_icao": "anz176"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Perth International",
                "timezone": "Australia/Perth",
                "iata": "PER",
                "icao": "YPPH",
                "terminal": "1",
                "gate": null,
                "delay": null,
                "scheduled": "2025-08-01T19:50:00+00:00",
                "estimated": "2025-08-01T19:50:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Auckland International",
                "timezone": "Pacific/Auckland",
                "iata": "AKL",
                "icao": "NZAA",
                "terminal": "I",
                "gate": "10",
                "baggage": null,
                "scheduled": "2025-08-02T06:05:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Thai Airways International",
                "iata": "TG",
                "icao": "THA"
            },
            "flight": {
                "number": "4853",
                "iata": "TG4853",
                "icao": "THA4853",
                "codeshared": {
                    "airline_name": "air new zealand",
                    "airline_iata": "nz",
                    "airline_icao": "anz",
                    "flight_number": "176",
                    "flight_iata": "nz176",
                    "flight_icao": "anz176"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Perth International",
                "timezone": "Australia/Perth",
                "iata": "PER",
                "icao": "YPPH",
                "terminal": "1",
                "gate": null,
                "delay": null,
                "scheduled": "2025-08-01T19:50:00+00:00",
                "estimated": "2025-08-01T19:50:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Auckland International",
                "timezone": "Pacific/Auckland",
                "iata": "AKL",
                "icao": "NZAA",
                "terminal": "I",
                "gate": "10",
                "baggage": null,
                "scheduled": "2025-08-02T06:05:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Singapore Airlines",
                "iata": "SQ",
                "icao": "SIA"
            },
            "flight": {
                "number": "4218",
                "iata": "SQ4218",
                "icao": "SIA4218",
                "codeshared": {
                    "airline_name": "air new zealand",
                    "airline_iata": "nz",
                    "airline_icao": "anz",
                    "flight_number": "176",
                    "flight_iata": "nz176",
                    "flight_icao": "anz176"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Perth International",
                "timezone": "Australia/Perth",
                "iata": "PER",
                "icao": "YPPH",
                "terminal": "1",
                "gate": null,
                "delay": null,
                "scheduled": "2025-08-01T19:50:00+00:00",
                "estimated": "2025-08-01T19:50:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Auckland International",
                "timezone": "Pacific/Auckland",
                "iata": "AKL",
                "icao": "NZAA",
                "terminal": "I",
                "gate": "10",
                "baggage": null,
                "scheduled": "2025-08-02T06:05:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "South African Airways",
                "iata": "SA",
                "icao": "SAA"
            },
            "flight": {
                "number": "7061",
                "iata": "SA7061",
                "icao": "SAA7061",
                "codeshared": {
                    "airline_name": "air new zealand",
                    "airline_iata": "nz",
                    "airline_icao": "anz",
                    "flight_number": "176",
                    "flight_iata": "nz176",
                    "flight_icao": "anz176"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Perth International",
                "timezone": "Australia/Perth",
                "iata": "PER",
                "icao": "YPPH",
                "terminal": "1",
                "gate": null,
                "delay": null,
                "scheduled": "2025-08-01T19:50:00+00:00",
                "estimated": "2025-08-01T19:50:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Auckland International",
                "timezone": "Pacific/Auckland",
                "iata": "AKL",
                "icao": "NZAA",
                "terminal": "I",
                "gate": "10",
                "baggage": null,
                "scheduled": "2025-08-02T06:05:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Etihad Airways",
                "iata": "EY",
                "icao": "ETD"
            },
            "flight": {
                "number": "4476",
                "iata": "EY4476",
                "icao": "ETD4476",
                "codeshared": {
                    "airline_name": "air new zealand",
                    "airline_iata": "nz",
                    "airline_icao": "anz",
                    "flight_number": "176",
                    "flight_iata": "nz176",
                    "flight_icao": "anz176"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Perth International",
                "timezone": "Australia/Perth",
                "iata": "PER",
                "icao": "YPPH",
                "terminal": "1",
                "gate": null,
                "delay": null,
                "scheduled": "2025-08-01T19:50:00+00:00",
                "estimated": "2025-08-01T19:50:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Auckland International",
                "timezone": "Pacific/Auckland",
                "iata": "AKL",
                "icao": "NZAA",
                "terminal": "I",
                "gate": "10",
                "baggage": null,
                "scheduled": "2025-08-02T06:05:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Air China LTD",
                "iata": "CA",
                "icao": "CCA"
            },
            "flight": {
                "number": "5130",
                "iata": "CA5130",
                "icao": "CCA5130",
                "codeshared": {
                    "airline_name": "air new zealand",
                    "airline_iata": "nz",
                    "airline_icao": "anz",
                    "flight_number": "176",
                    "flight_iata": "nz176",
                    "flight_icao": "anz176"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Perth International",
                "timezone": "Australia/Perth",
                "iata": "PER",
                "icao": "YPPH",
                "terminal": "3",
                "gate": "20",
                "delay": null,
                "scheduled": "2025-08-01T19:35:00+00:00",
                "estimated": "2025-08-01T19:35:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Charles De Gaulle",
                "timezone": "Europe/Paris",
                "iata": "CDG",
                "icao": "LFPG",
                "terminal": "2C",
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-02T06:45:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Qantas",
                "iata": "QF",
                "icao": "QFA"
            },
            "flight": {
                "number": "33",
                "iata": "QF33",
                "icao": "QFA33",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Perth International",
                "timezone": "Australia/Perth",
                "iata": "PER",
                "icao": "YPPH",
                "terminal": "3",
                "gate": "20",
                "delay": null,
                "scheduled": "2025-08-01T19:35:00+00:00",
                "estimated": "2025-08-01T19:35:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Charles De Gaulle",
                "timezone": "Europe/Paris",
                "iata": "CDG",
                "icao": "LFPG",
                "terminal": "2C",
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-02T06:45:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Air France",
                "iata": "AF",
                "icao": "AFR"
            },
            "flight": {
                "number": "9689",
                "iata": "AF9689",
                "icao": "AFR9689",
                "codeshared": {
                    "airline_name": "qantas",
                    "airline_iata": "qf",
                    "airline_icao": "qfa",
                    "flight_number": "33",
                    "flight_iata": "qf33",
                    "flight_icao": "qfa33"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Perth International",
                "timezone": "Australia/Perth",
                "iata": "PER",
                "icao": "YPPH",
                "terminal": "4",
                "gate": "12",
                "delay": null,
                "scheduled": "2025-08-01T19:25:00+00:00",
                "estimated": "2025-08-01T19:25:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Melbourne - Tullamarine Airport",
                "timezone": "Australia/Melbourne",
                "iata": "MEL",
                "icao": "YMML",
                "terminal": "1",
                "gate": "9",
                "baggage": null,
                "scheduled": "2025-08-02T00:55:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Qantas",
                "iata": "QF",
                "icao": "QFA"
            },
            "flight": {
                "number": "782",
                "iata": "QF782",
                "icao": "QFA782",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Perth International",
                "timezone": "Australia/Perth",
                "iata": "PER",
                "icao": "YPPH",
                "terminal": "4",
                "gate": "12",
                "delay": null,
                "scheduled": "2025-08-01T19:25:00+00:00",
                "estimated": "2025-08-01T19:25:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Melbourne - Tullamarine Airport",
                "timezone": "Australia/Melbourne",
                "iata": "MEL",
                "icao": "YMML",
                "terminal": "1",
                "gate": "9",
                "baggage": null,
                "scheduled": "2025-08-02T00:55:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "IndiGo",
                "iata": "6E",
                "icao": "IGO"
            },
            "flight": {
                "number": "4765",
                "iata": "6E4765",
                "icao": "IGO4765",
                "codeshared": {
                    "airline_name": "qantas",
                    "airline_iata": "qf",
                    "airline_icao": "qfa",
                    "flight_number": "782",
                    "flight_iata": "qf782",
                    "flight_icao": "qfa782"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Perth International",
                "timezone": "Australia/Perth",
                "iata": "PER",
                "icao": "YPPH",
                "terminal": "4",
                "gate": "12",
                "delay": null,
                "scheduled": "2025-08-01T19:25:00+00:00",
                "estimated": "2025-08-01T19:25:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Melbourne - Tullamarine Airport",
                "timezone": "Australia/Melbourne",
                "iata": "MEL",
                "icao": "YMML",
                "terminal": "1",
                "gate": "9",
                "baggage": null,
                "scheduled": "2025-08-02T00:55:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Air New Zealand",
                "iata": "NZ",
                "icao": "ANZ"
            },
            "flight": {
                "number": "7782",
                "iata": "NZ7782",
                "icao": "ANZ7782",
                "codeshared": {
                    "airline_name": "qantas",
                    "airline_iata": "qf",
                    "airline_icao": "qfa",
                    "flight_number": "782",
                    "flight_iata": "qf782",
                    "flight_icao": "qfa782"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Altay",
                "timezone": "Asia/Shanghai",
                "iata": "AAT",
                "icao": "ZWAT",
                "terminal": null,
                "gate": "2-4",
                "delay": null,
                "scheduled": "2025-08-01T21:55:00+00:00",
                "estimated": "2025-08-01T21:55:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Xianyang",
                "timezone": "Asia/Shanghai",
                "iata": "XIY",
                "icao": "ZLXY",
                "terminal": "5",
                "gate": null,
                "baggage": "7",
                "scheduled": "2025-08-02T01:15:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "China Eastern Airlines",
                "iata": "MU",
                "icao": "CES"
            },
            "flight": {
                "number": "2378",
                "iata": "MU2378",
                "icao": "CES2378",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Altay",
                "timezone": "Asia/Shanghai",
                "iata": "AAT",
                "icao": "ZWAT",
                "terminal": null,
                "gate": "2-4",
                "delay": null,
                "scheduled": "2025-08-01T21:55:00+00:00",
                "estimated": "2025-08-01T21:55:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Xianyang",
                "timezone": "Asia/Shanghai",
                "iata": "XIY",
                "icao": "ZLXY",
                "terminal": "5",
                "gate": null,
                "baggage": "7",
                "scheduled": "2025-08-02T01:15:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Juneyao Airlines",
                "iata": "HO",
                "icao": "DKH"
            },
            "flight": {
                "number": "5573",
                "iata": "HO5573",
                "icao": "DKH5573",
                "codeshared": {
                    "airline_name": "china eastern airlines",
                    "airline_iata": "mu",
                    "airline_icao": "ces",
                    "flight_number": "2378",
                    "flight_iata": "mu2378",
                    "flight_icao": "ces2378"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Altay",
                "timezone": "Asia/Shanghai",
                "iata": "AAT",
                "icao": "ZWAT",
                "terminal": null,
                "gate": "2-4",
                "delay": null,
                "scheduled": "2025-08-01T21:55:00+00:00",
                "estimated": "2025-08-01T21:55:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Xianyang",
                "timezone": "Asia/Shanghai",
                "iata": "XIY",
                "icao": "ZLXY",
                "terminal": "5",
                "gate": null,
                "baggage": "7",
                "scheduled": "2025-08-02T01:15:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Xiamen Airlines",
                "iata": "MF",
                "icao": "CXA"
            },
            "flight": {
                "number": "3167",
                "iata": "MF3167",
                "icao": "CXA3167",
                "codeshared": {
                    "airline_name": "china eastern airlines",
                    "airline_iata": "mu",
                    "airline_icao": "ces",
                    "flight_number": "2378",
                    "flight_iata": "mu2378",
                    "flight_icao": "ces2378"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Altay",
                "timezone": "Asia/Shanghai",
                "iata": "AAT",
                "icao": "ZWAT",
                "terminal": null,
                "gate": "2-4",
                "delay": null,
                "scheduled": "2025-08-01T21:55:00+00:00",
                "estimated": "2025-08-01T21:55:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Xianyang",
                "timezone": "Asia/Shanghai",
                "iata": "XIY",
                "icao": "ZLXY",
                "terminal": "5",
                "gate": null,
                "baggage": "7",
                "scheduled": "2025-08-02T01:15:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "China Express Air",
                "iata": "G5",
                "icao": "HXA"
            },
            "flight": {
                "number": "6832",
                "iata": "G56832",
                "icao": "HXA6832",
                "codeshared": {
                    "airline_name": "china eastern airlines",
                    "airline_iata": "mu",
                    "airline_icao": "ces",
                    "flight_number": "2378",
                    "flight_iata": "mu2378",
                    "flight_icao": "ces2378"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Altay",
                "timezone": "Asia/Shanghai",
                "iata": "AAT",
                "icao": "ZWAT",
                "terminal": null,
                "gate": "1",
                "delay": null,
                "scheduled": "2025-08-01T21:25:00+00:00",
                "estimated": "2025-08-01T21:25:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Yining",
                "timezone": "Asia/Shanghai",
                "iata": "YIN",
                "icao": "ZWYN",
                "terminal": null,
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-01T22:40:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Chengdu Airlines",
                "iata": "EU",
                "icao": "UEA"
            },
            "flight": {
                "number": "3036",
                "iata": "EU3036",
                "icao": "UEA3036",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Altay",
                "timezone": "Asia/Shanghai",
                "iata": "AAT",
                "icao": "ZWAT",
                "terminal": null,
                "gate": "1",
                "delay": null,
                "scheduled": "2025-08-01T21:25:00+00:00",
                "estimated": "2025-08-01T21:25:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Yining",
                "timezone": "Asia/Shanghai",
                "iata": "YIN",
                "icao": "ZWYN",
                "terminal": null,
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-01T22:40:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Tibet Airlines",
                "iata": "TV",
                "icao": "TBA"
            },
            "flight": {
                "number": "5316",
                "iata": "TV5316",
                "icao": "TBA5316",
                "codeshared": {
                    "airline_name": "chengdu airlines",
                    "airline_iata": "eu",
                    "airline_icao": "uea",
                    "flight_number": "3036",
                    "flight_iata": "eu3036",
                    "flight_icao": "uea3036"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Altay",
                "timezone": "Asia/Shanghai",
                "iata": "AAT",
                "icao": "ZWAT",
                "terminal": null,
                "gate": "1",
                "delay": null,
                "scheduled": "2025-08-01T21:25:00+00:00",
                "estimated": "2025-08-01T21:25:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Yining",
                "timezone": "Asia/Shanghai",
                "iata": "YIN",
                "icao": "ZWYN",
                "terminal": null,
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-01T22:40:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Loong Air",
                "iata": "GJ",
                "icao": "CDC"
            },
            "flight": {
                "number": "5556",
                "iata": "GJ5556",
                "icao": "CDC5556",
                "codeshared": {
                    "airline_name": "chengdu airlines",
                    "airline_iata": "eu",
                    "airline_icao": "uea",
                    "flight_number": "3036",
                    "flight_iata": "eu3036",
                    "flight_icao": "uea3036"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Altay",
                "timezone": "Asia/Shanghai",
                "iata": "AAT",
                "icao": "ZWAT",
                "terminal": null,
                "gate": "1",
                "delay": null,
                "scheduled": "2025-08-01T21:25:00+00:00",
                "estimated": "2025-08-01T21:25:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Yining",
                "timezone": "Asia/Shanghai",
                "iata": "YIN",
                "icao": "ZWYN",
                "terminal": null,
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-01T22:40:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "China Southern Airlines",
                "iata": "CZ",
                "icao": "CSN"
            },
            "flight": {
                "number": "9716",
                "iata": "CZ9716",
                "icao": "CSN9716",
                "codeshared": {
                    "airline_name": "chengdu airlines",
                    "airline_iata": "eu",
                    "airline_icao": "uea",
                    "flight_number": "3036",
                    "flight_iata": "eu3036",
                    "flight_icao": "uea3036"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Altay",
                "timezone": "Asia/Shanghai",
                "iata": "AAT",
                "icao": "ZWAT",
                "terminal": null,
                "gate": "1",
                "delay": null,
                "scheduled": "2025-08-01T21:25:00+00:00",
                "estimated": "2025-08-01T21:25:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Yining",
                "timezone": "Asia/Shanghai",
                "iata": "YIN",
                "icao": "ZWYN",
                "terminal": null,
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-01T22:40:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Sichuan Airlines",
                "iata": "3U",
                "icao": "CSC"
            },
            "flight": {
                "number": "5832",
                "iata": "3U5832",
                "icao": "CSC5832",
                "codeshared": {
                    "airline_name": "chengdu airlines",
                    "airline_iata": "eu",
                    "airline_icao": "uea",
                    "flight_number": "3036",
                    "flight_iata": "eu3036",
                    "flight_icao": "uea3036"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Altay",
                "timezone": "Asia/Shanghai",
                "iata": "AAT",
                "icao": "ZWAT",
                "terminal": null,
                "gate": "2",
                "delay": null,
                "scheduled": "2025-08-01T20:30:00+00:00",
                "estimated": "2025-08-01T20:30:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Tacheng",
                "timezone": "Asia/Shanghai",
                "iata": "TCG",
                "icao": "ZWTC",
                "terminal": null,
                "gate": null,
                "baggage": "1",
                "scheduled": "2025-08-01T21:30:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "China Express Air",
                "iata": "G5",
                "icao": "HXA"
            },
            "flight": {
                "number": "2620",
                "iata": "G52620",
                "icao": "HXA2620",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Altay",
                "timezone": "Asia/Shanghai",
                "iata": "AAT",
                "icao": "ZWAT",
                "terminal": null,
                "gate": "2",
                "delay": null,
                "scheduled": "2025-08-01T20:30:00+00:00",
                "estimated": "2025-08-01T20:30:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Tacheng",
                "timezone": "Asia/Shanghai",
                "iata": "TCG",
                "icao": "ZWTC",
                "terminal": null,
                "gate": null,
                "baggage": "1",
                "scheduled": "2025-08-01T21:30:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Xiamen Airlines",
                "iata": "MF",
                "icao": "CXA"
            },
            "flight": {
                "number": "2410",
                "iata": "MF2410",
                "icao": "CXA2410",
                "codeshared": {
                    "airline_name": "china express air",
                    "airline_iata": "g5",
                    "airline_icao": "hxa",
                    "flight_number": "2620",
                    "flight_iata": "g52620",
                    "flight_icao": "hxa2620"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Altay",
                "timezone": "Asia/Shanghai",
                "iata": "AAT",
                "icao": "ZWAT",
                "terminal": null,
                "gate": "2",
                "delay": null,
                "scheduled": "2025-08-01T20:30:00+00:00",
                "estimated": "2025-08-01T20:30:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Tacheng",
                "timezone": "Asia/Shanghai",
                "iata": "TCG",
                "icao": "ZWTC",
                "terminal": null,
                "gate": null,
                "baggage": "1",
                "scheduled": "2025-08-01T21:30:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Loong Air",
                "iata": "GJ",
                "icao": "CDC"
            },
            "flight": {
                "number": "5606",
                "iata": "GJ5606",
                "icao": "CDC5606",
                "codeshared": {
                    "airline_name": "china express air",
                    "airline_iata": "g5",
                    "airline_icao": "hxa",
                    "flight_number": "2620",
                    "flight_iata": "g52620",
                    "flight_icao": "hxa2620"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Altay",
                "timezone": "Asia/Shanghai",
                "iata": "AAT",
                "icao": "ZWAT",
                "terminal": null,
                "gate": "2",
                "delay": null,
                "scheduled": "2025-08-01T20:30:00+00:00",
                "estimated": "2025-08-01T20:30:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Tacheng",
                "timezone": "Asia/Shanghai",
                "iata": "TCG",
                "icao": "ZWTC",
                "terminal": null,
                "gate": null,
                "baggage": "1",
                "scheduled": "2025-08-01T21:30:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Sichuan Airlines",
                "iata": "3U",
                "icao": "CSC"
            },
            "flight": {
                "number": "4010",
                "iata": "3U4010",
                "icao": "CSC4010",
                "codeshared": {
                    "airline_name": "china express air",
                    "airline_iata": "g5",
                    "airline_icao": "hxa",
                    "flight_number": "2620",
                    "flight_iata": "g52620",
                    "flight_icao": "hxa2620"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Altay",
                "timezone": "Asia/Shanghai",
                "iata": "AAT",
                "icao": "ZWAT",
                "terminal": null,
                "gate": "2",
                "delay": null,
                "scheduled": "2025-08-01T20:30:00+00:00",
                "estimated": "2025-08-01T20:30:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Tacheng",
                "timezone": "Asia/Shanghai",
                "iata": "TCG",
                "icao": "ZWTC",
                "terminal": null,
                "gate": null,
                "baggage": "1",
                "scheduled": "2025-08-01T21:30:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Shandong Airlines",
                "iata": "SC",
                "icao": "CDG"
            },
            "flight": {
                "number": "3610",
                "iata": "SC3610",
                "icao": "CDG3610",
                "codeshared": {
                    "airline_name": "china express air",
                    "airline_iata": "g5",
                    "airline_icao": "hxa",
                    "flight_number": "2620",
                    "flight_iata": "g52620",
                    "flight_icao": "hxa2620"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Altay",
                "timezone": "Asia/Shanghai",
                "iata": "AAT",
                "icao": "ZWAT",
                "terminal": null,
                "gate": "2",
                "delay": null,
                "scheduled": "2025-08-01T20:25:00+00:00",
                "estimated": "2025-08-01T20:25:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Beijing Capital International",
                "timezone": "Asia/Shanghai",
                "iata": "PEK",
                "icao": "ZBAA",
                "terminal": "3",
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-02T00:10:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Air China LTD",
                "iata": "CA",
                "icao": "CCA"
            },
            "flight": {
                "number": "1242",
                "iata": "CA1242",
                "icao": "CCA1242",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Altay",
                "timezone": "Asia/Shanghai",
                "iata": "AAT",
                "icao": "ZWAT",
                "terminal": null,
                "gate": "3",
                "delay": null,
                "scheduled": "2025-08-01T19:25:00+00:00",
                "estimated": "2025-08-01T19:25:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": null,
                "timezone": null,
                "iata": "ZFL",
                "icao": "ZWZS",
                "terminal": null,
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-01T20:55:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Chengdu Airlines",
                "iata": "EU",
                "icao": "UEA"
            },
            "flight": {
                "number": "3000",
                "iata": "EU3000",
                "icao": "UEA3000",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Altay",
                "timezone": "Asia/Shanghai",
                "iata": "AAT",
                "icao": "ZWAT",
                "terminal": null,
                "gate": "3",
                "delay": null,
                "scheduled": "2025-08-01T19:25:00+00:00",
                "estimated": "2025-08-01T19:25:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": null,
                "timezone": null,
                "iata": "ZFL",
                "icao": "ZWZS",
                "terminal": null,
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-01T20:55:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Sichuan Airlines",
                "iata": "3U",
                "icao": "CSC"
            },
            "flight": {
                "number": "5800",
                "iata": "3U5800",
                "icao": "CSC5800",
                "codeshared": {
                    "airline_name": "chengdu airlines",
                    "airline_iata": "eu",
                    "airline_icao": "uea",
                    "flight_number": "3000",
                    "flight_iata": "eu3000",
                    "flight_icao": "uea3000"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Altay",
                "timezone": "Asia/Shanghai",
                "iata": "AAT",
                "icao": "ZWAT",
                "terminal": null,
                "gate": "3",
                "delay": null,
                "scheduled": "2025-08-01T19:25:00+00:00",
                "estimated": "2025-08-01T19:25:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": null,
                "timezone": null,
                "iata": "ZFL",
                "icao": "ZWZS",
                "terminal": null,
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-01T20:55:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "China Southern Airlines",
                "iata": "CZ",
                "icao": "CSN"
            },
            "flight": {
                "number": "1485",
                "iata": "CZ1485",
                "icao": "CSN1485",
                "codeshared": {
                    "airline_name": "chengdu airlines",
                    "airline_iata": "eu",
                    "airline_icao": "uea",
                    "flight_number": "3000",
                    "flight_iata": "eu3000",
                    "flight_icao": "uea3000"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "landed",
            "departure": {
                "airport": "Findel",
                "timezone": "Europe/Luxembourg",
                "iata": "LUX",
                "icao": "ELLX",
                "terminal": "A",
                "gate": "B03",
                "delay": 14,
                "scheduled": "2025-08-01T06:15:00+00:00",
                "estimated": "2025-08-01T06:15:00+00:00",
                "actual": "2025-08-01T06:28:00+00:00",
                "estimated_runway": "2025-08-01T06:28:00+00:00",
                "actual_runway": "2025-08-01T06:28:00+00:00"
            },
            "arrival": {
                "airport": "John Paul II Balice International",
                "timezone": "Europe/Warsaw",
                "iata": "KRK",
                "icao": "EPKK",
                "terminal": null,
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-01T08:30:00+00:00",
                "delay": null,
                "estimated": "2025-08-01T08:17:00+00:00",
                "actual": "2025-08-01T08:16:00+00:00",
                "estimated_runway": "2025-08-01T08:16:00+00:00",
                "actual_runway": "2025-08-01T08:16:00+00:00"
            },
            "airline": {
                "name": "Luxair",
                "iata": "LG",
                "icao": "LGL"
            },
            "flight": {
                "number": "5741",
                "iata": "LG5741",
                "icao": "LGL5741",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "active",
            "departure": {
                "airport": "Hakodate",
                "timezone": "Asia/Tokyo",
                "iata": "HKD",
                "icao": "RJCH",
                "terminal": null,
                "gate": "5",
                "delay": 25,
                "scheduled": "2025-08-01T15:15:00+00:00",
                "estimated": "2025-08-01T15:15:00+00:00",
                "actual": "2025-08-01T15:40:00+00:00",
                "estimated_runway": "2025-08-01T15:40:00+00:00",
                "actual_runway": "2025-08-01T15:40:00+00:00"
            },
            "arrival": {
                "airport": "Haneda Airport",
                "timezone": "Asia/Tokyo",
                "iata": "HND",
                "icao": "RJTT",
                "terminal": "1",
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-01T16:40:00+00:00",
                "delay": 11,
                "estimated": "2025-08-01T16:51:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "China Airlines",
                "iata": "CI",
                "icao": "CAL"
            },
            "flight": {
                "number": "8414",
                "iata": "CI8414",
                "icao": "CAL8414",
                "codeshared": {
                    "airline_name": "japan airlines",
                    "airline_iata": "jl",
                    "airline_icao": "jal",
                    "flight_number": "586",
                    "flight_iata": "jl586",
                    "flight_icao": "jal586"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "active",
            "departure": {
                "airport": "Hakodate",
                "timezone": "Asia/Tokyo",
                "iata": "HKD",
                "icao": "RJCH",
                "terminal": null,
                "gate": "5",
                "delay": 25,
                "scheduled": "2025-08-01T15:15:00+00:00",
                "estimated": "2025-08-01T15:15:00+00:00",
                "actual": "2025-08-01T15:40:00+00:00",
                "estimated_runway": "2025-08-01T15:40:00+00:00",
                "actual_runway": "2025-08-01T15:40:00+00:00"
            },
            "arrival": {
                "airport": "Haneda Airport",
                "timezone": "Asia/Tokyo",
                "iata": "HND",
                "icao": "RJTT",
                "terminal": "1",
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-01T16:40:00+00:00",
                "delay": 11,
                "estimated": "2025-08-01T16:51:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Qatar Airways",
                "iata": "QR",
                "icao": "QTR"
            },
            "flight": {
                "number": "6090",
                "iata": "QR6090",
                "icao": "QTR6090",
                "codeshared": {
                    "airline_name": "japan airlines",
                    "airline_iata": "jl",
                    "airline_icao": "jal",
                    "flight_number": "586",
                    "flight_iata": "jl586",
                    "flight_icao": "jal586"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "active",
            "departure": {
                "airport": "Hakodate",
                "timezone": "Asia/Tokyo",
                "iata": "HKD",
                "icao": "RJCH",
                "terminal": null,
                "gate": "5",
                "delay": 25,
                "scheduled": "2025-08-01T15:15:00+00:00",
                "estimated": "2025-08-01T15:15:00+00:00",
                "actual": "2025-08-01T15:40:00+00:00",
                "estimated_runway": "2025-08-01T15:40:00+00:00",
                "actual_runway": "2025-08-01T15:40:00+00:00"
            },
            "arrival": {
                "airport": "Haneda Airport",
                "timezone": "Asia/Tokyo",
                "iata": "HND",
                "icao": "RJTT",
                "terminal": "1",
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-01T16:40:00+00:00",
                "delay": 11,
                "estimated": "2025-08-01T16:51:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Hawaiian Airlines",
                "iata": "HA",
                "icao": "HAL"
            },
            "flight": {
                "number": "5291",
                "iata": "HA5291",
                "icao": "HAL5291",
                "codeshared": {
                    "airline_name": "japan airlines",
                    "airline_iata": "jl",
                    "airline_icao": "jal",
                    "flight_number": "586",
                    "flight_iata": "jl586",
                    "flight_icao": "jal586"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "landed",
            "departure": {
                "airport": "Chitose",
                "timezone": "Asia/Tokyo",
                "iata": "CTS",
                "icao": "RJCC",
                "terminal": "D",
                "gate": "5",
                "delay": 20,
                "scheduled": "2025-08-01T15:00:00+00:00",
                "estimated": "2025-08-01T15:00:00+00:00",
                "actual": "2025-08-01T15:20:00+00:00",
                "estimated_runway": "2025-08-01T15:20:00+00:00",
                "actual_runway": "2025-08-01T15:20:00+00:00"
            },
            "arrival": {
                "airport": "Haneda Airport",
                "timezone": "Asia/Tokyo",
                "iata": "HND",
                "icao": "RJTT",
                "terminal": "2",
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-01T16:40:00+00:00",
                "delay": 1,
                "estimated": "2025-08-01T16:39:00+00:00",
                "actual": "2025-08-01T16:41:00+00:00",
                "estimated_runway": "2025-08-01T16:41:00+00:00",
                "actual_runway": "2025-08-01T16:41:00+00:00"
            },
            "airline": {
                "name": "Air Do",
                "iata": "HD",
                "icao": "ADO"
            },
            "flight": {
                "number": "26",
                "iata": "HD26",
                "icao": "ADO26",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "landed",
            "departure": {
                "airport": "Chitose",
                "timezone": "Asia/Tokyo",
                "iata": "CTS",
                "icao": "RJCC",
                "terminal": "D",
                "gate": "5",
                "delay": 20,
                "scheduled": "2025-08-01T15:00:00+00:00",
                "estimated": "2025-08-01T15:00:00+00:00",
                "actual": "2025-08-01T15:20:00+00:00",
                "estimated_runway": "2025-08-01T15:20:00+00:00",
                "actual_runway": "2025-08-01T15:20:00+00:00"
            },
            "arrival": {
                "airport": "Haneda Airport",
                "timezone": "Asia/Tokyo",
                "iata": "HND",
                "icao": "RJTT",
                "terminal": "2",
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-01T16:40:00+00:00",
                "delay": 1,
                "estimated": "2025-08-01T16:39:00+00:00",
                "actual": "2025-08-01T16:41:00+00:00",
                "estimated_runway": "2025-08-01T16:41:00+00:00",
                "actual_runway": "2025-08-01T16:41:00+00:00"
            },
            "airline": {
                "name": "ANA",
                "iata": "NH",
                "icao": "ANA"
            },
            "flight": {
                "number": "4726",
                "iata": "NH4726",
                "icao": "ANA4726",
                "codeshared": {
                    "airline_name": "air do",
                    "airline_iata": "hd",
                    "airline_icao": "ado",
                    "flight_number": "26",
                    "flight_iata": "hd26",
                    "flight_icao": "ado26"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "landed",
            "departure": {
                "airport": "Fukuoka",
                "timezone": "Asia/Tokyo",
                "iata": "FUK",
                "icao": "RJFF",
                "terminal": "D",
                "gate": "8",
                "delay": 29,
                "scheduled": "2025-08-01T14:40:00+00:00",
                "estimated": "2025-08-01T14:40:00+00:00",
                "actual": "2025-08-01T15:08:00+00:00",
                "estimated_runway": "2025-08-01T15:08:00+00:00",
                "actual_runway": "2025-08-01T15:08:00+00:00"
            },
            "arrival": {
                "airport": "Haneda Airport",
                "timezone": "Asia/Tokyo",
                "iata": "HND",
                "icao": "RJTT",
                "terminal": "1",
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-01T16:40:00+00:00",
                "delay": null,
                "estimated": "2025-08-01T16:38:00+00:00",
                "actual": "2025-08-01T16:38:00+00:00",
                "estimated_runway": "2025-08-01T16:38:00+00:00",
                "actual_runway": "2025-08-01T16:38:00+00:00"
            },
            "airline": {
                "name": "Japan Airlines",
                "iata": "JL",
                "icao": "JAL"
            },
            "flight": {
                "number": "318",
                "iata": "JL318",
                "icao": "JAL318",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "landed",
            "departure": {
                "airport": "Fukuoka",
                "timezone": "Asia/Tokyo",
                "iata": "FUK",
                "icao": "RJFF",
                "terminal": "D",
                "gate": "8",
                "delay": 29,
                "scheduled": "2025-08-01T14:40:00+00:00",
                "estimated": "2025-08-01T14:40:00+00:00",
                "actual": "2025-08-01T15:08:00+00:00",
                "estimated_runway": "2025-08-01T15:08:00+00:00",
                "actual_runway": "2025-08-01T15:08:00+00:00"
            },
            "arrival": {
                "airport": "Haneda Airport",
                "timezone": "Asia/Tokyo",
                "iata": "HND",
                "icao": "RJTT",
                "terminal": "1",
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-01T16:40:00+00:00",
                "delay": null,
                "estimated": "2025-08-01T16:38:00+00:00",
                "actual": "2025-08-01T16:38:00+00:00",
                "estimated_runway": "2025-08-01T16:38:00+00:00",
                "actual_runway": "2025-08-01T16:38:00+00:00"
            },
            "airline": {
                "name": "AlphaSky",
                "iata": "AS",
                "icao": "JAG"
            },
            "flight": {
                "number": "7444",
                "iata": "AS7444",
                "icao": "JAG7444",
                "codeshared": {
                    "airline_name": "japan airlines",
                    "airline_iata": "jl",
                    "airline_icao": "jal",
                    "flight_number": "318",
                    "flight_iata": "jl318",
                    "flight_icao": "jal318"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "landed",
            "departure": {
                "airport": "Fukuoka",
                "timezone": "Asia/Tokyo",
                "iata": "FUK",
                "icao": "RJFF",
                "terminal": "D",
                "gate": "8",
                "delay": 29,
                "scheduled": "2025-08-01T14:40:00+00:00",
                "estimated": "2025-08-01T14:40:00+00:00",
                "actual": "2025-08-01T15:08:00+00:00",
                "estimated_runway": "2025-08-01T15:08:00+00:00",
                "actual_runway": "2025-08-01T15:08:00+00:00"
            },
            "arrival": {
                "airport": "Haneda Airport",
                "timezone": "Asia/Tokyo",
                "iata": "HND",
                "icao": "RJTT",
                "terminal": "1",
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-01T16:40:00+00:00",
                "delay": null,
                "estimated": "2025-08-01T16:38:00+00:00",
                "actual": "2025-08-01T16:38:00+00:00",
                "estimated_runway": "2025-08-01T16:38:00+00:00",
                "actual_runway": "2025-08-01T16:38:00+00:00"
            },
            "airline": {
                "name": "Hawaiian Airlines",
                "iata": "HA",
                "icao": "HAL"
            },
            "flight": {
                "number": "5151",
                "iata": "HA5151",
                "icao": "HAL5151",
                "codeshared": {
                    "airline_name": "japan airlines",
                    "airline_iata": "jl",
                    "airline_icao": "jal",
                    "flight_number": "318",
                    "flight_iata": "jl318",
                    "flight_icao": "jal318"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "landed",
            "departure": {
                "airport": "Fukuoka",
                "timezone": "Asia/Tokyo",
                "iata": "FUK",
                "icao": "RJFF",
                "terminal": "D",
                "gate": "8",
                "delay": 29,
                "scheduled": "2025-08-01T14:40:00+00:00",
                "estimated": "2025-08-01T14:40:00+00:00",
                "actual": "2025-08-01T15:08:00+00:00",
                "estimated_runway": "2025-08-01T15:08:00+00:00",
                "actual_runway": "2025-08-01T15:08:00+00:00"
            },
            "arrival": {
                "airport": "Haneda Airport",
                "timezone": "Asia/Tokyo",
                "iata": "HND",
                "icao": "RJTT",
                "terminal": "1",
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-01T16:40:00+00:00",
                "delay": null,
                "estimated": "2025-08-01T16:38:00+00:00",
                "actual": "2025-08-01T16:38:00+00:00",
                "estimated_runway": "2025-08-01T16:38:00+00:00",
                "actual_runway": "2025-08-01T16:38:00+00:00"
            },
            "airline": {
                "name": "American Airlines",
                "iata": "AA",
                "icao": "AAL"
            },
            "flight": {
                "number": "8454",
                "iata": "AA8454",
                "icao": "AAL8454",
                "codeshared": {
                    "airline_name": "japan airlines",
                    "airline_iata": "jl",
                    "airline_icao": "jal",
                    "flight_number": "318",
                    "flight_iata": "jl318",
                    "flight_icao": "jal318"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "landed",
            "departure": {
                "airport": "Fukuoka",
                "timezone": "Asia/Tokyo",
                "iata": "FUK",
                "icao": "RJFF",
                "terminal": "D",
                "gate": "8",
                "delay": 29,
                "scheduled": "2025-08-01T14:40:00+00:00",
                "estimated": "2025-08-01T14:40:00+00:00",
                "actual": "2025-08-01T15:08:00+00:00",
                "estimated_runway": "2025-08-01T15:08:00+00:00",
                "actual_runway": "2025-08-01T15:08:00+00:00"
            },
            "arrival": {
                "airport": "Haneda Airport",
                "timezone": "Asia/Tokyo",
                "iata": "HND",
                "icao": "RJTT",
                "terminal": "1",
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-01T16:40:00+00:00",
                "delay": null,
                "estimated": "2025-08-01T16:38:00+00:00",
                "actual": "2025-08-01T16:38:00+00:00",
                "estimated_runway": "2025-08-01T16:38:00+00:00",
                "actual_runway": "2025-08-01T16:38:00+00:00"
            },
            "airline": {
                "name": "Qatar Airways",
                "iata": "QR",
                "icao": "QTR"
            },
            "flight": {
                "number": "6093",
                "iata": "QR6093",
                "icao": "QTR6093",
                "codeshared": {
                    "airline_name": "japan airlines",
                    "airline_iata": "jl",
                    "airline_icao": "jal",
                    "flight_number": "318",
                    "flight_iata": "jl318",
                    "flight_icao": "jal318"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Haneda Airport",
                "timezone": "Asia/Tokyo",
                "iata": "HND",
                "icao": "RJTT",
                "terminal": "1",
                "gate": "8",
                "delay": null,
                "scheduled": "2025-08-01T17:55:00+00:00",
                "estimated": "2025-08-01T17:55:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Fukuoka",
                "timezone": "Asia/Tokyo",
                "iata": "FUK",
                "icao": "RJFF",
                "terminal": "D",
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-01T19:50:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Japan Airlines",
                "iata": "JL",
                "icao": "JTL"
            },
            "flight": {
                "number": "329",
                "iata": "JL329",
                "icao": "JTL329",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "active",
            "departure": {
                "airport": "Haneda Airport",
                "timezone": "Asia/Tokyo",
                "iata": "HND",
                "icao": "RJTT",
                "terminal": "2",
                "gate": "56",
                "delay": null,
                "scheduled": "2025-08-01T17:50:00+00:00",
                "estimated": "2025-08-01T17:50:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Chitose",
                "timezone": "Asia/Tokyo",
                "iata": "CTS",
                "icao": "RJCC",
                "terminal": "D",
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-01T19:20:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Air Do",
                "iata": "HD",
                "icao": "ADO"
            },
            "flight": {
                "number": "31",
                "iata": "HD31",
                "icao": "ADO31",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "active",
            "departure": {
                "airport": "Haneda Airport",
                "timezone": "Asia/Tokyo",
                "iata": "HND",
                "icao": "RJTT",
                "terminal": "3",
                "gate": "107A",
                "delay": 25,
                "scheduled": "2025-08-01T17:45:00+00:00",
                "estimated": "2025-08-01T17:45:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Newark Liberty International",
                "timezone": "America/New_York",
                "iata": "EWR",
                "icao": "KEWR",
                "terminal": "C",
                "gate": "123",
                "baggage": "11",
                "scheduled": "2025-08-01T17:50:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "United Airlines",
                "iata": "UA",
                "icao": "UAL"
            },
            "flight": {
                "number": "130",
                "iata": "UA130",
                "icao": "UAL130",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "active",
            "departure": {
                "airport": "Haneda Airport",
                "timezone": "Asia/Tokyo",
                "iata": "HND",
                "icao": "RJTT",
                "terminal": "3",
                "gate": "110",
                "delay": null,
                "scheduled": "2025-08-01T17:45:00+00:00",
                "estimated": "2025-08-01T17:45:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Tan Son Nhat International",
                "timezone": "Asia/Ho_Chi_Minh",
                "iata": "SGN",
                "icao": "VVTS",
                "terminal": "2",
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-01T21:55:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "ANA",
                "iata": "NH",
                "icao": "ANA"
            },
            "flight": {
                "number": "891",
                "iata": "NH891",
                "icao": "ANA891",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "active",
            "departure": {
                "airport": "Haneda Airport",
                "timezone": "Asia/Tokyo",
                "iata": "HND",
                "icao": "RJTT",
                "terminal": "1",
                "gate": "11",
                "delay": null,
                "scheduled": "2025-08-01T17:45:00+00:00",
                "estimated": "2025-08-01T17:45:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Kumamoto",
                "timezone": "Asia/Tokyo",
                "iata": "KMJ",
                "icao": "RJFT",
                "terminal": null,
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-01T19:30:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Japan Airlines",
                "iata": "JL",
                "icao": "JTL"
            },
            "flight": {
                "number": "637",
                "iata": "JL637",
                "icao": "JTL637",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "active",
            "departure": {
                "airport": "Haneda Airport",
                "timezone": "Asia/Tokyo",
                "iata": "HND",
                "icao": "RJTT",
                "terminal": "3",
                "gate": "147",
                "delay": null,
                "scheduled": "2025-08-01T17:45:00+00:00",
                "estimated": "2025-08-01T17:45:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "John F Kennedy International",
                "timezone": "America/New_York",
                "iata": "JFK",
                "icao": "KJFK",
                "terminal": "8",
                "gate": "2",
                "baggage": null,
                "scheduled": "2025-08-01T18:10:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "American Airlines",
                "iata": "AA",
                "icao": "AAL"
            },
            "flight": {
                "number": "168",
                "iata": "AA168",
                "icao": "AAL168",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "active",
            "departure": {
                "airport": "Haneda Airport",
                "timezone": "Asia/Tokyo",
                "iata": "HND",
                "icao": "RJTT",
                "terminal": "1",
                "gate": "1",
                "delay": null,
                "scheduled": "2025-08-01T17:40:00+00:00",
                "estimated": "2025-08-01T17:40:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Ube",
                "timezone": "Asia/Tokyo",
                "iata": "UBJ",
                "icao": "RJDC",
                "terminal": null,
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-01T19:20:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "StarFlyer",
                "iata": "7G",
                "icao": "SFJ"
            },
            "flight": {
                "number": "15",
                "iata": "7G15",
                "icao": "SFJ15",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "active",
            "departure": {
                "airport": "Haneda Airport",
                "timezone": "Asia/Tokyo",
                "iata": "HND",
                "icao": "RJTT",
                "terminal": "2",
                "gate": "501",
                "delay": null,
                "scheduled": "2025-08-01T17:40:00+00:00",
                "estimated": "2025-08-01T17:40:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Miyazaki",
                "timezone": "Asia/Tokyo",
                "iata": "KMI",
                "icao": "RJFM",
                "terminal": null,
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-01T19:20:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "ANA",
                "iata": "NH",
                "icao": "ANA"
            },
            "flight": {
                "number": "613",
                "iata": "NH613",
                "icao": "ANA613",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "active",
            "departure": {
                "airport": "Haneda Airport",
                "timezone": "Asia/Tokyo",
                "iata": "HND",
                "icao": "RJTT",
                "terminal": "1",
                "gate": "7",
                "delay": null,
                "scheduled": "2025-08-01T17:40:00+00:00",
                "estimated": "2025-08-01T17:40:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Nagasaki",
                "timezone": "Asia/Tokyo",
                "iata": "NGS",
                "icao": "RJFU",
                "terminal": null,
                "gate": "2",
                "baggage": null,
                "scheduled": "2025-08-01T19:35:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Japan Airlines",
                "iata": "JL",
                "icao": "JTL"
            },
            "flight": {
                "number": "613",
                "iata": "JL613",
                "icao": "JTL613",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "active",
            "departure": {
                "airport": "Haneda Airport",
                "timezone": "Asia/Tokyo",
                "iata": "HND",
                "icao": "RJTT",
                "terminal": "1",
                "gate": "6",
                "delay": 23,
                "scheduled": "2025-08-01T12:25:00+00:00",
                "estimated": "2025-08-01T12:25:00+00:00",
                "actual": "2025-08-01T12:48:00+00:00",
                "estimated_runway": "2025-08-01T12:48:00+00:00",
                "actual_runway": "2025-08-01T12:48:00+00:00"
            },
            "arrival": {
                "airport": "Matsuyama",
                "timezone": "Asia/Tokyo",
                "iata": "MYJ",
                "icao": "RJOM",
                "terminal": null,
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-01T13:50:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "AlphaSky",
                "iata": "AS",
                "icao": "JAG"
            },
            "flight": {
                "number": "7513",
                "iata": "AS7513",
                "icao": "JAG7513",
                "codeshared": {
                    "airline_name": "japan airlines",
                    "airline_iata": "jl",
                    "airline_icao": "jal",
                    "flight_number": "435",
                    "flight_iata": "jl435",
                    "flight_icao": "jal435"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "active",
            "departure": {
                "airport": "Haneda Airport",
                "timezone": "Asia/Tokyo",
                "iata": "HND",
                "icao": "RJTT",
                "terminal": "1",
                "gate": "6",
                "delay": 23,
                "scheduled": "2025-08-01T12:25:00+00:00",
                "estimated": "2025-08-01T12:25:00+00:00",
                "actual": "2025-08-01T12:48:00+00:00",
                "estimated_runway": "2025-08-01T12:48:00+00:00",
                "actual_runway": "2025-08-01T12:48:00+00:00"
            },
            "arrival": {
                "airport": "Matsuyama",
                "timezone": "Asia/Tokyo",
                "iata": "MYJ",
                "icao": "RJOM",
                "terminal": null,
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-01T13:50:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Hawaiian Airlines",
                "iata": "HA",
                "icao": "HAL"
            },
            "flight": {
                "number": "5183",
                "iata": "HA5183",
                "icao": "HAL5183",
                "codeshared": {
                    "airline_name": "japan airlines",
                    "airline_iata": "jl",
                    "airline_icao": "jal",
                    "flight_number": "435",
                    "flight_iata": "jl435",
                    "flight_icao": "jal435"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "landed",
            "departure": {
                "airport": "Hang Nadim",
                "timezone": "Asia/Jakarta",
                "iata": "BTH",
                "icao": "WIDD",
                "terminal": null,
                "gate": null,
                "delay": null,
                "scheduled": "2025-08-01T10:20:00+00:00",
                "estimated": "2025-08-01T10:20:00+00:00",
                "actual": "2025-08-01T10:19:00+00:00",
                "estimated_runway": "2025-08-01T10:19:00+00:00",
                "actual_runway": "2025-08-01T10:19:00+00:00"
            },
            "arrival": {
                "airport": "Minangkabau International Airport",
                "timezone": "Asia/Jakarta",
                "iata": "PDG",
                "icao": "WIEE",
                "terminal": "3",
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-01T11:30:00+00:00",
                "delay": null,
                "estimated": "2025-08-01T11:08:00+00:00",
                "actual": "2025-08-01T11:09:00+00:00",
                "estimated_runway": "2025-08-01T11:09:00+00:00",
                "actual_runway": "2025-08-01T11:09:00+00:00"
            },
            "airline": {
                "name": "Super Air Jet",
                "iata": "IU",
                "icao": "SJV"
            },
            "flight": {
                "number": "937",
                "iata": "IU937",
                "icao": "SJV937",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Seattle-Tacoma International",
                "timezone": "America/Los_Angeles",
                "iata": "SEA",
                "icao": "KSEA",
                "terminal": null,
                "gate": "D10",
                "delay": null,
                "scheduled": "2025-08-01T06:18:00+00:00",
                "estimated": "2025-08-01T06:18:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Chicago O'hare International",
                "timezone": "America/Chicago",
                "iata": "ORD",
                "icao": "KORD",
                "terminal": "3",
                "gate": "H15",
                "baggage": "8",
                "scheduled": "2025-08-01T12:23:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "American Airlines",
                "iata": "AA",
                "icao": "AAL"
            },
            "flight": {
                "number": "2922",
                "iata": "AA2922",
                "icao": "AAL2922",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "landed",
            "departure": {
                "airport": "Adelaide International Airport",
                "timezone": "Australia/Adelaide",
                "iata": "ADL",
                "icao": "YPAD",
                "terminal": "1",
                "gate": "18",
                "delay": 1,
                "scheduled": "2025-08-01T09:50:00+00:00",
                "estimated": "2025-08-01T09:50:00+00:00",
                "actual": "2025-08-01T09:51:00+00:00",
                "estimated_runway": "2025-08-01T09:51:00+00:00",
                "actual_runway": "2025-08-01T09:51:00+00:00"
            },
            "arrival": {
                "airport": "Kuala Lumpur International Airport (klia)",
                "timezone": "Asia/Kuala_Lumpur",
                "iata": "KUL",
                "icao": "WMKK",
                "terminal": "1",
                "gate": "C35",
                "baggage": "E",
                "scheduled": "2025-08-01T16:00:00+00:00",
                "delay": null,
                "estimated": "2025-08-01T15:15:00+00:00",
                "actual": "2025-08-01T15:21:00+00:00",
                "estimated_runway": "2025-08-01T15:21:00+00:00",
                "actual_runway": "2025-08-01T15:21:00+00:00"
            },
            "airline": {
                "name": "Turkish Airlines",
                "iata": "TK",
                "icao": "THY"
            },
            "flight": {
                "number": "4814",
                "iata": "TK4814",
                "icao": "THY4814",
                "codeshared": {
                    "airline_name": "malaysia airlines",
                    "airline_iata": "mh",
                    "airline_icao": "mas",
                    "flight_number": "138",
                    "flight_iata": "mh138",
                    "flight_icao": "mas138"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "landed",
            "departure": {
                "airport": "Adelaide International Airport",
                "timezone": "Australia/Adelaide",
                "iata": "ADL",
                "icao": "YPAD",
                "terminal": "1",
                "gate": "18",
                "delay": 1,
                "scheduled": "2025-08-01T09:50:00+00:00",
                "estimated": "2025-08-01T09:50:00+00:00",
                "actual": "2025-08-01T09:51:00+00:00",
                "estimated_runway": "2025-08-01T09:51:00+00:00",
                "actual_runway": "2025-08-01T09:51:00+00:00"
            },
            "arrival": {
                "airport": "Kuala Lumpur International Airport (klia)",
                "timezone": "Asia/Kuala_Lumpur",
                "iata": "KUL",
                "icao": "WMKK",
                "terminal": "1",
                "gate": "C35",
                "baggage": "E",
                "scheduled": "2025-08-01T16:00:00+00:00",
                "delay": null,
                "estimated": "2025-08-01T15:15:00+00:00",
                "actual": "2025-08-01T15:21:00+00:00",
                "estimated_runway": "2025-08-01T15:21:00+00:00",
                "actual_runway": "2025-08-01T15:21:00+00:00"
            },
            "airline": {
                "name": "Saudia",
                "iata": "SV",
                "icao": "SVA"
            },
            "flight": {
                "number": "6324",
                "iata": "SV6324",
                "icao": "SVA6324",
                "codeshared": {
                    "airline_name": "malaysia airlines",
                    "airline_iata": "mh",
                    "airline_icao": "mas",
                    "flight_number": "138",
                    "flight_iata": "mh138",
                    "flight_icao": "mas138"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "landed",
            "departure": {
                "airport": "Adelaide International Airport",
                "timezone": "Australia/Adelaide",
                "iata": "ADL",
                "icao": "YPAD",
                "terminal": "1",
                "gate": "18",
                "delay": 1,
                "scheduled": "2025-08-01T09:50:00+00:00",
                "estimated": "2025-08-01T09:50:00+00:00",
                "actual": "2025-08-01T09:51:00+00:00",
                "estimated_runway": "2025-08-01T09:51:00+00:00",
                "actual_runway": "2025-08-01T09:51:00+00:00"
            },
            "arrival": {
                "airport": "Kuala Lumpur International Airport (klia)",
                "timezone": "Asia/Kuala_Lumpur",
                "iata": "KUL",
                "icao": "WMKK",
                "terminal": "1",
                "gate": "C35",
                "baggage": "E",
                "scheduled": "2025-08-01T16:00:00+00:00",
                "delay": null,
                "estimated": "2025-08-01T15:15:00+00:00",
                "actual": "2025-08-01T15:21:00+00:00",
                "estimated_runway": "2025-08-01T15:21:00+00:00",
                "actual_runway": "2025-08-01T15:21:00+00:00"
            },
            "airline": {
                "name": "Qatar Airways",
                "iata": "QR",
                "icao": "QTR"
            },
            "flight": {
                "number": "4974",
                "iata": "QR4974",
                "icao": "QTR4974",
                "codeshared": {
                    "airline_name": "malaysia airlines",
                    "airline_iata": "mh",
                    "airline_icao": "mas",
                    "flight_number": "138",
                    "flight_iata": "mh138",
                    "flight_icao": "mas138"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "landed",
            "departure": {
                "airport": "Adelaide International Airport",
                "timezone": "Australia/Adelaide",
                "iata": "ADL",
                "icao": "YPAD",
                "terminal": "1",
                "gate": "18",
                "delay": 1,
                "scheduled": "2025-08-01T09:50:00+00:00",
                "estimated": "2025-08-01T09:50:00+00:00",
                "actual": "2025-08-01T09:51:00+00:00",
                "estimated_runway": "2025-08-01T09:51:00+00:00",
                "actual_runway": "2025-08-01T09:51:00+00:00"
            },
            "arrival": {
                "airport": "Kuala Lumpur International Airport (klia)",
                "timezone": "Asia/Kuala_Lumpur",
                "iata": "KUL",
                "icao": "WMKK",
                "terminal": "1",
                "gate": "C35",
                "baggage": "E",
                "scheduled": "2025-08-01T16:00:00+00:00",
                "delay": null,
                "estimated": "2025-08-01T15:15:00+00:00",
                "actual": "2025-08-01T15:21:00+00:00",
                "estimated_runway": "2025-08-01T15:21:00+00:00",
                "actual_runway": "2025-08-01T15:21:00+00:00"
            },
            "airline": {
                "name": "KLM",
                "iata": "KL",
                "icao": "KLM"
            },
            "flight": {
                "number": "4107",
                "iata": "KL4107",
                "icao": "KLM4107",
                "codeshared": {
                    "airline_name": "malaysia airlines",
                    "airline_iata": "mh",
                    "airline_icao": "mas",
                    "flight_number": "138",
                    "flight_iata": "mh138",
                    "flight_icao": "mas138"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "landed",
            "departure": {
                "airport": "Adelaide International Airport",
                "timezone": "Australia/Adelaide",
                "iata": "ADL",
                "icao": "YPAD",
                "terminal": "1",
                "gate": "18",
                "delay": 1,
                "scheduled": "2025-08-01T09:50:00+00:00",
                "estimated": "2025-08-01T09:50:00+00:00",
                "actual": "2025-08-01T09:51:00+00:00",
                "estimated_runway": "2025-08-01T09:51:00+00:00",
                "actual_runway": "2025-08-01T09:51:00+00:00"
            },
            "arrival": {
                "airport": "Kuala Lumpur International Airport (klia)",
                "timezone": "Asia/Kuala_Lumpur",
                "iata": "KUL",
                "icao": "WMKK",
                "terminal": "1",
                "gate": "C35",
                "baggage": "E",
                "scheduled": "2025-08-01T16:00:00+00:00",
                "delay": null,
                "estimated": "2025-08-01T15:15:00+00:00",
                "actual": "2025-08-01T15:21:00+00:00",
                "estimated_runway": "2025-08-01T15:21:00+00:00",
                "actual_runway": "2025-08-01T15:21:00+00:00"
            },
            "airline": {
                "name": "Japan Airlines",
                "iata": "JL",
                "icao": "JTL"
            },
            "flight": {
                "number": "7982",
                "iata": "JL7982",
                "icao": "JTL7982",
                "codeshared": {
                    "airline_name": "malaysia airlines",
                    "airline_iata": "mh",
                    "airline_icao": "mas",
                    "flight_number": "138",
                    "flight_iata": "mh138",
                    "flight_icao": "mas138"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "landed",
            "departure": {
                "airport": "Adelaide International Airport",
                "timezone": "Australia/Adelaide",
                "iata": "ADL",
                "icao": "YPAD",
                "terminal": "1",
                "gate": "18",
                "delay": 1,
                "scheduled": "2025-08-01T09:50:00+00:00",
                "estimated": "2025-08-01T09:50:00+00:00",
                "actual": "2025-08-01T09:51:00+00:00",
                "estimated_runway": "2025-08-01T09:51:00+00:00",
                "actual_runway": "2025-08-01T09:51:00+00:00"
            },
            "arrival": {
                "airport": "Kuala Lumpur International Airport (klia)",
                "timezone": "Asia/Kuala_Lumpur",
                "iata": "KUL",
                "icao": "WMKK",
                "terminal": "1",
                "gate": "C35",
                "baggage": "E",
                "scheduled": "2025-08-01T16:00:00+00:00",
                "delay": null,
                "estimated": "2025-08-01T15:15:00+00:00",
                "actual": "2025-08-01T15:21:00+00:00",
                "estimated_runway": "2025-08-01T15:21:00+00:00",
                "actual_runway": "2025-08-01T15:21:00+00:00"
            },
            "airline": {
                "name": "Firefly",
                "iata": "FY",
                "icao": "FFM"
            },
            "flight": {
                "number": "7164",
                "iata": "FY7164",
                "icao": "FFM7164",
                "codeshared": {
                    "airline_name": "malaysia airlines",
                    "airline_iata": "mh",
                    "airline_icao": "mas",
                    "flight_number": "138",
                    "flight_iata": "mh138",
                    "flight_icao": "mas138"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "landed",
            "departure": {
                "airport": "Adelaide International Airport",
                "timezone": "Australia/Adelaide",
                "iata": "ADL",
                "icao": "YPAD",
                "terminal": "1",
                "gate": "18",
                "delay": 1,
                "scheduled": "2025-08-01T09:50:00+00:00",
                "estimated": "2025-08-01T09:50:00+00:00",
                "actual": "2025-08-01T09:51:00+00:00",
                "estimated_runway": "2025-08-01T09:51:00+00:00",
                "actual_runway": "2025-08-01T09:51:00+00:00"
            },
            "arrival": {
                "airport": "Kuala Lumpur International Airport (klia)",
                "timezone": "Asia/Kuala_Lumpur",
                "iata": "KUL",
                "icao": "WMKK",
                "terminal": "1",
                "gate": "C35",
                "baggage": "E",
                "scheduled": "2025-08-01T16:00:00+00:00",
                "delay": null,
                "estimated": "2025-08-01T15:15:00+00:00",
                "actual": "2025-08-01T15:21:00+00:00",
                "estimated_runway": "2025-08-01T15:21:00+00:00",
                "actual_runway": "2025-08-01T15:21:00+00:00"
            },
            "airline": {
                "name": "British Airways",
                "iata": "BA",
                "icao": "BAW"
            },
            "flight": {
                "number": "8150",
                "iata": "BA8150",
                "icao": "BAW8150",
                "codeshared": {
                    "airline_name": "malaysia airlines",
                    "airline_iata": "mh",
                    "airline_icao": "mas",
                    "flight_number": "138",
                    "flight_iata": "mh138",
                    "flight_icao": "mas138"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "active",
            "departure": {
                "airport": "Kota-Kinabalu International Airport",
                "timezone": "Asia/Kuching",
                "iata": "BKI",
                "icao": "WBKK",
                "terminal": "1",
                "gate": null,
                "delay": 8,
                "scheduled": "2025-08-01T13:30:00+00:00",
                "estimated": "2025-08-01T13:30:00+00:00",
                "actual": "2025-08-01T13:38:00+00:00",
                "estimated_runway": "2025-08-01T13:38:00+00:00",
                "actual_runway": "2025-08-01T13:38:00+00:00"
            },
            "arrival": {
                "airport": "Kuala Lumpur International Airport (klia)",
                "timezone": "Asia/Kuala_Lumpur",
                "iata": "KUL",
                "icao": "WMKK",
                "terminal": "1",
                "gate": "A8",
                "baggage": null,
                "scheduled": "2025-08-01T16:00:00+00:00",
                "delay": null,
                "estimated": "2025-08-01T15:46:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Batik Air",
                "iata": "ID",
                "icao": "BTK"
            },
            "flight": {
                "number": "1005",
                "iata": "ID1005",
                "icao": "BTK1005",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "active",
            "departure": {
                "airport": "Ngurah Rai International",
                "timezone": "Asia/Makassar",
                "iata": "DPS",
                "icao": "WADD",
                "terminal": "I",
                "gate": null,
                "delay": 39,
                "scheduled": "2025-08-01T12:55:00+00:00",
                "estimated": "2025-08-01T12:55:00+00:00",
                "actual": "2025-08-01T13:33:00+00:00",
                "estimated_runway": "2025-08-01T13:33:00+00:00",
                "actual_runway": "2025-08-01T13:33:00+00:00"
            },
            "arrival": {
                "airport": "Kuala Lumpur International Airport (klia)",
                "timezone": "Asia/Kuala_Lumpur",
                "iata": "KUL",
                "icao": "WMKK",
                "terminal": "1",
                "gate": "C22",
                "baggage": null,
                "scheduled": "2025-08-01T16:00:00+00:00",
                "delay": 6,
                "estimated": "2025-08-01T16:06:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Malaysia Airlines",
                "iata": "MH",
                "icao": "MAS"
            },
            "flight": {
                "number": "714",
                "iata": "MH714",
                "icao": "MAS714",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "active",
            "departure": {
                "airport": "Ngurah Rai International",
                "timezone": "Asia/Makassar",
                "iata": "DPS",
                "icao": "WADD",
                "terminal": "I",
                "gate": null,
                "delay": 39,
                "scheduled": "2025-08-01T12:55:00+00:00",
                "estimated": "2025-08-01T12:55:00+00:00",
                "actual": "2025-08-01T13:33:00+00:00",
                "estimated_runway": "2025-08-01T13:33:00+00:00",
                "actual_runway": "2025-08-01T13:33:00+00:00"
            },
            "arrival": {
                "airport": "Kuala Lumpur International Airport (klia)",
                "timezone": "Asia/Kuala_Lumpur",
                "iata": "KUL",
                "icao": "WMKK",
                "terminal": "1",
                "gate": "C22",
                "baggage": null,
                "scheduled": "2025-08-01T16:00:00+00:00",
                "delay": 6,
                "estimated": "2025-08-01T16:06:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Qatar Airways",
                "iata": "QR",
                "icao": "QTR"
            },
            "flight": {
                "number": "5396",
                "iata": "QR5396",
                "icao": "QTR5396",
                "codeshared": {
                    "airline_name": "malaysia airlines",
                    "airline_iata": "mh",
                    "airline_icao": "mas",
                    "flight_number": "714",
                    "flight_iata": "mh714",
                    "flight_icao": "mas714"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "active",
            "departure": {
                "airport": "Ngurah Rai International",
                "timezone": "Asia/Makassar",
                "iata": "DPS",
                "icao": "WADD",
                "terminal": "I",
                "gate": null,
                "delay": 39,
                "scheduled": "2025-08-01T12:55:00+00:00",
                "estimated": "2025-08-01T12:55:00+00:00",
                "actual": "2025-08-01T13:33:00+00:00",
                "estimated_runway": "2025-08-01T13:33:00+00:00",
                "actual_runway": "2025-08-01T13:33:00+00:00"
            },
            "arrival": {
                "airport": "Kuala Lumpur International Airport (klia)",
                "timezone": "Asia/Kuala_Lumpur",
                "iata": "KUL",
                "icao": "WMKK",
                "terminal": "1",
                "gate": "C22",
                "baggage": null,
                "scheduled": "2025-08-01T16:00:00+00:00",
                "delay": 6,
                "estimated": "2025-08-01T16:06:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "KLM",
                "iata": "KL",
                "icao": "KLM"
            },
            "flight": {
                "number": "4116",
                "iata": "KL4116",
                "icao": "KLM4116",
                "codeshared": {
                    "airline_name": "malaysia airlines",
                    "airline_iata": "mh",
                    "airline_icao": "mas",
                    "flight_number": "714",
                    "flight_iata": "mh714",
                    "flight_icao": "mas714"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "active",
            "departure": {
                "airport": "Ngurah Rai International",
                "timezone": "Asia/Makassar",
                "iata": "DPS",
                "icao": "WADD",
                "terminal": "I",
                "gate": null,
                "delay": 39,
                "scheduled": "2025-08-01T12:55:00+00:00",
                "estimated": "2025-08-01T12:55:00+00:00",
                "actual": "2025-08-01T13:33:00+00:00",
                "estimated_runway": "2025-08-01T13:33:00+00:00",
                "actual_runway": "2025-08-01T13:33:00+00:00"
            },
            "arrival": {
                "airport": "Kuala Lumpur International Airport (klia)",
                "timezone": "Asia/Kuala_Lumpur",
                "iata": "KUL",
                "icao": "WMKK",
                "terminal": "1",
                "gate": "C22",
                "baggage": null,
                "scheduled": "2025-08-01T16:00:00+00:00",
                "delay": 6,
                "estimated": "2025-08-01T16:06:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Garuda Indonesia",
                "iata": "GA",
                "icao": "GIA"
            },
            "flight": {
                "number": "8941",
                "iata": "GA8941",
                "icao": "GIA8941",
                "codeshared": {
                    "airline_name": "malaysia airlines",
                    "airline_iata": "mh",
                    "airline_icao": "mas",
                    "flight_number": "714",
                    "flight_iata": "mh714",
                    "flight_icao": "mas714"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "active",
            "departure": {
                "airport": "Sharjah",
                "timezone": "Asia/Dubai",
                "iata": "SHJ",
                "icao": "OMSJ",
                "terminal": null,
                "gate": "1B",
                "delay": null,
                "scheduled": "2025-08-01T11:45:00+00:00",
                "estimated": "2025-08-01T11:45:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Basrah International Airport ",
                "timezone": "Asia/Baghdad",
                "iata": "BSR",
                "icao": "ORMM",
                "terminal": null,
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-01T12:30:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Air Arabia",
                "iata": "G9",
                "icao": "ABY"
            },
            "flight": {
                "number": "833",
                "iata": "G9833",
                "icao": "ABY833",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "active",
            "departure": {
                "airport": "Kuala Lumpur International Airport (klia)",
                "timezone": "Asia/Kuala_Lumpur",
                "iata": "KUL",
                "icao": "WMKK",
                "terminal": "1",
                "gate": "C17",
                "delay": 6,
                "scheduled": "2025-08-01T12:10:00+00:00",
                "estimated": "2025-08-01T12:10:00+00:00",
                "actual": "2025-08-01T12:15:00+00:00",
                "estimated_runway": "2025-08-01T12:15:00+00:00",
                "actual_runway": "2025-08-01T12:15:00+00:00"
            },
            "arrival": {
                "airport": "Suvarnabhumi International",
                "timezone": "Asia/Bangkok",
                "iata": "BKK",
                "icao": "VTBS",
                "terminal": null,
                "gate": "E7",
                "baggage": "11",
                "scheduled": "2025-08-01T13:25:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Oman Air",
                "iata": "WY",
                "icao": "OMA"
            },
            "flight": {
                "number": "5699",
                "iata": "WY5699",
                "icao": "OMA5699",
                "codeshared": {
                    "airline_name": "malaysia airlines",
                    "airline_iata": "mh",
                    "airline_icao": "mas",
                    "flight_number": "788",
                    "flight_iata": "mh788",
                    "flight_icao": "mas788"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "active",
            "departure": {
                "airport": "Kuala Lumpur International Airport (klia)",
                "timezone": "Asia/Kuala_Lumpur",
                "iata": "KUL",
                "icao": "WMKK",
                "terminal": "1",
                "gate": "C17",
                "delay": 6,
                "scheduled": "2025-08-01T12:10:00+00:00",
                "estimated": "2025-08-01T12:10:00+00:00",
                "actual": "2025-08-01T12:15:00+00:00",
                "estimated_runway": "2025-08-01T12:15:00+00:00",
                "actual_runway": "2025-08-01T12:15:00+00:00"
            },
            "arrival": {
                "airport": "Suvarnabhumi International",
                "timezone": "Asia/Bangkok",
                "iata": "BKK",
                "icao": "VTBS",
                "terminal": null,
                "gate": "E7",
                "baggage": "11",
                "scheduled": "2025-08-01T13:25:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Thai Airways International",
                "iata": "TG",
                "icao": "THA"
            },
            "flight": {
                "number": "4712",
                "iata": "TG4712",
                "icao": "THA4712",
                "codeshared": {
                    "airline_name": "malaysia airlines",
                    "airline_iata": "mh",
                    "airline_icao": "mas",
                    "flight_number": "788",
                    "flight_iata": "mh788",
                    "flight_icao": "mas788"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "active",
            "departure": {
                "airport": "Kuala Lumpur International Airport (klia)",
                "timezone": "Asia/Kuala_Lumpur",
                "iata": "KUL",
                "icao": "WMKK",
                "terminal": "1",
                "gate": "C17",
                "delay": 6,
                "scheduled": "2025-08-01T12:10:00+00:00",
                "estimated": "2025-08-01T12:10:00+00:00",
                "actual": "2025-08-01T12:15:00+00:00",
                "estimated_runway": "2025-08-01T12:15:00+00:00",
                "actual_runway": "2025-08-01T12:15:00+00:00"
            },
            "arrival": {
                "airport": "Suvarnabhumi International",
                "timezone": "Asia/Bangkok",
                "iata": "BKK",
                "icao": "VTBS",
                "terminal": null,
                "gate": "E7",
                "baggage": "11",
                "scheduled": "2025-08-01T13:25:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Qatar Airways",
                "iata": "QR",
                "icao": "QTR"
            },
            "flight": {
                "number": "4481",
                "iata": "QR4481",
                "icao": "QTR4481",
                "codeshared": {
                    "airline_name": "malaysia airlines",
                    "airline_iata": "mh",
                    "airline_icao": "mas",
                    "flight_number": "788",
                    "flight_iata": "mh788",
                    "flight_icao": "mas788"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "active",
            "departure": {
                "airport": "Harbin",
                "timezone": "Asia/Shanghai",
                "iata": "HRB",
                "icao": "ZYHB",
                "terminal": "T2",
                "gate": "31",
                "delay": 4,
                "scheduled": "2025-08-01T10:40:00+00:00",
                "estimated": "2025-08-01T10:40:00+00:00",
                "actual": "2025-08-01T10:43:00+00:00",
                "estimated_runway": "2025-08-01T10:43:00+00:00",
                "actual_runway": "2025-08-01T10:43:00+00:00"
            },
            "arrival": {
                "airport": "Shanghai Pudong International",
                "timezone": "Asia/Shanghai",
                "iata": "PVG",
                "icao": "ZSPD",
                "terminal": "2",
                "gate": null,
                "baggage": "37",
                "scheduled": "2025-08-01T13:50:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Sichuan Airlines",
                "iata": "3U",
                "icao": "CSC"
            },
            "flight": {
                "number": "1531",
                "iata": "3U1531",
                "icao": "CSC1531",
                "codeshared": {
                    "airline_name": "china southern airlines",
                    "airline_iata": "cz",
                    "airline_icao": "csn",
                    "flight_number": "6209",
                    "flight_iata": "cz6209",
                    "flight_icao": "csn6209"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "active",
            "departure": {
                "airport": "Harbin",
                "timezone": "Asia/Shanghai",
                "iata": "HRB",
                "icao": "ZYHB",
                "terminal": "T2",
                "gate": "31",
                "delay": 4,
                "scheduled": "2025-08-01T10:40:00+00:00",
                "estimated": "2025-08-01T10:40:00+00:00",
                "actual": "2025-08-01T10:43:00+00:00",
                "estimated_runway": "2025-08-01T10:43:00+00:00",
                "actual_runway": "2025-08-01T10:43:00+00:00"
            },
            "arrival": {
                "airport": "Shanghai Pudong International",
                "timezone": "Asia/Shanghai",
                "iata": "PVG",
                "icao": "ZSPD",
                "terminal": "2",
                "gate": null,
                "baggage": "37",
                "scheduled": "2025-08-01T13:50:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "American Airlines",
                "iata": "AA",
                "icao": "AAL"
            },
            "flight": {
                "number": "9082",
                "iata": "AA9082",
                "icao": "AAL9082",
                "codeshared": {
                    "airline_name": "china southern airlines",
                    "airline_iata": "cz",
                    "airline_icao": "csn",
                    "flight_number": "6209",
                    "flight_iata": "cz6209",
                    "flight_icao": "csn6209"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "active",
            "departure": {
                "airport": "Harbin",
                "timezone": "Asia/Shanghai",
                "iata": "HRB",
                "icao": "ZYHB",
                "terminal": "T2",
                "gate": "46",
                "delay": 6,
                "scheduled": "2025-08-01T10:35:00+00:00",
                "estimated": "2025-08-01T10:35:00+00:00",
                "actual": "2025-08-01T10:40:00+00:00",
                "estimated_runway": "2025-08-01T10:40:00+00:00",
                "actual_runway": "2025-08-01T10:40:00+00:00"
            },
            "arrival": {
                "airport": "Zhengzhou",
                "timezone": "Asia/Shanghai",
                "iata": "CGO",
                "icao": "ZHCC",
                "terminal": "2",
                "gate": null,
                "baggage": "9",
                "scheduled": "2025-08-01T13:45:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Suparna Airlines",
                "iata": "Y8",
                "icao": "YZR"
            },
            "flight": {
                "number": "7591",
                "iata": "Y87591",
                "icao": "YZR7591",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "active",
            "departure": {
                "airport": "Harbin",
                "timezone": "Asia/Shanghai",
                "iata": "HRB",
                "icao": "ZYHB",
                "terminal": "T2",
                "gate": "48",
                "delay": 3,
                "scheduled": "2025-08-01T10:30:00+00:00",
                "estimated": "2025-08-01T10:30:00+00:00",
                "actual": "2025-08-01T10:33:00+00:00",
                "estimated_runway": "2025-08-01T10:33:00+00:00",
                "actual_runway": "2025-08-01T10:33:00+00:00"
            },
            "arrival": {
                "airport": "Weihai",
                "timezone": "Asia/Shanghai",
                "iata": "WEH",
                "icao": "ZSWH",
                "terminal": null,
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-01T12:30:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Qingdao Airlines",
                "iata": "QW",
                "icao": "QDA"
            },
            "flight": {
                "number": "6099",
                "iata": "QW6099",
                "icao": "QDA6099",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "active",
            "departure": {
                "airport": "Harbin",
                "timezone": "Asia/Shanghai",
                "iata": "HRB",
                "icao": "ZYHB",
                "terminal": "T2",
                "gate": "48",
                "delay": 3,
                "scheduled": "2025-08-01T10:30:00+00:00",
                "estimated": "2025-08-01T10:30:00+00:00",
                "actual": "2025-08-01T10:33:00+00:00",
                "estimated_runway": "2025-08-01T10:33:00+00:00",
                "actual_runway": "2025-08-01T10:33:00+00:00"
            },
            "arrival": {
                "airport": "Weihai",
                "timezone": "Asia/Shanghai",
                "iata": "WEH",
                "icao": "ZSWH",
                "terminal": null,
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-01T12:30:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "China Southern Airlines",
                "iata": "CZ",
                "icao": "CSN"
            },
            "flight": {
                "number": "4929",
                "iata": "CZ4929",
                "icao": "CSN4929",
                "codeshared": {
                    "airline_name": "qingdao airlines",
                    "airline_iata": "qw",
                    "airline_icao": "qda",
                    "flight_number": "6099",
                    "flight_iata": "qw6099",
                    "flight_icao": "qda6099"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "active",
            "departure": {
                "airport": "Harbin",
                "timezone": "Asia/Shanghai",
                "iata": "HRB",
                "icao": "ZYHB",
                "terminal": "T2",
                "gate": "19",
                "delay": null,
                "scheduled": "2025-08-01T10:25:00+00:00",
                "estimated": "2025-08-01T10:25:00+00:00",
                "actual": "2025-08-01T10:22:00+00:00",
                "estimated_runway": "2025-08-01T10:22:00+00:00",
                "actual_runway": "2025-08-01T10:22:00+00:00"
            },
            "arrival": {
                "airport": "Gulian",
                "timezone": "Asia/Shanghai",
                "iata": "OHE",
                "icao": "ZYMH",
                "terminal": null,
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-01T12:10:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "China Southern Airlines",
                "iata": "CZ",
                "icao": "CSN"
            },
            "flight": {
                "number": "6267",
                "iata": "CZ6267",
                "icao": "CSN6267",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "active",
            "departure": {
                "airport": "Harbin",
                "timezone": "Asia/Shanghai",
                "iata": "HRB",
                "icao": "ZYHB",
                "terminal": "T2",
                "gate": "38",
                "delay": 1,
                "scheduled": "2025-08-01T10:20:00+00:00",
                "estimated": "2025-08-01T10:20:00+00:00",
                "actual": "2025-08-01T10:21:00+00:00",
                "estimated_runway": "2025-08-01T10:21:00+00:00",
                "actual_runway": "2025-08-01T10:21:00+00:00"
            },
            "arrival": {
                "airport": "Shanghai Pudong International",
                "timezone": "Asia/Shanghai",
                "iata": "PVG",
                "icao": "ZSPD",
                "terminal": "2",
                "gate": null,
                "baggage": "35",
                "scheduled": "2025-08-01T13:25:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Air China LTD",
                "iata": "CA",
                "icao": "CCA"
            },
            "flight": {
                "number": "8302",
                "iata": "CA8302",
                "icao": "CCA8302",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "active",
            "departure": {
                "airport": "Harbin",
                "timezone": "Asia/Shanghai",
                "iata": "HRB",
                "icao": "ZYHB",
                "terminal": "T2",
                "gate": "38",
                "delay": 1,
                "scheduled": "2025-08-01T10:20:00+00:00",
                "estimated": "2025-08-01T10:20:00+00:00",
                "actual": "2025-08-01T10:21:00+00:00",
                "estimated_runway": "2025-08-01T10:21:00+00:00",
                "actual_runway": "2025-08-01T10:21:00+00:00"
            },
            "arrival": {
                "airport": "Shanghai Pudong International",
                "timezone": "Asia/Shanghai",
                "iata": "PVG",
                "icao": "ZSPD",
                "terminal": "2",
                "gate": null,
                "baggage": "35",
                "scheduled": "2025-08-01T13:25:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Shenzhen Airlines",
                "iata": "ZH",
                "icao": "CSZ"
            },
            "flight": {
                "number": "4602",
                "iata": "ZH4602",
                "icao": "CSZ4602",
                "codeshared": {
                    "airline_name": "air china ltd",
                    "airline_iata": "ca",
                    "airline_icao": "cca",
                    "flight_number": "8302",
                    "flight_iata": "ca8302",
                    "flight_icao": "cca8302"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "active",
            "departure": {
                "airport": "Harbin",
                "timezone": "Asia/Shanghai",
                "iata": "HRB",
                "icao": "ZYHB",
                "terminal": "T2",
                "gate": "38",
                "delay": 1,
                "scheduled": "2025-08-01T10:20:00+00:00",
                "estimated": "2025-08-01T10:20:00+00:00",
                "actual": "2025-08-01T10:21:00+00:00",
                "estimated_runway": "2025-08-01T10:21:00+00:00",
                "actual_runway": "2025-08-01T10:21:00+00:00"
            },
            "arrival": {
                "airport": "Shanghai Pudong International",
                "timezone": "Asia/Shanghai",
                "iata": "PVG",
                "icao": "ZSPD",
                "terminal": "2",
                "gate": null,
                "baggage": "35",
                "scheduled": "2025-08-01T13:25:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Shandong Airlines",
                "iata": "SC",
                "icao": "CDG"
            },
            "flight": {
                "number": "5160",
                "iata": "SC5160",
                "icao": "CDG5160",
                "codeshared": {
                    "airline_name": "air china ltd",
                    "airline_iata": "ca",
                    "airline_icao": "cca",
                    "flight_number": "8302",
                    "flight_iata": "ca8302",
                    "flight_icao": "cca8302"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "active",
            "departure": {
                "airport": "Harbin",
                "timezone": "Asia/Shanghai",
                "iata": "HRB",
                "icao": "ZYHB",
                "terminal": "T2",
                "gate": "38",
                "delay": 1,
                "scheduled": "2025-08-01T10:20:00+00:00",
                "estimated": "2025-08-01T10:20:00+00:00",
                "actual": "2025-08-01T10:21:00+00:00",
                "estimated_runway": "2025-08-01T10:21:00+00:00",
                "actual_runway": "2025-08-01T10:21:00+00:00"
            },
            "arrival": {
                "airport": "Shanghai Pudong International",
                "timezone": "Asia/Shanghai",
                "iata": "PVG",
                "icao": "ZSPD",
                "terminal": "2",
                "gate": null,
                "baggage": "35",
                "scheduled": "2025-08-01T13:25:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Air New Zealand",
                "iata": "NZ",
                "icao": "ANZ"
            },
            "flight": {
                "number": "3738",
                "iata": "NZ3738",
                "icao": "ANZ3738",
                "codeshared": {
                    "airline_name": "air china ltd",
                    "airline_iata": "ca",
                    "airline_icao": "cca",
                    "flight_number": "8302",
                    "flight_iata": "ca8302",
                    "flight_icao": "cca8302"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "active",
            "departure": {
                "airport": "Harbin",
                "timezone": "Asia/Shanghai",
                "iata": "HRB",
                "icao": "ZYHB",
                "terminal": "T2",
                "gate": "30",
                "delay": 12,
                "scheduled": "2025-08-01T10:15:00+00:00",
                "estimated": "2025-08-01T10:15:00+00:00",
                "actual": "2025-08-01T10:27:00+00:00",
                "estimated_runway": "2025-08-01T10:27:00+00:00",
                "actual_runway": "2025-08-01T10:27:00+00:00"
            },
            "arrival": {
                "airport": "Qingdao",
                "timezone": "Asia/Shanghai",
                "iata": "TAO",
                "icao": "ZSQD",
                "terminal": null,
                "gate": null,
                "baggage": "11",
                "scheduled": "2025-08-01T12:15:00+00:00",
                "delay": 3,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Shandong Airlines",
                "iata": "SC",
                "icao": "CDG"
            },
            "flight": {
                "number": "4754",
                "iata": "SC4754",
                "icao": "CDG4754",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "active",
            "departure": {
                "airport": "Harbin",
                "timezone": "Asia/Shanghai",
                "iata": "HRB",
                "icao": "ZYHB",
                "terminal": "T2",
                "gate": "30",
                "delay": 12,
                "scheduled": "2025-08-01T10:15:00+00:00",
                "estimated": "2025-08-01T10:15:00+00:00",
                "actual": "2025-08-01T10:27:00+00:00",
                "estimated_runway": "2025-08-01T10:27:00+00:00",
                "actual_runway": "2025-08-01T10:27:00+00:00"
            },
            "arrival": {
                "airport": "Qingdao",
                "timezone": "Asia/Shanghai",
                "iata": "TAO",
                "icao": "ZSQD",
                "terminal": null,
                "gate": null,
                "baggage": "11",
                "scheduled": "2025-08-01T12:15:00+00:00",
                "delay": 3,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "China Express Air",
                "iata": "G5",
                "icao": "HXA"
            },
            "flight": {
                "number": "6598",
                "iata": "G56598",
                "icao": "HXA6598",
                "codeshared": {
                    "airline_name": "shandong airlines",
                    "airline_iata": "sc",
                    "airline_icao": "cdg",
                    "flight_number": "4754",
                    "flight_iata": "sc4754",
                    "flight_icao": "cdg4754"
                }
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Beijing Capital International",
                "timezone": "Asia/Shanghai",
                "iata": "PEK",
                "icao": "ZBAA",
                "terminal": "2",
                "gate": "2H20",
                "delay": null,
                "scheduled": "2025-08-01T20:00:00+00:00",
                "estimated": "2025-08-01T20:00:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Shanghai Hongqiao International",
                "timezone": "Asia/Shanghai",
                "iata": "SHA",
                "icao": "ZSSS",
                "terminal": "2",
                "gate": null,
                "baggage": "31",
                "scheduled": "2025-08-01T22:00:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "China Eastern Airlines",
                "iata": "MU",
                "icao": "CES"
            },
            "flight": {
                "number": "5126",
                "iata": "MU5126",
                "icao": "CES5126",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Shantou",
                "timezone": "Asia/Shanghai",
                "iata": "SWA",
                "icao": "ZGOW",
                "terminal": null,
                "gate": "1-15",
                "delay": null,
                "scheduled": "2025-08-01T20:00:00+00:00",
                "estimated": "2025-08-01T20:00:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Shanghai Hongqiao International",
                "timezone": "Asia/Shanghai",
                "iata": "SHA",
                "icao": "ZSSS",
                "terminal": "2",
                "gate": null,
                "baggage": "28",
                "scheduled": "2025-08-01T22:00:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Shanghai Airlines",
                "iata": "FM",
                "icao": "CSH"
            },
            "flight": {
                "number": "9294",
                "iata": "FM9294",
                "icao": "CSH9294",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Jingdezhen",
                "timezone": "Asia/Shanghai",
                "iata": "JDZ",
                "icao": "ZSJD",
                "terminal": null,
                "gate": "3",
                "delay": null,
                "scheduled": "2025-08-01T20:30:00+00:00",
                "estimated": "2025-08-01T20:30:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Shanghai Hongqiao International",
                "timezone": "Asia/Shanghai",
                "iata": "SHA",
                "icao": "ZSSS",
                "terminal": "2",
                "gate": null,
                "baggage": "23",
                "scheduled": "2025-08-01T21:55:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Shenzhen Airlines",
                "iata": "ZH",
                "icao": "CSZ"
            },
            "flight": {
                "number": "9539",
                "iata": "ZH9539",
                "icao": "CSZ9539",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Xiamen",
                "timezone": "Asia/Shanghai",
                "iata": "XMN",
                "icao": "ZSAM",
                "terminal": "4",
                "gate": "K",
                "delay": null,
                "scheduled": "2025-08-01T20:00:00+00:00",
                "estimated": "2025-08-01T20:00:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Shanghai Hongqiao International",
                "timezone": "Asia/Shanghai",
                "iata": "SHA",
                "icao": "ZSSS",
                "terminal": "2",
                "gate": null,
                "baggage": "31",
                "scheduled": "2025-08-01T21:55:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "China Eastern Airlines",
                "iata": "MU",
                "icao": "CES"
            },
            "flight": {
                "number": "6150",
                "iata": "MU6150",
                "icao": "CES6150",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Shanghai Hongqiao International",
                "timezone": "Asia/Shanghai",
                "iata": "SHA",
                "icao": "ZSSS",
                "terminal": "2",
                "gate": "B01-",
                "delay": null,
                "scheduled": "2025-08-01T22:05:00+00:00",
                "estimated": "2025-08-01T22:05:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Xianyang",
                "timezone": "Asia/Shanghai",
                "iata": "XIY",
                "icao": "ZLXY",
                "terminal": "5",
                "gate": null,
                "baggage": "6",
                "scheduled": "2025-08-02T00:35:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "China Eastern Airlines",
                "iata": "MU",
                "icao": "CES"
            },
            "flight": {
                "number": "2240",
                "iata": "MU2240",
                "icao": "CES2240",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Shanghai Hongqiao International",
                "timezone": "Asia/Shanghai",
                "iata": "SHA",
                "icao": "ZSSS",
                "terminal": "2",
                "gate": "B,C",
                "delay": null,
                "scheduled": "2025-08-01T22:00:00+00:00",
                "estimated": "2025-08-01T22:00:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Changsha",
                "timezone": "Asia/Shanghai",
                "iata": "CSX",
                "icao": "ZGHA",
                "terminal": "2",
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-02T01:15:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Shanghai Airlines",
                "iata": "FM",
                "icao": "CSH"
            },
            "flight": {
                "number": "9405",
                "iata": "FM9405",
                "icao": "CSH9405",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Shanghai Hongqiao International",
                "timezone": "Asia/Shanghai",
                "iata": "SHA",
                "icao": "ZSSS",
                "terminal": "2",
                "gate": "D01-",
                "delay": null,
                "scheduled": "2025-08-01T22:00:00+00:00",
                "estimated": "2025-08-01T22:00:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Guangzhou Baiyun International",
                "timezone": "Asia/Shanghai",
                "iata": "CAN",
                "icao": "ZGGG",
                "terminal": "1",
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-02T00:10:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "China Eastern Airlines",
                "iata": "MU",
                "icao": "CES"
            },
            "flight": {
                "number": "5319",
                "iata": "MU5319",
                "icao": "CES5319",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Shanghai Hongqiao International",
                "timezone": "Asia/Shanghai",
                "iata": "SHA",
                "icao": "ZSSS",
                "terminal": "2",
                "gate": "63",
                "delay": null,
                "scheduled": "2025-08-01T22:00:00+00:00",
                "estimated": "2025-08-01T22:00:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Guiyang",
                "timezone": "Asia/Shanghai",
                "iata": "KWE",
                "icao": "ZUGY",
                "terminal": "3",
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-02T00:50:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "China Southern Airlines",
                "iata": "CZ",
                "icao": "CSN"
            },
            "flight": {
                "number": "8264",
                "iata": "CZ8264",
                "icao": "CSN8264",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Shanghai Hongqiao International",
                "timezone": "Asia/Shanghai",
                "iata": "SHA",
                "icao": "ZSSS",
                "terminal": "2",
                "gate": "D01-",
                "delay": null,
                "scheduled": "2025-08-01T21:55:00+00:00",
                "estimated": "2025-08-01T21:55:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Chengdu Tianfu International Airport",
                "timezone": "Asia/Chongqing",
                "iata": "TFU",
                "icao": "ZUTF",
                "terminal": "2",
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-02T00:55:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "China Eastern Airlines",
                "iata": "MU",
                "icao": "CES"
            },
            "flight": {
                "number": "5477",
                "iata": "MU5477",
                "icao": "CES5477",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Shanghai Hongqiao International",
                "timezone": "Asia/Shanghai",
                "iata": "SHA",
                "icao": "ZSSS",
                "terminal": "1",
                "gate": "T26",
                "delay": 80,
                "scheduled": "2025-08-01T21:55:00+00:00",
                "estimated": "2025-08-01T21:55:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Xiamen",
                "timezone": "Asia/Shanghai",
                "iata": "XMN",
                "icao": "ZSAM",
                "terminal": "3",
                "gate": "5",
                "baggage": null,
                "scheduled": "2025-08-01T23:45:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Xiamen Airlines",
                "iata": "MF",
                "icao": "CXA"
            },
            "flight": {
                "number": "8546",
                "iata": "MF8546",
                "icao": "CXA8546",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Shanghai Hongqiao International",
                "timezone": "Asia/Shanghai",
                "iata": "SHA",
                "icao": "ZSSS",
                "terminal": "2",
                "gate": "46",
                "delay": null,
                "scheduled": "2025-08-01T21:50:00+00:00",
                "estimated": "2025-08-01T21:50:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Guangzhou Baiyun International",
                "timezone": "Asia/Shanghai",
                "iata": "CAN",
                "icao": "ZGGG",
                "terminal": "2",
                "gate": null,
                "baggage": "33",
                "scheduled": "2025-08-02T00:15:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "China Southern Airlines",
                "iata": "CZ",
                "icao": "CSN"
            },
            "flight": {
                "number": "3582",
                "iata": "CZ3582",
                "icao": "CSN3582",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Shanghai Hongqiao International",
                "timezone": "Asia/Shanghai",
                "iata": "SHA",
                "icao": "ZSSS",
                "terminal": "1",
                "gate": "D",
                "delay": null,
                "scheduled": "2025-08-01T21:50:00+00:00",
                "estimated": "2025-08-01T21:50:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Guangzhou Baiyun International",
                "timezone": "Asia/Shanghai",
                "iata": "CAN",
                "icao": "ZGGG",
                "terminal": "1",
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-02T00:30:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Spring Airlines",
                "iata": "9C",
                "icao": "CQH"
            },
            "flight": {
                "number": "8929",
                "iata": "9C8929",
                "icao": "CQH8929",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        },
        {
            "flight_date": "2025-08-01",
            "flight_status": "scheduled",
            "departure": {
                "airport": "Shanghai Hongqiao International",
                "timezone": "Asia/Shanghai",
                "iata": "SHA",
                "icao": "ZSSS",
                "terminal": "2",
                "gate": "32",
                "delay": null,
                "scheduled": "2025-08-01T21:45:00+00:00",
                "estimated": "2025-08-01T21:45:00+00:00",
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "arrival": {
                "airport": "Guangzhou Baiyun International",
                "timezone": "Asia/Shanghai",
                "iata": "CAN",
                "icao": "ZGGG",
                "terminal": "1",
                "gate": null,
                "baggage": null,
                "scheduled": "2025-08-02T00:05:00+00:00",
                "delay": null,
                "estimated": null,
                "actual": null,
                "estimated_runway": null,
                "actual_runway": null
            },
            "airline": {
                "name": "Juneyao Airlines",
                "iata": "HO",
                "icao": "DKH"
            },
            "flight": {
                "number": "1853",
                "iata": "HO1853",
                "icao": "DKH1853",
                "codeshared": null
            },
            "aircraft": null,
            "live": null
        }
    ]
}`);

export default testData;
