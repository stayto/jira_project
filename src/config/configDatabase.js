const mongoose = require('mongoose');
require('../models/User');
require('../models/Stone');
//TODO import models

async function configDatabase() {
    const connectionsString = 'mongodb://localhost:27017/earth-treasure';

    await mongoose.connect(connectionsString);
    
    console.log('Database connected');
}

module.exports = { configDatabase };