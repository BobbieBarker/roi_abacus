import { hoard } from "../hoard_db";
import { constructN, pipe, invoker } from "ramda";

export class Shop implements IShop {
  id: number;
  type: ShopType;
  townId: number;
  displayName?: string;

  constructor(type: ShopType, townId: number, displayName?: string, id?:number) {
    this.type = type
    this.townId = townId
    // refactor: cleanup this imperative construct
    if (id) this.id = id
    if (displayName) this.displayName = displayNames[type]
  }

  save(shop: Shop): Promise<number> {
    return hoard.shops.put(shop)
  }
}

export enum ShopType {
  farmers_market = "FARMERS_MARKET",
  hardware_store = "HARDWARE_STORE",
  ironmongery = "IRONMONGERY",
  construction_goods = "CONSTRUCTION_GOODS",
  grocery_store = "GROCERY_STORE",
  clothing_Store = "CLOTHING_STORE",
  toy_factory = "TOY_FACTORY",
  book_store = "BOOK_STORE",
  liquor_store = "LIQUOR_STORE",
  home_goods = "HOME_GOODS",
  parts_shop = "PARTS_SHOP",
  diner = "DINER"
}

type IDisplayNames = {
  [key in ShopType]: string
}

const displayNames: IDisplayNames = {
  FARMERS_MARKET: "Farmer's Market",
  HARDWARE_STORE: "Hardware Store",
  IRONMONGERY: "Ironmongery",
  CONSTRUCTION_GOODS: "Construction: Goods",
  GROCERY_STORE: "Grocery Store",
  CLOTHING_STORE: "Clothing Store",
  TOY_FACTORY: "Toy Factory",
  BOOK_STORE: "Book Store",
  LIQUOR_STORE: "Liquor Store",
  HOME_GOODS: "Home Goods",
  PARTS_SHOP: "Parts Shop",
  DINER: "Diner"
}

export interface IShop {
  id?: number
  type: ShopType
  townId: number
}

const ShopConstructor = constructN(1, Shop as any);
type SaveShopType = (type: ShopType, townId: number) => Promise<number>;
export const saveShop: SaveShopType = pipe(ShopConstructor, invoker(1, 'save'));
