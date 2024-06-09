import {Link} from "react-router-dom";

export default function Home(){
    return(
        <section className="home-section">
            <h1>Have you ever had the feeling <br />that <br />your life <br />was missing a little something ?</h1>
            <div className="home-bttn">
                <Link to="/duck"><button className="bttn-no">no</button></Link>
                <Link to="/duck"><button className="bttn-yes">YES</button></Link>
            </div>
        </section>
    );
}