export interface Order {
  createdAt: string;
  ingredients: string[];
  name: string;
  number: number;
  status: string;
  updatedAt: string;
  _id: string;
}

export interface Orders {
  orders: Array<Order>;
  success: boolean;
  total: number;
  totalToday: number;
}
