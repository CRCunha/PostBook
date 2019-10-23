import React from 'react'
import "./cardPost.css"

var data = new Date();
var ano = data.getFullYear();
var month = new Array();
month[0] = "Jan";
month[1] = "Fev";
month[2] = "Mar";
month[3] = "Abr";
month[4] = "Maio";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Ago";
month[8] = "Set";
month[9] = "Otu";
month[10] = "Nov";
month[11] = "Dec";
var mes = month[data.getMonth()];
var dia = data.getDay();

const CardPost = (props) => (
    <div className="cardPost">
        <div className="cardHeader">
            <div className="containerC">
                <div className="tag" id={props.tag}>{props.tag}</div>
                <div className="data">{dia + " " + mes + " " + ano}</div>
            </div>
        </div>
    </div>
);

export default CardPost