import z, { maxLength, minLength } from "zod";

export const productSchema = z.object({
  name: z.string().check(minLength(4), maxLength(50)), 
  brand: z.string().optional(),
  category: z.string(),
  price: z.string().min(1).max(100000),
  stock: z.string().default(1),
});