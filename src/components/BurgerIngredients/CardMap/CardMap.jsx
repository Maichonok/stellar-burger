import React from "react";
import PropTypes from "prop-types";
import { ingredientType } from "../../../utils/ingredient";
import cardMapStyle from "./CardMap.module.css";
import { Card } from "../Card/Card";

function CardMap({ data, open }) {
  return data.map((ingr, index) => {
    return (
      <li 
        key={ingr._id} 
        onClick={() => open(ingr._id)} 
        className={cardMapStyle.item}
      >
        <Card 
          count={ingr.count}
          image={ingr.image} 
          name={ingr.name} 
          price={ingr.price} 
          data={ingr} 
        />
      </li>
    );
  });
}

CardMap.propTypes = {
  data: PropTypes.arrayOf(ingredientType.isRequired).isRequired,
  open: PropTypes.func.isRequired,
};

export { CardMap };
