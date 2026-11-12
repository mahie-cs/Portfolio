import mongoose from 'mongoose';

export const isDatabaseConfigured = Boolean(process.env.MONGODB_URI);

type Cache = { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };
const globalCache = globalThis as unknown as { _mongoose?: Cache };
const cache: Cache = (globalCache._mongoose ??= { conn: null, promise: null });

/** Connects once and reuses the connection across requests. */
export default async function connectToDatabase() {
  if (!process.env.MONGODB_URI) throw new Error('MONGODB_URI is not set');
  if (cache.conn) return cache.conn;
  cache.promise ??= mongoose.connect(process.env.MONGODB_URI, {
    dbName: 'portfolio',
    bufferCommands: false,
  });
  try {
    cache.conn = await cache.promise;
  } catch (error) {
    cache.promise = null;
    throw error;
  }
  return cache.conn;
}
