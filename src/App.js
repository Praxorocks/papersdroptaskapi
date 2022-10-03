import './App.css';
import axios from "axios";
import {useState} from "react"

function App() {

  const [apiResponse, setApiResponse]= useState({})

  const apiCall=()=>{
    axios.request({
      method:'GET',
      url: 'https://jsonplaceholder.typicode.com/todos/1'
    }).then(res=>{setApiResponse(res.data)

    })
  }
  var call=apiCall();
  var str= JSON.stringify(apiResponse);
  var str=str.split(',');
  return (
    <div className="App">
      <h1>To Do List</h1>
      <ul>
        <li>{str[0].substring(1)}</li><input type="checkbox"></input>
        <li>{str[1]}</li><input type="checkbox"></input>
        <li>{str[2]}</li><input type="checkbox"></input>
        <li>{str[3]}</li><input type="checkbox"></input>
      </ul>
    </div>
  );
}

export default App;
