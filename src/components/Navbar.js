import {Link} from 'react-router-dom';

function Navbar({currentUser,updateUser, isDarkMode, onDarkModeClick}){


const handleLogOut=()=>{
    fetch("http://localhost:3000/logout",{method: 'DELETE'})
        updateUser('')
    }




    return(
        <nav>
            <ul>
                <div> Welcome, {currentUser.username}</div>
             {currentUser ? <Link to="/home">Home</Link> : null}
            <li>  <Link to="/">Login</Link></li>    
            <li> <Link to="/Signup">Signup</Link></li>
           <button onClick={handleLogOut}>logout</button>
           <button onClick={onDarkModeClick}>
            {isDarkMode ? "Dark": "Light"}Mode
           </button>
            </ul>
        </nav>
    )

}
export default Navbar;
