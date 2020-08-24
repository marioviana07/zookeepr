const path = require('path');
const router = require('express').Router();

//root route of the server(create homepage). This gets index.html to be served by the Express.js server
router.get('/', (req, res) => {
    //respond with an html page to display in the browser. need to input directory(tell where to find the file)
    //using 'path' will work in any server environment
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
});

router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});

module.exports = router;