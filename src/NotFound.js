import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>sorry
                <p>That page cannot be found</p>
                <Link to='/'>Back to the homepage</Link>
            </h2>
        </div>

     );
}
 
export default NotFound;