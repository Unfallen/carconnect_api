# Car Connect API Assessment

This simple App was created as a solution to Technical Assessment. \
The goal of the challenge is to build a basic landing page capturing customer details and sending the data to an API.

## Technologies Used

- Frontend: React.js
- Backend: Node.js (Express)
## Getting Started
1. **Clone the Repository:**
```bash
git clone https://github.com/unfallen/carconnect_api
cd carconnect_api
```
2. **Install Dependencies:**
```bash
cd frontend
npm install
cd ../backend
npm install
```
3. **Run the Application**
   - Start the frontend(React)
     ```bash
     cd frontend
     npm start
     ```

   - Start the backend(Node.js/Express)
     ```bash
     cd backend
     node server.js
     ```


The frontend will be accessible at http://localhost:3000, \
and the backend will be running at http://localhost:5000.

## Code Structure
- `fronted/`: React.js application for the app
  - `src/`: Contains React components and other frontend assets.
  - `public/`: Static files served by React.
- `backend/`: Node.js server handling API requests.
  - `server.js`: Main server file.
  - `customerData.txt`: Text file to store customer data.

## Assumptions
1. **Data Storage:**
    - For simplicity, customer data is stored in a text file (customerData.txt) in JSON format. \
   In a production environment, a database (e.g., MongoDB) would be more appropriate.
2. **Security Measures:** Node.js server handling API requests.
    - The code has been enhanced with basic security measures, including input validation, secure headers, \
   rate limiting, CORS protection, HTTPS (recommended for production), logging, and client-side input validation.
3. **Secure Password Handling:**
    - If the application involves user authentication in the future, \
   use a secure password hashing library (e.g., bcrypt) on the backend to securely store and compare passwords.
4. **Error Handling:**
    - Basic error handling is demonstrated, but in a production environment, \
   more robust error handling and logging would be necessary.
5. **Frontend Styling:**
    - Minimal styling is applied to the frontend. In a production scenario, a CSS framework or \
   a more sophisticated styling approach would be used.

## What's Next
- Implement further security measures as needed.
- Integrate a database for storing customer data securely.
- Enhance error handling and implement more detailed logging.
- Add user authentication for secure data access.
- Deploy the application to a cloud service (e.g., AWS).