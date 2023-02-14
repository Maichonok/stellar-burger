import { FormattedDate } from "react-intl";
import { useSelector } from "react-redux";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import orderItemsStyles from "./OrderItems.module.css";

export function OrderItems({ order }) {
  const { number, name } = order;
  const ingredients = useSelector((store) => store.burgerIngredients.data);
  const ingrList = order.ingredients;
  let resArr = [];
  for (let el of ingredients) {
    for (let id of ingrList) {
      if (el._id === id) {
        resArr.push(el);
      }
    }
  }
  let totalPrice = 0;
  resArr.map((el) => {
    totalPrice += el.price;
  });

  const maxLength = resArr.length;
  const hideItems = maxLength - 6;

  return (
    <div
      className={`${orderItemsStyles.feed_item} mt-6 pt-6 pb-6 pl-6 pr-6 mr-2`}
    >
      <div className={orderItemsStyles.content_wrapper}>
        <div className={orderItemsStyles.title_wrapper}>
          <p className="text text_type_digits-default">#{number}</p>
          <p className="text text_type_main-default text_color_inactive">
            <FormattedDate
              value={order.createdAt}
              day="numeric"
              month="long"
              year="numeric"
              hour="numeric"
              minute="numeric"
            />
          </p>
        </div>
        <p className="text text_type_main-medium mt-6">{name}</p>
        <div
          className={`${orderItemsStyles.ingredient_and_price_wrapper} mt-6`}
        >
          <ul className={orderItemsStyles.ingredients_wrapper}>
            {maxLength <= 5 &&
              resArr.map((el, index) => (
                <li className={orderItemsStyles.ingredient_box} key={index}>
                  <div className={orderItemsStyles.image_wrapper}>
                    <div className={orderItemsStyles.inside_image_wrapper}>
                      <img
                        className={orderItemsStyles.image}
                        src={el.image_mobile}
                      />
                    </div>
                  </div>
                </li>
              ))}
            {maxLength >= 6 &&
              resArr.slice(0, 5).map((el, index) => (
                <li className={orderItemsStyles.ingredient_box} key={index}>
                  <div className={orderItemsStyles.image_wrapper}>
                    <div className={orderItemsStyles.inside_image_wrapper}>
                      <img
                        className={orderItemsStyles.image}
                        src={el.image_mobile}
                      />
                    </div>
                  </div>
                </li>
              ))}
            {maxLength > 6 &&
              resArr.slice(5, 6).map((el, index) => (
                <li className={orderItemsStyles.ingredient_box} key={index}>
                  <div className={orderItemsStyles.image_wrapper}>
                    <div className={orderItemsStyles.inside_image_wrapper}>
                      <div className={orderItemsStyles.hidden_wrapper}>
                        <div className={orderItemsStyles.inside_image_wrapper}>
                          <img
                            src={el.image_mobile}
                            className={orderItemsStyles.hidden_image}
                          />
                        </div>

                        <p
                          className={`${orderItemsStyles.hidden_text} text text_type_main-default`}
                        >
                          +{hideItems}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
          <div className={orderItemsStyles.price_wrapper}>
            <p className="text text_type_digits-default mr-2">{totalPrice}</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
