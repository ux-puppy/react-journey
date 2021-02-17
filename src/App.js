import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [val, setval] = useState(0);

  return (
    <div className="App">
      <div
        style={{
          backgroundColor: "#09335E",
          display: "flex",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <label
            style={{
              color: "White",
              display: "flex",
              fontFamily: "monospace",
              fontSize: "30px",
              margin: "10px",
            }}
          >
            {/* UX PUPPY */}
          </label>
          <input
            value={val}
            onChange={(event) => {
              setval(() => event.target.value);
            }}
            style={{ ...input_style }}
          />
          <input style={input_style} />
          <button
            onClick={() => setval((val) => val * 2)}
            style={{
              color: "#D7DEE5",
              margin: "10px",
              display: "flex",
              fontSize: "20px",
              padding: "10px",
              width: "107%",
              borderRadius: "4px",
              outlineStyle: "none",
              border: "none",
              flexDirection: "column",
              flexGrow: true,
              boxShadow: "0px 8px 10px -7px #072C51",
              alignItems: "right",
              justifyContent: "center",
              backgroundColor: "#244970",
            }}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}

const input_style = {
  color: "#A1AFBD",
  margin: "5px",
  display: "flex",
  fontSize: "20px",
  backgroundColor: "#00274E",
  padding: "5px",
  borderRadius: "4px",
  width: "100%",
  borderStyle: "none",
  textcolor: "white",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  outlineStyle: "none",
  padding: "10px",
};

export default App;
