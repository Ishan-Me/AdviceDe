import {z} from 'zod';

export const acceptMessageSchema = z.object({
    acceptsMessage: z.boolean(),
})