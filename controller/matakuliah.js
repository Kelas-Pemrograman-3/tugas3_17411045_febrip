const matakuliahmodel = require ('../models/matakuliah')

exports.simpanmatakuliah = (data) =>
new Promise ((resolve, reject) => {
    matakuliahmodel.create (data)
    .then (res => {
        resolve ({
            error : false,
            pesan : 'berhasil menginput data'
        })
    })
    .catch (() => {
        reject ({
            error : true,
            pesan : 'gagal menginput data'
        })
    })
})