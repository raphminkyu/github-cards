import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from 'react';
import "./Repo.scss"
import {Paper, List, ListItem, Divider, IconButton} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Eachrepo from "./Eachrepo"

const useStyles = makeStyles((theme) => ({
  }));
const Repo = (props) => {

    const classes = useStyles();
    const {repoBool: [repoBool, setRepoBool]} = {repoBool: useState(false), ...(props.state)}
    const repos = props.state.repo[0]

    const renderRepo = ()=>{
        setRepoBool(false)
    }
  
    const RepoList = ()=>{
      
       if(repos.length !== 0){
        return(
            repos.map((x) => (
                <Eachrepo key = {x.id} repo = {x} />
            ))
        )
       }else{
           return(
               <div>
                   nop
               </div>
           )
       }
    }
    
    if(!repos){
        return (<div>
            no
        </div>)
    }
    return(
        <Paper className = "mainRepo" >
            <div className = "top">
                <IconButton onClick = {renderRepo} className = "close">
                    <CloseIcon  />
                </IconButton>
                <div className = "text">
                    {repos.length} Repositories 
                </div>
                <Divider className = "divider"/>
            </div>
            <div className = "repoScroll">
                {<RepoList/>}
            </div>
           
           
          
            
        </Paper>
   
    )
}

export default Repo;