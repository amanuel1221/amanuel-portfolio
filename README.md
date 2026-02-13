# 🌐 Amanuel's Portfolio

![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Build](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge)
![Deployment](https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge)


A modern, responsive developer portfolio built with **React**, **Vite**, and **Tailwind CSS**. 
Designed to showcase projects, skills, and professional branding with clean, reusable components.

 ---

 ## 🔗 Live Demo 

 👉 [View Demo](https://amanuel-portfolio-flame.vercel.app)


 ## 🏠 Home Page
  The homepage introduces the portfolio with a clean hero section, navigation, and highlights of featured projects.

![Hero](/public/assets/images/Home-pagep1.png) 


--- 

## 📂 Projects Section 
- Showcases featured applications with screenshots, descriptions, and live/demo links. 
- Built with **reusable React components** for scalability. 
- Includes hover animations, responsive cards, and quick access to GitHub repositories. 

![Projects](/public/assets/images/Projectsp1.png) 

--- 

## 🛠️ Services Section 
Highlights the professional services offered: 

- **Web Development** – Modern, scalable apps with React, Vite, Tailwind CSS. 
- **UI/UX Design** – Polished interfaces with accessibility and responsive layouts. 
- **API Integration** – Django REST APIs, third‑party services, and secure workflows. 
- **Testing & Reliability** – Vitest integration for unit and integration tests. 
- **Contact Automation** – EmailJS for direct communication via contact forms. 

![Services](/public/assets/images/Servicesp1.png)

--- 

## 📞 Contact Section

Interactive contact form powered by **EmailJS**.  
Users can send messages directly without leaving the site.

### ✉️ Contact Flow

- Fill out the form with name, email, and message.  
- EmailJS delivers the message instantly.  
- Confirmation feedback shown to the user.  

---

### ✅ Success Case
Shows the confirmation message when the contact form is submitted successfully.

![CONTACT SUCCESS GIF](/public/assets/images/success-contact.gif)

---

### ❌ Failure Case
Shows the error feedback when the contact form fails (e.g., invalid email, server issue).

![CONTACT FAIL GIF](/public/assets/images/failcontact.gif)

---

## 📱 Mobile-Friendly
Interactions pf my portfolio is fully responsive and optimized for mobile devices. 
Here are some GIFs showcasing the interactions: 

### Interactions 
- Collapsible mobile menu with smooth animations 
- Active link highlighting and accessibility labels 
![Mobile Navbar GIF](/public/assets/images/mobile-interaction.gif) 

---

## DeskTop Interaction
Interactions of my portfolio in Desktop with hover and clickable links check.
- Active link highlighting and accessibility labels 

![Desktop Interaction Gif](/public/assets/images/interaction-portfolio.gif) 



## ⚙️ Tech Stacks & Badges
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-FF5A5F?style=for-the-badge&logo=gmail&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)


## 🛠 Tech Stack

- **Frontend:** HTML5 + CSS3 + React + Vite  
- **Styling:** Tailwind CSS + Framer Motion (animations)  
- **State Management:** React Contexts
- **Email Service:** EmailJS (contact automation)  
- **Icons:** Lucide React and React icons fa
- **Hosting:** Vercel  
- **Data:** Static JSON  
- **Testing:** Vitest unit tests
## 💻 Installation & Setup

```bash

# 1. Clone repo
git clone https://github.com/amanuel1221/amanuel-portfolio.git
cd amanuel-portfolio

# 2. Install dependencies
npm install

# 3. Add environment variables (.env) for EmailJS
VITE_EMAILJS_SERVICE_ID=your Emailjs Sevice Id xxxx
VITE_EMAILJS_TEMPLATE_ID=your Emailjs Template Id xxxx 
VITE_EMAILJS_PUBLIC_KEY= your Emailjs Public Id xxxx

# 4. Start dev server
npm run dev

# 5. Open app

http://localhost:5173

🧪 Testing

bash
# install the vitest using 
npm install vitest

# Run all tests
npm run test

Coverage:

Navbar Tests: Active link styling, accessibility labels, hover animations

ProjectCard Tests: Rendering, responsive layout, links to GitHub/demo, and Live Demo

ContactForm Tests: EmailJS integration, success/fail feedback

Footer Tests: Social icons, hover states, accessibility

Testing Experience:

Debugged initial failures due to missing contects and store datas

Learned how to mock context and pass proper test data

After debugging, all tests pass successfully ✅

📂 Project Structure
css
amanuel-portfolio/
├─ public/
├─ src/
│  ├─ components/
│  │   ├─ Navbar.jsx
│  │   ├─ Footer.jsx
│  │   ├─ Project.jsx
│  │   ├─ Contact.jsx
│  │   ├─ Services.jsx
│  │   └─ HeroSection.jsx
│  ├─ pages/
│  │   ├─ Home.jsx
│  │   
│  ├
│  ├
│  ├─ store/
│  │   ├─ offer.js
│  │   ├─ services.js
│  │   ├─ projectExperiance.js
│  │   ├─ Services.js
│  │   └─ EduExperiance.js
│  │   ├─ Projects.js
│  │  
│  ├─ App.jsx
│  └─ main.jsx
├─ package.json
├─ tailwind.config.js
├─ vite.config.js
└─ README.md
⚡ Usage
Browse homepage with hero, projects, and services

Explore featured projects with live/demo links

View offered services (Web Dev, UI/UX)

Submit contact form (EmailJS) with success/fail feedback

Enjoy responsive design and smooth animations (Framer Motion)

🧠 What I Learned

Reusable Components: Navbar, ProjectCard, ServiceCard, Footer

EmailJS: Setup, environment variables, success/fail handling

UI Libraries: Tailwind CSS, Lucide icons, Framer Motion animations

Accessibility: ARIA labels, semantic markup, screen‑reader support

Testing: Mocking context, handling hooks, UI & state validation

Deployment: Vercel builds, domain setup, environment variables

🧩 Challenges & Solutions
Responsive layout issues → Fixed with Tailwind breakpoints

EmailJS failures → Correct IDs & .env setup

Navbar hover bugs → Debugged imports & animation timing

Testing failures → Mocked store/contexts properly, passed test data → all tests pass ✅

🔧 Future Improvements
Blog section with Substack integration

Dark mode variants with polished transitions

More detailed project cards with workflow screenshots

Admin dashboard for managing portfolio content

Persistent contact messages in backend database

🤝 Contributing
bash
# Fork the repo
git checkout -b feature/your-feature
git commit -m "Add feature"
git push origin feature/your-feature
Open a pull request 🚀

📄 License
This project is licensed under the MIT License.

🌟 Acknowledgements
React

Vite

Tailwind CSS

Vitest

EmailJS

Framer Motion

Lucide Icons

⭐ Support

If you like this project, consider giving it a star ⭐


👨‍💻 Author

Amanuel

Aspiring Frontend Developer passionate about building modern web experiences and continuously learning.