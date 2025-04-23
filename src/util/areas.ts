export class Area {
  static readonly Acres22 = new Area(
    "22 Acres",
    "22-acres",
    "https://www.york.ac.uk/map/#locid919",
  );
  static readonly AthleticsTrack = new Area(
    "Athletics Track",
    "athletics-track",
    "https://www.york.ac.uk/map/#locid445",
  );
  static readonly CentralHall = new Area(
    "Central Hall",
    "central-hall",
    "https://www.york.ac.uk/map/#locid333",
  );
  static readonly HendrixHall = new Area(
    "Hendrix Hall",
    "hendrix-hall",
    "https://www.york.ac.uk/map/#locidd-l-028",
  );
  static readonly JLD = new Area(
    "JLD",
    "jld",
    "https://www.york.ac.uk/map/#locido-ext-01",
  );
  static readonly SportCentre = new Area(
    "Sport Centre",
    "sport-centre",
    "https://www.york.ac.uk/map/#locid446",
  );
  static readonly SportVillage = new Area(
    "SportVillage",
    "sport-village",
    "https://www.york.ac.uk/map/#locid447",
  );
  static readonly VanbrughDining = new Area(
    "Vanbrugh Dining",
    "vanbrugh-dining",
    "https://www.york.ac.uk/map/#locid319",
  );

  private constructor(
    public readonly name: string,
    public readonly slug: string,
    public readonly campusMapLink: string,
  ) {}

  toString() {
    return this.name;
  }
}
