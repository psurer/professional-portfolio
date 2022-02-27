import React, { Component } from 'react';
import MyNavItem from './MyNavItem';
// We'll code MyNavItem.js later for now let's focus on Navbar.js
// “MyNavItem” is the sub-component.
class MyNavBar extends Component() {
        constructor(props)
        {
            super(props);
            this.state={
                'NavItemActive':''
            }
        }
        activeitem=(x)=>
        {
            if(this.state.NavItemActive.length>0){
                document.getElementById(this.state.NavItemActive).classList.remove('active');
            }
            this.setState({'NavItemActive':x},()=>{
                document.getElementById(this.state.NavItemActive).classList.add('active');
            });
        };
        render() {
        return (
            <nav>
            <ul>
            <MyNavItem item="Home" tolink="/" ></MyNavItem>
            <MyNavItem item="About" tolink="/about" ></MyNavItem>
            <MyNavItem item="Portfolio" tolink="/portfolio"></MyNavItem>
            <MyNavItem item="Skills" tolink="/skills"></MyNavItem>
            <MyNavItem item="Contact" tolink="/contact"></MyNavItem>
            </ul>
            </nav>
            );
        }
    }
    
export default MyNavBar;