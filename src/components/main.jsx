import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import axios from 'axios';




export default class Main extends React.Component {
    state = {
        bots: [
            {   
                id: 1,
                name: "მარგარიტა",
                img: 'nikala_'
            },
            {   
                id: 2,
                name: "მარგარიტა",
                img: 'nikala_'
            },
            {   
                id: 3,
                name: "მარგარიტა",
                img: 'nikala_'
            },
            {   
                id: 4,
                name: "მარგარიტა",
                img: 'nikala_'
            },
            {   
                id: 5,
                name: "მარგარიტა",
                img: 'nikala_'
            },
            {   
                id: 6,
                name: "მარგარიტა",
                img: 'nikala_'
            },
            {   
                id: 1,
                name: "მარგარიტა",
                img: 'nikala_'
            },
            {   
                id: 1,
                name: "მარგარიტა",
                img: 'nikala_'
            },
        ]
    }

    render(){
        return (
            <div>
                        <Card >
                            <CardMedia image={require(`../assets/img/paintings/${this.state.bots[0].img + 1}`)} title="Paella dish" />
                            <CardContent>
                                <Typography component="p">
                                    {this.state.bots[0].name}
                                </Typography>
                            </CardContent>
                            <CardActions  disableActionSpacing>
                                <IconButton aria-label="Add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="Share">
                                    <ShareIcon />
                                </IconButton>
                            </CardActions>
                        </Card>

            </div>
        );
    }
}