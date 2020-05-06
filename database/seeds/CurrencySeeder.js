'use strict'

const Currency = use('App/Models/Currency')

class CurrencySeeder {
    async run () {

        await Currency.createMany([
            {
                name: 'United Stated Dollar',
                currency: 'usd'
            },
            {
                name: 'Euros',
                currency: 'eur'
            },
        ])

    }
}

module.exports = CurrencySeeder
