// import NavBar from "../componentes/NavBar"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from "../componentes/Footer"
// import './style.css'
// import Video from "./videopudim.mp4"
import React from "react"
import DesktopPage from "../paginas/DesktopPage"
import MobilePageLittle from "./MobilePage1"
import MobilePageLittle2 from "./MobilePage2"
import NavBar from "../componentes/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../componentes/Footer"




export function Page() {

    const [width, setWidth] = React.useState(window.innerWidth);
        const little = 415;
        const little2 = 650; 

    let Video;

    if(width < little)
     Video = <MobilePageLittle />;

    else if(width < little2 )
    Video = <MobilePageLittle2 />;

    else if(width > little2 )
    Video = <DesktopPage />;

    return (
        <div>
            <div>
            <NavBar/>
            </div>
            { Video }
            <Footer/>
        </div>
        )}

// function Page() {   // Import result is the URL of your image  
   
//     const [width, setWidth] = React.useState(window.innerWidth);
//     const little = 415;
//     const little2 = 650;
//     const medium = 1200;
//     // return <h1>teste</h1>

//     if(width < little)
//      return  <MobilePageLittle />;

//     else if(width < little2 )
//      return <MobilePageLittle2 />;

//     else if(width > little2 )
//      return <DesktopPage />;
// }

export default Page;