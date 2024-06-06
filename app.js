const books = require('./data/books.json');
const express = require("express");
const app = express(); // Inicializar servidor
const port = 3000;

app.get('/all', (req, res) => {
    res.json(books);
 });

app.get('/first', (req, res) => {
    res.json(books[0]);
 });

app.get('/last', (req, res) => {
    res.json(books[books.length - 1]);
 });

app.get('/middle', (req, res) => {
    res.json(books[books.length / 2]);
 });

app.get('/author/dante-alighieri', (req, res) => {
    const dante = books.find(book => book.author === 'Dante Alighieri');
    res.json(dante.title);
 });

app.get('/country/charles-dickens', (req, res) => {
    const dickens = books.find(book => book.author === 'Charles Dickens');
    res.json(dickens.country);
 });

app.get('/year&pages/cervantes', (req, res) => {
    const cervantes = books.find(book => book.author === 'Miguel de Cervantes');
    res.json({ pages: cervantes.pages, year: cervantes.year});
 });

app.get('/country/count/spain', (req, res) => {
    const booksFromSpain = books.filter(book => book.country === 'Spain');
    res.json(booksFromSpain.length);
 });

app.get('/country/at-least/germany', (req, res) => {
    let germany = true;
    const fromGermany = books.find(book => book.country === 'Germany');
    if (!fromGermany) germany = false;
    res.json(germany);
 });

app.get('/pages/all-greater/200', (req, res) => {
    let libroGrande = true;
    const moreThan200 = books.every(book => book.pages > 200);
    if (!moreThan200) libroGrande = false;
    res.json(libroGrande);
 });
 
 app.listen(port);