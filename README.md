# GifExpertApp

A GIF search application built with React 18. Users can search by category and browse animated GIFs fetched from the Giphy API. Built as a learning project to practise React hooks, custom hooks, and component-based architecture.

**Stack:** React 18 · JavaScript ES6+ · Giphy API · Create React App

---

## Features

- Search GIFs by category
- Add multiple categories simultaneously
- Custom `useFetchGifs` hook for data fetching and loading state
- Prevents duplicate or empty category submissions
- Displays up to 10 GIFs per category

---

## Running locally

```bash
npm install
npm start
```

Opens at `http://localhost:3000`.

## Production build

```bash
npm run build
```

---

## Project structure

```
react-gifexpertapp/
└── src/
    ├── GifExpertApp.js         ← root component, state management
    ├── components/
    │   ├── AddCategory.js      ← search input form
    │   ├── GifGrid.js          ← grid display per category
    │   └── GifGridItem.js      ← individual GIF card
    ├── hooks/
    │   └── useFetchGifs.js     ← custom hook for Giphy API calls
    └── helpers/
        └── getGifs.js          ← Giphy API fetch logic
```
