import logo from "./logo.svg";
import { Routes,Route,BrowserRouter } from "react-router-dom";
//import background from "./Table.jpg";
// import axios from "axios";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Service from "./Components/Service";
import Navigation from "./Components/Navigation";
//import Game from "./Components/Game";
//import Navbar from "./Components/Navbar";
//import TextForm from "./Components/TextForm";
//import Mainbody from "./Components/Mainbody";
import FetchAPI from "./Components/FetchAPI";
//import FetchData from "./Components/FetchData";
//const API = "https://jsonplaceholder.typicode.com"
function App() {

  //const [isError,setIsError] = useState("");

// calling API using Promises@@@@@@@@@
  // useEffect(() => {
  //   axios
  //   .get("https://jsonplaceholder.typicode.com/users")
  //   .then((res) => setData(res.data))
  //   .catch((error) => setIsError(error.message));
  // },[]);
  
// Calling API Using async Await@@@@@@@@@@

// const getApiData = async ()=>{
//   try {
//     const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//     setData(res.data);
    
//   } catch (error) {
//     setIsError(error.message)      
//   }
// }
// useEffect (()=>{
//   getApiData(`${API}/posts`);
// },[])

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// const addPost = async(url)=>{
//   try{const response = await axios.post(url,{
//     title: 'Abhi',
//     body: 'barcode',
//     userId: 11,
//     id: 101,
//   })
//   getApiData()
//   console.log(response.data)}
// catch(error){
//   setIsError(error.message)
// }
// }
// useEffect (()=>{
//   addPost(`${API}/posts`);
// },[])


  //const [myData, setData] = useState([]);

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  // const [mode, setMode] = useState("Light");

  // const toggleMode = ()=>{
  //   if (mode==="Light") {
      
  //     setMode("Dark")
  //   } else {
  //     setMode("Light")
  //   }
 // mode = {mode} toggleMode={setMode} Insert this in navbar tag in App.js for functionality
  // }

  
  return (
    <><BrowserRouter>
      <nav>
        <img src={logo} className="App-logo logo-size" alt="logo" />
        <div className="time">{time.toLocaleTimeString()}</div>
        <div className="nav">
          <div className="links">
            <a
              className="App-link"
              href="https://www.TextPlay.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.TextPlay.com
            </a>
          </div>
        </div>
      </nav>
      <Navigation/>

      {/* <Navbar home = "Home" text="About" about="Maps" contact="Contact Us"  /> */}
      {/* <TextForm heading="This is Textbox that converts Text" /> */}
      
      <Routes>

        <Route path="/" element = {<Home/>}/>
        <Route path="/Components/FetchAPI" element = {<FetchAPI/>}/>
        <Route path="/Components/About" element = {<About/>}/>
        <Route path="/Components/Contact" element = {<Contact/>}/>
        <Route path="/Components/Service" element = {<Service/>}/>
      </Routes>

      {/* <FetchAPI/> */}
      {/* <FetchData/> */}
      {/* <header className="App-header"></header> */}
      {/* <Mainbody/> */}
      
      <footer>
        <a
          className="App-link"
          href="https://www.TextPlay.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.TextPlay.com
        </a>
      </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
