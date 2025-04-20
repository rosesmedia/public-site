import { GroupBranding } from "./branding";

export interface TOBKit {
  shortName: string;
  branding: GroupBranding;
  wifi?: {
    advertisesRosesMedia?: boolean;
    ssid?: string;
    password?: string;
  };
}

export const obKits: TOBKit[] = [
  {
    shortName: "Y-OB0",
    branding: GroupBranding.York,
    wifi: {
      advertisesRosesMedia: false,
      ssid: "Y-OB0Net",
      password: "HappyGameDay!",
    },
  },
  {
    shortName: "Y-OB1",
    branding: GroupBranding.York,
    wifi: {
      advertisesRosesMedia: false,
      ssid: "Y-OB1Net",
      password: "HappyGameDay!",
    },
  },
  {
    shortName: "Y-OB2",
    branding: GroupBranding.York,
    wifi: {
      advertisesRosesMedia: false,
      ssid: "Y-OB2Net",
      password: "HappyGameDay!",
    },
  },
  {
    shortName: "Y-OB3",
    branding: GroupBranding.York,
  },
  {
    shortName: "Y-OB4",
    branding: GroupBranding.York,
    wifi: {
      advertisesRosesMedia: false,
      ssid: "Y-OB4Net",
      password: "HappyGameDay!",
    },
  },
  {
    shortName: "Y-OB5",
    branding: GroupBranding.York,
    wifi: {
      advertisesRosesMedia: false,
      ssid: "Y-OB5Net",
      password: "HappyGameDay!",
    },
  },
  {
    shortName: "L-OB1",
    branding: GroupBranding.Lancs,
  },
  {
    shortName: "L-OB2",
    branding: GroupBranding.Lancs,
  },
  {
    shortName: "L-OB3",
    branding: GroupBranding.Lancs,
  },
  {
    shortName: "M-OB",
    branding: GroupBranding.Moorhen,
  },
  {
    shortName: "DR-OB",
    branding: GroupBranding.David,
  },
];
