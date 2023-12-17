import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabse = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error('MONGODB_URI is missing');

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: 'swift event',
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};

// what does the above code means?
// 1. we are creating a global variable called cached
// 2. we are checking if the global variable has a mongoose connection
// 3. if it does, we are returning the connection
// 4. if it does not, we are creating a new connection and storing it in the global variable
// 5. we are returning the connection

// why is caching useful?
// 1. we are not creating a new connection everytime we want to connect to the database
// 2. we are reusing the connection that we already have
// 3. this is useful because creating a new connection is expensive
// 4. we are saving time and resources
