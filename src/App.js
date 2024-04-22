import logo from "./logo.svg";
//import background from "./Table.jpg";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {

      setData(res.data);
    }
    );
  },[]);
  

  const [myData, setData] = useState([]);

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);
  return (
    <>
      <nav>
        <img src={logo} className="App-logo logo-size" alt="logo" />
        <div className="time">{time.toLocaleTimeString()}</div>
        <div className="nav">
          <div className="links">
            <a
              className="App-link"
              href="https://www.Eat.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.Eat.com
            </a>
          </div>
        </div>
      </nav>
      <Navbar text="About" about="Maps" home="Contact Us" />
      <TextForm heading="This is Textbox that converts Text" />
      {/* <header className="App-header"></header> */}
      <div className="contain">
        <h4 className="mx-3">Find Your Table</h4>
        <h2 className="mx-3">
          Reserve With ---
          <span>
            <b>
              <i> Eat</i>
            </b>{" "}
          </span>
        </h2>
        <button className="button">Click Me</button>
        <p>
          You Have No Business Connected to this Account.{" "}
          <a href="/">Click Me to Connect</a>
        </p>
      </div>
      <div className="containerapi">
        <div><h1>Axios</h1></div>
        <div className="datagrid">{myData.map((post)=>{
          const{id,name,email,phone} = post;
          return <div className="card" key = {id}>
            <h6>{name}</h6>
            <span className = "email">{email}</span>
            <span>{phone}</span>
          </div>
        }
      )}
      </div>
      </div>
      <footer>
        <a
          className="App-link"
          href="https://www.Eat.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.Eat.com
        </a>
      </footer>
    </>
  );
}

export default App;
