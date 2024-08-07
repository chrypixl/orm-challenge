const router = require('express').Router();
const { Category, Product } = require('../../models');

//ToDo The `/api/categories` endpoint

router.get('/', (req, res) => {
  //ToDo find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  //ToDo find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  //ToDo create a new category
});

router.put('/:id', (req, res) => {
  //ToDo update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  //ToDo delete a category by its `id` value
});

module.exports = router;
