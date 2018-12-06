import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';



export default class Home extends Component {
    constructor() {
        super();

        this.state = {
            hotFuss: true
        }
    }
   
    renderFuss = () => {
        if (this.state.hotFuss) {
            return (
                <div className="songlist">
                    1. Jenny Was a Friend of Mine <br/>
                    2. Mr. Brightside <br/>
                    3. Smile Like You Mean It <br/>
                    4. Somebody Told Me <br/>
                    5. All These Things That I've Done <br/>
                    6. Andy, You're a Star <br/>
                    7. On Top <br/>
                    8. Change Your Mind <br/>
                    9. Believe Me Natalie <br/>
                    10. Midnight Show <br/>
                    11. Everything Will Be Alright 

                </div>
                    )
        } else {
            return (
                <div className="hotfuss"> 2004 </div>
            )
        }

    }
    render() {
        return (
            <div className="homePage">
            <h1 className="banner"> The Killers </h1>
                <div className="space"/>
                <Grid container >
                    <Grid item xs={6}>
                        <img className="bandPic" src="https://www.udiscovermusic.com/wp-content/uploads/2017/10/killers-the-55999f90c87f2.jpg" alt="band"/>
                    </Grid>
                    <Grid item xs={6}>
                        <img className="bandPic" src="https://consequenceofsound.files.wordpress.com/2016/11/the-killers-christmas-album-red-bono-charity-2016.png?w=807" alt="band"/>
                    </Grid>
                </Grid>
                <Grid>
                    <Grid item xs={12}>
                        <h1 className="banner">Albums</h1>
                    </Grid>
                </Grid>
                <Grid container >
                    <Grid item xs={6}>
                        <img onMouseEnter={() => {this.setState({hotFuss: true})}} onMouseLeave={() => {this.setState({hotFuss: false})}} className="bandPic" src="https://upload.wikimedia.org/wikipedia/en/1/17/The_Killers_-_Hot_Fuss.png" alt="band"/>
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderFuss()}
                    </Grid>
                </Grid>
            
            </div>
        )
    }
}