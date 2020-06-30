import React, { useState } from 'react';
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {Paper, List, ListItem, ListItemIcon, Box} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useEffect } from 'react';


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
const Namecard = () => {

    const classes = useStyles();

    const [user, setUser]= useState([]);

    useEffect(()=>{
        fetch("http://localhost:9000/testAPI")
        .then(res=>res.json())
        .then(res=>setUser(res))
        .then(res=>console.log(res))
    }, [])
    
    if(!user){
        return (<div></div>)
    }
    return(
        <Paper className = "main" >
            <div className=  "overlapBlock"></div>
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
                        <ListItem button className = "listItem">                
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

                {/* <List>
                    <ListItem button>
                        <ListItemIcon>
                            <GitHubIcon/>
                        </ListItemIcon>
                        Repo
                    </ListItem>
                    <ListItem button>
                        Gist
                    </ListItem>
                    <ListItem button>
                        Followers
                    </ListItem>
                    <ListItem button>
                        Link
                    </ListItem>
                    <ListItem button>
                        email
                    </ListItem>
                </List> */}
            </div>
            {/* <div className = "lastlast in1">

            </div> */}
        </Paper>
       
         

       
    )
}

export default Namecard;