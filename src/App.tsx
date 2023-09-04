import "./App.css";
import { useEffect, useState } from "react";
import Success from "./Success";
const listYes = (
  <img
    className="yesPic"
    src="icon-list.svg"
  />
);

function App() {
  const mobileWidth = 600;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > mobileWidth);
  const [subbed, setSubbed] = useState(false);
  const [email, setEmail] = useState("");

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > mobileWidth);
  };

  const emailCheck = () => {
    // window.alert(123)
    return /\S+@\S+\.\S+/.test(email);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return !subbed ? (
    <div className="main-frame">
      <img
        className="main-pic"
        src={`${
          isDesktop
            ? "/illustration-sign-up-desktop.svg"
            : "/illustration-sign-up-mobile.svg"
        }`}
        alt="top-picture"
      />
      <div className="pictext">
        <h1>Stay Updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className="list">
          <li>{listYes} Product discovery and building what matters</li>
          <li>{listYes} Measuring to ensure updates are a success</li>
          <li>{listYes} And much more!</li>
        </ul>
        <form action="" className="form">
          <div className="labels">
            <label className="label-email">Email adress</label>
            <label className={`label-error ${emailCheck()?'hidden':''}`}>Valid email required</label>
          </div>
          <input
            placeholder="email@company.com"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            // className={`${emailCheck() ? "" : "error"}`}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              emailCheck() ? setSubbed(!subbed) : "";
            }}
            className={`${emailCheck() ? "valid" : ""}`}
          >
            {" "}
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
    </div>
  ) : (
    <Success
      email={email}
      isDesktop={isDesktop}
      setSubbed={setSubbed}
      subbed={subbed}
      setEmail={setEmail}
    />
  );
}

export default App;
