import express from "express"
import routeNotif from "./routes/index.js"
import mongoose from "mongoose"

const app = express()
const port = 3030

//koneksi mongodb
mongoose.connect("mongodb://localhost:27017/restapi-riski", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;

//terjadi error
db.on('error', (error) => console.log(error));
//berhasil masuk
db.once('open', () => console.log("Database Terkoneksi"));

//convert data expressJS menjadi JSON
app.use(express.json());

app.use('/notification', routeNotif);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})