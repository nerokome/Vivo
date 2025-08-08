import mongoose from 'mongoose';
import chalk from 'chalk';

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(chalk.green.bold('✅ MongoDB connected successfully'));
    } catch (error) {
        console.error(chalk.red.bold(`❌ MongoDB connection failed: ${error.message}`));
        process.exit(1);
    }
};
