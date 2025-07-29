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

    let query = 'SELECT * FROM products'
    let params = []

    const { genre, search } = req.query

    if(genre && search){
      query = 'SELECT * FROM products WHERE genre = ? AND (title LIKE ? OR artist LIKE ? OR genre LIKE ?)'
      
      params.push(genre,`%${search}%`,`%${search}%`, `%${search}%`)
    }

    if (genre) {
      query = 'SELECT * FROM products WHERE genre = ?'
      params.push(genre)
    }

    if(search){
      query = 'SELECT * FROM products WHERE title LIKE ? OR artist LIKE ? OR genre LIKE ?'
      params.push(`%${search}%`,`%${search}%`,`%${search}%`)
    }
/*
Challenge:

1. When the user inputs text into the search box, that text will be passed to the server as a query string. We should serve products where the search text finds a match with the title, artist, or genre. We are accepting partial matching queries, so "lo" would match with "block" and "slow" and "allow".

hint.md for help!

Example incoming query: '?search=lo'
*/
    const products = await db.all(query, params)

    res.json(products)


  } catch (err) {

    res.status(500).json({error: 'Failed to fetch products', details: err.message})

  }

}