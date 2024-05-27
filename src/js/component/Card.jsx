import React from "react";
import PropTypes from 'prop-types';

const Card = (props) => {
    return (
        <div className="col d-flex justify-content-center">
            <div className="card h-100" style={{ width: '18rem' }}>
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">{props.title}</h5>
                    <p className="card-text text-center">{props.text}</p>
                </div>
                <div className="card-footer bg-transparent d-flex justify-content-center">
                    <a href="#" class="btn btn-primary">Find out more!</a>
                </div>
            </div>
        </div>

    );
}

Card.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
}

export default Card
