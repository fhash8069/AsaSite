# AsaSite

A modern, responsive website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Next.js 15** - Latest version with App Router
- 🔷 **TypeScript** - Type safety and better developer experience
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🌙 **Dark Mode** - Built-in dark mode support
- 📱 **Responsive** - Mobile-first responsive design
- 🚀 **Performance** - Optimized for speed and SEO
- 🧩 **Component-based** - Reusable UI components

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository or navigate to your project directory
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

Build the application for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Start the production server:

```bash
npm start
# or
yarn start
# or
pnpm start
```

## Project Structure

```
AsaSite/
├── src/
│   ├── app/                 # App Router pages and layouts
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # Reusable components
│   │   └── ui/              # UI components
│   │       └── Button.tsx   # Button component
│   └── lib/                 # Utility functions
│       └── utils.ts         # Helper utilities
├── public/                  # Static assets
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Customization

### Styling

This project uses Tailwind CSS for styling. You can customize the design by:

1. Modifying the `tailwind.config.js` file for theme customization
2. Editing the components in `src/components/`
3. Updating the global styles in `src/app/globals.css`

### Adding Pages

To add new pages:

1. Create a new folder in `src/app/`
2. Add a `page.tsx` file in that folder
3. The file will be automatically routed based on the folder name

Example:
```
src/app/about/page.tsx → /about
src/app/contact/page.tsx → /contact
```

### Components

Create reusable components in the `src/components/` directory. The project includes a sample Button component to demonstrate the pattern.

## Deployment

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy your app

### Other Platforms

You can also deploy to:
- Netlify
- AWS
- DigitalOcean
- Railway
- Heroku

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).