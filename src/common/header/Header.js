import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';

class Header extends Component {
    render() {
        return (
            <div>
                <header className="header-A">
                <img src={logo} className="app-logo" alt="logo" />
                    <div className="login-but">
                        <Button variant="contained" color="default">
                            Login
                        </Button>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;