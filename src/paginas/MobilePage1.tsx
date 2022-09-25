
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../componentes/Footer"
import './style.css'
import Video from "./videopudim.mp4"
import * as React from "react"
import NavBar from "../componentes/NavBar"

export function MobilePage1() {
    return (
       
            <video  autoPlay 
                    loop 
                    muted 
                    width="415px" 
                    height="850px"
                    style={{  position: "fixed",
                              objectFit: "cover" }} 
                >

                <source src={Video} type="video/mp4" />
            </video>
           
    );
}

export default MobilePage1;