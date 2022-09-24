import NavBar from "../componentes/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../componentes/Footer"
import './style.css' 

function Page() {   // Import result is the URL of your image  
    return (
        <div>

            <NavBar />

            <div style={{ 
                        //   backgroundImage: "url(/pudim.png)", 
                        //   backgroundRepeat:'no-repeat',
                          WebkitBackgroundSize:'auto', 
                          backgroundPositionX:'50%',               
                          backgroundPositionY:'25%', 
                          position:'fixed', 
                          height:'100%', 
                          width:'100%'}}/>      

            <Footer  />

        </div>
    );
}

export default Page;