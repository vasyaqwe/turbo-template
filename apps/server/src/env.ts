/* eslint-disable no-restricted-properties */
import { createEnv } from "@t3-oss/env-core"
import { z } from "zod"

export const env = createEnv({
   shared: {
      NODE_ENV: z
         .enum(["development", "production", "test"])
         .default("development"),
   },
   clientPrefix: "VITE_",
   client: {
      VITE_BASE_URL: z.string().min(1),
   },
   server: {
      GITHUB_CLIENT_ID: z.string().min(1),
      GITHUB_CLIENT_SECRET: z.string().min(1),

      GOOGLE_CLIENT_ID: z.string().min(1),
      GOOGLE_CLIENT_SECRET: z.string().min(1),

      UNKEY_ROOT_KEY: z.string().min(1),
   },
   runtimeEnvStrict: {
      NODE_ENV: process.env.NODE_ENV,

      VITE_BASE_URL: process.env.VITE_BASE_URL,

      GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
      GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,

      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,

      UNKEY_ROOT_KEY: process.env.UNKEY_ROOT_KEY,
   },
})
