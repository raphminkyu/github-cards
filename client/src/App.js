import React, {useEffect, useState} from "react";
import MainProfile from "./components/MainProfile"
import Namecard from "./components/Namecard/Namecard"
import Repo from "./components/Repo/Repo"
import "./App.css";





function App() {

    const [repoBool, setRepoBool] = useState(false);
    const [user, setUser]= useState([]);
    const [repos, setRepos]= useState([]);

    useEffect(()=>{
        fetch("http://localhost:9000/repos")
        .then(res=>res.json())
        .then(res=>setRepos(res))

        fetch("http://localhost:9000/testAPI")
        .then(res=>res.json())
        .then(res=>setUser(res))
    }, [])
    return (
        <div className="App">
            <Namecard state = {{repoBool:[repoBool, setRepoBool], user:[user, setUser] }} />
            {repoBool && <Repo state = {{repoBool:[repoBool, setRepoBool],
             repo:[repos, setRepos]
            }}
             />}
        </div>
    );

}

export default App;