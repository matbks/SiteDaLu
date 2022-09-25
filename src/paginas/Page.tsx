import NavBar from "../componentes/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../componentes/Footer"
import './style.css'
import Video from "./videopudim.mp4"
function Page() {   // Import result is the URL of your image  
    return (
        <div>

            <NavBar />

            <div> 
            <video autoPlay loop muted 
            style={{
                position: "fixed",
                height: "100%",
                width: "100%",
                // left: 0,
                // top: 0, 

                objectFit: "cover",
                // transform: "translate (-50, -50)"
            }} >
            
                <source src={Video} type="video/mp4"/>
                </video>
                         {/* style={{ 
                        //   backgroundImage: "url(/pudim.png)", 
                        //   backgroundRepeat:'no-repeat',
                        //   WebkitBackgroundSize:'auto', 
                        //   backgroundPositionX:'50%',               
                        //   backgroundPositionY:'25%', 
                        //   position:'fixed', 
                        //   height:'100%', 
                        //   width:'100%'}} */}
                 </div>      

            <Footer  />

        </div>
    );
}

export default Page;