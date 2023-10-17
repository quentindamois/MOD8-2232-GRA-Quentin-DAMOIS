import database from './database.js'

const getProductCount = async (options) => {
  const command = buildCountCommand(options)
  const [result] = await database.execute(command.query, command.parameters)
  return result[0].total
}

const buildCountCommand = (options) => {
  const baseQuery = 'SELECT COUNT(id) total FROM products'

  const conditions = []
  const parameters = []

  addFindCommandConditions(options, conditions, parameters)

  const whereClause = conditions.length > 0 ? ` WHERE ${conditions.join(' AND ')}` : ''
  const query = `${baseQuery}${whereClause};`
  return { query, parameters }
}

const findProduct = async (id) => {
  const query = 'SELECT id, name, price, description FROM products WHERE id = ?;'
  const [rows] = await database.execute(query, [id])
  return rows.length > 0 ? mapProduct(rows[0]) : null
}

const findProducts = async (options) => {
  const command = buildFindCommand(options)
  const [rows] = await database.execute(command.query, command.parameters)
  return rows.map(mapProduct)
}

const mapProduct = (row) => {
  return {
    id: row.id,
    name: row.name,
    price: Number.parseFloat(row.price),
    description: row.description
  }
}

const buildFindCommand = (options) => {
  const baseQuery = 'SELECT id, name, price, description FROM products'
  const orderByClause = ' ORDER BY name ASC'
  let limitClause = ' LIMIT 0, 1000'

  const conditions = []
  const parameters = []

  addFindCommandConditions(options, conditions, parameters)

  if (options?.pagination) {
    const pagination = options.pagination
    const offset = (pagination.page - 1) * pagination.size
    const limit = pagination.size
    limitClause = ' LIMIT ?, ?'
    // Convert integer parameters to strings due to MySQL LIMIT clause bug.
    parameters.push(String(offset), String(limit))
  }

  const whereClause = conditions.length > 0 ? ` WHERE ${conditions.join(' AND ')}` : ''
  const query = `${baseQuery}${whereClause}${orderByClause}${limitClause};`
  return { query, parameters }
}

const addFindCommandConditions = (options, conditions, parameters) => {
  if (options?.search) {
    const search = `%${options.search}%`
    conditions.push('name LIKE ?')
    parameters.push(search)
  }
}

const createProduct = async (name, price, description) => {
  const product = {
    id: 0,
    name: name.trim(),
    price,
    description: description.trim()
  }

  const query = 'INSERT INTO products (name, price, description) VALUES (?, ?, ?);'
  const parameters = [product.name, product.price, product.description]
  const [result] = await database.execute(query, parameters)
  product.id = result.insertId
  return product
}

const updateProduct = async (id, name, price, description) => {
  const values = {
    'name': name,
    'price': price,
    'description': description
  }

  const command = buildUpdateCommand(id, values)
  const [result] = await database.execute(command.query, command.parameters)
  return result.affectedRows > 0
}

const buildUpdateCommand = (id, values) => {
  const columns = []
  const parameters = []

  for (const column in values) {
    const parameter = values[column]
    if (parameter !== undefined) {
      columns.push(column)
      parameters.push(parameter)
    }
  }

  const query = `UPDATE products SET ${columns.map((column) => column + ' = ?').join(', ')} WHERE id = ?;`
  parameters.push(id)

  return { query, parameters }
}

const deleteProduct = async (id) => {
  const query = 'DELETE FROM products WHERE id = ?;'
  const [result] = await database.execute(query, [id])
  return result.affectedRows > 0
}

export default {
  getProductCount,
  findProducts,
  findProduct,
  createProduct,
  updateProduct,
  deleteProduct
}
