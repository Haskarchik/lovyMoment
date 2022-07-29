import React from "react";
import seactionBlockStyles from "../../styles/seactionBlock.module.css";
import SeactionCard from "./SeactionCard";

export default function SeactionBlock() {
  return (
    <div className={seactionBlockStyles.container}>
      <div className={seactionBlockStyles.main_filter}>
        <SeactionCard
          card={{
            name: "Дитяче свято",
            img: "child",
            sename:'Розваги для',
            titleClass:' '+ seactionBlockStyles.child_party,

            tag:
              seactionBlockStyles.filter_card +
              " " +
              seactionBlockStyles.child_party,
            link: "Child-party",
          }}
        />
        <SeactionCard
          card={{
            name: "Корпоратив",
            sename:'Розваги для',
            img: "corporate",
            titleClass:' '+ seactionBlockStyles.corporate,

            tag:
              seactionBlockStyles.filter_card +
              " " +
              seactionBlockStyles.corporate +
              " ",
            link: "Corporate",
          }}
        />
        <SeactionCard
          card={{
            name: "Фестиваль",
            sename:'Розваги для',
            img: "festival",
            titleClass:' '+ seactionBlockStyles.festival,

            tag:
              seactionBlockStyles.filter_card +
              " " +
              seactionBlockStyles.festival +
              " ",
            link: "Festival",
          }}
        />
        <SeactionCard
          card={{
            name: "Гірки та батути",
            sename:'Надувні',
            img: "trampoline",
            titleClass:' '+ seactionBlockStyles.trampoline,

            tag:
              seactionBlockStyles.filter_card +
              " " +
              seactionBlockStyles.trampoline +
              " ",
            link: "Trampoline",
          }}
        />
        <SeactionCard
          card={{
            name: "Промоакція",
            sename:'Розваги для',
            img: "promotion",
            titleClass:' '+ seactionBlockStyles.promotion,
            
            tag:
              seactionBlockStyles.filter_card +
              " " +
              seactionBlockStyles.promotion +
              " ",
            link: "Promotion",
          }}
        />
        <SeactionCard
          card={{
            name: "Карусель та електро-транспорт",
            img: "carousel",
            tag:
              seactionBlockStyles.filter_card +
              " " +
              seactionBlockStyles.carousel +
              " ",
              titleClass:' '+ seactionBlockStyles.carousel,
            link: "Carousel",
          }}
        />
        <SeactionCard
        card={{
          name: "Мега ігри",
          sename:'Розваги',
          img: "game",
          titleClass:' '+ seactionBlockStyles.game,
          tag:
            seactionBlockStyles.filter_card +
            " " +
            seactionBlockStyles.game +
            " ",
          link: "MegaGame",
        }}
      />
      <SeactionCard
          card={{
            name: "Кейтеринг",
            img: "food",
            sename:'Смачненьке',
            titleClass:' '+ seactionBlockStyles.food,
            tag:
              seactionBlockStyles.filter_card +
              " " +
              seactionBlockStyles.food +
              " ",
            link: "Food",
          }}
        />    
      </div>
    </div>
  );
}
