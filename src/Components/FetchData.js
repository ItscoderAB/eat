import React, {  useState } from "react";

export default function FetchData() {
  // const [isError, setIsError] = useState("");
  //const [data, setData] = useState([]);
  const [myData, setData] = useState([]);

  // Fetch data on component mount
  // useEffect(() => {
  //   postData();
  // });

  // Function to fetch data
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     const json = await response.json();
  //     setData(json);
  //     console.log(json)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // Function to post data
  const postData = (res) => {
    try {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: 10, id: 1, title: "Abhi" ,body :"zhi thodfguod sdfosdios"}),
      })
        .then((response) => setData(response.json()))
         .then((data) => res(data))
        .then((data) => console.log(data))
    } catch (error) {
      console.log(error);
    }
  }

  const handleInputChange = (e) => {
    e.preventDefault();
    console.log("Hi")
  };

  return (
  
      <div className="datagrid">
        {/* Render data */}
        {/* Render input form */}
          <label onChange={handleInputChange}  /> 
          <button className = "btn btn-primary my-3 mx-3" onSubmit={postData}>Post</button>
          <label htmlFor="Display">
            {myData} hi
          </label>

      </div>
    
  );
}
