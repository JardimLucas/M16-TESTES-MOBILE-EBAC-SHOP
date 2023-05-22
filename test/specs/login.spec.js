const homeScreen = require("../screens/home.screen");
const loginScreen = require("../screens/login.screen");
const mystoreScreen = require("../screens/mystore.screen");

let urlLoja = 'http://lojaebac.ebaconline.art.br'
let usuario = 'gerente'
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'

describe('Access Admin Panel', () => {
    it('Should login with valid credentials', async () => {
        await homeScreen.goToLogin()
        await loginScreen.setStoreAdress(urlLoja)
        await loginScreen.continue()
        await loginScreen.continueWhithStoreCredentials()
        await loginScreen.login(usuario, senha)
        await loginScreen.goToTwoFactorAuth()
        await loginScreen.twoFactorLogin(senha)

    expect(await mystoreScreen.getStoreName()).toEqual('EBAC - Shop')
    })    
});
