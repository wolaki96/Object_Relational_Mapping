const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// find all the categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  
});
  // find one category by its `id` value

router.get('/:id', async (req, res) => {
  const categoryData = await Category.findByPk(req.params.id, {
    include: [{ model: Product}]
  });
 if (!categoryData) {
  res.status(404).json({ message: "No category found with this ID! Please try again."})
  return;
 }
});
//creating a  new category

router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});
// update a category by its `id` value

router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(req.body,
      {where: {id: req.params.id}}
    );
  if (!categoryData) {
    res.status(404).json({ message: "No category found with this ID! Please try again."})
  return;
  }
  res.status(200).json();
} catch (err) {
  res.status(500).json(err);
}
});

// delete a category by its `id` value

router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: { id: req.params.id }
    });
    if (!categoryData){
      res.status(404).json({ message: 'No category with this ID! Please try again.'});
      return;
    }
    res.status(200).json(categoryData);
   }catch (err) {
    res.status(500).json(err);
   }
  }
);

module.exports = router;
