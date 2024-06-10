// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe () {
    function handlefocus() {
        console.log('Good!');
    }
    function handleblur() {
        console.log('Hey! Eyes on me!');
    }
    return(
        <button onFocus={handlefocus} onBlur={handleblur}>
            Eyes on me</button>
    )
}

export default EyesOnMe