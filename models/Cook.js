

const mongoose =require ("mongoose");
const cookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
    },
    Cuisines: {
        type: [String],
        required: true,
       
    },
    city: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
},{timestamps:true});
const Cook = mongoose.model('Cook', cookSchema);

module.exports = Cook;