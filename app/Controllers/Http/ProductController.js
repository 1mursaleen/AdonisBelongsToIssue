'use strict'

const Product = use('App/Models/Product')
const Currency = use('App/Models/Currency')

class ProductController {

    async currencies () {
        return await Currency.all()
    }

    async products () {
        return await Product.all()
    }

    async productsWithCurrency () {
        return await Product.query().with('currency').fetch()
        // return await Product.query().with('currencee').fetch()
    }

}

module.exports = ProductController
