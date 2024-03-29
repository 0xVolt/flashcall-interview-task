# Flashcall Interview Task

## Problem Statement

Create a sign-in page for users and save user details and preferences in a mongoDB database.

## Approach

This project uses React for the frontend with bootstrap to style pages. The server in the backend is handled by an Express app running on Node.js.

## Steps to Run

1. Clone this repository with `git clone <link>`
2. Open two terminal windows, one to run the client (frontend) and the other, the server (backend)
3. Make sure node is installed with all required dependencies with 
   1. `npm install`
   2. `npm install axios bootstrap react-router-dom`
4. Run the client with
   1. `cd client/`
   2. `npm run dev`
   3. Open `localhost:<port_displayed>/register` in your browser
5. Next, in the other terminal window,
   1. `cd server`
   2. `npm install axios express mongoose cors`
   3. `npm start`
