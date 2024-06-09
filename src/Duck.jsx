import { useState, useEffect } from "react";


export default function Duck(){
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
    
    
    if(!duck) return(
        <section className="duck-section">
            <div className="duck-div">
                <h2>Quack Quack</h2>;
            </div>
            <p>Refresh to get a new duck !</p>
        </section>
    ) 
    else return (
        <section className="duck-section">
            <div className="duck-div">
                <img src={duck} alt={message} />
            </div>
            <p>Refresh to get a new duck !</p>
        </section>
    );
}