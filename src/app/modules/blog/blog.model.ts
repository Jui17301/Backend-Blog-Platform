// import { model, Schema } from "mongoose";
// import { TBlog } from "./blog.interface";
// import { boolean } from "zod";




// const blogSchema=new Schema<TBlog>({
//     title:{
//         type:String,
//         required:[true,'Title is required']
//     },
//     content:{
//         type:String,
//         required:[true,'Content is required']
//     },
//     author:{
//        type:Schema.Types.ObjectId,
//        required:[true,'Author means User ID is required'],
//        ref:'User'
//     },
//     isPublished:{
//         type:Boolean,
//         default:true
//     },
// },
// {
//     timestamps:true
// })

// const Blog = model<TBlog>('Blog',blogSchema)

// export default Blog