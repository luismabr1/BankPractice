import getConfig from 'next/config';


const mongoose = require('mongoose');
const {serverRuntimeConfig} = getConfig()
const Schema = mongoose.Schema;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URI || serverRuntimeConfig.connectionString)
    .catch(error => console.log(error))

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
export const db = {
    User: userModel(),
    Login: loginModel(),
    Cuenta: accountModel()
};

function userModel() {
    const schema = new Schema({
        username: { type: String, unique: true, required: true },
        hash: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true }
    }, {
        // add createdAt and updatedAt timestamps
        timestamps: true
    });

    schema.set('toJSON', {
        virtuals: true,
        versionKey: false,
        transform: function (doc, ret) {
            delete ret._id;
            delete ret.hash;
        }
    });

    return mongoose.models?.User || mongoose.model('User', schema);
}

function loginModel() {
    const schema = new Schema({
        email: { type: String, unique: true},
        password: { type: String},
    }, {
        // add createdAt and updatedAt timestamps
        timestamps: true
    });

    schema.set('toJSON', {
        virtuals: true,
        versionKey: false,
        transform: function (doc, ret) {
            delete ret._id;
        }
    });

    return mongoose.models?.Login || mongoose.model('Login', schema);
}

function accountModel() {
    const schema = new Schema({
        disponible: { type: Number},

    }, {
        // add createdAt and updatedAt timestamps
        timestamps: true
    });

    schema.set('toJSON', {
        virtuals: true,
        versionKey: false,
        transform: function (doc, ret) {
            delete ret._id;
        }
    });

    return mongoose.models?.Cuenta || mongoose.model('Cuenta', schema);
}