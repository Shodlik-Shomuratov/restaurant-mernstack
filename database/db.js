const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://restaurant-user:fjaFrAH2XwCdTfJ1@restaurant-mernstack.wuc8y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )

        console.log('Database connection success!')
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB


