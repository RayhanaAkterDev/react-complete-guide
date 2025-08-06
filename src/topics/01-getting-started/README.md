# 01 - Getting Started with React

React is a **JavaScript library** for building user interfaces using components.  
It allows developers to create reusable, declarative UIs with dynamic data and interactive logic.

---

## 1. What Is React?

React simplifies front-end development by allowing you to:

- Split UI into reusable **components**
- Use **JSX** to write HTML-like syntax inside JavaScript
- Manage **state** and respond to user input dynamically
- Use **hooks** to manage side effects, lifecycle, and logic reuse

---

## 2. Why Use React?

✅ Component-based architecture  
✅ Strong community and ecosystem  
✅ Fast rendering using the Virtual DOM  
✅ Works with any backend (Node, Laravel, Firebase, etc.)  
✅ Easy to learn if you're already familiar with JavaScript

---

## 3. Installing React with Vite (Recommended)

You can install React using **Vite**, a fast and modern build tool.

### Option 1: Setup in the Current Folder (for this learning repo)

If you're already inside your project folder (like this `react-complete-guide` repo):

```bash
npm create vite@latest . -- --template react
npm install
```

This sets up React using Vite in the current folder.

### Option 2: Setup in a New Folder

If you want to create a fresh new project:

```bash
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
```

## 4. Running the React App

In either case, start the dev server with:

```bash
npm run dev
```

This runs the app in development mode at:

```arduino
http://localhost:5173
```

✅ All your files inside the `src/` folder will auto-update as you save changes.

---

## 5. Folder Structure Overview

Here’s what you’ll see inside your project after setup:

| Path                | Purpose                                 |
| ------------------- | --------------------------------------- |
| `public/index.html` | The HTML file that loads your React app |
| `src/`              | Where all your components and logic go  |
| `src/App.jsx`       | Root component rendered by React        |
| `src/main.jsx`      | Entry point that starts your app        |
| `package.json`      | Lists all dependencies and scripts      |

✅ You only work inside the `src/` folder.

---

## 🎨 Tailwind CSS Integration

Tailwind CSS was added after the initial React setup.

👉 [See Day 2 Log](../../learning-log/day-2.md/#5-installed-tailwind-css-v4x) for installation commands, config, and usage notes.

---

## 📂 Demo Files

- [`GettingStarted.jsx`](./GettingStarted.jsx)

---

## ➡️ Next Topic

The next topic will help you build actual components and UI blocks.

- [`02-components`](../02-components/README.md) - Learn about React components, JSX, and props.

---

## 🔗 Navigation

[🏠 Main README](../../../README.md)
