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
            tag:
              seactionBlockStyles.filter_card +
              " " +
              seactionBlockStyles.child_party,
            link: "ChildParty",
          }}
        />
        <SeactionCard
          card={{
            name: "Корпоратив",
            img: "corporate",
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
            img: "festival",
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
            name: "День міста",
            img: "city",
            tag:
              seactionBlockStyles.filter_card +
              " " +
              seactionBlockStyles.city_day +
              " ",
            link: "CityDay",
          }}
        />
        <SeactionCard
          card={{
            name: "Промоакція",
            img: "promotion",
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
            name: "День народження",
            img: "birthday",
            tag:
              seactionBlockStyles.filter_card +
              " " +
              seactionBlockStyles.birthday +
              " ",
            link: "Birthday",
          }}
        />
      </div>
    </div>
  );
}
