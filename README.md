# Pinterest Clone - MERN Stack Web Application  

🌟 **A Pinterest-inspired web app** built with the **MERN stack (MongoDB, Express, React, Node.js)**. Discover, save, and organize images in customizable boards with a smooth, responsive UI.  

## 🚀 **Features**  
- **Infinite Scroll** – Seamless loading with `react-infinite-scroll-component`  
- **Real-Time State Management** – Powered by `zustand`  
- **Optimized Data Fetching** – Using `@tanstack/react-query` & `axios`  
- **Image Upload & CDN** – Handled via `imagekitio-react`  
- **Customizable Boards** – Emoji picker (`emoji-picker-react`) & color selection (`react-colorful`)  
- **Relative Timestamps** – Clean time display with `timeago.js`  
- **Client-Side Routing** – Smooth navigation with `react-router`  

## 🛠 **Tech Stack**  
- **Frontend**: React 19, Zustand, TanStack Query  
- **Backend**: Node.js, Express  
- **Database**: MongoDB  
- **Image Hosting**: ImageKit.io  

## 📦 **Installation**  
1. **Clone the repository**  
   ```sh
   git clone https://github.com/your-username/pinterest-clone.git
   cd pinterest-clone
   ```  
2. **Install dependencies (frontend & backend)**  
   ```sh
   cd client && npm install
   cd ../server && npm install
   ```  
3. **Set up environment variables**  
   - Create a `.env` file in `/server` with:  
     ```env
     MONGO_URI=your_mongodb_connection_string
     IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
     IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
     IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
     ```  
4. **Run the app**  
   - Start the backend:  
     ```sh
     cd server && npm start
     ```  
   - Start the frontend:  
     ```sh
     cd client && npm start
     ```  

## 🔗 **Live Demo**  
👉 [https://pinterest-clone-terridev.vercel.app/](#) (Add your hosted link here)   

## 🤝 **Contributing**  
Feel free to open issues or submit PRs!  

## 📜 **License**  
MIT  

---  
✨ **Happy Pinning!** ✨  

---  
#MERN #React #PinterestClone #WebDevelopment #JavaScript #FullStack  

---  
*(Replace placeholder links & env variables with your actual project details!)*
