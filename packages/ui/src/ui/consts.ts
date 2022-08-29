export const DEFAULT_STOP_TIME_S = 20 //

// The ones in use in Berlin GTFS in March 2022:
// 2, 3, 100, 109, 400, 700, 900, 1000

export const ROUTE_TYPES = [
  // 2, // ???
  // 3, // ???
  //
  // 100, // Railway Service	Yes
  // 101, // High Speed Rail Service	Yes	TGV (FR), ICE (DE), Eurostar (GB)
  // 102, // Long Distance Trains	Yes	InterCity/EuroCity
  // 103, // Inter Regional Rail Service	Yes	InterRegio (DE), Cross County Rail (GB)
  // 104, // Car Transport Rail Service
  // 105, // Sleeper Rail Service	Yes	GNER Sleeper (GB)
  // 106, // Regional Rail Service	Yes	TER (FR), Regionalzug (DE)
  // 107, // Tourist Railway Service	Yes	Romney, Hythe & Dymchurch (GB)
  // 108, // Rail Shuttle (Within Complex)	Yes	Gatwick Shuttle (GB), Sky Line (DE)
  109, // Suburban Railway	Yes	S-Bahn (DE), RER (FR), S-tog (Kopenhagen)
  // 110, // Replacement Rail Service
  // 111, // Special Rail Service
  // 112, // Lorry Transport Rail Service
  // 113, // All Rail Services
  // 114, // Cross-Country Rail Service
  // 115, // Vehicle Transport Rail Service
  // 116, // Rack and Pinion Railway	 	Rochers de Naye (CH), Dolderbahn (CH)
  // 117, // Additional Rail Service
  // 200, // Coach Service	Yes
  // 201, // International Coach Service	Yes	EuroLine, Touring
  // 202, // National Coach Service	Yes	National Express (GB)
  // 203, // Shuttle Coach Service	 	Roissy Bus (FR), Reading-Heathrow (GB)
  // 204, // Regional Coach Service	Yes
  // 205, // Special Coach Service
  // 206, // Sightseeing Coach Service
  // 207, // Tourist Coach Service
  // 208, // Commuter Coach Service
  // 209, // All Coach Services
  400, // Urban Railway Service	Yes
  // 401, // Metro Service	Yes	Métro de Paris
  // 402, // Underground Service	Yes	London Underground, U-Bahn
  // 403, // Urban Railway Service	Yes
  // 404, // All Urban Railway Services
  // 405, // Monorail	Yes
  // 700, // Bus Service	Yes
  // 701, // Regional Bus Service	Yes	Eastbourne-Maidstone (GB)
  // 702, // Express Bus Service	Yes	X19 Wokingham-Heathrow (GB)
  // 703, // Stopping Bus Service	 	38 London: Clapton Pond-Victoria (GB)
  // 704, // Local Bus Service	Yes
  // 705, // Night Bus Service	 	N prefixed buses in London (GB)
  // 706, // Post Bus Service	 	Maidstone P4 (GB)
  // 707, // Special Needs Bus
  // 708, // Mobility Bus Service
  // 709, // Mobility Bus for Registered Disabled
  // 710, // Sightseeing Bus
  // 711, // Shuttle Bus	 	747 Heathrow-Gatwick Airport Service (GB)
  // 712, // School Bus
  // 713, // School and Public Service Bus
  // 714, // Rail Replacement Bus Service
  // 715, // Demand and TripsResponse Bus Service	Yes
  // 716, // All Bus Services
  // 800, // Trolleybus Service	Yes
  // 900, // Tram Service	Yes
  // 901, // City Tram Service
  // 902, // Local Tram Service	 	Munich (DE), Brussels (BE), Croydon (GB)
  // 903, // Regional Tram Service
  // 904, // Sightseeing Tram Service	 	Blackpool Seafront (GB)
  // 905, // Shuttle Tram Service
  // 906, // All Tram Services
  // 1000, // Water Transport Service	Yes
  // 1100, // Air Service
  // 1200, // Ferry Service	Yes
  // 1300, // Aerial Lift Service	Yes	Telefèric de Montjuïc (ES), Saleve (CH), Roosevelt Island Tramway (US)
  // 1400, // Funicular Service	Yes	Rigiblick (Zürich, CH)
  // 1500, // Taxi Service
  // 1501, // Communal Taxi Service	Yes	Marshrutka (RU), dolmuş (TR)
  // 1502, // Water Taxi Service
  // 1503, // Rail Taxi Service
  // 1504, // Bike Taxi Service
  // 1505, // Licensed Taxi Service
  // 1506, // Private Hire Service Vehicle
  // 1507, // All Taxi Services
  // 1700, // Miscellaneous Service	Yes
  // 1702, // Horse-drawn Carriage	Yes
]
