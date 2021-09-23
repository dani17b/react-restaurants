import "./header.css";
import { connect } from 'react-redux';
import { logout } from "../../modules/login/actions";
import {
    Link
  } from "react-router-dom";

const Header = (props) => {
    const {
        userInfo
    } = props;

    return (
        <div className="header">
            <span className="logo"></span>
            <div className="user">{`${userInfo.name} (${userInfo.rol})`}</div>
            <div className="menu">
                <Link to="/">
                    <div className="menu-item">
                        <span className="icon"></span>
                        <span className="title">Inicio</span>
                    </div>
                </Link>
                <Link to="/management">
                    <div className="menu-item">
                        <span className="icon"></span>
                        <span className="title">Gestion</span>
                    </div>
                </Link>
                <div className="menu-item" onClick={() => props.logout()}>
                    <span className="icon"></span>
                    <span className="title">Logout</span>
                </div>
            </div>
        </div>
    )
}

export default connect(
    // Que quiero mapear del estado como props¿?
    // - props.userInfo (Sera leido del estado de redux store.login.userInfo)
    // - props.isLoadingRestaurants (store.restaurtsList.loading)
    store => ({
        userInfo: store.login.userInfo,
        isLoadingRestaurants : store.restaurantsList.loading
    }),

    // Que quiero lanzar como accion ¿?
    // - props.reduxLogout = dispatch(reduxLogout)
    dispatch => ({
        logout : () => dispatch(logout())
    })
)(Header);