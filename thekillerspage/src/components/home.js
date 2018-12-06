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
            hotFuss: false,
            sam: false,
            day: false,
            battle: false
        }
    }
   
    renderFuss = () => {
        if (this.state.hotFuss) {
            return (
                <div className="songlist">
                    <br/>
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

    renderSam = () => {
        if (this.state.sam) {
            return (
                <div className="songLeft">
                    <br/>
                    1. Sam's Town <br/>
                    2. Enterlude <br/>
                    3. When You Were Young <br/>
                    4. Bling (Confession of a King) <br/>
                    5. For Reasons Unknown <br/>
                    6. Read My Mind <br/>
                    7. Uncle Jonny <br/>
                    8. Bones <br/>
                    9. My List <br/>
                    10. This River Is Wild <br/>
                    11. Why Do I Keep Counting? <br/>
                    12. Exitlude
                </div>
                    )
        } else {
            return (
                <div className="hotfuss"> 2006 </div>
            )
        }

    }

    renderDay = () => {
        if (this.state.day) {
            return (
                <div className="songlist">
                    <br/>
                    1. Losing Touch <br/>
                    2. Human <br/>
                    3. Spaceman <br/>
                    4. Joy Ride <br/>
                    5. A Dustland Fairytale <br/>
                    6. This Is Your Life <br/>
                    7. I Can't Stay <br/>
                    8. Neon Tiger <br/>
                    9. The World We Live In <br/>
                    10. Goodnight, Travel Well <br/>
                </div>
                    )
        } else {
            return (
                <div className="hotfuss"> 2008 </div>
            )
        }

    }

    renderWond = () => {
        if (this.state.wond) {
            return (
                <div className="songlist">
                    <br/>
                    1. Wonderful Wonderful <br/>
                    2. The Man <br/>
                    3. Rut <br/>
                    4. Life to Come <br/>
                    5. Run For Cover <br/>
                    6. Tyson vs. Douglas <br/>
                    7. Some kind of Love <br/>
                    8. Out of My Mind <br/>
                    9. The Calling <br/>
                    10. Have All the Songs Been Written? <br/>
                </div>
                    )
        } else {
            return (
                <div className="hotfuss"> 2017 </div>
            )
        }

    }

    renderBattle = () => {
        if (this.state.battle) {
            return (
                <div className="songLeft">
                    <br/>
                    1. Flesh and Bone <br/>
                    2. Runaways <br/>
                    3. The Way It Was <br/>
                    4. Here with Me <br/>
                    5. A Matter of Time <br/>
                    6. Deadlines and Commitments <br/>
                    7. Miss Atomic Bomb <br/>
                    8. The Rising Tide <br/>
                    9. Heart of a Girl <br/>
                    10. From Here on Out <br/>
                    11. Be Still <br/>
                    12. Battle Born
                </div>
                    )
        } else {
            return (
                <div className="hotfuss"> 2012 </div>
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
                        <img className="album" onMouseEnter={() => {this.setState({hotFuss: true})}} onMouseLeave={() => {this.setState({hotFuss: false})}} className="bandPic" src="https://upload.wikimedia.org/wikipedia/en/1/17/The_Killers_-_Hot_Fuss.png" alt="band"/>
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderFuss()}
                    </Grid>
                </Grid>
                <Grid container >
                    <Grid item xs={6}>
                        {this.renderSam()}
                    </Grid>
                    <Grid item xs={6}>
                        <img className="album" onMouseEnter={() => {this.setState({sam: true})}} onMouseLeave={() => {this.setState({sam: false})}} className="bandPic" src="https://images-na.ssl-images-amazon.com/images/I/61eg4Ckp3iL._SY355_.jpg" alt="band"/>
                    </Grid>
                </Grid>
                <Grid container >
                    <Grid item xs={6}>
                        <img className="album" onMouseEnter={() => {this.setState({day: true})}} onMouseLeave={() => {this.setState({day: false})}} className="bandPic" src="https://images-na.ssl-images-amazon.com/images/I/61dzJtq69ZL.jpg" alt="band"/>
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderDay()}
                    </Grid>
                </Grid>
                <Grid container >
                    <Grid item xs={6}>
                        {this.renderBattle()}
                    </Grid>
                    <Grid item xs={6}>
                        <img className="album" onMouseEnter={() => {this.setState({battle: true})}} onMouseLeave={() => {this.setState({battle: false})}} className="bandPic" src="https://upload.wikimedia.org/wikipedia/en/thumb/2/22/The_Killers_-_Battle_Born.png/220px-The_Killers_-_Battle_Born.png" alt="band"/>
                    </Grid>
                </Grid>
                <Grid container >
                    <Grid item xs={6}>
                        <img className="album" onMouseEnter={() => {this.setState({wond: true})}} onMouseLeave={() => {this.setState({wond: false})}} className="bandPic" src="https://snworksceo.imgix.net/rce/89dcdf09-b1a2-4ccc-ba21-7c47eeed86cf.sized-1000x1000.jpg" alt="band"/>
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderWond()}
                    </Grid>
                </Grid>
            
            </div>
        )
    }
}