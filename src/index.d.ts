import { Encoding, FS, Process, Util } from "./CEPEngine_extensions";
import csinterface from "csinterface";

declare global {
  interface Window {
    cep: {
      fs: FS;
      process: Process;
      util: Util;
      encoding: Encoding;
    };
    cep_node: {
      Buffer: Buffer;
      global: Window;
      process: NodeJS.Process;
      // @ts-ignore
      require: NodeRequireFunction;
      __dirname: string;
      __filename: string;
    };
    __adobe_cep__: csinterface;
    evalScript: csinterface.evalScript;
  }
}
