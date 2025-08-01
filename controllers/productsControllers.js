import { getDBConnection } from '../db/db.js'

export async function getGenres(req, res) {

  try {

    const db = await getDBConnection()

    const genreRows = await db.all('SELECT DISTINCT genre FROM products')
    const genres = genreRows.map(row => row.genre)
    res.json(genres)

  } catch (err) {

    res.status(500).json({error: 'Failed to fetch genres', details: err.message})

  }
}

export async function getProducts(req, res) {

  try {

    const db = await getDBConnection()

    const { genre, search } = req.query

    let query = 'SELECT * FROM products'
    let conditions = []
    let params = []

    if (genre) {
      conditions.push('genre = ?')
      params.push(genre)
    }

    if (search) {
      conditions.push('(title LIKE ? OR artist LIKE ? OR genre LIKE ?)')
      params.push(`%${search}%`, `%${search}%`, `%${search}%`)
    }

    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ')
    }


    const products = await db.all(query, params)

    res.json(products)


  } catch (err) {

    res.status(500).json({error: 'Failed to fetch products', details: err.message})

  }

}
