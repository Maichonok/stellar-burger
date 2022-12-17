import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import burgeringredientStyle from "./BurgerIngredients.module.css";
import { IngredientSection } from "./IngredientSection/IngredientSection";
import { IngredientsTitle } from "./IngredientsTitle/IngredientsTitle";
import { CardMap } from "./CardMap/CardMap";
import { IngredientWrapper } from "./IngredientWrapper/IngredientWrapper";
import { toggleCurrent } from "../../services/actions/burgerIngredients";
import { openIngredientModal } from "../../services/actions/ingredientsDetails";

export default function BurgerIngredients(props) {
  const bunTopRef = React.useRef(null);
  const mainTopRef = React.useRef(null);
  const sauceTopRef = React.useRef(null);

  const [bunRef, bunIsInView] = useInView({
    threshold: 0.2,
  });

  const [mainRef, mainIsInView] = useInView({
    threshold: 0.2,
  });

  const [sauceRef, sauceIsInView] = useInView({
    threshold: 0.2,
  });

  function IngredientsTabs(props) {
    const scrollTab = (tab) => {
      tab.current.scrollIntoView({ behavior: "smooth" });
    };

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
  }

  const getData = (arr, type) =>
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
  const history = useHistory();  
  const location = useLocation();
  console.log(location)

  const open = (id) => {
    dispatch(openIngredientModal());
    dispatch(toggleCurrent(id));
    history.push(`/ingredients/${id}`);
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
