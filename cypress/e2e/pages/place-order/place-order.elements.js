export class PlaceOrderElements {
  //---------------------------------------TextBoxes-----------------------------
  static get textboxes() {
    return {
      get name() {
        cy.get("input#name");
      },
      get country() {
        cy.get("input#country");
      },
      get city() {
        cy.get("input#city");
      },
      get creditCard() {
        cy.get("input#card");
      },
      get moth() {
        cy.get("input#month");
      },
      get year() {
        cy.get("input#year");
      },
    };
  }

  //----------------------------------buttons---------------------------------------
  static get buttons() {
    return {
      get close() {
        cy.get('div[id="orderModal"] button').eq(1);
      },
      get purchase() {
        cy.contains("button", "Purchase");
      },
    };
  }

  //----------------------------- Texts ----------------------------------------
  static get texts() {
    return {
      get placeorder() {
        cy.get("h5#orderModalLabel");
      },
      get total() {
        cy.get("label#totalm");
      },
      get name() {
        cy.get('label[for="name"]').eq(1);
      },
      get country() {
        cy.get('label[for="country"]');
      },
      get city() {
        cy.get('label[for="city"]');
      },
      get creditcard() {
        cy.get('label[for="card"]');
      },
      get month() {
        cy.get('label[for="month"]');
      },
      get year() {
        cy.get('label[for="year"]');
      },
    };
  }
}
