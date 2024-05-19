import React from "react";

const Jumbotron = () => {
    return (
        <div className="container-fluid">
            <div className="p-5 my-4 bg-light rounded-3">
                <h1 className="display-1">A Warm Welcome!</h1>
                <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
                <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
            </div>
        </div>
    );
}

export default Jumbotron