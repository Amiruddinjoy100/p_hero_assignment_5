# DevStack Builder — Assignment 5

A React project where users can explore different technologies and create their own technology stack by adding and removing technologies.

---

## 📋 Table of Contents

- [Overview & Features](#-overview--features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [React Conceptual Questions & Answers](#-react-conceptual-questions--answers)

---

## 🚀 Overview & Features

- Shows different technologies in cards.
- Loads technology data from a local JSON file.
- Users can add technologies to their own stack.
- Users can remove technologies from the stack.
- Prevents adding the same technology more than once.
- Shows toast messages when adding or removing technologies.
- Responsive design for mobile, tablet, and desktop.
- Uses fallback icons if an image fails to load.
- Simple and clean white theme.

---

## 🛠️ Tech Stack

- **React** — Used to build the user interface.
- **TypeScript** — Used for writing type-safe code.
- **Vite** — Used to create and run the React project.
- **Tailwind CSS** — Used for styling.
- **DaisyUI** — Used for some UI components.
- **Lucide React** — Used for icons.
- **React Toastify** — Used for toast notifications.
- **Devicon** — Used for technology icons.

---

## 📦 Getting Started

### Prerequisites

Before running this project, make sure you have **Node.js (v18 or higher)** installed.

### Installation

First, clone the repository:

```bash
git clone https://github.com/Amiruddinjoy100/p_hero_assignment_5.git

## 📂 Project Architecture & Directory Structure

```text
p_hero_assignment_5/
├── public/
│   └── technologies.json       # Mock JSON dataset containing tech stack entities
├── src/
│   ├── assets/                 # Static visual assets (banner-stack.png, hero graphics)
│   ├── components/             # Modular React UI components
│   │   ├── Footer.tsx          # Application footer section
│   │   ├── Hero.tsx            # Hero banner display
│   │   ├── Navbar.tsx          # Navigation header bar
│   │   ├── StackSidebar.tsx    # Sidebar displaying selected stack items
│   │   └── TechCard.tsx        # Individual technology item display card
│   ├── types/                  # TypeScript interfaces and types
│   │   └── technology.ts       # Technology interface definition
│   ├── App.tsx                 # Core state container and data controller
│   ├── main.tsx                # Application root entry point
│   └── index.css               # Global styles and Tailwind CSS v4 directives
├── package.json                # Dependencies and npm script runner
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite bundle builder configuration
└── README.md                   # Project documentation
---

## ❓ React Conceptual Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX (JavaScript XML) is a syntax extension that lets you write HTML-like markup directly inside JavaScript/TypeScript files. React uses JSX because it keeps component UI structure and display logic together, making components far easier to read and maintain.

### 2. What is the difference between props and state?
- **Props (Properties):** Read-only data passed down from a parent component to a child component. A child component cannot modify its props.
- **State:** Local, mutable data managed internally by a component. When state changes, React automatically re-renders the component to update the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?
The `useState` hook allows functional components to declare and update local reactive state. In this project, `useState` is used inside `App.tsx` to hold the list of technologies (`technologies`), the user's selected stack (`stack`), and the loading status (`loading`).

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
The `useEffect` hook handles side effects in components, such as data fetching or direct DOM manipulation. It was used here to run an asynchronous `fetch()` request once when the app mounts to load data from `/technologies.json`.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
The `key` prop gives React a unique identifier for every element rendered in a dynamic list. This helps React's Virtual DOM diffing engine track additions, removals, and reorders efficiently without re-rendering the whole list.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering is displaying different UI elements based on state values or conditional checks.

*Example from `StackSidebar.tsx`:*
```tsx
{stack.length === 0 ? (
  <p className="text-slate-500 text-center py-6">Your stack is currently empty</p>
) : (
  <StackList items="{stack}" onRemove="{onRemove}"/>
)}