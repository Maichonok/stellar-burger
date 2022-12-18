import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { ingredientType } from "../../../utils/ingredient";
import cardMapStyle from "./CardMap.module.css";
import { Card } from "../Card/Card";

function CardMap({ data, open }) {
  const location = useLocation();

  return data.map(ingr => {
    return (
      <li
        key={ingr._id}
        onClick={() => open(ingr._id)}
        className={cardMapStyle.item}
      >
        <Link
          to={{
            pathname: `/ingredients/${ingr._id}`,
            state: { background: location },
          }}
        >
          <Card
            count={ingr.count}
            image={ingr.image}
            name={ingr.name}
            price={ingr.price}
            data={ingr}
          />
        </Link>
      </li>
    );
  });
}

CardMap.propTypes = {
  data: PropTypes.arrayOf(ingredientType.isRequired).isRequired,
  open: PropTypes.func.isRequired,
};

export { CardMap };
