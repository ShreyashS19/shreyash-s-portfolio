# 🚀 Shreyash Shinde – 3D Portfolio 

## 📌 Introduction

This project is a **modern, interactive 3D portfolio website** built to showcase the work, skills, and experience of **Shreyash Shinde**, a Full-Stack Developer specializing in **React, Java, and Machine Learning**.

The application features immersive **3D visualizations**, smooth animations, and a highly responsive UI to create an engaging user experience.

---

## 📂 Table of Contents

* Introduction
* Features
* Tech Stack
* Usage
* Project Structure
* Configuration
* Examples
* Testing
* License

---

## ✨ Features

* 🎯 Interactive **3D portfolio scenes** (Three.js via React Three Fiber)
* 💼 Sections for:

  * About
  * Skills
  * Experience
  * Projects
  * Certificates
  * Contact
* ⚡ Smooth animations using **Framer Motion**
* 🎨 Modern UI using **Tailwind CSS + shadcn/ui**
* 📱 Fully responsive design
* 📊 Project-based 3D visual storytelling:

  * Bank Simulator
  * Churn Prediction (ML)
  * Exam Management System
  * Plant Disease Detection
* 📩 Contact form integration (EmailJS)
* 🌙 Dark mode support

---

## 🛠️ Tech Stack

### Frontend

* React (with TypeScript)
* Vite (Build tool)

### UI & Styling

* Tailwind CSS
* shadcn/ui
* Radix UI

### 3D & Animation

* Three.js
* @react-three/fiber
* @react-three/drei
* Framer Motion

### State & Data

* React Query (@tanstack/react-query)

### Forms & Validation

* React Hook Form
* Zod

### Testing

* Vitest
* Testing Library



---

## ▶️ Usage

Once the development server starts:

* Open browser at:

```
http://localhost:8080
```

* Navigate through:

  * Hero 3D landing
  * Skills orbit visualization
  * Project scenes
  * Contact section

---

## 📁 Project Structure

```
src/
 ├── components/
 │   ├── 3d/                # 3D scenes & visualizations
 │   ├── sections/          # Page sections (About, Projects, etc.)
 │   ├── ui/                # Reusable UI components
 │
 ├── hooks/                 # Custom React hooks
 ├── lib/                   # Utility functions
 ├── pages/                 # Route pages
 ├── test/                  # Unit tests
 │
 ├── App.tsx                # Main app component
 ├── main.tsx               # Entry point
```

---

## 🔧 Configuration

### Tailwind Config

* Located in: `tailwind.config.ts`
* Custom theme with:

  * Gradient colors
  * Glow effects
  * Animation utilities

### Vite Config

* Port: `8080`
* Alias:

```ts
@ → ./src
```

---

## 📊 Examples

### Example: 3D Scene Component

```tsx
<Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
  <ambientLight intensity={0.4} />
  <BankSimulatorScene />
</Canvas>
```

### Example: Navigation

```tsx
<Navigation />
```

---

## 🧪 Testing

Run tests using:

```bash
npm run test
```

Watch mode:

```bash
npm run test:watch
```


**3. 3D rendering issues**

* Ensure GPU acceleration is enabled
* Update browser (Chrome recommended)

---


## 📜 License

This project is licensed under the **MIT License**.




---

> 💡 *This portfolio demonstrates the fusion of frontend engineering and immersive 3D experiences.*
