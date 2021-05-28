const express = require('express')
const app = express()
const port = 3000

app.get('/number', (req, res) => {
    res.send(`Put any number after http://localhost:${port}/number/ in the url to check whether it is ODD or EVEN`)
})

app.get('/number/:num', (req, res) => {
    var num = req.params.num; {
    if (num % 2 == 0){
        res.send(`This number ${num} is even`)
    } else {
        res.send(`This number ${num} is odd`)
    }
}
})

app.listen(port, () => {
    console.log(`Server running at port: http://localhost:${port}/number`)
})
