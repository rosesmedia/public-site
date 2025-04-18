export class GroupBranding {
  static readonly York = new GroupBranding("York", "#fafafa", "#000");
  static readonly Lancs = new GroupBranding("Lancs", "#ea3723", "#fff");
  static readonly Moorhen = new GroupBranding("Moorhen", "#ff9382", "#000");
  static readonly David = new GroupBranding("David Rose", "#1c4587", "#fff");

  private constructor(
    private readonly key: string,
    public readonly color: string,
    public readonly textColor: string
  ) {}

  toString() {
    return this.key;
  }

  getBorderColor() {
    const tempColor = this.color.substring(1);
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
