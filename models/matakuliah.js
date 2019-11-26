const mongoose = require('mongoose')
const Schema = mongoose.Schema
const matakuliahSchema = new Schema ({
    namamk : {
        type : String
    },
    jam : {
        type : String
    },
    ruang : {
        type : String
    },
    iddosen : {
        type : String
    },
    namadosen : {
        type : String
    }
})

module.exports = mongoose.model('matakuliah',matakuliahSchema)