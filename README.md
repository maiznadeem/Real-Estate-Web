[![Homyz Banner](https://raw.githubusercontent.com/MaizNadeem/Real-Estate-Web/main/client/src/assets/Banner.png)](https://homyz-real-estate.vercel.app/)

# Homyz - A Real Estate Website

**Overview**

Homyz is a user-friendly real estate website that simplifies the process of buying and selling properties. It allows property owners to list their properties and enables potential buyers to search and view available properties. Users can easily search for properties in any location and explore the surrounding areas through an interactive map. Additionally, logged-in users can like properties and save them to their favorites list for future reference. To ensure security and a seamless authentication experience, Auth0 is integrated for both client-side and server-side authentication. The website's UI components are developed using Mantine, providing a polished and responsive user interface.

**Key Features**

- **Property Search**: Search for properties in any location and explore surrounding areas on a map.
- **Favorites List**: Logged-in users can like properties and save them to their favorites list.
- **User Authentication**: Secure user authentication is handled through Auth0.
- **Login and Signup**: Users can create an account and log in to access additional features and save preferences.

**Tech Stack**

- React: A JavaScript library for building user interfaces.
- Node.js: A server-side JavaScript runtime environment.
- Express: A web application framework for Node.js, simplifying server-side development.
- MongoDB: A NoSQL database used for storing property and user data.
- Auth0: A third-party authentication service that handles user authentication for both the client-side and server-side.
- Mantine: A React component library providing UI components for a polished user interface.

**How to Run**

To run Homyz on your computer, follow these steps:

1. Clone this repository to your local machine:

```bash
git clone https://github.com/MaizNadeem/Real-Estate-Web.git
```

2. Navigate to the project directory:

```bash
cd Homyz-Real-Estate
```

3. Install the required dependencies for both the client and server sides:

```bash
cd client
npm install
cd ../server
npm install
```

4. Set up environment variables:

   - For the server, create a `.env` file in the server directory and set the required variables for MongoDB connection and Auth0 credentials.

5. Start the development server for both the client and server sides:

```bash
cd client
npm start
cd ../server
npm start
```

6. Open your web browser and visit `http://localhost:3000` to access the Homyz website.

**Contributing**

Contributions to this project are welcome. If you wish to contribute, please follow the standard GitHub workflow by creating pull requests and discussing any proposed changes via issues.

**Reporting Issues**

If you encounter any issues while using the Homyz website or have any suggestions for improvement, please open an issue on the GitHub repository. Your feedback is valuable to us, and we will address any reported issues promptly.

**GitHub**

[View Github](https://github.com/MaizNadeem/Real-Estate-Web)