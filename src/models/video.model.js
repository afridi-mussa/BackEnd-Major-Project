import mongoose, {Schema} from 'mongoose';

const videoSchema = new Schema(
    {
        videoFile: {
            type: String, // cloudnary
            required : true,

        },
        thumbnail: {
            type: String, 
            required : true,
        },
        title: {
            type: String, 
            required : true,
        },
        description: {
            type: String, 
            required : true,

        },
        duration: {
            type: Number, // cloudnary
            required : true,
        },
        views: {
            type : Number,
            default: 0
        },
        isPublished: {
            type : boolean,
            default: true 
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "user"
        }
},
{
    timestamps: true
}

)




export const Video = mongoose.model("Video", videoSchema)