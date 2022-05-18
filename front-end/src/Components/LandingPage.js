import React from 'react';
import { Nav, Navbar, ListGroup } from 'react-bootstrap';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import './LandingPage.css';

function LandingPage() {
    return (
        <div className="Auction-App">
          <header>
          
          <Navbar className="inactive">
    
        
                <Nav.Link className="social-media-icon" href="https://www.facebook.com/"><FacebookRoundedIcon /></Nav.Link>
                <Nav.Link className="social-media-icon" href="https://www.instagram.com/"><InstagramIcon /></Nav.Link>
                <Nav.Link className="social-media-icon" href="https://twitter.com/?lang=en"><TwitterIcon /></Nav.Link>
                <Nav.Link className="social-media-icon" href="https://www.google.com/"><GoogleIcon /></Nav.Link>
            
          </Navbar>
      
         </header> 
    
         <div className="product-cover">
    
         </div>
        
        <ListGroup  horizontal>  
         <ListGroup.Item>
           New Arrivals
         </ListGroup.Item>
         <ListGroup.Item>
           Last Chance
         </ListGroup.Item>
        </ListGroup>
    
        
    </div>
      
      );
}

export default LandingPage