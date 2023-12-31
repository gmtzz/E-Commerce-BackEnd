const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/',async (req, res) => {
  // find all categories
    try{
      Category.findAll({
        include:[Product]
      }).then((data)=> res.json(data))

    }catch(err){
      console.error(err)
      res.status(500).json(err)
    }
  // be sure to include its associated Products
});

router.get('/:id',async (req, res) => {
  // find one category by its `id` value
  try{
    Category.findOne({
      where:{id:req.params.id},
      // be sure to include its associated Products
      include:[Product]
    }).then((data)=> res.json(data))

  }catch(err){
    console.error(err)
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try{
    Category.create(req.body).then((data)=> res.json(data))
  }catch(err){
    console.error(err)
    res.status(500).json(err)
  }
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  try{
    Category.update(req.body,{
      where:{id:req.params.id}
    }).then((data)=> res.json(data))
  }catch(err){
    console.error(err)
    res.status(500).json(err)
  }
});

router.delete('/:id',async (req, res) => {
  // delete a category by its `id` value
  try{
    Category.destroy({
      where:{id:req.params.id}
    }).then((data)=> res.json(data))  
  }catch(err){
    console.error(err)
    res.status(500).json(err)
  }
});

module.exports = router;