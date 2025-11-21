export interface IProductItem {
  idcategory?: number;
  id?: number;
  name: string;
  prix: number;
  stock: number;
  img: string;
}
export type TProductCart = IProductItem & { quantity: number };