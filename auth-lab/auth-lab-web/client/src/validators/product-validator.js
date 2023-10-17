function validateProduct(name, price, description) {
  return (
    validateName(name) ??
    validatePrice(price) ??
    validateDescription(description)
  )
}

function validateName(name) {
  if (name === undefined) throw new Error('Name is missing.')
  if (typeof name !== 'string') throw new Error('Name must be a string.')

  name = name.trim()

  if (name === '') {
    return new Error('Enter a name.')
  }

  if (name.length > 255) {
    return new Error('Enter a name no longer than 255 characters.')
  }

  return null
}

function validatePrice(price) {
  if (price === undefined) throw new Error('Price is missing.')
  if (typeof price !== 'number') throw new Error('Price must be a number.')

  if (price < 1) {
    return new Error('Enter a price no less than 1.')
  }

  if (price > 1000000) {
    return new Error('Enter a price no greater than 1000000.')
  }

  return null
}

function validateDescription(description) {
  if (description === undefined) throw new Error('Description is missing.')
  if (typeof description !== 'string') throw new Error('Description must be a string.')

  description = description.trim()

  if (description === '') {
    return new Error('Enter a description.')
  }

  if (description.length > 10000) {
    return new Error('Enter a description no longer than 10000 characters.')
  }

  return null
}

export default { validateProduct }
