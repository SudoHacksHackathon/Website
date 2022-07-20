import UAParser from "ua-parser-js";

interface OSData {
  OS: string;
  commandStart: string;
  commands: {
    print: string;
    execute: string;
  };
}

let cachedOSData: null | OSData = null;

const getOSData = () => {
  if (!cachedOSData) {
    const parsed = UAParser(navigator.userAgent);
    const os = parsed.os.name || "Unknown OS";

    cachedOSData = {
      OS: os,
      commandStart: os.includes("Windows")
        ? ">"
        : os.includes("Linux")
        ? "#"
        : "$",
      commands: {
        print: os.includes("Windows") ? "type" : "cat",
        execute: os.includes("Windows") ? "bash" : "sudo",
      },
    };
  }

  return cachedOSData;
};

export default getOSData;
