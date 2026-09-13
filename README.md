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
