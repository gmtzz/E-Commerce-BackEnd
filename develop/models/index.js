const Category= require('./category')
const Product=require('./product')
const ProductTag=require('./ProductTag')
const Tag=require('./Tag')


Product.belongsTo(Category,{

    foreignKey:'category_id',
    onDelete:'CASCADE'
})
Category.hasMany(Product, {
    foreignKey:'category_id',

})
Product.belongsToMany(Tag,{
    through: ProductTag,
    foreignKey: 'product_id'
})
Tag.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: 'tag_id'
})

module.exports={
    Product, Category, ProductTag, Tag
}