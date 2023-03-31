export interface TIngredient {
    type: "bun" | "main" | "sauce";
    __v: number;
    _id: string;
    id?: string;
    uuid?: string;
    count?: number;
    calories: number;
    carbohydrates: number;
    fat: number;
    image: string;
    image_large: string;
    image_mobile: string;
    name: string;
    price: number;
    proteins: number;
    length: number;
  }
  