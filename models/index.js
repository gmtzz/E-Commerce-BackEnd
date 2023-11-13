//import models
const Category= require('./category')
const Product=require('./product')
const ProductTag=require('./ProductTag')
const Tag=require('./Tag')

//product belongs to category
Product.belongsTo(Category,{

    foreignKey:'category_id',
    onDelete:'CASCADE'
})
//category has many products
Category.hasMany(Product, {
    foreignKey:'category_id',

})
//product belongs to many tag        
Product.belongsToMany(Tag,{
    through: ProductTag,
    foreignKey: 'product_id'
})
//tag belongs to many product
Tag.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: 'tag_id'
})
//export models
module.exports={
    Product, Category, ProductTag, Tag
}