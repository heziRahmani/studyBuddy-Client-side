import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
function CodeBlock({ leng, code }) {
  // let code1 = code.split(/" "\b/g);
  // console.table(code1);
  return (
    <CopyBlock
      text={code}
      language={leng}
      showLineNumbers={true}
      theme={dracula}
      // codeBlock={true}
      // wrapLines={true}
    />
  );
}

export default CodeBlock;
