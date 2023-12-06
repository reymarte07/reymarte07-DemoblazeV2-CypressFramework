export class CartElements {
  static get buttons() {
    return {
      get placeOrder() {
        return cy.get('button[data-toggle="modal"]');
      },
    };
  }

  
  static get links() {
    return {
        delete(prodcutName){
            return cy.contains('td', prodcutName).closest('tr').find('a');
        }
    }
  }
}
