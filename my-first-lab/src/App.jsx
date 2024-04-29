import "./index.css";
import "./App.css";
import ironhackLogo from "./assets/ironhack-logo-xs.png";
import menuTop from "./assets/menu-top-xs.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";

function App() {
  return (
    <div className="App">
      <div id="section1">
        <div className="icon-container">
          <img
            className="ironhack-logo"
            src={ironhackLogo}
            alt="ironhack-logo"
          ></img>
          <img className="menuTop" src={menuTop} alt="ironhack-logo"></img>
        </div>

        <div className="written-part">
          <h1 className="title">Say hello to ReactJS</h1>
          <p className="paragraph1">
            {" "}
            You will learn how to use the most popular fronted library, and
            become a super Ninja developer.
          </p>
          <button className="button1">Awesome!</button>
        </div>
      </div>

      <div className="outside-container">
        <div className="inside-4-containers">
          <img
            className="container-image"
            src={icon1}
            alt="ironhack-logo"
          ></img>
          <h2>Declarative</h2>
          <p>React makes it painless to create inteactive UIS.</p>
        </div>
        <div className="inside-4-containers">
          <img
            className="container-image"
            src={icon2}
            alt="ironhack-logo"
          ></img>
          <h2>Components</h2>
          <p>Build encapsulated componentes that manage state.</p>
        </div>
        <div className="inside-4-containers">
          <img
            className="container-image"
            src={icon3}
            alt="ironhack-logo"
          ></img>
          <h2>Single-Way</h2>
          <p>A set of immutable values are to the components's.</p>
        </div>
        <div className="inside-4-containers">
          <img
            className="container-image"
            src={icon4}
            alt="ironhack-logo"
          ></img>
          <h2>JSX</h2>
          <p>Statucally-typed, desined to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
