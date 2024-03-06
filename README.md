Vite Practice App - React with JavaScript

This document provides the necessary steps to set up and run a React project using Vite with JavaScript. It includes instructions for setting a custom server port and integrating environment variables.

Setup Steps

    1. Create Project
        Start by creating a new Vite project. This will prompt you to select a framework and a variant.
            npm create vite@latest vite-practice-app

        Select React for the framework.
        Choose JavaScript as the language option.

    2. Install Dependencies
        Run the following command to install project dependencies:
            npm i

    3. Run Development Server
        Start the development server with:
            npm run dev

    4. SASS Integration (Optional)
        If you're using SASS for styling, install it as a development dependency:
            npm i -D sass

        Then, create your styles within a scss folder.

    5. Build and Preview for Production
        Generate a production build with:
            npm run build

        Preview the production build on a local server:
            npm run preview
