import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, ListGroup } from 'react-bootstrap';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

function App() {
  return (
    <div className="Auction-App">
      <header>
        <div className="icons">
      <Navbar className="inactive">
    
            <Nav.Link href="https://www.facebook.com/"><FacebookRoundedIcon /></Nav.Link>
            <Nav.Link href="https://www.instagram.com/"><InstagramIcon /></Nav.Link>
            <Nav.Link href="https://twitter.com/?lang=en"><TwitterIcon /></Nav.Link>
            <Nav.Link href="https://www.google.com/"><GoogleIcon /></Nav.Link>
        
      </Navbar>
      </div>
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

export default App;
