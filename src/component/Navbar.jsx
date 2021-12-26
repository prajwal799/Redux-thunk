import {Link} from "react-router-dom"
import "./module.css"
const Navbar = () => {
    return(
        <div className="navbar">
            <div>
            <Link to="/github">Github</Link>
            <Link to="/">registration</Link>
           <Link to="/login">Login</Link>
            </div>
        </div>
    )
}
export default Navbar;