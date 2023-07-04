import z from 'zod';

export const mailSchema = z.object({
  from: z.string().nonempty().email(),
  title: z.string().nonempty(),
  message: z.string().nonempty(),
});

export type Mail = z.infer<typeof mailSchema>;
