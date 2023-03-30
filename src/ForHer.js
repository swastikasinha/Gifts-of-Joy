import React from "react";
import "./ForHer.css";
import Product from "./Product";

function ForHer() {
  return (
    <div className="home">
      <div className="home__container">
        <h1>For Her</h1>        
        <div className="home__row">
          <Product
            id="6385f0bee6d7f7f896b70f94"
            title ="Pinata Cake"
            price={1995}
            rating={5}
            image = "https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-pink-chocolate-pinata-ball-cake-for-birthday-750-grams--146278-m.jpg"          />
          <Product
            id="6385f105e6d7f7f896b70f95"
            title="Pendant and Earrings Set"
            price={595}
            rating={3}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-cz-and-pearl-round-pendant-and-earrings-set-170463-m.jpg"
          />
          <Product
            id="6385f174e6d7f7f896b70f96"
            title="Tan Croc Sling Bag"
            price={1099}
            rating={4}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-tan-croc-sling-bag-185664-m.jpg"
          />
          <Product
            id="6385f1d3e6d7f7f896b70f97"
            title="The Golden Glam Hamper"
            price={875}
            rating={5}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-the-golden-glam-hamper-187978-m.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="6385f24ee6d7f7f896b70f98"
            title="Flower Box"
            price={1495}
            rating={5}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-sweet-surrender-flower-box-110712-m.jpg"
          />
          <Product
            id="6385f30de6d7f7f896b70f99"
            title="Hazelnut Cake with a Bouquet of Flowers"
            price={2995}
            rating={4}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-hazelnut-crunch-cake-with-bunch-of-light-carnations-half-kg--146533-m.jpg"
          />
          <Product
            id="6385f371e6d7f7f896b70f9a"
            title="Personalised Diary"
            price={545}
            rating={3}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-vegan-leather-personalized-diary-186970-m.jpg"
          />
          <Product
            id="6385f4ace6d7f7f896b70f9b"
            title="Jewelery Holder"
            price={295}
            rating={3}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-black-tree-tower-for-jewelry-133293-m.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="6385f62ee6d7f7f896b70f9c"
            title="Mirror in Brass Hammered Base"
            price={395}
            rating={4}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-semi-circle-mirror-in-brass-hammered-base-133517-m.jpg"
          />
          <Product
            id="6385f766e6d7f7f896b70f9d"
            title="Personalised Pop Up Box"
            price={1295}
            rating={5}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-berry-happy-anniversary-personalized-pop-up-box-148959-m.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default ForHer;