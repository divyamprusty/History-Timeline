const express = require('express')
const app = express()
const port = 3000

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
    console.log(`Example app listening at https://localhost:${port}`)
})
