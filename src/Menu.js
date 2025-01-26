import { Link } from "react-router-dom";

export default function Menu(){

    return(
        <div >
            <ul>
                <li><Link to="/setting">parametres</Link></li>
                <li><Link to="/">Home</Link></li></ul>
        </div>
    )
}