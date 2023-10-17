const minimumInteger = -(Math.pow(2, 32) / 2)
const maximumInteger = Math.pow(2, 32) / 2 - 1

function validateFindProduct(id) {
  return validateId(id)
}

function validateFindProducts(options) {
  if (options === undefined) {
    return null
  }

  return validateSearch(options.search) ?? validatePagination(options.pagination)
}

function validateCreateProduct(name, price, description) {
  return (
    validateName(name) ??
    validatePrice(price) ??
    validateDescription(description)
  )
}

function validateReplaceProduct(id, name, price, description) {
  return (
    validateId(id) ??
    validateName(name) ??
    validatePrice(price) ??
    validateDescription(description)
  )
}

function validateUpdateProduct(id, name, price, description) {
  const err = validateId(id)
  if (err) {
    return err
  }

  const allPropertiesAreUndefined =
    name === undefined &&
    price === undefined &&
    description === undefined

  if (allPropertiesAreUndefined) {
    return new Error('All modifiable product properties are missing.')
  }

  if (name !== undefined) {
    const err = validateName(name)
    if (err) {
      return err
    }
  }

  if (price !== undefined) {
    const err = validatePrice(price)
    if (err) {
      return err
    }
  }

  if (description !== undefined) {
    const err = validateDescription(description)
    if (err) {
      return err
    }
  }

  return null
}

function validateDeleteProduct(id) {
  return validateId(id)
}

function validateSearch(search) {
  if (search !== undefined) {
    if (typeof search !== 'string') {
      return new Error('Search must be a string.')
    }

    if (search.length > 255) {
      return new Error('Search must be no longer than 255 characters.')
    }
  }

  return null
}

function validatePagination(pagination) {
  if (pagination !== undefined) {
    if (typeof pagination !== 'object') {
      return new Error('Pagination must be an object.')
    }

    if (pagination.page !== undefined) {
      const page = Number.parseInt(pagination.page)

      if (!Number.isInteger(page)) {
        return new Error('Page must be an integer.')
      }

      if (page < 1) {
        return new Error('Page must be no less than 1.')
      }

      if (page > maximumInteger) {
        return new Error(`Page must be no greater than ${maximumInteger}.`)
      }

      pagination.page = page
    }

    if (pagination.size !== undefined) {
      const size = Number.parseInt(pagination.size)

      if (!Number.isInteger(size)) {
        return new Error('Size must be an integer.')
      }

      if (size < 1) {
        return new Error('Size must be no less than 1.')
      }

      if (size > maximumInteger) {
        return new Error(`Size must be no greater than ${maximumInteger}.`)
      }

      pagination.size = size
    }
  }

  return null
}

function validateId(id) {
  if (id === undefined) {
    return new Error('Id is missing.')
  }

  if (!Number.isInteger(id)) {
    return new Error('Id must be an integer.')
  }

  if (id < minimumInteger) {
    return new Error(`Id must be no less than ${minimumInteger}.`)
  }

  if (id > maximumInteger) {
    return new Error(`Id must be no greater than ${maximumInteger}.`)
  }

  return null
}

function validateName(name) {
  if (name === undefined) {
    return new Error('Name is missing.')
  }

  if (typeof name !== 'string') {
    return new Error('Name must be a string.')
  }

  name = name.trim()

  if (name === '') {
    return new Error('Name must not be empty.')
  }

  if (name.length > 255) {
    return new Error('Name must be no longer than 255 characters.')
  }

  return null
}

function validatePrice(price) {
  if (price === undefined) {
    return new Error('Price is missing.')
  }

  if (typeof price !== 'number') {
    return new Error('Price must be a number.')
  }

  if (!Number.isFinite(price)) {
    return new Error('Price must be a finite number.')
  }

  if (price < 0) {
    return new Error('Price must be no less than 0.00.')
  }

  if (price >= 10_000_000_000) {
    return new Error('Price must be less than 10,000,000,000.00.')
  }

  return null
}

function validateDescription(description) {
  if (description === undefined) {
    return new Error('Description is missing.')
  }

  if (typeof description !== 'string') {
    return new Error('Description must be a string.')
  }

  description = description.trim()

  if (description === '') {
    return new Error('Description must not be empty.')
  }

  if (description.length > 10000) {
    return new Error('Description must be no longer than 10000 characters.')
  }

  return null
}

export default {
  validateFindProduct,
  validateFindProducts,
  validateCreateProduct,
  validateReplaceProduct,
  validateUpdateProduct,
  validateDeleteProduct
}
