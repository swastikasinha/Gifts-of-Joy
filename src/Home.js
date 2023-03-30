import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/49b71263149899.5aa7a8c74df48.png"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Tasteful Indulgence Birthday Hamper"
            price={2895}
            rating={4}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-tasteful-indulgence-birthday-hamper-146490-m.jpg" />
          <Product
            id="49538094"
            title="Reindeer Christmas LED Lamp"
            price={825}
            rating={5}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-reindeer-christmas-led-lamp-196710-m.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Personalized Diary & Chocolate Gift Set"
            price={1075}
            rating={4}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-personalized-diary-chocolate-gift-set-177060-m.jpg"
          />
          <Product
            id="23445930"
            title="Blue Skies Sling Bag"
            price={1225}
            rating={5}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-blue-skies-sling-bag-185662-m.jpg"
          />
          <Product
            id="3254354345"
            title="Rainbow Effect Metal Heart Tray"
            price={425}
            rating={4}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-rainbow-effect-metal-heart-tray-154368-m.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Delicious Choco Creamy Cake"
            price={745}
            rating={4}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-delicious-choco-creamy-cake-600-gm--190843-m.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
