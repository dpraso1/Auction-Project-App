import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import './Header.css';

const Header = () => {
    return (
        <header>
            <Navbar className="inactive">
                <Nav.Link className="social-media-icon" href="https://www.facebook.com/"><FacebookRoundedIcon /></Nav.Link>
                <Nav.Link className="social-media-icon" href="https://www.instagram.com/"><InstagramIcon /></Nav.Link>
                <Nav.Link className="social-media-icon" href="https://twitter.com/?lang=en"><TwitterIcon /></Nav.Link>
                <Nav.Link className="social-media-icon" href="https://www.google.com/"><GoogleIcon /></Nav.Link>
            </Navbar>

            <div className="app-name">
                <h1>AUCTION</h1>
            </div>
        </header>
    )
}

export default Header;

