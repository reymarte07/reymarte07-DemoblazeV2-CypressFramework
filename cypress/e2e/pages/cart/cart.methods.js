import { CartElements } from "./cart.elements";

export class CartMethods{
    static clickOnDeleteLink(prodcutName){
        CartElements.links.delete(prodcutName).click();
    }
}