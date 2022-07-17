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
  // TODO: what the HELL IS THIS CODE ROHAN PLEASE
  if (!cachedOSData) {
    let os: null | string = null;
    let commandStart: null | string = null;
    let printCommand: null | string = null;
    let executeCommand: null | string = null;

    if (navigator.userAgent.indexOf("Win") != -1) {
      os = "Windows";
      commandStart = ">";
      printCommand = "type";
      executeCommand = "bash";
    } else {
      printCommand = "cat";
      executeCommand = "sudo";

      if (navigator.userAgent.indexOf("Mac") != -1) {
        os = "Macintosh";
        commandStart = "$";
      } else if (navigator.userAgent.indexOf("Linux") != -1) {
        os = "Linux OS";
        commandStart = "#";
      } else {
        os = "Unknown OS";
        commandStart = "$";
      }
    }

    cachedOSData = {
      OS: os,
      commandStart,
      commands: {
        print: printCommand,
        execute: executeCommand,
      },
    };
  }

  return cachedOSData;
};

export default getOSData;
