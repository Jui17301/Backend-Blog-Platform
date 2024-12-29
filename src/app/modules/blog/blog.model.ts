import { model, Schema } from "mongoose";
import { TBlog } from "./blog.interface";




const blogSchema=new Schema<TBlog>({
    title:{
        type:String,
        required:[true,'Title is required']
    },
    content:{
        type:String,
        required:[true,'Content is required']
    },
    author:{
       type:Schema.Types.ObjectId,
       required:[false,'Author means User ID is required'],
       ref:'User',
   
    },
    isPublished:{
        type:Boolean,
        default:true //published
    },
},
{
    timestamps:true
})

const Blog = model<TBlog>('Blog',blogSchema)

export default Blog