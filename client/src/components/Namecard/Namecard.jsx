import React, { useState } from 'react';
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {Paper, List, ListItem, ListItemIcon} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useEffect } from 'react';

import Repo from "../Repo/Repo"

import "./Namecard.scss"

const useStyles = makeStyles((theme) => ({
   
    avatar: {
        // width: theme.spacing(14),
        // height: theme.spacing(14),
        // borderRadius: 10,
        height:"125px",
        width:"125px",
        marginBottom:"4px",
    },
    horList:{
        // borderRadius: "10%",
    }
  }));

  const postClick =(res)=>{

    res.gitCount =  res.gitCount+1

      fetch("http://localhost:9000/clicks",{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            type:"github",
            content:res
        })
      }).then(
          res=>
          console.log("res" + res)
      )
        .catch(e=>console.log(e))
  }
  const getClick =()=>{
    fetch("http://localhost:9000/mongo")
      .then(res=>res.json())
      .then(res=>postClick(res))
      .catch(e=>console.log(e))
}
const Namecard = (props) => {

    const classes = useStyles();
    // const [user, setUser]= useState([]);
    const {user: [user, setUser]} = {user: useState(false), ...(props.state||{})}
    const {repoBool: [repoBool, setRepoBool]} = {repoBool: useState(false), ...(props.state||{})}
    
    const renderRepo = ()=>{
        setRepoBool(true)
        
    }
    if(!user){
        console.log(user)
        return (<div>nop</div>)
    }
    return(
        <div>
        <Paper className = "main" >
            <div className=  "overlapBlock">
                <a className = "gitIcon" href = {user.html_url} onClick = {getClick} target="_blank">        
                    <GitHubIcon style = {{color:"white"}} />           
                </a>
            </div>
            <div className = "profile in1">
                
                <div className = "in2">
                    <Avatar
                        classes ={{root: classes.avatar}}
                        src = {user.avatar_url}
                        />
                    <span className = "name text"> {user.name}</span>
                    <span className = "username text">  @{user.login}</span>
                    <div className = "bio text"> {user.bio}</div>
                </div>
            </div>

            <div className = "contactInfo in1" >

                <Paper elevation = {5} >             
                    <List 
                    classes ={{root: classes.horList}}
                     className = "list">
                        <ListItem button className = "listItem" onClick = {renderRepo}>                
                            <div className = "fieldNum">{user.public_repos}</div>
                            <div className = "fieldName">Repo</div>
                        </ListItem>
                        <ListItem button className = "listItem">
                            <div className = "fieldNum">{user.public_gists}</div>
                            <div className = "fieldName">Gist</div>
                        </ListItem>
                        <ListItem button className = "listItem">
                            <div className = "fieldNum">{user.followers}</div>
                            <div className = "fieldName">Followers</div>
                        </ListItem> 
                    </List>
                 
                </Paper>

            </div>

        </Paper>
        </div>
       
         

       
    )
}

export default Namecard;