import React, { Component } from "react";
import { CartButton, MenuItems, TopBar } from "../../config/C4";
import logo from "../../assets/img/logo/logo_black.svg";

class Nav extends Component {
  componentDidMount() {
    window.onscroll = () => {
      this.scrollFunction();
    };
  }

  scrollFunction() {
    if (document.getElementById("nav")) {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.getElementById("nav").className = "nav scrolled";
      } else {
        document.getElementById("nav").className = "nav";
      }
    }
  }

  render() {
    const { toggleCartDrawer } = this.props;
    return (
      <nav id="nav" className="nav">
        <TopBar />
        <div className="nav__wrapper">
        <div className="nav__left-side">
          <MenuItems prefix={"nav__"} />
        </div>
        <div className="nav__logo">
          <a href="/">
            <img src={logo} alt="Logo Lit Candles" />
          </a>
        </div>
        <div className="nav__right-side">
          <div className="signIn">
            <p>Sign In</p>
            <span className="material-icons">person_outline</span>
          </div>
          <CartButton toggleCartDrawer={toggleCartDrawer} />
          <div className="btn btn__pink">
            <span className="material-icons">search</span>
            Search
          </div>
        </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
