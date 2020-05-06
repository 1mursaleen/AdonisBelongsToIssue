'use strict'

const Schema = use('Schema')

class CurrencySchema extends Schema {
    up () {
        this.create('currencies', (table) => {
            table.increments()
            table.string('name')
            table.string('currency') // points to products.currency
            table.timestamps()
        })
    }

    down () {
        this.drop('currencies')
    }
}

module.exports = CurrencySchema
