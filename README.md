
# Deep Das - Personal Portfolio

This repository contains the code for my **personal portfolio website**, which showcases my academic, technical, and co-curricular achievements. It is built using **React.js** with **React Router** for navigation between multiple pages, and **CSS** for styling. The website is fully responsive and provides an engaging user experience.

## 🚀 Features

- **React.js**: Utilized for building dynamic and reusable UI components.
- **React Router**: Implemented for seamless navigation across various pages such as "Academic," "Technical," "Co-curricular," "About," "Contact," and "Testimonials."
- **CSS**: Custom CSS is used for styling, ensuring a clean and professional design across all devices.
- **Modular Components**: Every section of the website, including the navigation bar, hero section, and project cards, is built as reusable React components.
- **Responsive Design**: The layout adapts smoothly to different screen sizes (desktop, tablet, and mobile) using flexible CSS grid and flexbox techniques.

## 🌐 Pages and Components

- **Academic Page**: Lists my educational background and academic achievements.
- **Technical Page**: Highlights my technical skills and projects.
- **Co-curricular Page**: Showcases extracurricular activities, including awards and certifications.
- **About Page**: A brief introduction about me and my professional journey.
- **Contact Page**: Contains a form for users to get in touch, along with social media links.
- **Testimonials Page**: Displays testimonials from mentors, peers, or colleagues.

### UI Components

- **Navigation Bar**: A sticky header with links to different pages. This is dynamically rendered using React Router for smooth transitions.
- **Hero Section**: Features a welcome message with background image/text, engaging the user from the first interaction.
- **Project Cards**: A grid layout of clickable cards that lead to detailed project descriptions.
- **Testimonials Carousel**: A rotating display of testimonials using React state for managing transitions.

## 🛠️ Tech Stack

- **React.js**: Frontend framework for building interactive and reusable components.
- **React Router**: For page routing and navigation without full-page reloads.
- **CSS**: For styling components with a clean and minimalistic approach.

## 📋 Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (version 12.x or higher) and npm are installed on your machine.
- A code editor like **VS Code**.

## 🔧 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/THE-DEEPDAS/deepdas-portfolio.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd deepdas-portfolio
   ```

3. **Install the necessary dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm start
   ```

   The website will run locally on [http://localhost:3000](http://localhost:3000). You can view it in your browser.

## 🛤️ Routing Structure

The portfolio uses **React Router** to create a multi-page experience. Here’s a brief overview of the routing structure:

- `/` – The homepage featuring an introduction and links to the different sections.
- `/academic` – Contains details about education and qualifications.
- `/technical` – Lists technical projects and proficiencies.
- `/co-curricular` – Highlights co-curricular and extra-curricular activities.
- `/about` – An about page detailing personal and professional background.
- `/contact` – A contact page where visitors can reach out.
- `/testimonials` – Displays feedback from colleagues and clients.

## 📦 Deployment

This portfolio is currently hosted on **Vercel**, making it fast and reliable. To deploy your own version:

1. Create an account on **Vercel**.
2. Link your **GitHub repository** to Vercel.
3. Follow the prompts to deploy.

Vercel automatically rebuilds and redeploys your website whenever you push new changes to the repository.

## 🖥️ Running Tests

There are no automated tests for this project, but it’s recommended to manually verify:

- Navigation works across all pages.
- Forms on the contact page are functioning properly.
- All links are directing to the correct pages.

## 🤝 Contributing

If you wish to contribute to the project:

1. **Fork the repository**.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Make your changes and commit:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request to discuss the changes.
