const db = require('../db.js')

const Schema = db.Schema

const refrigeranteSchema = new Schema({
    porcentagem_suco: {
        type: Schema.Types.Number,
        required: true
    },
    kcal200ml: {
        type: Schema.Types.Number,
        required: true
    },
    sabor: {
        type: Schema.Types.String,
        required: true
    },
    tamanhoMl: {
        type: Schema.Types.Number,
        required: true
    }
});

const Refrigerante = db.model("Refrigerante", refrigeranteSchema)

module.exports = Refrigerante;