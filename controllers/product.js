const db = require('../config/db');

//get product by id
const ProductByCategoryId=(req, res) => {
    db.query('SELECT * FROM product_providers RIGHT JOIN products ON products.product_id = product_providers.products_id WHERE category_id = ? AND available = 1 ORDER BY price ASC LIMIT 1'
    ,[req.params.category_id],
    (err, rows) => {
        if (!err)
            res.status(200).json({ success: true, product: rows });
        else
            console.log(err);
    })
}

//get all product with pagination
const Products= (req, res) => {

    res.status(200).json(res.advancedResults);
}

module.exports = {
    ProductByCategoryId,
    Products
};