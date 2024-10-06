import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type : String,
            required: true,
            unique: true,
            lowercase: true,

        },

        email:{
            type: String,
            required: true,
            unique:false,
            lowercase: true,

        },
        password:{
            type: String,
            required: [true,"password is required"],
            minlength: 8,

        }
    },{timestamps: true}
)

export const User = mongoose.model('User', userSchema)

// MongoDb me jane ke bad model ka name change ho jata hai in lower case and in plural form. 


