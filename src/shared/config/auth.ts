import type {AuthOptions} from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import {client} from '~shared/api/Client';
import VkProvider from 'next-auth/providers/vk';

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        login: {label: 'Логин', type: 'text', required: true},
        password: {label: 'Пароль', type: 'password', required: true},
      },
      async authorize(credentials) {
        if (!credentials?.login || !credentials.password) return null;
        client.user.login(credentials.login, credentials.password).then((response) => {
          return response.data;
        });
        return null;
      },
    }),
    VkProvider({
      clientId: process.env.VK_CLIENT_ID as string,
      clientSecret: process.env.VK_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: '/signin',
  },
};
