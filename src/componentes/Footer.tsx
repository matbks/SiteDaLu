import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free/css/all.min.css';

type FooterProperties = {
    width: number;
}

export default function App(props: FooterProperties) {
  return (

    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted navbar-fixed-bottom'
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '80px',
        marginBlock: '1%',
        marginLeft: '1%',
        marginRight: '1%',
        borderRadius: '15px',
        border: '2%',
        color: '#fff',
        padding: '2%'
      }}
    >
      <section className='d-flex justify-content-center justify-content-lg-between p-6 '>

        <div className='me-5 d-none d-lg-block' >

          <span
            style={{
              backgroundImage: 'linear-gradient(45deg, #ffbb66 48%, #C850C0 98%)',
              position: 'relative',
              top: '10%'
            }}>

            <h5 style={{ position:'relative', bottom:calcWppHeight(props.width)-5}}>O melhor pudim do mundo!</h5>

          </span>

        </div>
        <div style={{ position:'relative', bottom:calcWppHeight(props.width)}}>
         <a href='https://wa.me/553299174320' className='me-4 text-reset' >
            <MDBIcon fab icon="whatsapp" size="3x" />
          </a>
          </div>
      </section>

    </MDBFooter>
  );

 function calcWppHeight(width:number){

  if (width < 450)
  {
    return -7;
  }

  else if (width < 550) {
    return 1;
  }

  else{
    return 15;
  }
  
}
}