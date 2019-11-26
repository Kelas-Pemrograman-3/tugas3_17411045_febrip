const mahasiswamodel = require ('../models/mahasiswa')

exports.simpanmahasiswa = (data) =>
new Promise ((resolve, reject) => {
    mahasiswamodel.create (data)
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