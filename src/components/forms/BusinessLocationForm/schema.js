import { z } from 'zod';

const amanaValues = ['Riyadh', 'Jeddah'];
const municipalityValues = ['Al Olaya', 'Al Malaz'];

export const BusinessLocationFormSchema = z.object({
  amana: z.enum(amanaValues, {
    required_error: 'Amana is required',
    invalid_type_error: 'Amana must be a valid value',
  }),
  municipality: z.enum(municipalityValues, {
    required_error: 'Municipality is required',
    invalid_type_error: 'Municipality must be a valid value',
  }),
  district: z
    .string()
    .optional()
    .refine((val) => val?.length <= 100, {
      message: 'District must be less than 100 characters',
    }),
  street: z
    .string()
    .optional()
    .refine((val) => val?.length <= 100, {
      message: 'Street must be less than 100 characters',
    }),
});
