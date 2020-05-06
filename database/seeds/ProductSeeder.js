'use strict'

const Product = use('App/Models/Product')
const Database = use('Database')

class ProductSeeder {
    async run () {

        let randomCurrency,
        currencies = await Database.from('currencies').pluck('currency')

        for (var i = 0; i < 20; i++) {
            randomCurrency = currencies.sort(() => .5 - Math.random())[0]
            await Product.create({
                title: `Product ${i}`,
                currency: randomCurrency
            })
        }

    }
}

module.exports = ProductSeeder
