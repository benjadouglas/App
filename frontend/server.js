// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(cors());
// app.use(express.json());

// app.post('/users/login', (req, res) => {
//   // Lógica de login aquí
//   const { username, password } = req.body;
//   if (username === 'admin' && password === 'admin') {
//     res.json({ success: true, message: 'Login successful' });
//   } else {
//     res.status(401).json({ success: false, message: 'Invalid credentials' });
//   }
// });

// app.post('/users/signup', (req, res) => {
//   // Lógica de signup aquí
//   const { username, email, password } = req.body;
//   // Guardar el usuario en la base de datos (simulado)
//   res.json({ success: true, message: 'Signup successful', user: { username, email } });
// });

// const PORT = 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
