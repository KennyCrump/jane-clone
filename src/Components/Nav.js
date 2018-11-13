import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const NavButton = styled.button`
    height: 25px;
    border: none;
    margin: 10px;
    font-size: 16px;
    outline: none;
    &:hover {
        color: ${() => `#ff0099`};
        border-bottom: 3px solid gray;
        outline: none;
    }
    &:focus { 
        color: #FF8188;
        border-bottom: 3px solid #FF8188;
    }
`

class Nav extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div>
                    <NavLink to='/women'><NavButton color={`aqua`}>Women</NavButton></NavLink>
                    <NavLink to='/men'><NavButton>Men</NavButton></NavLink>
                    <NavLink to='/shoes'><NavButton>Shoes</NavButton></NavLink>
                    <NavLink to='/accessories'><NavButton>Accessories</NavButton></NavLink>
                    <NavLink to='/beauty'><NavButton>Beauty & Wellness</NavButton></NavLink>
                    <NavLink to='/maternity'><NavButton>Maternity</NavButton></NavLink>
                    <NavLink to='/baby'><NavButton>Baby</NavButton></NavLink>
                    <NavLink to='/kids'><NavButton>Kids</NavButton></NavLink>
                    <NavLink to='/toys'><NavButton>Toys</NavButton></NavLink>
                    <NavLink to='/home'><NavButton>Home</NavButton></NavLink>
                    <NavLink to='/pets'><NavButton>Pets</NavButton></NavLink>
                    <NavLink to='/funfinds'><NavButton>Fun Finds</NavButton></NavLink>
                    <NavLink to='/new'><NavButton>New</NavButton></NavLink>
                    <NavLink to='/endingsoon'><NavButton>Ending Soon</NavButton></NavLink>
                    <NavLink to='/popular'><NavButton>Popular</NavButton></NavLink>
                </div>
            </div>
        )
    }
}

export default Nav

