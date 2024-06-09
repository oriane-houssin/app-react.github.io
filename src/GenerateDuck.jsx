import { useState, useEffect } from "react";


export default function GenerateDuck(){
    let [duck, setDuck] = useState();
    let [message, setMessage] = useState();
    useEffect(() =>{
        fetch(
        "https://random-d.uk/api/v2/random"
        )
        .then((response) => response.json())
        .then((data) =>
            {
            setDuck(data.url);
            setMessage(data.message);
            console.log(data.url);
            });

    }, [])
    var myDuck = "";
    
    
    if(!duck) (
        myDuck=<h2>Quack Quack</h2>
    ) 
    else (
        myDuck=<img src={duck} alt={message} />
    );

    return (
        myDuck
    )
}