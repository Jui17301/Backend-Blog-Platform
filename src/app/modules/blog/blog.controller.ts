// import catchAsync from "../../utils/catchAsync";
// import sendResponse from "../../utils/sendResponse";
// import { BlogServices } from "./blog.service";
// import httpStatus from 'http-status-codes';

// const createBlog=catchAsync(async(req,res)=>{
//     const result=await BlogServices.createBlogIntoDB(req.body);

//     sendResponse(res, {
//       statusCode: httpStatus.CREATED,
//       success: true,
//       message: 'Blog is created successfully',
//     data:{
//         _id:result._id,
//         title:result.title,
//         content:result.content,
//         // author:result.author
//     }
//     });
// })


// const getAllBlogs = catchAsync(async (req, res) => {
//     const result = await BlogServices.getAllBlogsFromDB(req.query);
//     sendResponse(res, {
//       success: true,
//       message: 'Blogs fetched successfully',
//       statusCode: httpStatus.OK,
//       data: result
//     })
   
// })



// const getSingleBlog = catchAsync(async (req, res) => {
//     const { id } = req.params; // mongoose _id is only id
//     const result = await BlogServices.getSingleBlogFromDB(id);
  
//     sendResponse(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'Blog is retrieved successfully',
//       data: result,
//     });
//   });
  
//   const deleteBlog = catchAsync(async (req, res) => {
//     const { id } = req.params;
//     const result = await BlogServices.deleteBlogFromDB(id);
  
//     sendResponse(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'Blog is deleted successfully',
//       data: result,
//     });
//   });


//   export const BlogControllers={
//     createBlog,
//     getAllBlogs,
//     getSingleBlog,
//     deleteBlog
//   }











// import { Request, Response, NextFunction } from "express";
// import { Blog } from "../models/Blog";

// export const createBlog = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const { title, content } = req.body;
//         const blog = new Blog({ title, content, author: req.user.id });
//         await blog.save();
//         res.status(201).json({ success: true, message: "Blog created successfully", data: blog });
//     } catch (error) {
//         next(error);
//     }
// };

// export const updateBlog = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const { id } = req.params;
//         const { title, content } = req.body;
//         const blog = await Blog.findOneAndUpdate(
//             { _id: id, author: req.user.id },
//             { title, content },
//             { new: true }
//         );
//         if (!blog) {
//             return res.status(404).json({ success: false, message: "Blog not found or unauthorized" });
//         }
//         res.json({ success: true, message: "Blog updated successfully", data: blog });
//     } catch (error) {
//         next(error);
//     }
// };

// export const deleteBlog = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const { id } = req.params;
//         const blog = await Blog.findOneAndDelete({ _id: id, author: req.user.id });
//         if (!blog) {
//             return res.status(404).json({ success: false, message: "Blog not found or unauthorized" });
//         }
//         res.json({ success: true, message: "Blog deleted successfully" });
//     } catch (error) {
//         next(error);
//     }
// };

// export const getAllBlogs = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const blogs = await Blog.find().populate("author", "name");
//         res.json({ success: true, message: "Blogs fetched successfully", data: blogs });
//     } catch (error) {
//         next(error);
//     }
// };
