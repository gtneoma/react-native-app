export interface ICartProduct {
  idproduct: number;
  quantity: number;
}

export interface ICart {
  id: number;
  iduser: number;
  products: Array<ICartProduct>;
  validationDateTime?: string;
}
