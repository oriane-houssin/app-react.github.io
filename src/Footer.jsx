import { NavLink } from "react-router-dom";

export default function Footer(){
    return(
        <footer>
            <h1>Goodbye</h1>
            <NavLink to="/contact" className="footer-nav">Contact</NavLink>
        </footer>
    );
}