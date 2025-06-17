<div align="center">
  <img src="https://res.cloudinary.com/dmpjrbf97/image/upload/v1750195971/OurMeal_logo_uudz8w.png" alt="OurMeal Logo" width="200">
  
  # Food Delivery App
  
  *A full-stack food delivery application built with the MERN stack (MongoDB, Express.js, React, Node.js). This platform provides a complete food ordering experience with separate interfaces for customers and administrators.*
</div>

---

## 🚀 Features

### Customer Features
- User registration and authentication
- Browse and filter food menu
- Add items to cart
- Order management and tracking
- Delivery address management
- Real-time order status updates

### Admin Features
- Admin dashboard
- Food item management (add, edit, delete)
- Order management and status updates
- Product listings management

## 🏗️ Architecture

The application is structured into three main components:

### Frontend (`frontend/`)
- **Technology**: React.js with Tailwind CSS
- **State Management**: React Context API
- **Purpose**: Customer-facing interface for browsing, ordering, and tracking food deliveries

### Admin Panel (`admin/`)
- **Technology**: React.js
- **Purpose**: Administrative dashboard for managing food items, orders, and platform operations

### Backend (`backend/`)
- **Technology**: Node.js with Express.js
- **Database**: MongoDB
- **Purpose**: RESTful API server handling authentication, food management, orders, and delivery tracking

## 🛠️ Tech Stack

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

</div>

- **Frontend**: React.js, Tailwind CSS, React Context
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **State Management**: React Context API

## 📱 Demo Screenshots

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="https://res.cloudinary.com/dmpjrbf97/image/upload/v1750195802/tom_u5nqan.png" alt="Customer Interface" width="400">
        <br>
        <strong>Customer Interface</strong>
        <br>
        <em>Browse and order your favorite meals</em>
      </td>
      <td align="center">
        <img src="https://res.cloudinary.com/dmpjrbf97/image/upload/v1750196277/tom2_yg9mnu.png" alt="Food Menu & Cart" width="400">
        <br>
        <strong>Food Menu & Cart</strong>
        <br>
        <em>Explore menu and manage cart</em>
      </td>
    </tr>
  </table>
</div>

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas)

## 🚀 Installation & Setup

### 1. Clone the repository
```bash
git clone <repository-url>
cd food-delivery-app
```

### 2. Install dependencies for all components

**Install backend dependencies:**
```bash
cd backend
npm install
```

**Install frontend dependencies:**
```bash
cd ../frontend
npm install
```

**Install admin panel dependencies:**
```bash
cd ../admin
npm install
```


### 3. Database Setup
- Ensure MongoDB is running locally or configure MongoDB Atlas connection
- The application will create necessary collections automatically

## 🎯 Running the Application

The application requires all three components to be running simultaneously:

### Start the Backend Server
```bash
cd backend
npm run server
```

### Start the Frontend (Customer Interface)
```bash
cd frontend
npm run dev
```

### Start the Admin Panel
```bash
cd admin
npm start dev
```

## 🔐 Authentication

The application uses JWT (JSON Web Tokens) for authentication. Tokens are stored in localStorage and included in API requests via Authorization headers.


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🐛 Troubleshooting

### Common Issues:

1. **MongoDB Connection Error**: Ensure MongoDB is running and connection string is correct
2. **Port Already in Use**: Check if ports 3000, 5000, or 3001 are already occupied
3. **CORS Issues**: Verify backend CORS configuration allows frontend domains

### Getting Help:

If you encounter any issues, please check the existing issues or create a new one with:
- Error message
- Steps to reproduce
- Your environment details (OS, Node.js version, etc.)

## 🔮 Future Enhancements

- Payment gateway integration
- Real-time notifications
- Mobile app development
- Advanced analytics dashboard
- Multi-restaurant support
- Delivery tracking with maps

---

<div align="center">
  <strong>Built with ❤️ by akashi-47</strong>
  <br>
  <em>A modern, full-stack food delivery solution using the MERN Stack</em>
</div>
