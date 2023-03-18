// Importing module
import express from 'express';
import * as userController from '../small-project-big-heart/src/controllers/user.controller'
  
const app = express();
const PORT:Number=3000;
  
// Handling GET / Request
app.get('/', (req, res) => {
    res.send('Welcome to typescript backend!');
})

app.post('/login', userController.loginOne);
app.post('/register', userController.registerOne);
  
// Server setup
app.listen(PORT,() => {
    console.log('The application is listening '
          + 'on port http://localhost:'+PORT);
})