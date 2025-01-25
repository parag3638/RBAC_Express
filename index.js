const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 9000;
const dotenv = require('dotenv');
dotenv.config();

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes/userRoutes');

// const allowedOrigins = [
//   'http://localhost:3000',
//   'http://localhost:8080',
//   'http://localhost:9001',
// ];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       // Allow requests with no origin like mobile apps or curl requests
//       if (!origin) return callback(null, true);
//       if (allowedOrigins.indexOf(origin) === -1) {
//         const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
//         return callback(new Error(msg), false);
//       }
//       return callback(null, true);
//     }
//   })
// );


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/userRoutes", userRoutes);

app.get('/', (req, res) => {
  res.send('Server UP!');
});

app.listen(PORT, () => {
  console.log(`App is running and Listening on port ${PORT}`);
  console.log(new Date())
});

