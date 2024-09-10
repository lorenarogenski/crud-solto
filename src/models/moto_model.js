const db = require('../db.js')

const Schema = db.Schema;

const motoSchema = new Schema({
    cor: {
        type: Schema.Types.String,
        required: true
    },
    marca: {
        type: Schema.Types.String,
        required: true
    },
    modelo: {
        type: Schema.Types.String,
        required: true
    },
    cilindrada: {
        type: Schema.Types.Number,
        required: true
    },
    peso: {
        type: Schema.Types.Number,
        required: true
    }
})

const Moto = db.model("Moto", motoSchema)

module.exports = Moto