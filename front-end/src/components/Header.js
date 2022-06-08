import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import GavelIcon from '@mui/icons-material/Gavel';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <Navbar className="inactive">
                <Nav.Link className="social-media-icon" href="https://www.facebook.com/"><FacebookRoundedIcon fontSize="large" /></Nav.Link>
                <Nav.Link className="social-media-icon" href="https://www.instagram.com/"><InstagramIcon fontSize="large" /></Nav.Link>
                <Nav.Link className="social-media-icon" href="https://twitter.com/?lang=en"><TwitterIcon fontSize="large" /></Nav.Link>
                <Nav.Link className="social-media-icon" href="https://www.google.com/"><GoogleIcon fontSize="large" /></Nav.Link>
            </Navbar>

            <div className="app-sign">
                <div className="gavel-icon">
                    <GavelIcon fontSize="large" />
                </div>
                <div className="auction-home">
                <div className="app-name">
                    <h1>AUCTION</h1>
                </div>
                <div className="routers">
                    <div className="home">
                        <Link className="link-decoration" to="/"><h3>HOME</h3></Link>
                    </div>
                </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
