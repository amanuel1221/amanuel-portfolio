# Amanuel's Portfolio

![Lighthouse Score](https://img.shields.io/badge/Lighthouse-99%2F100-brightgreen?style=for-the-badge)
![Testing](https://img.shields.io/badge/Vitest-Passing-6E9F18?style=for-the-badge)
![Build](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge)
![Deployment](https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge)

A modern developer portfolio built with **React, Vite, and Tailwind CSS**, designed to showcase my projects, technical skills, services, and engineering experience.

The project focuses on **frontend performance, responsive UI, accessibility, testing, reusable architecture, and AI integration**.

It also includes **Redat**, an AI-powered portfolio assistant that combines structured personal data, local response routing, caching, conversation context, and Gemini-powered responses to provide visitors with fast, portfolio-aware answers.

---

## Live Demo

**[View Portfolio](https://amanuel-portfolio-flame.vercel.app)**

---

## What This Project Demonstrates

* React component architecture
* Performance optimization and Lighthouse profiling
* Responsive and accessible UI development
* Automated frontend testing with Vitest
* AI integration with Gemini
* Portfolio-aware AI responses
* Local response routing and caching
* Conversational context and chat history
* EmailJS contact automation
* Vercel production deployment

> **Build it → Test it → Measure it → Optimize it.**

# Performance Engineering

Performance was a major engineering goal of this portfolio.

The initial version scored **78 on Lighthouse**. After profiling the application and optimizing rendering, assets, and loading behavior, the production build reached **99**.

## Before vs. After

| Metric     | Before |    After |
| ---------- | -----: | -------: |
| Lighthouse |     78 |   **99** |
| LCP        |   1.9s | **0.8s** |
| TBT        |  820ms |  **0ms** |

|                   Initial Performance                   |                     Optimized Performance                    |
| :-----------------------------------------------------: | :----------------------------------------------------------: |
| ![Before Performance](/public/assets/images/before.png) | ![After Performance](/public/assets/images/mobile_after.png) |

## Optimization Work

* Lazy loading and code splitting
* Image optimization and WebP conversion
* Reduced unnecessary JavaScript
* Improved asset loading
* React rendering optimization
* Responsive image handling
* CSS and JavaScript minification
* Reduced unnecessary work during initial page load

## Performance Approach

```text
Identify Bottleneck
       ↓
Measure
       ↓
Optimize
       ↓
Measure Again
       ↓
Verify Improvement
```

Performance decisions were based on measurable results rather than visual perception alone.

|                       Initial Metrics                      |                     Optimized Metrics                    |
| :--------------------------------------------------------: | :------------------------------------------------------: |
| ![Before Metrics](/public/assets/images/metric_before.png) | ![After Metrics](/public/assets/images/metric_after.png) |




# Redat — AI Portfolio Assistant

**Redat** is an AI-powered assistant integrated into the portfolio to help visitors explore my projects, skills, services, experience, and technical background through a conversational interface.

The assistant uses a **hybrid response strategy** instead of sending every question directly to the AI model.

## Response Architecture

```text
User Question
      ↓
Question Analysis
      ↓
Local Routing
      ↓
Known Portfolio Request?
   ┌───┴────┐
  Yes      No
   ↓        ↓
Personal   Gemini
Data /     AI
Cache       ↓
   ↓      Generated
Fast       Response
Response      ↓
   └────┬─────┘
        ↓
   Chat Interface
```

## Key Engineering Concepts

### Local Response Routing

Frequently requested information can be identified locally using keyword-based routing.

Examples include questions about:

* Projects
* Skills
* Services
* Education
* Experience
* Testing
* Performance work

This avoids unnecessary AI requests for information that the application already knows.

### Personal Data Context

Redat uses structured portfolio data as its knowledge source, allowing responses to be based on my actual projects, technologies, services, and experience.

This makes the assistant **portfolio-aware rather than a generic chatbot**.

### Response Caching

Frequently requested responses can be cached so repeated questions can be answered faster without repeatedly generating the same response.

```text
First Request
     ↓
Generate / Retrieve Response
     ↓
Store in Cache
     ↓
Return Response

Repeated Request
     ↓
Cache Hit
     ↓
Fast Response
```

### Conversation Context

Redat maintains relevant conversation history so follow-up questions can be understood in the context of previous messages.

### Gemini Fallback

When a question cannot be efficiently handled by local routing or cached information, the request can be passed to **Gemini** for AI-generated responses.

This creates a balance between:

**Fast local responses + cached data + AI flexibility**

> The goal was to integrate AI as part of the application's architecture, while reducing unnecessary model requests and keeping common portfolio questions fast.


# Core Features

## Portfolio Experience

* Responsive homepage and navigation
* Project showcase with live and source-code links
* Services and technical skills
* Education and experience sections
* Interactive UI with Framer Motion
* Responsive mobile navigation
* Accessible interactive elements
* Contact form with submission feedback

## AI-Powered Portfolio Assistant

* Redat conversational AI assistant
* Portfolio-aware responses
* Local keyword-based response routing
* Personal data lookup
* Response caching for frequently requested information
* Gemini fallback for questions requiring AI generation
* Conversation history and contextual responses

## Contact Automation

The contact form uses **EmailJS** to deliver messages without requiring a dedicated email backend.

```text
Contact Form
     ↓
Validation
     ↓
EmailJS
     ↓
Email Delivery
     ↓
Success / Error Feedback
```

## Responsive Interaction

The interface is designed around both desktop and mobile experiences:

* Responsive layouts
* Mobile navigation
* Active navigation states
* Hover and interaction states
* Smooth transitions
* Touch-friendly controls
* Loading and error feedback

## Production-Focused Frontend

The portfolio is built with reusable React components and focuses on:

* Maintainable component structure
* Performance-conscious rendering
* Accessibility
* Responsive design
* Testable UI behavior
* Production deployment


# Screenshots

## Home Page

<p align="center">
  <img src="/public/assets/images/Home-pagep1.png" width="900" alt="Portfolio Home Page">
</p>

## Projects

<p align="center">
  <img src="/public/assets/images/Projectsp1.png" width="900" alt="Portfolio Projects Section">
</p>

## Services

<p align="center">
  <img src="/public/assets/images/Servicesp1.png" width="900" alt="Portfolio Services Section">
</p>

## Contact

<p align="center">
  <img src="/public/assets/images/success-contact.gif" width="900" alt="Successful Contact Form Submission">
</p>

## Mobile Interaction

<p align="center">
  <img src="/public/assets/images/mobile-interaction.gif" width="700" alt="Mobile Portfolio Interaction">
</p>

## Desktop Interaction

<p align="center">
  <img src="/public/assets/images/interaction-portfolio.gif" width="900" alt="Desktop Portfolio Interaction">
</p>

# Testing & Quality

The portfolio uses **Vitest** for automated frontend testing.

Testing focuses on important user-facing behavior and helps catch regressions when components or application logic are changed.

![Frontend Test Results](/public/assets/images/test.png)

## What Is Tested

* Navbar interactions and accessibility
* Project rendering and external links
* Contact form behavior
* Success and failure states
* Footer links
* Context-dependent components
* Component rendering and user interactions
* Dependency and state mocking

## Testing Approach

Tests are written around **user behavior rather than implementation details**.

```text
Component
    ↓
User Interaction
    ↓
Expected Behavior
    ↓
Vitest Verification
```

Testing also helped identify issues caused by missing context, dependencies, and test data. These were resolved by providing the required application state and properly mocking external dependencies.

```bash
npm run test
```

> Testing is part of the development workflow, not something added only after the feature is finished.

# Tech Stack

| Category        | Technologies                                                                 |
| --------------- | ---------------------------------------------------------------------------- |
| Frontend        | React, JavaScript, HTML5, CSS3                                               |
| Build Tool      | Vite                                                                         |
| Styling         | Tailwind CSS                                                                 |
| Animation       | Framer Motion                                                                |
| State & Data    | React Context, Static JSON                                                   |
| AI              | Gemini API, Redat AI Assistant                                               |
| AI Architecture | Local Routing, Personal Data Context, Response Caching, Conversation History |
| Email           | EmailJS                                                                      |
| Testing         | Vitest                                                                       |
| Icons           | Lucide React, React Icons                                                    |
| Deployment      | Vercel                                                                       |
| Development     | Git, GitHub                                                                  |

## Architecture Focus

The project combines a traditional React frontend with an AI-assisted interaction layer:

```text
React Application
       │
       ├── UI Components
       ├── Portfolio Data
       ├── State Management
       ├── Performance Layer
       └── Redat AI Assistant
                │
                ├── Local Routing
                ├── Cached Responses
                ├── Personal Context
                └── Gemini
```


# Project Structure

```text
amanuel-portfolio/
├── public/
│   └── assets/
│       └── images/
├── src/
│   ├── components/
│   ├── pages/
│   ├── store/
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Frontend Architecture

The application is organized around reusable React components and separated application concerns.

```text id="rj8x2m"
React Application
       │
       ├── Pages
       │
       ├── Reusable Components
       │
       ├── State / Store
       │
       ├── Portfolio Data
       │
       └── Services
              │
              ├── EmailJS
              │
              └── Redat AI
                     │
                     ├── Local Routing
                     ├── Personal Data
                     ├── Cache
                     └── Gemini
```

This structure keeps UI components reusable while separating application state, external services, portfolio data, and AI-related logic.

The architecture also makes it easier to optimize individual parts of the application without coupling the entire interface together.


# Development Workflow

I approached the portfolio as an engineering project rather than only a visual design exercise.

```text id="p9k4zs"
Plan
  ↓
Design
  ↓
Implement
  ↓
Test
  ↓
Measure
  ↓
Optimize
  ↓
Refactor
  ↓
Deploy
```

## Engineering Process

### Feature Development

Build reusable React components → integrate application logic → test user behavior → refine the implementation.

### AI Integration

Structure portfolio data → identify predictable requests → route common questions locally → use cached responses when available → fall back to Gemini when AI generation is needed.

### Performance

Profile the application → identify bottlenecks → optimize assets and rendering → measure Lighthouse metrics → verify the improvement.

### Quality

Write tests for important user flows → mock external dependencies when necessary → fix regressions → keep the implementation maintainable.

### Production

```text id="r5e3jw"
GitHub
   ↓
Vercel
   ↓
Production Portfolio
   ├── React Application
   ├── Redat AI Assistant
   └── EmailJS Contact System
```

The overall approach is simple:

> **Build with purpose, test the behavior, measure the result, and improve the implementation.**



# Getting Started

## Prerequisites

Make sure you have installed:

* Node.js
* npm
* Git

## Installation

```bash
git clone https://github.com/amanuel1221/amanuel-portfolio.git
cd amanu​​el-portfolio
npm install
```

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Run Locally

```bash
npm run dev
```

The development server will start with Vite.

## Run Tests

```bash
npm run test
```

## Production Build

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```


# What I Learned

Building this portfolio helped me strengthen my frontend engineering skills while introducing more advanced application concepts.

### Engineering Lessons

* Designing reusable React components and application structure
* Profiling and optimizing real frontend performance
* Using Lighthouse to measure improvements instead of relying on visual perception
* Writing maintainable tests with Vitest
* Integrating AI into an existing application rather than treating it as a separate feature
* Using local routing and caching to reduce unnecessary AI requests
* Providing structured personal data as context for AI responses
* Managing conversation history and contextual interactions
* Integrating third-party services such as EmailJS
* Building responsive and accessible interfaces
* Debugging production-oriented frontend issues

The biggest lesson was that adding a feature is only part of engineering. **Performance, testing, maintainability, and the way different systems work together are equally important.**


# Future Improvements

* [ ] Expand Redat with more advanced portfolio-aware interactions
* [ ] Improve AI response caching and invalidation
* [ ] Add more automated UI and accessibility testing
* [ ] Expand project case studies with technical deep dives
* [ ] Add backend-powered portfolio content management
* [ ] Improve offline and PWA capabilities
* [ ] Continue optimizing frontend performance
* [ ] Gradually migrate parts of the project to TypeScript
* [ ] Add CI-based testing and build verification

# License

This project is licensed under the MIT License.

---

# Author

**Amanuel Amare**

Full Stack Developer focused on **performance, testing, AI integration, and maintainable web applications**.

### Links

* **GitHub:** https://github.com/amanuel1221
* **Portfolio:** https://amanuel-portfolio-flame.vercel.app
* **LinkedIn:** https://www.linkedin.com/in/amanuel-amare-684234372

---

Built with React, performance engineering, testing, and a focus on continuous improvement.

