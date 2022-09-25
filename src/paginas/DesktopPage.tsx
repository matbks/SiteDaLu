import NavBar from "../componentes/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../componentes/Footer"
import './style.css'
import Video from "./videopudim.mp4"

function DesktopPage() {   // Import result is the URL of your image  
    return (
       
            <video autoPlay loop muted width="100%" height="100%"
                style={{ position: "fixed", 
                         objectFit: "cover"  }}
            >
                <source src={Video} type="video/mp4" />
            </video>

    );
}
export default DesktopPage;