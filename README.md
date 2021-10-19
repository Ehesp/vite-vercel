# Vite Vercel

This repo demonstrates an issue with Vite & Vercel CLI. 

1. Run `vc dev`.
2. Go to `https://localhost:3000` - this works as expected
3. Go to `https://localhost:3000/api/foo` - this works as expected
4. Go to `https://localhost:3000/api` or `https://localhost:3000/api/somethinghere` - this does not work, the API route is ignored.

This workflow works on Vercel on production:

1. https://vite-vercel-eta.vercel.app - works
2. https://vite-vercel-eta.vercel.app/api - works
3. https://vite-vercel-eta.vercel.app/api/foo - works
4. https://vite-vercel-eta.vercel.app/api/something - works