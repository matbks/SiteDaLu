import React from 'react';
import NavBarDesktop from "../componentes/NavBarDesktop"
import NavBarMobile from "../componentes/NavBarMobile"

function NavBar() {
  const [width, setWidth] = React.useState(window.innerWidth); 

  if (width < 450) {
    return <NavBarMobile />;
  }

  else if (width < 650) {
    return <NavBarMobile />;
  }

  else {
    return <NavBarDesktop />;
  }
}

export default NavBar;