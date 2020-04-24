import mongoose from 'mongoose'

const Schema = mongoose.Schema

const countryDataSchema = new Schema({
    ISOcode : String,
    name : {
        name: String,
        native: String
    },
    languages: [{
        nativeName: String,
        iso639_1: String
    }],
    currency: {
        rate: String,
        symbole: String,
    },
    timezones: [],
    coordinates: {
        latitude: Number,
        longitude: Number
    },
    requestCount: {type: Number, default : 1}
})

export default mongoose.model('CountryData', countryDataSchema, 'CountryData')