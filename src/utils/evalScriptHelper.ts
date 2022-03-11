function evalScriptHelper(jsxCode: string) {
  return new Promise<any>((resolve, reject) => {
    if (typeof window.__adobe_cep__ == undefined) {
      return "浏览器模式";
    }
    window.__adobe_cep__.evalScript(jsxCode, (returnValue: string) => {
      if (returnValue && returnValue.slice(0, 17) === "EvalScript error.") {
        console.error(jsxCode, returnValue);
        reject();
      } else {
        if (returnValue === "null") {
          reject();
        }
        if (returnValue === "true") {
          reject(true);
        }
        if (returnValue === "false") {
          reject(false);
        }
        if (!isNaN(Number(returnValue))) {
          resolve(Number(returnValue));
        }

        resolve(returnValue);
      }
    });
  });
}

export default evalScriptHelper;
