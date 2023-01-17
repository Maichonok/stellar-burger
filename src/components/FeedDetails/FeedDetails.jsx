import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import detailsStyles from "./FeedDetails.module.css";

export function FeedDetails() {
  const orders = useSelector((store) => store.wsReducer.orders);
  const ingredients = useSelector(
    (store) => store.ingredients.burgerIngredients
  );

  const { id } = useParams();
  const order = orders?.find((el) => el._id === id);
  const ingrList = order?.ingredients;
  let summ = 0;
  let resArr = [];
  if (ingrList) {
    for (let el of ingredients) {
      for (let id of ingrList) {
        if (el._id === id) {
          resArr.push(el);
          summ += el.price;
        }
      }
    }
  }

  function isCount(el) {
    let count = resArr.filter((item) => {
      return item === el;
    }).length;
    return count;
  }
  const showContent = resArr && order && ingredients;
  return (
    <>
      {showContent && (
        <div className={detailsStyles.background}>
          <div className={`${detailsStyles.wrapper} pt-10 pb-10 pl-10 pr-10`}>
            <div>
              <p
                className={`${detailsStyles.number} text text_type_digits-default`}
              >
                #{order?.number}
              </p>
              <p
                className={`${detailsStyles.name}text text_type_main-medium mt-10`}
              >
                {order?.name}
              </p>
              {order?.status === "done" && (
                <p
                  className={`${detailsStyles.ready} text text_type_main-default mt-3`}
                >
                  Выполнен
                </p>
              )}
              <p className="text text_type_main-medium mt-15">Состав:</p>
              <div className={`${detailsStyles.ingr_box} mt-6 pr-6`}>
                <ul className={detailsStyles.ingr_wrapper}>
                  {[...new Set(resArr)].map((el, index) => {
                    return (
                      <li
                        className={`${detailsStyles.ingr_item} mt-6`}
                        key={index}
                      >
                        <div className={detailsStyles.firs_ingr_wrapper}>
                          <div className={detailsStyles.image_wrapper}>
                            <div className={detailsStyles.image_wrapper_inside}>
                              <img
                                className={detailsStyles.image}
                                src={el.image_mobile}
                              />
                            </div>
                          </div>
                          <p className="text text_type_main-default ml-4">
                            {el.name}
                          </p>
                        </div>

                        <div className={detailsStyles.price_wrapper}>
                          <p className="text text_type_digits-default mr-2">
                            {isCount(el)} x {el.price}
                          </p>
                          <CurrencyIcon />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className={`${detailsStyles.summ_wrapper} mt-10`}>
                <p className="text text_type_main-default text_color_inactive">
                  {order?.createdAt}
                </p>
                <div className={detailsStyles.summ_wrapper_small}>
                  <p className="text text_type_digits-default mr-2">{summ}</p>
                  <CurrencyIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
