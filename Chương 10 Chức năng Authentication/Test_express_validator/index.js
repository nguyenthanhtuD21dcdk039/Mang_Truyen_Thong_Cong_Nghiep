const express = require('express');
const { query, validationResult } = require('express-validator');

const app = express();

app.use(express.json());
app.get('/hello', query('person').notEmpty().withMessage('person query khong duoc de trong'), (req, res) => {
    const errors = validationResult(req)
    if(errors.isEmpty()){
        return res.send(`Hello, ${req.query.person}!`)
    }
    console.log(errors.array())
    res.status(400).json({errors: errors.array()})
});

app.listen(2810,()=>{
    console.log('Server is running on port 2810')
})