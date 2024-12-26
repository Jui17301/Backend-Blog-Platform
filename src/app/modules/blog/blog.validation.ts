import { z } from "zod";


 const createBlogValidationSchema = z.object({
  title: z.string({
    required_error: "Title is required",
  }),
  content: z.string({
    required_error: "Content is required",
  }),
  author: z.string().optional(),
  isPublished: z.boolean().optional().default(true)
});
const updateBlogValidationSchema = z.object({
    title: z.string({
      required_error: "Title is required",
      
    }).optional(),
    content: z.string({
      required_error: "Content is required",
    }).optional(),
    author: z.string().optional(),
    isPublished: z.boolean().optional().default(true)
  });

export const BlogValidations={
    createBlogValidationSchema,
    updateBlogValidationSchema
}
