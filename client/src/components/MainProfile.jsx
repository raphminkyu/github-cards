import React, { useState } from 'react';
import { Avatar, useRadioGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    main:{
    
        display: "flex",
        flexDirection: "column",
        textAlign:"center",
        width:"200px",
        margin:"0 auto",
        alignItems:"center"
    

    },
    avatar: {
      width: theme.spacing(14),
      height: theme.spacing(14),
      borderRadius: 30,
     padding:0,
     margin:0
    },
    info:{
        display:"flex",
        flexDirection:"row",
    },
    infoItem:{
        display:"flex",
        flexDirection:"column",
        borderStyle:"solid",
        borderWidth:"0.5px",

        width:"66px"
    }
  }));
const MainProfile = () => {

    const classes = useStyles();

    const [user, setUser]= useState([]);

    useEffect(()=>{
        fetch("https://api.github.com/users/raphminkyu")
        .then(res=>res.json())
        
        .then(res=>setUser(res))
        // .then(console.log(user))
        // .then( res=>console.log(res))
        // 
        
       
       
    }, [])
    

    if(!user){
        return (<div></div>)
    }
    return(
            <Paper id = "main" className = {classes.main}>
                    {/* {console.log(gitAPI)} */}
            
                    <Avatar
                    className={classes.avatar}
                    //   style={{alignSelf: 'center'}}
                        src = {user.avatar_url}
                    />
                    <div>
                        {user.name}
                    </div>
                    <div>
                        {user.login}
                    </div>

                    <div id="info" className={classes.info}>
                        <div className={classes.infoItem}>
                            <div>
                                {user.public_repos}
                            </div>
                            <div>
                                Repo
                            </div>
                        </div>
                        <div className = {classes.infoItem}>
                            <div>
                              {user.public_gists}
                            </div>
                            <div>
                                Gist
                            </div>
                        </div>
                        <div className = {classes.infoItem}>
                            <div>
                                {user.followers}
                            </div>
                            <div>
                                Followers
                            </div>
                        </div>
                    </div>
            
        </Paper>
       
         

       
    )
}

export default MainProfile;