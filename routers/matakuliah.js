const matakuliah = require ('express') ()
const matakuliahcontroller = require ('../controller/matakuliah')

matakuliah.post('/simpanmk', (req, res) => {
    matakuliahcontroller.simpanmatakuliah (req.body)
    .then ( result => {
        res.json ( result)
    })
    .catch ( err => {
        res.json ( err )
    })
})

module.exports = matakuliah