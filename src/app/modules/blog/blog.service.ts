// import QueryBuilder from '../../builder/QueryBuilder';
// import { Result } from './../../../../node_modules/arg/index.d';
// import { TBlog } from './blog.interface';
// import Blog from './blog.model';

// const createBlogIntoDB=async(payload:TBlog)=>{
//     const result=await Blog.create(payload);
//     return result
// }
// const getAllBlogsFromDB=async(query:Record<string,unknown>)=>{
//     console.log(query)

//     const searchableFields=['title','author','isPublished'];
// const blogQuery=new QueryBuilder
// (
//     Blog.find(),query
// )
// .search(searchableFields)
// .filter()
// .sort()
// .paginate()
// .select()


// }


// const getSingleBlogFromDB=async(id:string)=>{
//     const result = await Blog.findById(id);
//       return result;
// }

// const deleteBlogFromDB = async (id: string) => {
//     const result = await Blog.findByIdAndUpdate(
//       id,
//       { isDeleted: true },
//       {
//         new: true, 
//       },
//     );
//     return result;
//   };
  



// export const BlogServices={
//     createBlogIntoDB,
//     getAllBlogsFromDB,
//     getSingleBlogFromDB,
//     deleteBlogFromDB
// }