import React, { useRef, useContext } from 'react';
import "./Home.css";
import RatingAndHeart from "../utils/ratingAheart"
import TestimonialCarousel from "../utils/testimonialCarousel"
import firstShop from "../Images/1.jpg"
import secondShop from "../Images/2.jpg"
import thirdShop from "../Images/3.jpg"
import fourthShop from "../Images/4.jpg"
import fifthShop from "../Images/5.jpg"
import sixthShop from "../Images/6.jpg"
import seventhShop from "../Images/7.jpg"
import eighthShop from "../Images/8.jpg"
import johnLogo from "../Images/reviewImg.jpeg"
import janeLogo from "../Images/jane smith.jpeg"
import aliceLogo from "../Images/Alice-Johnson.jpg"
import firstUpdate from "../Images/bl-1.png"
import secondUpdate from "../Images/bl-2.png"
import thirdUpdate from "../Images/bl-3.png"
import { CartContext } from '../cartContext';

function Home() {
  const { addToCart } = useContext(CartContext);
  const nextSectionRef = useRef(null);

  const scrollNext = () => {
    nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const testimonials = [
    {
      image: johnLogo ,
      quote: "Amazing service! I'll definitely be back. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu scelerisque ligula.  Nam vestibulum, ex eget elementum mollis, est dui tempor nulla, ac euismod erat tortor volutpat purus.",
     author: "John Doe",
    occupation: "CEO of Addle"
    },
    { image: janeLogo,
       quote: "This product changed my life. Thank you! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu scelerisque ligula.  Nam vestibulum, ex eget elementum mollis, est dui tempor nulla, ac euismod erat tortor volutpat purus.",
     author: "Jane Smith",
     occupation: "MNG"
     }, 
    { image: aliceLogo,
      quote: "Highly recommended. Excellent quality. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu scelerisque ligula.  Nam vestibulum, ex eget elementum mollis, est dui tempor nulla, ac euismod erat tortor volutpat purus.", 
    author: "Alice Johnson",
    occupation: "Designer"  }, 
  ];
  return (
  <div>
    <section className="homeSection" id="home">
<div className="gridContainer">
    <div>
        <p className="firstTitle">Summer Collection</p>
    </div>
    <div>
        <p className="secondTitle">New Summer Collection 2024</p>
    </div>
    <div>
        <p className="thirdTitle">There's Nothing Like Trend</p>
    </div>
    <div>
        <button className="shopButton" onClick={scrollNext}>Shop Now<i className='bx bxs-right-arrow-alt'></i></button>
    </div>
</div>
    </section> 
{/*Second Page */}
    <section className="secondPage" id="shop" ref={nextSectionRef}>
    <div className="listProducts">
      <h1 className="secondSlide">Our Trending <span className="reviewRedTitle"> Products </span></h1>
   
   </div>
   
    <div className="buyContainer">
         <div className="firstTab">
          <img src={firstShop} className="imgPrint" alt=" Shop Images" />
          <RatingAndHeart />
          <p>Half Summer Set</p>
          <p>99$ - 129$</p>
          <button className="addToCartBtn" onClick={() => addToCart(1)}>Add To Cart</button>
         </div>

         <div className="secondTab">
          <img src={secondShop} className="imgPrint" alt=" Shop Images" />
          <RatingAndHeart />
          <p>Formal Lowers</p>
          <p>99$ - 129$</p>
          <button className="addToCartBtn" onClick={() => addToCart(2)}>Add To Cart</button>
         </div>

         <div className="thirdTab">
          <img src={thirdShop} className="imgPrint" alt=" Shop Images" />
          <RatingAndHeart />
          <p>Half Floral Set</p>
          <p>99$ - 129$</p>
          <button className="addToCartBtn" onClick={() => addToCart(3)}>Add To Cart</button>
         </div>

         <div className="fourthTab">
          <img src={fourthShop} className="imgPrint" alt=" Shop Images" />
          <RatingAndHeart />
          <p>Half Fancy Lady Dress</p>
          <p>99$ - 129$</p>
          <button className="addToCartBtn" onClick={() => addToCart(4)}>Add To Cart</button>
         </div>

         <div className="fifthTab">
          <img src={fifthShop} className="imgPrint" alt=" Shop Images" />
          <RatingAndHeart />
          <p>Flix Flox Jeans</p>
          <p>99$ - 129$</p>
          <button className="addToCartBtn" onClick={() => addToCart(5)}>Add To Cart</button>
         </div>

         <div className="sixthTab">
          <img src={sixthShop} className="imgPrint" alt=" Shop Images" />
          <RatingAndHeart />
          <p>Fancy Salwar Suits</p>
          <p>99$ - 129$</p>
          <button className="addToCartBtn" onClick={() => addToCart(6)}>Add To Cart</button>
        </div>

         <div className="seventhTab">
          <img src={seventhShop} className="imgPrint" alt=" Shop Images" />
          <RatingAndHeart />  
          <p>Printed Straight Kurta</p>
          <p>99$ - 129$</p>
          <button className="addToCartBtn" onClick={() => addToCart(7)}>Add To Cart</button>
         </div>
         
          <div className="eighthTab">
          <img src={eighthShop} className="imgPrint" alt=" Shop Images" />
          <RatingAndHeart />
          <p>Collor Full Jacket</p>
          <p>99$ - 129$</p>
          <button className="addToCartBtn" onClick={() => addToCart(8)}>Add To Cart</button>
         </div>
      </div>
    </section>

{/*Third Page */}
    <section id="reviews">
      <div className="thirdPage">
        <h1 className="clientRev">Client <span className="reviewRedTitle">Reviews</span></h1>
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>

{/* Fourth Page */}
<section id="updates">
<div className="fourthPage">
    <h1 className="textUpdates"> New <span className="reviewRedTitle">Updates</span></h1>
  <div className="updateCase">
    <div className="firstNews">
    <img src={firstUpdate} className="imgNews" alt=" Shop Images" />
      <p className="updateDate"> 26 March 2024</p>
      <p className="updateTitle">Let's start the sale on this summer vacation</p>
     <p>-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu scelerisque ligula. Aenean ullamcorper orci leo, vel aliquam augue porttitor eget. Nullam in augue sit amet augue semper semper. </p>
    </div>
    <div className="secondNews">
    <img src={secondUpdate} className="imgNews" alt=" Shop Images" />
    <p className="updateDate"> 15 April 2024</p>
    <p className="updateTitle">Let's start the sale on this summer vacation</p>
     <p>-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu scelerisque ligula. Aenean ullamcorper orci leo, vel aliquam augue porttitor eget. Nullam in augue sit amet augue semper semper. </p>
    </div>
    <div className="thirdNews">
    <img src={thirdUpdate} className="imgNews" alt=" Shop Images" />
    <p className="updateDate"> 2 May 2024</p>
    <p className="updateTitle">Let's start the sale on this summer vacation</p>
     <p>-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu scelerisque ligula. Aenean ullamcorper orci leo, vel aliquam augue porttitor eget. Nullam in augue sit amet augue semper semper. </p>
    </div>
    </div>
  </div>
</section>

    </div>
  );
}

export default Home;
