import Categoria from '#models/categoria'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method

    await Categoria.createMany([
      { nome: 'Ação' },
      { nome: 'Aventura' },
      { nome: 'Comédia' },
      { nome: 'Drama' },
      { nome: 'Terror' },
      { nome: 'Suspense' },
      { nome: 'Ficção Científica' },
      { nome: 'Fantasia' },
      { nome: 'Animação' },
      { nome: 'Documentário' },
      { nome: 'Musical' },
      { nome: 'Faroeste' },
      { nome: 'Crime' },
      { nome: 'Guerra' },
      { nome: 'Biografia' },
    ])
  }
}
