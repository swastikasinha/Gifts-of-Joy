import React from "react";
import "./Baby.css";
import Product from "./Product";

function Baby() {
  return (
    <div className="home">
      <div className="home__container">
        <h1>Baby Shower</h1>        
        <div className="home__row">
          <Product
            id="6385f978e6d7f7f896b70f9f"
            title ="Chocolate and Teddy in a Planter"
            price={2495}
            rating={3}
            image = "https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-mellow-love-with-chocolate-and-teddy-in-planter-153625-m.jpg"          />
          <Product
            id="6385fdc6e6d7f7f896b70fa0"
            title="Flower Bouquet"
            price={755}
            rating={5}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-royal-purple-chocolate-bouquet-178336-m.jpg"
          />
          <Product
            id="6385fe15e6d7f7f896b70fa1"
            title="Flower Bouquet"
            price={965}
            rating={4}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-basket-of-50-red-roses-61671-m.jpg"
          />
          <Product
            id="6385fe8de6d7f7f896b70fa2"
            title="Personalised Baby Girl Keychain"
            price={595}
            rating={3}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-personalized-baby-girl-keychain-set-of-2-134857-m.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="6385fed6e6d7f7f896b70fa3"
            title="Peronalised Baby Boy Keychain"
            price={595}
            rating={4}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-personalized-baby-boy-keychain-set-of-2-134858-m.jpg"
          />
          <Product
            id="6385ff29e6d7f7f896b70fa4"
            title="Ganache Cake"
            price={1655}
            rating={5}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-immaculate-ganache-cake-1-kg--188723-m.jpg"
          />
          <Product
            id="63860828e6d7f7f896b70fa5"
            title="Peach roses in a Bag"
            price={895}
            rating={2}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-peach-floral-beauty-in-a-bag-188526-m.jpg"
          />
          <Product
            id="638608c3e6d7f7f896b70fa6"
            title="Dreamy Blue Bouquet"
            price={1765}
            rating={5}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-hues-of-sky-149690-m.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="63860929e6d7f7f896b70fa7"
            title="Sweet Treats Hamper"
            price={1500}
            rating={4}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-sweet-delights-hamper-187607-m.jpg"
          />
          <Product
            id="63860975e6d7f7f896b70fa8"
            title="Pink Hamper"
            price={2545}
            rating={4}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-a-blushing-paradise-186175-m.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Baby;