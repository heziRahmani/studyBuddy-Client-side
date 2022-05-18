import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
function CodeBlock({ leng, code }) {
  return (
    <CopyBlock
      text={code}
      language={leng}
      showLineNumbers={true}
      theme={dracula}
      codeBlock={true}
      wrapLines={true}
    />
  );
}

export default CodeBlock;
