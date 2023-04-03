import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import cardMapStyle from "./CardMap.module.css";
import { Card } from "../Card/Card";
import { TIngredient } from "../../../services/models/ingredients";

export const CardMap: FC<{
  data: TIngredient[];
  open: (id: string) => void;
}> = ({ data, open }) => {
  const location = useLocation();

  return (
    <>
      {data.map((ingr) => {
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
      })}
    </>
  );
};
