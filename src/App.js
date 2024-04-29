import logo from "./logo.svg";
//import background from "./Table.jpg";
// import axios from "axios";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
//import Mainbody from "./Components/Mainbody";
//import FetchAPI from "./Components/FetchAPI";
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
      <Navbar home = "Home" text="About" about="Maps" contact="Contact Us" />
      <TextForm heading="This is Textbox that converts Text" />
      {/* <FetchAPI/> */}
      {/* <FetchData/> */}
      {/* <header className="App-header"></header> */}
      {/* <Mainbody/> */}
      
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
