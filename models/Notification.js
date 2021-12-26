import mongoose from "mongoose";
import { Timestamp } from "bson";

const Notification = mongoose.Schema({
    id_req: {
        type: String,
        require: true
    },
    nama: {
        type: String,
        require: true
    },
    no_hp: {
        type: Number
    },
    alamat: {
        type: String,
        require: true
    },
    hobby: {
        type: String
    },
}, {
    timestaps: true,
});

export default mongoose.model("Notifications", Notification);