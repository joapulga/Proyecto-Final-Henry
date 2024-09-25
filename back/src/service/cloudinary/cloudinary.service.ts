import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import {v2 as cloudinary, UploadApiErrorResponse, UploadApiOptions} from 'cloudinary'
import { Buffer } from 'buffer';

@Injectable()
export class CloudinaryService {
    constructor(){
        dotenv.config({
            path:'.env.development.local',
<<<<<<< HEAD
       });
        cloudinary.config({
           cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
           api_key: process.env.CLOUDINARY_API_KEY,
=======
        });
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
>>>>>>> 7c256ddaf63da8759abbb0a84fb65f9e7d658f01
            api_secret: process.env.CLOUDINARY_API_SECRET,
        });
    }
    async uploadFile(buffer: Buffer, original?: string): Promise<any> {
        const options: UploadApiOptions={
            folder: 'upload',
<<<<<<< HEAD
          public_id: original,
            resource_type: 'auto',
        }
        return new Promise((resolve, reject)=>{
           const stream = cloudinary.uploader.upload_stream(options, (error, result)=>{
=======
            public_id: original,
            resource_type: 'auto',
        }
        return new Promise((resolve, reject)=>{
            const stream = cloudinary.uploader.upload_stream(options, (error, result)=>{
>>>>>>> 7c256ddaf63da8759abbb0a84fb65f9e7d658f01
                error ? reject(error) : resolve(result.secure_url);
            });
            stream.write(buffer);
            stream.end();
        })
    }
}