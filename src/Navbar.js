import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>The Noah Blog </h1>
            <Link className="links" to="/">Home</Link>
            <Link to="/create" style = {{
                color: "white",
                backgroundColor: '#f1356d',
                borderRadius: '8px'
                
            }}>New Blog</Link>
        </div>
     );
}
 
export default Navbar;