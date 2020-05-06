'use strict'

const Model = use('Model')

class Product extends Model {

    // had to completely remove it
    currency () {
        return this.belongsTo('App/Models/Currency', 'currency', 'currency')
    }

    // renaming relation currency to currencee works
    // currencee () {
    //     return this.belongsTo('App/Models/Currency', 'currency', 'currency')
    // }

}

module.exports = Product
