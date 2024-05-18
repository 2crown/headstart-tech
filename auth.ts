/*import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import GoogleProviders from 'next-auth/providers/google';
import FacebookProviders from 'next-auth/providers/facebook';
import AppleProviders from 'next-auth/providers/apple';
import {z} from "zod";
import { sql } from '@vercel/postgres';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';
import { addUser } from './app/lib/data';
const short = require('short-uuid');

async function getUser(email: string): Promise<User | undefined> {
    try {
      const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
      return user.rows[0];
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }
  }
 
  export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
      Credentials({
        async authorize(credentials) {
          const parsedCredentials = z
            .object({ email: z.string().email(), password: z.string().min(8), })
            .safeParse(credentials);
   
          if (parsedCredentials.success) {
            const { email, password } = parsedCredentials.data;
            const user = await getUser(email);
          
            //Register/Sign Up unexisting user
            if (!user){
                const newParsedCredentials = z
            .object({ email: z.string().email(), password: z.string().min(8), confirmPassword: z.string().min(8), fullName: z.string()})
            .safeParse(credentials);
            if(newParsedCredentials.success){
                const {email, password, confirmPassword, fullName} = newParsedCredentials.data;

                if(!email || !password || !confirmPassword || !fullName){
                    throw Error('All fields must be filled!')
                }

                if(password !== confirmPassword){
                  throw Error('Password does not match confirm password!')
                }

                const newUser = {email:email, password:password, name:fullName, id:short.uuid().toString()}
                addUser(newUser);
                return newUser
                
            }
                return null
            };

            //Old user
            const passwordsMatch = await bcrypt.compare(password, user.password);

            if (passwordsMatch) return user;
          }
   
          console.log('Invalid credentials');
          return null;
        },
      }),

      GoogleProviders({

      }),

      FacebookProviders({

      }),

      
    ],
  });*/