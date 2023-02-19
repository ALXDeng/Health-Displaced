import Navbar from 'react-bootstrap/NavBar';
import headstyle from "./styling/navbar.css"
import myimg from './images/houselogo.jpeg'

function HeadBar(){
        return (
                <nav>
                        <a class="navbar-brand">
                                <img src={myimg} width="30" height="30" class="d-inline-block align-top" alt=""></img>
                                <h2>HealthDisplaced</h2>
                        </a>
                </nav>
        )
}

export default HeadBar;
