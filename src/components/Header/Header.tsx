import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Header.module.css'
import { mapStateToPropsType } from "./HeaderContainer";
import {dataType} from "../../redux/authReducer";

type headerPropsType= mapStateToPropsType&dataType


const Header = (props: headerPropsType) => {
    return <header>
        <img src={'https://img.freepik.com/free-psd/logo-mockup-in-white-paper_1816-82.jpg?size=626&ext=jpg'}/>
        <div className={classes.loginBlolck}>
            {props.isAuth
                ? props.login
            : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;