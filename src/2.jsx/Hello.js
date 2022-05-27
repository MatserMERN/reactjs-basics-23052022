import React from "react";

const Hello = () => {
    // return <div className="dvClass" id="dvId">
    //          <h1 className="hOneClass" id="hOneId">Welcome to JSX</h1>
    //        </div>

    return React.createElement('div', 
                                {className:'dvClass', id: 'dvId'}, 
                                React.createElement('h1' , 
                                                    {className: 'hOneClass', id: 'hOneId'}, 
                                                    'Welcome to JSX'))
}

export default Hello