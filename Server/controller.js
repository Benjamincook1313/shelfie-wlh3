
module.exports = {

  getAll: (req, res) => {
    req.app.get('db').get_inventory()
      .then((inventory) => {
        res.status(200).send(inventory)
      })
      .catch(err => console.log(err, 'Problem getting inventory'))
  },

  createProduct: (req, res) => {
    const {imageUrl, productName, price} = req.body

    req.app.get('db').create_product(imageUrl, productName, price)
    .then(() => {
      res.status(200).send('Product added to inventory')
    })
    .catch(err => console.log(err, 'Problem adding product'))
  },

  updateProduct: (req, res) => {
    const { id } = req.params
    const { image_url, product_name, price}

    req.app.get('db').update_product(id, image_url, product_name, price)
      .then((res) => {
        res.status(200).send('Product updated')
      })
      .catch(err => console.log(err, 'problem updating product'))
  },

  deleteProduct: (req, res) => {
    const { id } = req.params

    req.app.get('db').delete_product(id)
    .then(() => {
      res.status(200).send('Product deleted')
    })
    .catch(err => console.log('Problem deleting product'))
  }
}