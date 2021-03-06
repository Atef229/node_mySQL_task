const express = require('express');
const app = express();
const db = require('./config/db');

// Create DB
// app.get('/createdb', (req, res) => {
//     let sql = 'CREATE DATABASE task';
//     db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Database created');
//     });
// });

// Create categories table
// app.get('/createcategories', (req, res) => {
//     let sql = 'CREATE TABLE categories (id INT NOT NULL AUTO_INCREMENT, category_name VARCHAR(45) NOT NULL, parent_id INT NULL ,PRIMARY KEY(id),CONSTRAINT parent_id FOREIGN KEY (parent_id)  REFERENCES task.categories (id) ON DELETE SET NULL ON UPDATE CASCADE)';
//     db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('categories table created');
//     });
// });

// Create products table
// app.get('/createproducts', (req, res) => {
//     let sql = 'CREATE TABLE products (product_id INT NOT NULL AUTO_INCREMENT, name VARCHAR(45) NOT NULL, image VARCHAR(45) NULL, category_id INT NOT NULL , PRIMARY KEY(id),  INDEX category_id_idx (category_id ASC) VISIBLE, CONSTRAINT category_id FOREIGN KEY (category_id) REFERENCES task.categories (id) ON DELETE NO ACTION  ON UPDATE CASCADE)';
//     db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('products table created');
//     });
// });

// Create providers table
// app.get('/createproviders', (req, res) => {
//     let sql = 'CREATE TABLE providers (provider_id INT NOT NULL AUTO_INCREMENT, provider_name VARCHAR(45) NOT NULL, PRIMARY KEY(id))';
//     db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('providers table created');
//     });
// });

// Create product_providers table
// app.get('/createtable', (req, res) => {
//     let sql = 'CREATE TABLE product_providers (products_id INT NOT NULL, providers_id INT NULL, price DOUBLE NOT NULL, available TINYINT NOT NULL DEFAULT 0, INDEX products_id_idx (products_id ASC) VISIBLE, INDEX providers_id_idx (providers_id ASC) VISIBLE, CONSTRAINT products_id FOREIGN KEY (products_id) REFERENCES task.products (id) ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT providers_id FOREIGN KEY (providers_id) REFERENCES task.providers (id) ON DELETE CASCADE ON UPDATE CASCADE)';
//     db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('product_providers table created');
//     });
// });