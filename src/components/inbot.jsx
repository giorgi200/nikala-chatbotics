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
            axios.get(`http://172.16.1.11:5000/margaritabot/${this.state.botText}`).then(
                res => this.state.goToCloud(res.data)
            ) 

        },

        goToCloud: stext =>
        {
            axios.post(`https://texttospeech.googleapis.com/v1/text:synthesize?key=AIzaSyATHxkQvycIq5UijUvBpx7tyo0OW_zOM44`, {
                input: {text: stext},
                voice: {languageCode: 'en-US', ssmlGender: 'FEMALE'},
                audioConfig: {audioEncoding: 'MP3'}
            }).then(res => {
                let audioContent = res.data.audioContent;
                this.setState({ audioContent })
            })
        }

    }
      

    render() {
        return (
            <div>
               <div className="container text-center">
                    <img src={require('../assets/img/paintings/nikala_38.JPG')} alt="hello" width="30%" className="mb-5" />
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="mb-0">
                                <div className="form-group ch-n-m">
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
                                </div>
                                <button className="btn btn-primary  btn-block" onClick={this.state.chatingBridge} >მიწერე</button>

                                <audio autoPlay src={"data:audio/mp3;base64," + this.state.audioContent}></audio>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bot;
