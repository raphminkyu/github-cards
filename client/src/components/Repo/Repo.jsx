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
    const postClick =(res, id, name)=>{
        
        var repoSearch = "";
        for(var i =0; i<res.repo.length; i++){
            if(res.repo[i].repoID === id){
                repoSearch = res.repo[i]
                repoSearch.count = repoSearch.count+1
                break;
            }
        }
        //contains
        if(repoSearch === ""){
            res.repo.push(
                {
                    repoID:id,
                    repoName: name,
                    count:1
                }
            )
        }
          fetch("http://localhost:9000/clicks",{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                type:"repo",
                content:res
            })
          }).then(
              res=>
              console.log("res" + res)
          )
            .catch(e=>console.log(e))
      }

    const getClick = (id, name)=>{
        fetch("http://localhost:9000/mongo")
        .then(res=>res.json())
        .then(res=>postClick(res, id, name))
        .catch(e=>console.log(e))
    }
  
    const RepoList = ()=>{
      
       if(repos.length !== 0){
        return(
            repos.map((x) => (
                <div key = {x.id}  onClick = {()=>getClick(x.id, x.name)}>
                    <Eachrepo repo = {x} />
                </div>
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