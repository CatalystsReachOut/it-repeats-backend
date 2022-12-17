import 'dotenv';
import app from './app';

const PORT = process.env.PORT || 8000

app.listen(PORT, async () => {
    console.log(`Server up on port ${PORT}!`);
});