import { GroupBranding } from "./branding";

export interface TOBKit {
  shortName: string;
  branding: GroupBranding;
  wifi?: {
    advertisesRosesMedia?: boolean;
    ssid?: string;
    password?: string;
  };
  graphics?: {
    uptimeKumaMonitorID?: number;
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
    graphics: {
      uptimeKumaMonitorID: 58,
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
    graphics: {
      uptimeKumaMonitorID: 59,
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
    graphics: {
      uptimeKumaMonitorID: 60,
    },
  },
  {
    shortName: "Y-OB3",
    branding: GroupBranding.York,
    graphics: {
      uptimeKumaMonitorID: 61,
    },
  },
  {
    shortName: "Y-OB4",
    branding: GroupBranding.York,
    wifi: {
      advertisesRosesMedia: false,
      ssid: "Y-OB4Net",
      password: "HappyGameDay!",
    },
    graphics: {
      uptimeKumaMonitorID: 62,
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
    graphics: {
      uptimeKumaMonitorID: 63,
    },
  },
  {
    shortName: "L-OB1",
    branding: GroupBranding.Lancs,
    graphics: {
      uptimeKumaMonitorID: 64,
    },
  },
  {
    shortName: "L-OB2",
    branding: GroupBranding.Lancs,
    graphics: {
      uptimeKumaMonitorID: 65,
    },
  },
  {
    shortName: "L-OB3",
    branding: GroupBranding.Lancs,
    graphics: {
      uptimeKumaMonitorID: 66,
    },
  },
  {
    shortName: "AL-OB",
    branding: GroupBranding.Untitled,
  },
  {
    shortName: "M-OB",
    branding: GroupBranding.Moorhen,
    graphics: {
      uptimeKumaMonitorID: 68,
    },
  },
  {
    shortName: "DR-OB",
    branding: GroupBranding.David,
    graphics: {
      uptimeKumaMonitorID: 69,
    },
  },
];
