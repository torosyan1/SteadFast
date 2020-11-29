import '../env';

import mongoose from 'mongoose';

export const DB = async () => {
    await mongoose.connect(process.env.DB_URL, {
        useUnifiedTopology: true,
        useNewUrlParser   : true,
    }).then(() => console.log('DB Connected!'))
        .catch((err) => {
            console.log(`DB Connection Error: ${err.message}`);
        });
};
