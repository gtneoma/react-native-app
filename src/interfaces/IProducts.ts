export interface IProductListItem {
  idcategory?: number;
  id?: number;
  name: string;
  prix: number;
  stock: number;
  img: string;
}
export type TProductCartList = IProductListItem & { quantity: number };