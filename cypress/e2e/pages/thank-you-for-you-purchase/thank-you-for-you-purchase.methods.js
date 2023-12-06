import { ThankYouForYourPurchaseElemtns } from "./thank-you-for-you-purchase.elements";

export class ThankYouForYourPurchaseMethods {
  static clickOnOKButton() {
    ThankYouForYourPurchaseElemtns.buttons.ok.click();
  }

  static verifyGreenCheckMarkIsDisplayed() {
    ThankYouForYourPurchaseElemtns.icons.greenCheckMark.should("exist");
  }
}
