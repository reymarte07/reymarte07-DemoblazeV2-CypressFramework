import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods"
import { HomeMethods } from "../pages/home/home.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger"

const user = LoginData.validCredentials;

beforeEach(()=>{
    CommonPageMethods.navigateToDemoBlaze();
})

describe(CommonPageData.testSuites.catalogoYCompras,()=>{
    it("Navegación por categorías", ()=>{
       
        Logger.stepNumber(1)
        Logger.step('Iniciar sesión como usuario registrado')
        Logger.subStep('Navigate to Demoblaze application')
        Logger.subStep('Click on "Login in"')
        CommonPageMethods.clickOnLoginOption();
        LoginMethods.login(user.username, user.password)


        Logger.stepNumber(2)
        Logger.step('Navegar a la página de inicio')
        CommonPageMethods.clickOnHomeOption();

        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoría de productos en el menú de navegación')
        HomeMethods.clickOnMonitorsOption();
        Logger.verification('Verificar que se muestra la lista de productos correspondiente a la categoría seleccionada')
        HomeMethods.verifyProductDisplayed('Apple monitor 24')
        HomeMethods.verifyProductDisplayed('ASUS Full HD')        

        
    })

})
