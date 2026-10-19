# Assignment 1 - Personal Website

This is the template repository for ex1. The assignment instructions are in the
[course repository](https://github.com/product-jam-2027/course/).

## What's here

- `index.html` - your home page
- `elements.html` - a page with common HTML elements, to see how your CSS
  styles them
- `styles/reset.css` - a CSS reset that normalizes the browser's default styles
- `styles/main.css` - your styles
- `main.js` - your JavaScript
- `public/` - files that are served as they are, at the root of your website
  - `public/icons/` - the menu icons from the design
- `answers.md` - questions to answer as part of the assignment

Every `.html` file at the root of the repository becomes a page of your website.

## Commands

You need [Node.js](https://nodejs.org) version 24 or newer. Check with
`node --version`.

Install the dependencies:

```bash
npm install
```

Run the development server, then open
[http://localhost:3000](http://localhost:3000) in your browser:

```bash
npm run dev
```

Build your website into the `dist/` folder:

```bash
npm run build
```

Build, then preview the production build in your browser:

```bash
npm run preview
```
