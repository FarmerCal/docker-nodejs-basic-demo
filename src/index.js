const app = require('express')();

app.get('/', (req, res ) => 
    res.json({ message: 'Docker is easy 🐳' }) 
);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`));

// COMMANDS
// docker compose up
// docker volume create [name]
// docker run [image name]
// docker build -t [username/projectname:version] [path to working directory (.)]