import React from "react";
import "./Christmas.css";
import Product from "./Product";

function Christmas() {
  return (
    <div className="home">
      <div className="home__container">
        <h1>Christmas</h1>        
        <div className="home__row">
          <Product
            id="6384be7ee6d7f7f896b70f7c"
            title ="Christmas Celebrations Hamper"
            price={1825}
            rating={5}
            image = "https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-christmas-celebrations-hamper-196783-m.jpg"          />
          <Product
            id="6384bf6ee6d7f7f896b70f7d"
            title="Nutty Plum Cake"
            price={845}
            rating={4}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-nutty-plum-cake-196759-m.jpg"
          />
          <Product
            id="6384c068e6d7f7f896b70f7e"
            title="Christmas Rose Gold Vase"
            price={1099}
            rating={3}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-magic-of-christmas-in-rose-gold-vase-124339-m.jpg"
          />
          <Product
            id="6384c11fe6d7f7f896b70f81"
            title="Reindeer Decor and Lantern Set"
            price={1599}
            rating={5}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-reindeer-decor-and-lantern-christmas-gift-set-149858-m.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="6384c16de6d7f7f896b70f82"
            title="Santa Teddy"
            price={1099}
            rating={3}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-adorable-santa-teddy-76742-m.jpg"
          />
          <Product
            id="6384c249e6d7f7f896b70f83"
            title="Sweet Santa Hamper"
            price={1645}
            rating={5}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-sweet-santa-delectable-hamper-196927-m.jpg"
          />
          <Product
            id="6384c2c6e6d7f7f896b70f84"
            title="Xmas Pompom Tree with Lights"
            price={650}
            rating={4}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-evergreen-xmas-pom-pom-tree-with-lights-149861-m.jpg"
          />
          <Product
            id="6384c31fe6d7f7f896b70f85"
            title="Christmas Lamp and Speaker"
            price={845}
            rating={3}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-santa-n-sleigh-personalized-lamp-speaker-196655-m.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="6384c373e6d7f7f896b70f86"
            title="Classic Red Velvet Cake"
            price={745}
            rating={5}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-classic-red-velvet-cake-half-kg--109230-m.jpg"
          />
          <Product
            id="6384c3c4e6d7f7f896b70f87"
            title="Christmas Goodies Gift Basket Hamper"
            price={3000}
            rating={5}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-christmas-goodies-gift-basket-hamper-196245-m.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Christmas;