import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import burgeringredientStyle from "./BurgerIngredients.module.css";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/ingredient";
import { IngredientSection } from "./IngredientSection/IngredientSection";
import { IngredientsTitle } from "./IngredientsTitle/IngredientsTitle";
import { CardMap } from "./CardMap/CardMap";
import { IngredientWrapper } from "./IngredientWrapper/IngredientWrapper";

export default function BurgerIngredients(props) {
  const bunRef = React.useRef(null);
  const mainRef = React.useRef(null);
  const sauceRef = React.useRef(null);

  function IngredientsTabs(props) {
    const [current, setCurrent] = React.useState("bun");
    const scrollTab = (e, tab) => {
      setCurrent(e);
      tab.current.scrollIntoView({ behavior: "smooth" });
    };
  
    return (
      <div className={props.tabStyle}>
        <Tab
          value="bun"
          active={current === "bun"}
          onClick={(e) => scrollTab(e, bunRef)}
        >
          Булки
        </Tab>
        <Tab
          value="sauce"
          active={current === "sauce"}
          onClick={(e) => scrollTab(e, sauceRef)}
        >
          Соусы
        </Tab>
        <Tab
          value="main"
          active={current === "main"}
          onClick={(e) => scrollTab(e, mainRef)}
        >
          Начинки
        </Tab>
      </div>
    );
  }

  const getArr = props.data;

  const bunArr = getArr.filter((item) => item.type === "bun");
  const mainArr = getArr.filter((item) => item.type === "main");
  const sauceArr = getArr.filter((item) => item.type === "sauce");

  return (
    <IngredientSection sectionStyle={`${burgeringredientStyle.section} mt-10`}>
      <IngredientsTitle
        text="Соберите бургер"
        textStyle={`${burgeringredientStyle.title} text text_type_main-large mb-5`}
      />
      <IngredientsTabs 
        tabStyle={`${burgeringredientStyle.tab} mb-5`} 
        banRef={bunRef}
        sauceRef={sauceRef}
        mainRef={mainRef}
      />
      <div className={`${burgeringredientStyle.ingredientsList}`}>
        <IngredientWrapper text="Булки" tabRef={bunRef}>
          <CardMap data={bunArr} open={props.open} />
        </IngredientWrapper>
        <IngredientWrapper text="Соусы" tabRef={sauceRef}>
          <CardMap data={sauceArr} open={props.open} />
        </IngredientWrapper>
        <IngredientWrapper text="Начинки" tabRef={mainRef}>
          <CardMap data={mainArr} open={props.open} />
        </IngredientWrapper>
      </div>
    </IngredientSection>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientType.isRequired).isRequired,
  open: PropTypes.func.isRequired,
};


