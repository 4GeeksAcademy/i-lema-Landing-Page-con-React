import React from "react";
import Img from "../../img/500x325.jpg";

const Card = (props) => {
    return (
        <div className="col d-flex justify-content-center">
            <div className="card h-100" style={{ width: '18rem' }}>
                <img src={Img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                </div>
                <div className="card-footer bg-transparent d-flex justify-content-center">
                    <a href="#" class="btn btn-primary">Find out more!</a>
                </div>
            </div>
        </div>

    );
}

export default Card
