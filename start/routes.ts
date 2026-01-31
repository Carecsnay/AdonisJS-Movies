/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const CategoriasController = () => import('#controllers/categorias_controller')

router.get('/', async () => {
  return {
    hello: 'AdonisJS Movies',
  }
})

router.get('/categorias', [CategoriasController, 'index'])
