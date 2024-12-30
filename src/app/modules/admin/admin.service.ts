import Blog from "../blog/blog.model";
import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";

const updateAdminBlockIntoDB = async (id: string) => {
    const result =await  User.findByIdAndUpdate(
         id ,
         
        {
            new:true
        }
    )
    return result
  }

const deleteAdminBlogFromDB = async (id: string) => {
    const result = await Blog.findByIdAndDelete(id);
    return result;
  };
  

export const adminBlogServices={
     updateAdminBlockIntoDB,
    deleteAdminBlogFromDB
}