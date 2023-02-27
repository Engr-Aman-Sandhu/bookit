import mongoose from 'mongoose';

const dbConnect = () => {
  if (mangoose.connection.readyState >= 1) {
    return;
  }
  mangoose.connect(process.env.DB_LOCAL_URI, {
    useNewqUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  });
};

export default dbConnect;
