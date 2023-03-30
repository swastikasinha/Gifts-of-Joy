import React from "react";
import "./ForHim.css";
import Product from "./Product";

function ForHim() {
  return (
    <div className="home">
      <div className="home__container">
        <h1>For Him</h1>        
        <div className="home__row">
          <Product
            id="6384af32e6d7f7f896b70f71"
            title ="Personalised Metal Car Keychain"
            price={595}
            rating={4}
            image = "https://cdn.igp.com/f_auto,q_auto,t_pnopt6prodlp/products/p-personalized-metal-car-keychain-184226-m.jpg"          
            />
          <Product
            id="6384b20ae6d7f7f896b70f72"
            title="Personalised Black Leather Wallet"
            price={550}
            rating={3}
            image="https://cdn.shopify.com/s/files/1/1821/3729/products/personalised-croc-vegan-leather-men-s-wallet-black-the-messy-corner-mens-wallet-29062764003500_1800x.jpg?v=1629717349"
          />
          <Product
            id="6384b2a7e6d7f7f896b70f73"
            title="Personalised Men's Cuff Bracelet"
            price={475}
            rating={5}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt6prodlp/products/p-personalized-men-s-cuff-bracelet-matte-silver-146130-m.jpg"
          />
          <Product
            id="6384b333e6d7f7f896b70f74"
            title="Special Butterscotch Cake"
            price={695}
            rating={4}
            image="https://cdn.igp.com/f_auto,q_auto,t_prodm/products/p-special-butterscotch-cake-half-kg--109218-m.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="6384b5a2e6d7f7f896b70f75"
            title="Yellow Sunglasses"
            price={1099}
            rating={2}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt9prodlp/products/p-yellow-sunglasses-with-personalized-case-182503-m.jpg"
          />
          <Product
            id="6384b5f7e6d7f7f896b70f76"
            title="Personalised Wooden Desk Organizer"
            price={1999}
            rating={5}
            image="https://cdn.igp.com/f_auto,q_auto,t_prodm/products/p-personalized-multi-compartment-wooden-desk-organiser-132318-m.jpg"
          />
          <Product
            id="6384b6c8e6d7f7f896b70f77"
            title="Deluxe Hamper"
            price={2495}
            rating={5}
            image="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt19prodlp/products/p-choc-o-nuts-deluxe-hamper-122930-m.jpg"
          />
          <Product
            id="6384b70ee6d7f7f896b70f78"
            title="Personalised Passport Cover"
            price={400}
            rating={5}
            image="https://5.imimg.com/data5/ECOM/Default/2022/7/PE/JQ/ZS/79925698/whatsappimage2021-12-29at13-07-16-1-500x500.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="6384bd82e6d7f7f896b70f7a"
            title="Travel Mug for Men"
            price={799}
            rating={5}
            image="https://m.media-amazon.com/images/I/81tunUXUWIL._SX425_.jpg"
          />
          <Product
            id="6384b824e6d7f7f896b70f79"
            title="Men's Hamper and Personalised Pouch"
            price={2495}
            rating={5}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt9prodlp/products/p-men-s-pamper-hamper-n-personalized-pouch-192284-m.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default ForHim;