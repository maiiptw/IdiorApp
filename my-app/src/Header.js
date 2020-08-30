import React, { Component } from 'react';
import './style/Header.css';
import { NavLink } from 'react-router-dom';
import logo from './img/logo.png';
// import Content from './Content';
// import Footer from './Footer';
// import App from './App';
// import BookList from './BookList'

class Header extends Component {
    render() {
        return (
                        <nav className="navbar navbar-dark bg-dark fixed-top" style={{backgroundColor:"#45474a"}}>
                            <div className="navbar-brand-custom navbar-brand " href="#">
                                <img src={logo} width="50" height="50" className="d-inline-block align-top" alt=""/>
                                <p className='navbar-brand-name'>Idior Book Store</p>
                            </div>
                            <div className="nav nav-pill">
                                <div className="nav-item">
                                    <NavLink exact to="/" className="nav-link" activeClassName="active">หน้าแรก</NavLink>
                                </div>
                                <div className="nav-item">
                                    <NavLink to="/booklist" className="nav-link" activeClassName="active">หนังสือ</NavLink>
                                </div>
                                <div className="nav-item">
                                    <NavLink to="/contact" className="nav-link" activeClassName="active">ติดต่อ</NavLink>
                                </div>                                
                            </div>

                        </nav>
                );
            }
        }
export default Header;