# FusionConf Website

This is the Next.js single-page site for the FusionConf conference. It uses a small library of [shadcn/ui](https://ui.shadcn.com/) components and integrates with Contentful for managing content. The project is configured for deployment on [Vercel](https://vercel.com/).

## Development

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

### Environment Variables

Create a `.env.local` file with the following variables:

```
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
```

## Deployment

The repository contains a `vercel.json` configuration for hosting on Vercel.
