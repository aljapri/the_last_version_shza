"use client";

import { z } from "zod";

export const formSchema = z.object({
  email: z.string().email(),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(50, {
    message: "Message must be at least 50 characters.",
  }),
});