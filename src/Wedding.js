import React from "react";
import "./Wedding.css";
import Product from "./Product";

function Wedding() {
  return (
    <div className="home">
      <div className="home__container">
        <h1>Wedding</h1>        
        <div className="home__row">
          <Product
            id="6384c4bee6d7f7f896b70f89"
            title ="Premium Wedding Sweets Box"
            price={2645}
            rating={4}
            image = "https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-premium-sweets-wedding-gift-box-with-personalized-card-box-of-15--153484-m.jpg"          />
          <Product
            id="6384c54be6d7f7f896b70f8a"
            title="Bouquet of Ombre Roses"
            price={595}
            rating={4}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-bouquet-of-ombre-roses-94060-m.jpg"
          />
          <Product
            id="6384c5c4e6d7f7f896b70f8b"
            title="Symbol of Fortune Silver Coin"
            price={1455}
            rating={5}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-symbol-of-fortune-silver-coin-188523-m.jpg"
          />
          <Product
            id="6384c5f6e6d7f7f896b70f8c"
            title="Creamy Pinapple Cake"
            price={865}
            rating={5}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-delicious-creamy-pineapple-cake-600-gm--190849-m.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="6384c6c4e6d7f7f896b70f8d"
            title="Set of 6 Ceramic Plates"
            price={2335}
            rating={3}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-elegant-floral-ceramic-plates-set-of-6--148611-m.jpg"
          />
          <Product
            id="6384c7ace6d7f7f896b70f8e"
            title="Peach Wedding Gift Hamper"
            price={3885}
            rating={5}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-pretty-as-a-peach-festive-hamper-187991-m.jpg"
          />
          <Product
            id="6385772be6d7f7f896b70f8f"
            title="Dreamy Cloud Flower Box"
            price={1995}
            rating={4}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-dreamy-cloud-flower-box-117321-m.jpg"
          />
          <Product
            id="63857796e6d7f7f896b70f90"
            title="Rochers Bouquet"
            price={1295}
            rating={5}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-rochers-galore-gift-178334-1.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="638578fae6d7f7f896b70f92"
            title="Her and Him Personalised Wallets"
            price={1795}
            rating={5}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-sweet-delights-hamper-187607-m.jpg"
          />
          <Product
            id="63857808e6d7f7f896b70f91"
            title="Wooden Planter Bookends"
            price={795}
            rating={2}
            image="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-lets-read-wooden-planter-bookends-133135-m.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Wedding;