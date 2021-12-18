const {By,Key,Builder} = require("selenium-webdriver");
var chromedriver = require('chromedriver');

class Auto {
    
    async autoll(req, res, next) {
        var slepp = new Promise(res => {
            setTimeout(res('111'),5000)
        })
        
        console.log(req.body.username)
        console.log(req.body.password)
        res.redirect('back')

        let driver =new Builder().forBrowser("chrome").build();
        await driver.get('https://sohagame.vn/')
        await driver.findElement(By.css('body > header > nav > div > div.login_before > a')).click()
        slepp.then( (kq)=>{
            return new Promise(resolve =>{
                setTimeout(resolve(driver.getCurrentUrl()), 2000)
            })
            .then((result) => {
                console.log(result)
                driver.get(result)
                return slepp
            })
            .then( (result) => {
                console.log(result)
                return new Promise(resolve=>{
                    setTimeout(resolve(driver.findElement(By.css('framework7-root > div.safe-areas.view.view-main > div > div > div.row.w-container > div.col-50.small-100.content.content-flex > div.login-content.login-content-se5 > div:nth-child(2) > div.item-input-wrap > div > input[type=text]'))
                    ) , 2000)
                })
            
                .then((resu)=>{
                    console.log(resu)
                })
        })
            .catch()
        })

        
        //#framework7-root > div.safe-areas.view.view-main > div > div > div.row.w-container > div.col-50.small-100.content.content-flex > div.login-content.login-content-se5 > div:nth-child(2) > div.item-input-wrap > div > input[type=text] 
        //#framework7-root > div.safe-areas.view.view-main > div.page.page-current > div > div.row.w-container > div.col-50.small-100.content.content-flex > div.login-content > div:nth-child(2) > div.item-input-wrap > div > div > input[type=password]
    }
    
}

module.exports = new Auto