# SSR Blog Site

### Description

A static blog site to convert markdown to new blog posts. Written using Next.js

This application is a simple Next.js app which reads the markdown files in the mdFiles folder, located on the root of the project, and displays a list of blog posts on the home page (/). The user can click on the card to view the markdown file.

The dependencies used are:

- **react-markdown**: To render the markdown file
- **@tailwindcss/typography**: To style the markdown file correctly
- **TailwindCSS**: To style the application

### Installing and running the app

- Clone the repository from Github
- Navigate to the folder using terminal
- Run `npm i` to install the dependencies that the app uses
- Run `npm run dev` to start the application locally
- Open a browser and go to `localhost:3000` and the homepage will show with the single blog post example.
- To add more blog posts, add `.md` files to the `mdFiles` folder located on the root of the project and reload the homepage. It will be there.

_Note:_ Please ensure that the `.md` filename does not contain spaces, otherwise the file will not load.
