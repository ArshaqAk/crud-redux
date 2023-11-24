import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  
function Header() {
  return (
    <div>
       <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img className='ms-3' width={'45px'} height={'50px'}
              src='https://www.pinclipart.com/picdir/big/487-4877720_user-svg-icon-free-transparent-background-registered-user.png'
        
              alt=''
              loading='lazy'
            />
            
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
 
    </div>
  )
}

export default Header