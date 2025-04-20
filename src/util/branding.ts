export class GroupBranding {
  static readonly York = new GroupBranding(
    "York",
    "#fafafa",
    "#000000",
    "#ef4444",
    "#ffffff"
  );
  static readonly Lancs = new GroupBranding(
    "Lancs",
    "#ea3723",
    "#ffffff",
    "#ffffff",
    "#000000"
  );
  static readonly Moorhen = new GroupBranding(
    "Moorhen",
    "#ff9382",
    "#000000",
    "#fcedd1",
    "#000000"
  );
  static readonly David = new GroupBranding(
    "David Rose",
    "#1c4587",
    "#ffffff",
    "#ffffff",
    "#1c4587"
  );

  private constructor(
    private readonly key: string,
    public readonly color: string,
    public readonly textColor: string,
    public readonly buttonColor: string,
    public readonly buttonTextColor: string
  ) {}

  toString() {
    return this.key;
  }

  getBorderColor(color?: string) {
    const inColor = color ?? this.color;
    const tempColor = inColor.substring(1);
    const parts = [
      parseInt(tempColor.substring(0, 2), 16),
      parseInt(tempColor.substring(2, 4), 16),
      parseInt(tempColor.substring(4, 6), 16),
    ];

    const toMultiply = 0.9;
    return `rgb(${Math.floor(parts[0] * toMultiply)},${Math.floor(
      parts[1] * toMultiply
    )},${Math.floor(parts[2] * toMultiply)})`;
  }
}
