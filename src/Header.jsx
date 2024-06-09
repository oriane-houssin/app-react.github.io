import { NavLink } from "react-router-dom";
import duckLeftLogo from "./assets/img/duck-black-left.png";
import duckRightLogo from "./assets/img/duck-black-right.png";

export default function Header(){
    return(
        <header>
            <img src={duckLeftLogo} className="logo" alt="lil duck" />
            <NavLink to="/" className="header-nav"><h1>Hello</h1></NavLink>
            <img src={duckRightLogo} className="logo" alt="lil duck" />
        </header>
    );
}