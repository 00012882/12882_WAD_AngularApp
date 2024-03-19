This application was developed for Web Application Development module, as coursework portfolio project at WIUT by student ID: 00012882.

This is the front-end part of the portfolio. It consists of the Single-Page application with implementation of Angular framework, Angular Materials components and Tailwind CSS Library.

## Features
CRUD operations for Post and User table
User-Frinedly design

## Instructions
In order to initialize the application, the existence of Node, Npm and Angular packages is mandatory. If not the Node can be installed from the official website (npm will be installed automatically). One thing which can be needed to install is angular. This can be done using CommandPrompt or WindowsPowershell using command "npm install -g @angular/cli". After that, folder can be opened through Visual Studio Code and it's necessery to use one command in order to start the project - npx ng serve. Using this command, the localhost will start in default window 4200.

## Testing
While testing the application, I found some bugs in the application work. Most of them are related to the routing and URLs. If I could have more time, I could resolve them. So to avoid the bug (after the application being started), if you go to one of these operations Details, Edit or Delete the website will go to the specific page, but it will show nothing. And you will notice that in the URL in browser there is /undefined. Just replace /undefined with specific ID, and everything will work.
