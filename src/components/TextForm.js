import React, { useState } from "react";

export default function TextForm(props) {
  const [text, settext] = useState("");

  const handleupclick = () => {
    let newone = "";
    for (let i = 0; i < text.length; i++) {
      newone += String.fromCharCode(
        text.charCodeAt(i) > 96 && text.charCodeAt(i) < 123
          ? text.charCodeAt(i) - 32
          : text.charCodeAt(i)
      );
    }
    settext(newone);
    props.showalert("Converted to uppercase", "success");
  };

  const handleloclick = () => {
    let newone = "";
    for (let i = 0; i < text.length; i++) {
      newone += String.fromCharCode(
        text.charCodeAt(i) > 64 && text.charCodeAt(i) < 91
          ? text.charCodeAt(i) + 32
          : text.charCodeAt(i)
      );
    }
    settext(newone);
    props.showalert("Converted to lowercase", "success");
  };

  const handlechange = (event) => {
    settext(event.target.value);
  };

  const handleExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    settext(newtext.join(" "));
    props.showalert("Extra spaces removed", "success");
  };

  const handleClearText = () => {
    settext("");
    props.showalert("Text cleared", "success");
  };

  const handleCopying = () => {
    var test = document.getElementById("mybox");
    test.select();
    test.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(test.value);
    props.showalert("Text copied to clipboard", "success");
  };

  const handleCapitalising = () => {
    let justcheck = text.split("\n");
    for (let i = 0; i < justcheck.length; i++) {
      let newtext = justcheck[i].split(/\s*\.\s*/);
      for (let i = 0; i < newtext.length; i++) {
        newtext[i] = newtext[i].trim();
        if (newtext[i].charCodeAt(0) > 96 && newtext[i].charCodeAt(0) < 123) {
          newtext[i] =
            String.fromCharCode(newtext[i].charCodeAt(0) - 32) +
            newtext[i].slice(1);
        }
      }
      let temp = newtext.join(". ");
      if (
        temp.endsWith(" ") === false &&
        temp.endsWith(",") === false &&
        temp.endsWith("!") === false &&
        temp.endsWith("?") === false
      ) {
        temp += ". ";
      }
      if (temp[0] === ".") {
        temp = temp.slice(2);
      }
      justcheck[i] = temp;
    }
    settext(justcheck.join("\n"));
    props.showalert("Text capitalized", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            value={text}
            onChange={handlechange}
            style={{
              backgroundColor: props.mode === "dark" ? "#142640" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleupclick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-success mx-2 my-1" onClick={handleloclick}>
          Convert to Lowercase
        </button>
        <button
          className="btn btn-warning mx-2 my-1"
          onClick={handleCapitalising}
        >
          Capitalize
        </button>
        <button className="btn btn-info mx-2 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-secondary mx-2 my-1" onClick={handleCopying}>
          Copy Text
        </button>
        <button className="btn btn-danger mx-2 my-1" onClick={handleClearText}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          There are {text.length} characters, {text.split(" ").length - 1} words, and {text.split("\n").length} lines in your text.
        </p>
        <p>{0.008 * (text.split(" ").length - 1)} minutes to read</p>
        <h2>Preview of the text</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
