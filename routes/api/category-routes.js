const router = require('express').Router();
const { Category, Product } = require('../../models');

//The `/api/categories` endpoint

router.get('/', async (req, res) => {
  //ToDo find all categories
  // be sure to include its associated Products
  try {
  const data= await Category.findAll({
    include: [Product]
  })
  res.json(data)
} catch (err) {
  res.status(500).json(err.message)
}
});

router.get('/:id', async (req, res) => {
  //ToDo find one category by its `id` value
  // be sure to include its associated Products
  try {
    const data = await Category.findByPk(req.params.id, {
      include: [Product]
    })
  res.json(data)
  } catch (err) {
    res.status(500).json(err.message)
  }
});

router.post('/', async (req, res) => {
  //ToDo create a new category
  try {
    const data = await Category.create({
      category_name: req.body.category_name,
    })
  res.json(data)
  } catch (err) {
    res.status(500).json(err.message)
  }
});

router.put('/:id', async (req, res) => {
  //ToDo update a category by its `id` value
  try {
    const data = await Category.update(req.body, {
      where: {
        id: req.params.id,
      } 
    })
  res.json(data)
  } catch (err) {
    res.status(500).json(err.message)
  }
});

router.delete('/:id', async (req, res) => {
  //ToDo delete a category by its `id` value
  try {
    const data = await Category.destroy({
      where: {
        id: req.params.id,
      } 
    })
  res.json(data)
  } catch (err) {
    res.status(500).json(err.message)
  }
});

module.exports = router;
