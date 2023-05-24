class MyStoreScreen {
    get #myStoreName(){
        return $('id:toolbar_subtitle')
    }

    get #myStoreLogo() {
        return $('~My store') //Utilizar o til para acessibility ID

    }

    async getStoreName(){
        return await this.#myStoreName.getText()
    }

    async getStoreLogoIsDisplayed() {
        await this.#myStoreLogo.waitForExist()
        return await this.#myStoreLogo.isDisplayed() 
    }
}

module.exports = new MyStoreScreen()