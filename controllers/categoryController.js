const mongoose = require('mongoose');
const Category = mongoose.model("Category");

exports.createCategory = async (req, res) => {
    // now we can acccess req.payload because we have added it in the middleware
    const { name } = req.body;
    const { id } = req.payload;
    const nameRegex = /^[A-Za-z\s]+$/

    if(!nameRegex.test(name)) throw "Category name can contain only alphabets.";

    const CategoryExists = await Category.findOne({ name });
 
    if (CategoryExists) throw "Category with that name already exists!";

    const category = new Category({
        name, creator:id
    })

    await category.save();

    res.json({
        message: "Category created!",
    });

}

exports.getAllCategorys = async (req, res) => {
    const Categorys = await Category.find({});
    res.json(Categorys)
}