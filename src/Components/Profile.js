import React, { useState, useEffect, useRef } from 'react';
import "./Profile.css";
import portrait from '../img/huskies.jpeg';
import user from '../img/user.png';
import edit from '../img/edit.png';
import inbox from '../img/envelope.png';
import settings from '../img/settings.png';
import help from '../img/question.png';
import logout from '../img/log-out.png';

function Profile() {
    const [open, setOpen] = React.useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handler);
        document.title = "NURecs";

        return () => {
            document.removeEventListener("mousedown", handler);
        }
    }, []);

    return (
        <div className='menu-container' ref={menuRef}>
            <div className='menu-trigger' onClick={() => { setOpen(!open) }}>
                <img src={portrait} alt="husky profile"></img>
            </div>

            <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
                <h3>Adrian Tam<br /><span>Freshman Year</span></h3>
                <ul>
                    <DropdownItem img={user} text={"My Profile"} />
                    <DropdownItem img={edit} text={"Edit Profile"} />
                    <DropdownItem img={inbox} text={"Inbox"} />
                    <DropdownItem img={settings} text={"Settings"} />
                    <DropdownItem img={help} text={"Help"} />
                    <DropdownItem img={logout} text={"Logout"} />
                </ul>
            </div>
        </div>
    );
}

function DropdownItem(props) {
    return (
        <li className='dropdownItem'>
            <img src={props.img}></img>
            <a> {props.text} </a>
        </li>
    );
}

export default Profile;