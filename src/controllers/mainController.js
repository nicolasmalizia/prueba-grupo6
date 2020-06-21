const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const PROHOMBRE = products.filter(pdto => pdto.category == 'HOMBRE');
const PROMUJER = products.filter(pdto => pdto.category == 'MUJER');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	root: (req, res) => {
		res.render('index', {
			PROHOMBRE,
			PROMUJER,
			thousandGenerator: toThousand
		});
	},
	//MODIFICADO
	catmujer: (req, res) => {
		res.render('catmujer', {
			
			PROMUJER,
			thousandGenerator: toThousand
		});
	},
	cathombre: (req, res) => {
		res.render('cathombre', {
			PROHOMBRE,
			
			thousandGenerator: toThousand
		});
	},
	login: (req, res) => {
		res.render('login', {
			thousandGenerator: toThousand
		});
	},
	register: (req, res) => {
		res.render('register', {
			thousandGenerator: toThousand
		});
	},
	search: (req, res) => {
		let word = req.query.keywords;
		let productsByWord = products.filter(pdto => pdto.name.toLowerCase().includes(word) ? pdto : null);	
		res.render('results', { 
			products: productsByWord, 
			keyword:  word,
			thousandGenerator: toThousand,
		});
	},
};

module.exports = controller;
