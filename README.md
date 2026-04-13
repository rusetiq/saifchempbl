# Freons Research Paper Website

A React + Vite + TypeScript application presenting a research study on Freons and their environmental impact.

## Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

### Setup Steps

1. Push this repository to GitHub
2. Go to **Settings > Pages** in your repository
3. Set **Source** to "GitHub Actions"
4. The workflow at `.github/workflows/deploy.yml` will automatically deploy on every push to main/master

### Manual Build

```bash
npm install
npm run build
```

The built files will be in the `dist/` directory.

### Development

```bash
npm install
npm run dev
```

## Project Structure

- `client/` - React application source
- `client/src/` - Components, pages, and styles
- `shared/` - Shared constants
- `dist/` - Build output (generated)

## Technologies

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Radix UI components
- Wouter (routing)
