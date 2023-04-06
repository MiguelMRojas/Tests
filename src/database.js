const mongoose = require('mongoose')


mongoose.set("strictQuery", true);
const coneccion = mongoose.connect("mongodb+srv://slisth:yosoypro123@tests.fvl3dzd.mongodb.net/test?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(db =>
        console.log('Database connected, MongoDB')
    )
    .catch((error) => console.log("MongoDB connection failed:", error.message))