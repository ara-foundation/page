import { betterAuth } from 'better-auth';
import { username } from 'better-auth/plugins';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';
import { a as getDb } from './db_DAacEHY_.mjs';
import { c as createStarByUserId } from './star_C-7xRUFB.mjs';

let authInstance = null;
let dbInstance = null;
let dbInitialized = false;
async function initializeAuth() {
  if (authInstance && dbInitialized) {
    return authInstance;
  }
  if (!dbInstance) {
    dbInstance = await getDb();
    dbInitialized = true;
  }
  if (!authInstance) {
    authInstance = betterAuth({
      emailAndPassword: {
        enabled: true
      },
      socialProviders: {
        github: {
          clientId: process.env.AUTH_GITHUB_ID,
          clientSecret: process.env.AUTH_GITHUB_SECRET
        }
      },
      plugins: [
        username()
      ],
      // Pass the resolved database instance, not a promise
      database: mongodbAdapter(dbInstance),
      databaseHooks: {
        user: {
          create: {
            after: async (user) => {
              try {
                const starId = await createStarByUserId(user.id);
                console.log(`Star created for ${user.email} with id ${starId}`);
              } catch (error) {
                console.error("Error creating star on user create:", error);
              }
            }
          }
        }
      }
    });
  }
  return authInstance;
}
async function getAuth() {
  return await initializeAuth();
}
const auth = {
  get api() {
    return new Proxy({}, {
      get(_, method) {
        return async (...args) => {
          const instance = await initializeAuth();
          const api = instance.api;
          const fn = api[method];
          if (typeof fn === "function") {
            return fn.apply(api, args);
          }
          throw new Error(`Method api.${String(method)} not found`);
        };
      }
    });
  },
  handler: async (request) => {
    const instance = await initializeAuth();
    return instance.handler(request);
  }
};

export { auth as a, getAuth as g };
