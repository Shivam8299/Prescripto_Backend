import {v2 as cloudinary} from 'cloudinary'

const connectCloudinary = async ()=>{
    cloudinary.config({
        cloud_name:process.env.CLOUDINARY_NAME,
        api_key:process.env.CLOUDINARY_API_KAY,
        api_secret: process.env.CLOUDINARY_SECRIT_KEY
    })
}

export default connectCloudinary