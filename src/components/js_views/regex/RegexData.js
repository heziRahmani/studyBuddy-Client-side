import React from "react";

export default function RegexData() {
  return (
    <div className='regxData_container'>
      <div className='regxData_explantion'>
        <p>
          <span>Regular expressions</span> are the patterns, providing a robust
          means of searching and replacing in the text.
        </p>
      </div>
      <div>
        <p>
          <span>Regular expression</span> as two syntaxes
        </p>
        <br />
        <p>
          <span>Long syntax:</span>used often when it is necessary to generate a
          regexp “on the fly” from a dynamically created string. syntax:new
          RegExp("pattern", "flags");
        </p>
        <br />
        <br />
        <p>
          <span>Short syntax:</span>uses slashes "/" and applied in case one
          knows the regular expression at the code writing time.
          <br />
          syntax (no flags): regexp = /pattern/;
          <br /> syntax (with flags g,m and i): /pattern/gmi;
        </p>
      </div>
      <div>
        <p>
          In both of the cases, regexp becomes the built-in RegExp class
          instance. The difference between the two syntaxes above is that
          pattern applying slashes, never allows the expressions to be inserted.
          They are static.
        </p>
      </div>
      <div>
        <p>
          <span>Regular expressions</span> can be integrated with string
          methods.
        </p>
        <p>Heare a few Exsenples:</p>
        <div className='regexExce_box'>
          <div className='regexExce_box_header'>
            <h5>str.match(/regexp/)</h5>
            <p>used to find whatever you put between the slashes</p>
          </div>
          <div className='regexExce_box_header'>
            <h5>str.replace(regexp, replacement)</h5>
            <p>used to replace whatever you put between the slashes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
