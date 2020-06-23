import React, {useEffect, useState} from "react";
import MainProfile from "./components/MainProfile"

import "./App.css";
function App() {

    const [apiResponse, setApiResponse] = useState(0);
    
    useEffect(()=>{
        callAPI();
    })
    const callAPI =(props)=>{
        fetch("http://localhost:9000/testAPI")
        // .then(res=>console.log(res.text()))
            .then(res => res.text())
            .then(res => setApiResponse(res))
            .catch(err => err);
    }

    return (
        <div className="App">
            <MainProfile/>
            <p className="App-intro">{apiResponse}</p>
        </div>
    );

}

export default App;