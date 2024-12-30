import  httpStatus  from 'http-status-codes';
import sendResponse from "../../utils/sendResponse"
import { BlogServices } from "../blog/blog.service"
import catchAsync from '../../utils/catchAsync';
import { adminBlogServices } from './admin.service';

const updateBlockUserByAdmin =catchAsync(async(req, res) =>{
    const {userId} = req.params
    await adminBlogServices.updateAdminBlockIntoDB(userId)

    sendResponse(res,{
      success: true,
      message: 'User blocked successfully',
      statusCode: httpStatus.OK,   
   
    })
})
const deleteBlogByAdmin = catchAsync(async (req, res) => {

    const { id } = req.params;
   await adminBlogServices.deleteAdminBlogFromDB(id);
  
    sendResponse(res, {
        success: true,
        message: 'Blog deleted successfully',
      statusCode: httpStatus.OK    
    });

  });


  export const AdminControllers={
   
    updateBlockUserByAdmin,
    deleteBlogByAdmin
  }

