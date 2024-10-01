import {defineConfig} from 'tinacms'
import Global from './collections/global'
import Page from './collections/page'
import Blogs from './collections/blogs'
const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === 'true'
const branch =
    process.env.NEXT_PUBLIC_TINA_BRANCH || process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || process.env.HEAD || 'main'
const config = defineConfig({
    token: process.env.TINA_TOKEN,
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    client: {
        referenceDepth: 1
    },
    branch,
    tina: {
        publicFolder: 'public',
        mediaRoot: 'uploads'
    },
    build: {
        outputFolder: 'admin',
        publicFolder: 'public'
    },
    media: {
        // loadCustomStore: async () => {
        //   const pack = await import("next-tinacms-s3");
        //   return pack.TinaCloudS3MediaStore;
        // },
        tina: {
            publicFolder: 'public',
            mediaRoot: 'uploads'
        }
    },

    schema: {
        collections: [Page, Global, Blogs]
    }
})

export default config
