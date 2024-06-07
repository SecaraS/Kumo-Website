import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from "../cartContext";
import SearchBar from "../utils/searchBar";
import SignInForm from "../utils/signIn";
import SignUpForm from "../utils/signUp";
import "./Navbar.css";
import logo from "../Images/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { cart, updateCartQuantity } = useContext(CartContext);
  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/products.json");
      const data = await response.json();
      setProducts(data);
    };
    fetchData();
  }, []);

  const openSignIn = () => setSignInOpen(true);
  const closeSignIn = () => setSignInOpen(false);
  const openSignUp = () => setSignUpOpen(true);
  const closeSignUp = () => setSignUpOpen(false);
  const toggleCartVisibility = () => setCartVisible(!cartVisible);

  const toggleVisibility = () => {
    setShowIcons(!showIcons);
  };

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="navbarContainer">
      <nav className="navbarEl">
        <Link to="/">
          <img src={logo} className="logoPrint" alt="Logo" />
        </Link>
        <ul className="navbarPages">
          <a href="#home" className={showIcons ? 'hidden' : ''}><li>Home</li></a>
          <a href="#shop" className={showIcons ? 'hidden' : ''}><li>Shop</li></a>
          <a href="#reviews" className={showIcons ? 'hidden' : ''}><li>Reviews</li></a>
          <a href="#updates" className={showIcons ? 'hidden' : ''}><li>Updates</li></a>
        </ul>
        <div className="navbarIcons">
          <SearchBar isVisible={showIcons} />
          <a href="#top" onClick={openSignIn} className={`account-icon ${showIcons ? '' : 'hidden'}`}><i className='bx bx-user'></i></a>
          <div className={`iconCart ${showIcons ? '' : 'hidden'}`}>
            <a href="#top" onClick={toggleCartVisibility}><i className='bx bx-cart'></i></a>
            <span className="nrProducts">{totalQuantity}</span>
          </div>
          <a href="#top" onClick={toggleVisibility}><i id="menuIcon" className='bx bx-menu'></i></a>
        </div>
        {isSignInOpen && <SignInForm closeModal={closeSignIn} openSignUp={openSignUp} />}
        {isSignUpOpen && <SignUpForm closeModal={closeSignUp} openSignIn={openSignIn} />}
        {cartVisible && (
          <div className="cartTab">
            <h1>Shopping Cart</h1>
            <div className='listCart'>
              {cart.map((item) => {
                const product = products.find((p) => p.id === item.productId);
                return (
                  <div key={item.productId} className="products">
                    <div className="imgCart">
                      <img className="imgShopcart" src={product.image} alt="Product" />
                    </div>
                    <div className="nameCart">{product.name}</div>
                    <div className="totalPrice">${product.price * item.quantity}</div>
                    <div className="quantity">
                      <span className="cutQ" onClick={() => updateCartQuantity(item.productId, -1)}>{"<"}</span>
                      <span className="nrObjects">{item.quantity}</span>
                      <span className="addQ" onClick={() => updateCartQuantity(item.productId, 1)}>{">"}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className='btnCart'>
              <button type="button" className="btnClose" onClick={toggleCartVisibility}>
                Close
              </button>
              <button type="button" className="btnCheck">
                Check Out
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
