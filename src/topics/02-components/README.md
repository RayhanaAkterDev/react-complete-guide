# 02 - React Components & JSX

This topic covers how to define and use components with JSX, along with key best practices and advanced JSX rules for writing clean, maintainable code.

---

## 1. What Are React Components?

React components are the fundamental units of UI in a React app.  
They let you break the UI into independent, reusable pieces that can be composed to build complex interfaces.

- Components are JavaScript functions (or classes) that return JSX to describe the UI.
- They encapsulate markup, styling, and behavior.
- Components can be nested and reused to build scalable applications.
- **Functional components** are the modern standard.

---

## 2. What Is JSX?

JSX (JavaScript XML) is a syntax extension that allows you to write HTML-like code inside JavaScript.  
React uses JSX to describe what the UI should look like.

- JSX is not a string or HTML — it compiles to `React.createElement()` calls.
- You can embed JavaScript expressions inside JSX using `{}`.
- JSX must return a single root element; use fragments (`<>...</>`) to group multiple elements.
- JSX makes your UI code more intuitive and declarative.

---

## 3. Writing Functional Components with JSX

### 🔹 Basic Functional Component Example

```jsx
function Greeting() {
  return <h1>Hello, React!</h1>;
}
```

Or using arrow function syntax:

```jsx
const Greeting = () => <h1>Hello, React!</h1>;
```

### 🔹 Key Points

- **Component names** must start with a **capital letter**.  
- Components **return JSX** or `null`.  
- Always **export components** to reuse them in other files.  
- Components can **accept props** to receive data (covered in the next topic).  

---

## 4. Advanced JSX Rules & Best Practices

- **Single Root Element**:  
  Always return a single parent element.  
  Use React fragments `<>...</>` when multiple elements need to be grouped.

- **JavaScript Expressions**:  
  Use `{}` to embed dynamic values or logic inside JSX.  
  **Example**:

  ```jsx
  const name = 'Sumaya';
  const x = 10;
  const y = 20;

  <p>Hello, {name}!</p>
  <p>The sum is: {x + y}</p>
  ```

- **Attribute Differences**:  
  Use `className` instead of `class`, and `htmlFor` instead of `for`.

- **Self-Closing Tags**:  
  Tags like `<img />`, `<input />`, `<br />` must be self-closed in JSX.

- **Comments**:  
  Use `{/* comment */}` syntax inside JSX blocks.

- **Conditional Rendering**:  
  Use `&&` or ternary (`? :`) operators to render elements conditionally:

  ```jsx
  {isLoggedIn ? <Dashboard /> : <Login />}
  {isVisible && <p>This is visible</p>}
  ```

- **Lists**:  
  Use `.map()` to render a list of components.  
  Provide a unique `key` prop for each item:

  ```jsx
  {items.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
  ```

- **Fragments**:  
  Use `<React.Fragment>` or shorthand `<>...</>` to group elements without adding extra nodes to the DOM.

---

## 5. Component Composition & Reusability

Components can be nested and composed to build scalable, maintainable UIs:

```jsx
function App() {
  return (
    <>
      <Greeting />
      <Content />
      <Footer />
    </>
  );
}
```

This promotes:

- **Reusability**  
- **Separation of concerns**  
- **Easier maintenance**  

---

## 📂 Demo Files

- [`Components.jsx`](./Components.jsx) — Main demo showing component with JSX and child component usage  
- [`Greeting.jsx`](./Greeting.jsx) — Simple reusable functional component  

---

## ➡️ Next Topic

Learn how to pass data to components and make them dynamic using **props**.

- [`03-props`](../03-props/README.md) - Passing data into components.

---

## 🔗 Navigation

- [⬅️ Previous Topic — Getting Started](../01-getting-started/README.md)  
- [🏠 Main README](../../../README.md)
