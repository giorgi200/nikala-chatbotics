import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';



class Bot extends Component {
    state = {
        botText: "",
        audioContent:"",
        handleChange: event => {
            let botText = this.state.botText;
            botText = event.target.value;
            this.setState({ botText });
        },
        chatingBridge: () => {
            axios.get(`http://192.168.0.140:5000/margaritabot/${this.state.botText}`).then(
                res => this.state.goToCloud(res.data)
            ) 

        },

        goToCloud: stext =>
        {
            axios.post(`https://texttospeech.googleapis.com/v1/text:synthesize?key=AIzaSyATHxkQvycIq5UijUvBpx7tyo0OW_zOM44`, {
                input: {text: stext},
                voice: {
                    languageCode: "pl-PL",
                    name: "pl-PL-Wavenet-B", 
                    ssmlGender: 'MALE'
                },
                audioConfig: {audioEncoding: 'MP3'}
            }).then(res => {
                let audioContent = res.data.audioContent;
                this.setState({ audioContent })
            })
        }

    }
      
    

    render() {
        return (
            <div className="bot-section">
               <div className="bot-gallery">
                    <img src={require('../assets/img/paintings/nikala_38.JPG')}  className="mb-5 bot-border" />
                    <TextField
                        className="filled-uncontrolled"
                        label="შეეკითხეთ"
                        fullWidth
                        multiline
                        onChange={this.state.handleChange}
                        value={this.state.botText}
                        margin="normal"
                        variant="filled"
                    />
                    <button className="btn btn-primary bot-wd btn-block" onClick={this.state.chatingBridge} >მიწერე</button>
                </div>
                <audio autoPlay src={"data:audio/mp3;base64," + this.state.audioContent}></audio>
            </div>
                    
        );
    }
}

export default Bot;
