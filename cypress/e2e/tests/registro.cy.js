import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { SignupMethods } from "../pages/signup/signup.methods";
import { Logger } from "../util/logger";

const user = CommonPageMethods.generateRandomString(); //generate random user
const password = CommonPageMethods.generateRandomString(7); //generate random password
const existingUser= 'random01'; 

describe(CommonPageData.testSuites.registro, ()=>{
    it("Registro de usuario valido", ()=>{
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Sign up" en la barra de navegación')
        CommonPageMethods.clickOnSingupOption();

        Logger.stepNumber(3)
        Logger.step('Completar todos los campos obligatorios con información válida')
        SignupMethods.insertUsername(user)
        SignupMethods.insertPassword(password)

        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Sign up" para registrar el usuario')
        SignupMethods.clickOnSignupButton();
        Logger.verification('Verificar que se muestre el mensaje "Sign up successful."')
        SignupMethods.VerifySignupSuccesfulMessageIsDisplayed();
    });

    it("Registro de usuario inválido", ()=>{
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Sign up" en la barra de navegación')
        CommonPageMethods.clickOnSingupOption();

        Logger.stepNumber(3)
        Logger.step('Completar algunos campos con información inválida')
        SignupMethods.insertUsername(existingUser)
        SignupMethods.insertPassword(password)

        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Sign up" para registrar el usuario')
        SignupMethods.clickOnSignupButton();
        Logger.verification('Verificar que se muestra un mensaje de error indicando los campos inválidos')
        SignupMethods.verifyThatThisUserAlreadyExistMessageIsDisplayed();
    });


})

