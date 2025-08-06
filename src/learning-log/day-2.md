# ✅ Day 2 — Rendering Flow, Favicon, App.css, Tailwind CSS

---

## 1. Added `favicon.ico`

- Included a favicon to visually identify the app in the browser tab.  
- File updated in: [`public/index.html`](../../public/index.html)

---

## 2. React Rendering Flow

This flow shows how React starts rendering from the root and reaches custom components:

```txt
index.html 
   ⬇ 
/src/main.jsx 
   ⬇ 
/src/App.jsx 
   ⬇ 
/src/topics/01-getting-started/GettingStarted.jsx
```

---

## 3. Reviewed `App.css`

**File:** `src/App.css`

- Styles the root wrapper component (`<App />`)  
- Controls layout, base fonts, and theme consistency  
- React-specific styles start from here  

---

## 4. Necessary VS Code Extensions

- **ES7+ React/Redux/React-Native snippets**
  - Helps quickly create components
  - Command keyword: `rafce` → React Arrow Function Component Export  

---

## 5. Installed Tailwind CSS (v4.x)

Set up Tailwind v4 (latest version) in the Vite + React project.  
This setup is slightly different from Tailwind v3 and older versions.

### ➤ Installation Steps

1. **Install Tailwind plugin for Vite**

   ```bash
   npm install tailwindcss @tailwindcss/vite
   ```

2. **Update `vite.config.js`**

   ```js
   import { defineConfig } from 'vite'
   import tailwindcss from '@tailwindcss/vite'

   export default defineConfig({
     plugins: [tailwindcss()],
   })
   ```

3. **Import Tailwind in your `index.css`**

   ```css
   /* src/index.css */
   @import "tailwindcss";
   ```

4. **Run the project**

   ```bash
   npm run dev
   ```

✅ Tailwind is now integrated. You can use its utility classes in your JSX files.

---

## 6. Learning `components`

---

## 🔗 Navigation

- [➡️ Next Day →](day-3.md)  
- [⬅️ Previous Day](day-1.md)  
- [🔙 Back to Log Index](README.md)
