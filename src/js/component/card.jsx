import React from "react";

const Card = (props) => {
    return (
        <div className="col-lg-3">
            <div className="card text-center h-100">
                <img
                    src={props.imgUrl}
                    class="card-img-top h-50"
                />
                <div className="card-body">
                    <h5 className="card-title">{props.cardTitle}</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </p>
                    <a href={props.infoUrl} data-mdb-ripple-init target="_blank" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
    );
}

export default Card;