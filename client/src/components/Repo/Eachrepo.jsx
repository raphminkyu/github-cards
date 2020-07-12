import React from "react"
import {Paper, List, ListItem, ListItemIcon, IconButton} from '@material-ui/core';
import "./Eachrepo.scss"
import CodeIcon from '@material-ui/icons/Code';

const Eachrepo = (props)=>{
    return(
        <Paper className = "repo">
            <div className = "fields">
                <div className = "title overflow">
                    <a href = {props.repo.html_url} target="_blank">
                        {props.repo.name}
                    </a>
                </div>
                <div className = "description overflow">
                    {props.repo.description} 
                </div>
                <div className = "tag overflow">
                    <CodeIcon className = "icon"/>
                    {props.repo.language}
                </div>
            </div>
            
        </Paper>
       
    )
}

export default Eachrepo;