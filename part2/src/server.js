import express from 'express';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';
import authRoutes from './routes/authRoutes.js';
import todosRoutes from './routes/todoRoutes.js';
import authMiddleware from './middleware/authMiddleware.js';

const app = express();
const PORT = process.env.PORT || 3000;

// GET THE FILE PATH FROM GTHE URL OF THE CURRENT MODULE
const __filename = fileURLToPath(import.meta.url);
// Get directory name from file path
const __dirname = dirname(__filename);

// Serves HTML files from the /public directory
// Tells express to serve all files from public directory as static assets/ files
// Any request for css files will be resolved to the /public directory
// Middleware
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

// Seriving HTML file from /public directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

// ROUTES
app.use('/auth', authRoutes)
app.use('/todos', authMiddleware, todosRoutes)


app.listen(PORT, () => {
    console.log(
        `Server is running on http://localhost:${PORT}`
    )
})