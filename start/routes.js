'use strict'

const Route = use('Route')

Route.on('/').render('welcome')

Route.get('/currencies', 'ProductController.currencies')

Route.get('/products', 'ProductController.products')

Route.get('/productsWithCurrency', 'ProductController.productsWithCurrency')
