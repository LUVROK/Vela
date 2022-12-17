import React from 'react';
import '../App.css';
import '../dropdown.css';

const nav = () => {
    return (
        <nav className='navBar'>
            <div className='Logo_nav'><div className='logoCursor'>VELA</div></div>
            <div className='LinksNavBar'>
                <div className="dropdown div_nav_link">
                    <button type='button' className="dropbtn">FOOD</button>
                    <div className="dropdown-content">
                        <div className='triangle' />
                        <div className="lineBorder"><a href="/#" className='dropdown-content-a-first'>Chef Kim Haugen</a></div>
                        <div className="lineBorder"><a href="/#">Chef Marvin</a></div>
                        <div className="lineBorder"><a href="/#">Amanda Bradley</a></div>
                        <div className="lineBorder"><a href="/#">Dinner Menu</a></div>
                        <div className="lineBorder"><a href="/#" className="lastborder">Private Dining</a></div>
                    </div>
                </div>
                <div className="dropdown div_nav_link">
                    <button type='button' className="dropbtn">BAR</button>
                    <div className="dropdown-content">
                        <div className='triangle' />
                        <div className="lineBorder"><a href="/#" className='dropdown-content-a-first'>ROBIN GOODFELLOW</a></div>
                        <div className="lineBorder"><a href="/#">BAR MENU</a></div>
                        <div className="lineBorder"><a href="/#" className="lastborder">VELA DRY</a></div>
                    </div>
                </div>
                <div className="dropdown div_nav_link">
                    <button type='button' className="dropbtn">GARDEN</button>
                </div>
                <div className="dropdown div_nav_link">
                    <button type='button' className="dropbtn">LIFE</button>
                    <div className="dropdown-content">
                        <div className='triangle' />
                        <div className="lineBorder"><a href="/#" className='dropdown-content-a-first'>EVENTS</a></div>
                        <div className="lineBorder"><a href="/#">WINE CLUB</a></div>
                        <div className="lineBorder"><a href="/#" className="lastborder">BLIND DATE</a></div>
                    </div>
                </div>
                <div className="dropdown div_nav_link">
                    <button type='button' className="dropbtn">SOUND</button>
                    <div className="dropdown-content">
                        <div className='triangle' />
                        <div className="lineBorder"><a href="/#" className='dropdown-content-a-first'>Mic</a></div>
                        <div className="lineBorder"><a href="/#" className="lastborder">radio</a></div>
                    </div>
                </div>
                <div className="dropdown div_nav_link">
                    <button type='button' className="dropbtn">RESERVATIONS</button>
                    <div className="dropdown-content">
                        <div className='triangle' />
                        <div className="lineBorder"><a href="/#" className='dropdown-content-a-first'>PRIVATE DINING</a></div>
                        <div className="lineBorder"><a href="/#" className="lastborder">RESY</a></div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default nav;