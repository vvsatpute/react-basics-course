import React from "react";


const Results = ({playerOne, playerTwo}) => {
    return (
        <div>
            <div className="split">
                <h2>Players</h2>
                <h3>{playerOne}</h3>
                <h3>{playerTwo}</h3>
            </div>
        </div>
    )
}

export default Results;
