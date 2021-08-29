import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
   
    return (
    <nav className="header">
        {/*logo on the left and search box and 3 links and the basket icon and number in the basket */}
       <Link to="/">
       <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" /> 
       </Link>

        {  /*Search Box */   }
        <div className="header__search">

            <input type="text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon"/>
        </div>

        {/* 3 Links in navbar after searchBox*/}

        <div className="header__nav">
            {/* 1st Links */}

            <Link  to ="/login" className="header__link">
            <div className="header__option">
                <span className="header__optionLine1">Hello Ajju,</span>
                <span  className="header__optionLine2">Sign In</span>
            </div>
            </Link>


            {/* 2nd Links */}

            <Link  to ="/" className="header__link">
            <div className="header__option">
                <span className="header__optionLine1">Returns</span>
                <span className="header__optionLine2">& Orders</span>
            </div>
            </Link>


            {/* 3rd Links */}

            <Link  to ="/" className="header__link">
            <div className="header__option">
                <span className="header__optionLine1">Your</span>
                <span className="header__optionLine2">Prime</span>
            </div>
            </Link>


            {/* 4th Links for basket*/}
            
            <Link  to ="/checkout" className="header__link">
            <div className="header__optionBasket">
                {/*Add a basket icon here */}
                    <ShoppingBasketIcon/>
                {/*Now add the number of items in the basket*/}
                <span className="header__optionLine2 header__basket__counter">0</span>
            </div>
            </Link>
        </div>
 
    </nav>
    );  
}


export default Header;