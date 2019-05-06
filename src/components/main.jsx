import React from 'react';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";




function NestedGrid() {

  return (
    <div>
        <h1 className="in">ფიროსმანის ინტერაქციული ნახატები</h1>  
        <div className="justify-content-around row mx-auto container justify-content-beetween">
            
            <Card className="col-3 p-0">
                <CardMedia className="bot-media" image={ require('../assets/img/paintings/nikala_28.JPG')} />
                <CardHeader className="bot-title" title="მარაგარიტა" />
            </Card>

            <Card className="col-3 p-0">
                <CardMedia className="bot-media" image={ require('../assets/img/paintings/nikala_38.JPG')} />
                <CardHeader className="bot-title" title="მეთევზე" />
            </Card>
            
            <Card className="col-3 p-0">
                <CardMedia className="bot-media" image={ require('../assets/img/paintings/nikala_1.JPG')} />
                <CardHeader className="bot-title" title="გოგონა ბუშტით" />
            </Card>
    
        </div>
    // </div>
  );
}



export default (NestedGrid);
