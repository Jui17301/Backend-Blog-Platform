import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BlogServices } from "./blog.service";
import httpStatus from 'http-status-codes';

const createBlog=catchAsync(async(req,res)=>{
  

  const payload ={
    ...req.body,
     author :req.user?.id
  }
  // console.log({payload});
    const result=await BlogServices.createBlogIntoDB(payload);
    //  console.log(result)
    sendResponse(res, {
      success: true,
      message: 'Blog created successfully',
      statusCode: httpStatus.CREATED,
      data:result
    });
})

const getAllBlogs = catchAsync(async (req, res) => {
    const result = await BlogServices.getAllBlogsFromDB(req.query);
    sendResponse(res, {
      success: true,
      message: 'Blogs fetched successfully',
      statusCode: httpStatus.OK,
      data:result
    //   data: {
    //     _id:result._id,
    //     title:result.title,
    //     content:result.content,
    //     author:result.author
    //   }
    })
   
})

const updateBlog =catchAsync(async(req, res) =>{
    const {id} = req.params
    const body = req.body
    const result = await BlogServices.updateBlogIntoDB(id, body)

    sendResponse(res,{
      success: true,
      message: 'Blog updated successfully',
      statusCode: httpStatus.OK, 
      data:result
      // data: {
      //   _id:result?._id,
      //   title:result?.title,
      //   content:result?.content,
      //   author:result?.author
      // }  
   
    })
})
const deleteBlog = catchAsync(async (req, res) => {

    const { id } = req.params;
   await BlogServices.deleteBlogFromDB(id);
  
    sendResponse(res, {
        success: true,
        message: 'Blog deleted successfully',
      statusCode: httpStatus.OK    
    });
  });


  export const BlogControllers={
    createBlog,
    getAllBlogs,
    updateBlog,
    deleteBlog
  }

