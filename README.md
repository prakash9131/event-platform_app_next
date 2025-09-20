<div align="center">
    <a href="https://evently-fv.vercel.app" target="_blank">
      <img src="public/design/preview.png" alt="Project Banner">
    </a>
  <h3 align="center">Event Platform</h3>
</div>

## <br /> 📋 <a name="table">Table of Contents</a>

- ✨ [Introduction](#introduction)
- ⚙️ [Tech Stack](#tech-stack)
- 📝 [Features](#features)
- 🚀 [Quick Start](#quick-start)

## <br /> <a name="introduction">✨ Introduction</a>

Built on Next.js 14, the events application stands as a comprehensive, full-stack platform for managing events. It serves as a hub, spotlighting diverse events taking place globally. Featuring seamless payment processing through Stripe, you have the capability to purchase tickets for any event or even initiate and manage your own events.

## <br /> <a name="tech-stack">⚙️ Tech Stack</a>

- [**Next.js**](https://nextjs.org/docs) is a React framework that enables server-side rendering (SSR), static site generation (SSG), and client-side rendering with built-in routing and webpack configuration. It's optimized for performance and SEO, making it ideal for building modern web applications.

- [**Node.js**](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs) is a runtime environment that allows you to execute JavaScript code server-side. It's built on Chrome's V8 JavaScript engine and is widely used for building scalable network applications, APIs, and servers.

- [**TypeScript**](https://www.typescriptlang.org/docs/) is a statically typed superset of JavaScript that enhances code quality and developer productivity. It provides type checking, interfaces, generics, and other advanced features that help catch errors early and improve tooling support.

- [**Zod**](https://zod.dev/) is a TypeScript-first schema validation library that focuses on developer experience, performance, and robustness. It provides an intuitive API for defining and validating data schemas, ensuring type safety and data integrity in TypeScript projects.

- [**Stripe**](https://docs.stripe.com/) is a payment processing platform that allows businesses to accept payments online securely and with ease. It provides APIs and tools for managing payment workflows, handling subscriptions, integrating with e-commerce platforms, and ensuring PCI compliance.

- [**React Hook Form**](https://react-hook-form.com/) is a lightweight library for managing form state in React applications using hooks. It emphasizes performance, simplicity, and flexibility, making it easy to implement complex forms with minimal boilerplate code.

- [**Tailwind**](https://v2.tailwindcss.com/docs) is an utility-first CSS framework that provides a set of pre-designed utility classes for styling web interfaces. It allows developers to build custom designs without writing traditional CSS by composing utility classes directly in HTML elements.

- [**shadcn/ui**](https://ui.shadcn.com/docs) is a highly customizable and extensible library, making it a great choice for building component libraries or design systems. You can easily modify the source code of Shadcn UI components to match your project's needs and design guidelines.

- [**UploadThing**](https://docs.uploadthing.com/) is the easiest way to add file uploads to your full stack TypeScript application. Many services have tried to build a "better S3", but in our opinion, none found the right compromise of ownership, flexibility and safety.

## <br/> <a name="features">📝 Features</a>

👉 **Authentication (CRUD) with Clerk:** User management through Clerk, ensuring secure and efficient authentication.

👉 **Events (CRUD):** Comprehensive functionality for creating, reading, updating, and deleting events, giving users full control over event management.

- **Create Events:** Users can effortlessly generate new events, providing essential details such as title, date, location, and any additional information.
- **Read Events:** Seamless access to a detailed view of all events, allowing users to explore event specifics, including descriptions, schedules, and related information.
- **Update Events:** Empowering users to modify event details dynamically, ensuring that event information remains accurate and up-to-date.
- **Delete Events:** A straightforward process for removing events from the system, giving administrators the ability to manage and curate the platform effectively.

👉 **Related Events:** Smartly connects events that are related and displaying on the event details page, making it more engaging for users.

👉 **Organized Events:** Efficient organization of events, ensuring a structured and user-friendly display for the audience, i.e., showing events created by the user on the user profile.

👉 **Search & Filter:** Empowering users with a robust search and filter system, enabling them to easily find the events that match their preferences.

👉 **New Category:** Dynamic categorization allows for the seamless addition of new event categories, keeping your platform adaptable.

👉 **Checkout and Pay with Stripe:** Smooth and secure payment transactions using Stripe, enhancing user experience during the checkout process.

👉 **Event Orders:** Comprehensive order management system, providing a clear overview of all event-related transactions.

👉 **Search Orders:** Quick and efficient search functionality for orders, facilitating easy tracking and management.

## <br /> <a name="quick-start">🚀 Quick Start</a>

Follow these steps to set up the project locally on your machine.

<br/>**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

<br/>**Cloning the Repository**

```bash
git clone {git remote URL}
```

<br/>**Installation**

Let's install the project dependencies, from your terminal, run:

```bash
npm install
# or
yarn install
```

<br/>**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
WEBHOOK_SECRET=

# MongoDB
MONGODB_URI=

# UploadThing
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

# More
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

Replace the placeholder values with your actual credentials:

- [Clerk](https://dashboard.clerk.com)
- [MongoDB](https://cloud.mongodb.com)
- [Stripe](https://dashboard.stripe.com)
- [Uploadthing](https://uploadthing.com/dashboard)

<br/>**Running the Project**

Installation will take a minute or two, but once that's done, you should be able to run the following command:

```bash
npm run dev
# or
yarn dev
```

Open [`http://localhost:3000`](http://localhost:3000) in your browser to view the project.
