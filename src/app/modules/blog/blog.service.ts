import mongoose from 'mongoose';
import QueryBuilder from '../../builder/QueryBuilder';
import { TBlog } from './blog.interface';
import Blog from './blog.model';
import { User } from '../user/user.model';

const createBlogIntoDB=async(payload:TBlog)=>{
    const {author,...blogData}=payload
    // console.log(author,blogData)

    const session = await mongoose.startSession();
    try {
        session.startTransaction();

        const isAuthorExist=await User.findById({_id:author}).session(session);
        if (!isAuthorExist) {
            throw new Error('Author is not found');
          }

          const result=(await Blog.create([{ ...blogData, author }], { session }))[0];
          await result.populate('author', 'name email');
        //   console.log(result);
          await session.commitTransaction();
          session.endSession();
          
          return {
            _id: result._id,
            title: result.title,
            content:result.content,
            author: result.author,
          };
    } catch (error) {
        
    await session.abortTransaction();
    session.endSession();
    throw error;

    }
}
const getAllBlogsFromDB=async(query:Record<string,unknown>)=>{
    // console.log(query)
    const searchableFields=['title','content'];
const blogQuery=new QueryBuilder
(
    Blog.find(),query
)
.search(searchableFields)
.filter()
.sort()
// .select()

}
const updateBlogIntoDB = async (id: string, payload: Partial<TBlog>) => {
    const result = Blog.findByIdAndUpdate(
        { _id: id },
         payload,
        {
            new:true
        }
    )
    return result
  }

const deleteBlogFromDB = async (id: string) => {
    const result = await Blog.findByIdAndDelete(id);
    return result;
  };
  

export const BlogServices={
    createBlogIntoDB,
    getAllBlogsFromDB,
     updateBlogIntoDB,
    deleteBlogFromDB
}