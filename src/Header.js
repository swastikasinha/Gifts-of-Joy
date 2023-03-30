import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
// import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
// import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  // const handleAuthenticaton = () => {
  //   if (user) {
  //     auth.signOut();
  //   }
  // }

  return (
    <div className="header">
      <Link to="/"> 
        <img
          className="header__logo"
          src="https://cdn.iconscout.com/icon/free/png-256/gift-1020-542634.png"
        />
      </Link>
      <Link to='/'>
        <div className="header__company">
          <span className="header__companyLineOne">Baskets</span>
          <span className="header__companyLineTwo">Of Joy</span>
        </div>
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
      <Link to={!user && '/login'}>
          <div className="header__option">
            <span className="header__optionLineTwo">SignIn/</span>
            <span className="header__optionLineTwo">SignOut</span>
          </div>
        </Link>

         { <Link to="/checkout"> 
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}   
            </span>
          </div>
        </Link> }  
      </div>
    </div>
  );
}

export default Header;