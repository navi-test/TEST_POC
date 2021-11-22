
import AppScreen from './AppScreen';

class MainScreen extends AppScreen {
    /**
     * define elements
     */
    private get signInBtn () { return $("//android.view.ViewGroup[@content-desc='test-LOGIN']"); }
    private get usernameField () { return $("//android.widget.EditText[@content-desc='test-Username']"); }
    private get errorMessage () { return $("//android.view.ViewGroup[@content-desc='test-Error message']"); }
    private get appSupportLink () { return $(""); }

    constructor () {
        super("//android.view.ViewGroup[@content-desc='test-LOGIN']");
    }

    async tapOnSignIn(){
        await this.signInBtn.click();
    }

    async isUserNameFieldDisplayed() {
     return  await this.usernameField.isDisplayed();
    }

    async isErrorMessageDisplayed() {
        return  await this.errorMessage.isDisplayed();
       }

}

export default new MainScreen();