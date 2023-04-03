import React, { useMemo, FC, RefObject } from "react";
import { useInView } from "react-intersection-observer";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import burgeringredientStyle from "./BurgerIngredients.module.css";
import { IngredientSection } from "./IngredientSection/IngredientSection";
import { IngredientsTitle } from "./IngredientsTitle/IngredientsTitle";
import { CardMap } from "./CardMap/CardMap";
import { IngredientWrapper } from "./IngredientWrapper/IngredientWrapper";
import { openIngredientModal } from "../../services/actions/ingredientsDetails";

import { useSelector, useDispatch } from "../../services/models";
import { TIngredient } from "../../services/models/ingredients";

export default function BurgerIngredients() {
  const bunTopRef = React.useRef(null);
  const mainTopRef = React.useRef(null);
  const sauceTopRef = React.useRef(null);

  const [bunRef, bunIsInView] = useInView({
    threshold: 1,
  });

  const [mainRef, mainIsInView] = useInView({
    threshold: 0.2,
  });

  const [sauceRef, sauceIsInView] = useInView({
    threshold: 0.2,
  });

  const IngredientsTabs: FC<{
    tabStyle: string;
  }> = (props) => {
    const scrollTab = (tab: RefObject<HTMLDivElement>) =>
      tab.current?.scrollIntoView({ behavior: "smooth" });

    return (
      <div className={props.tabStyle}>
        <Tab
          value="bun"
          active={bunIsInView}
          onClick={(e) => scrollTab(bunTopRef)}
        >
          Булки
        </Tab>
        <Tab
          value="sauce"
          active={sauceIsInView}
          onClick={(e) => scrollTab(sauceTopRef)}
        >
          Соусы
        </Tab>
        <Tab
          value="main"
          active={mainIsInView}
          onClick={(e) => scrollTab(mainTopRef)}
        >
          Начинки
        </Tab>
      </div>
    );
  };

  const getData = (arr: Array<TIngredient>, type: string) =>
    data
      .filter((item) => item.type === type)
      .map((i) => {
        const count = selectedIngredients.filter((s) => s._id === i._id).length;
        return { ...i, count };
      });

  const data = useSelector((state) => state.burgerIngredients.data);
  const selectedIngredients = useSelector(
    (state) => state.orderConstructor.ingredients
  );

  const bunArr = useMemo(
    () => getData(data, "bun"),
    [data, selectedIngredients]
  );
  const mainArr = useMemo(
    () => getData(data, "main"),
    [data, selectedIngredients]
  );
  const sauceArr = useMemo(
    () => getData(data, "sauce"),
    [data, selectedIngredients]
  );

  const dispatch = useDispatch();

  const open = (id: string) => {
    dispatch(openIngredientModal());
  };

  return (
    <IngredientSection sectionStyle={`${burgeringredientStyle.section} mt-10`}>
      <IngredientsTitle
        text="Соберите бургер"
        textStyle={`${burgeringredientStyle.title} text text_type_main-large mb-5`}
      />
      <IngredientsTabs tabStyle={`${burgeringredientStyle.tab} mb-5`} />
      <div className={`${burgeringredientStyle.ingredientsList}`}>
        <IngredientWrapper text="Булки" tabTopRef={bunTopRef} tabRef={bunRef}>
          <CardMap data={bunArr} open={open} />
        </IngredientWrapper>
        <IngredientWrapper
          text="Соусы"
          tabTopRef={sauceTopRef}
          tabRef={sauceRef}
        >
          <CardMap data={sauceArr} open={open} />
        </IngredientWrapper>
        <IngredientWrapper
          text="Начинки"
          tabTopRef={mainTopRef}
          tabRef={mainRef}
        >
          <CardMap data={mainArr} open={open} />
        </IngredientWrapper>
      </div>
    </IngredientSection>
  );
}