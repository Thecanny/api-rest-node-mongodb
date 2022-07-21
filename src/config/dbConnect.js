import mongoose from "mongoose";

const password = process.env.DB_PASSWORD
const dbName = process.env.DB_NAME
const dbCluster = process.env.DB_CLUSTER
const dbUser = process.env.DB_USER

mongoose.connect(`mongodb+srv://${dbUser}:${password}@${dbCluster}.ezrat.mongodb.net/${dbName}`)

let db = mongoose.connection;

export default db;