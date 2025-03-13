const express = require('express');
const cors = require('cors');
const app = express();


// Middleware
app.use(cors());
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen((process.env.PORT || 3000), () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
}
);