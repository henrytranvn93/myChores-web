const express = require('express');

const app = express();
const PORT = 3000;

app.listen(PORT, (error) => {
    if(!error) {
        console.log(`Server is listening on port ${PORT} successfully!`);
    } else {
        console.log("Error occurred, server can't start", error);
    }
})