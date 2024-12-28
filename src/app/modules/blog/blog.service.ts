import QueryBuilder from '../../builder/QueryBuilder';
import { TBlog } from './blog.interface';
import Blog from './blog.model';

const createBlogIntoDB=async(payload:TBlog)=>{
    // const {author,...blogData}=payload
    // console.log(author,blogData)
    const result=await Blog.create(payload)
    // .populate('author','name email');
    // console.log(payload);
    return result
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