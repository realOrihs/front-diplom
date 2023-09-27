const withPlugins = require('next-compose-plugins');

/** @type {import('next').NextConfig} */
const nextConfiguration = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'res.cloudinary.com'], // Сюда добавить домен, с которого нужно получать картинки на продакшене
  },
  sassOptions: {
    prependData: `@use "/src/shared/assets/styles/_global-import" as *;`,
  },
  typescript: {
    // !! WARN !!
    // В production режиме отключает проверку типов и, соответственно, ошибки,
    // связанные с типизацией, чтобы сборка происходила быстрее.
    // !! WARN !!
    // С этой опцией обязательна проверка типов и ошибок в development режиме!
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // !! WARN !!
    // В production режиме отключает проверку типов и, соответственно, ошибки,
    // связанные с ESLint/Prettier, чтобы сборка происходила быстрее.
    // !! WARN !!
    // С этой опцией обязательна проверка типов и ошибок в development режиме!
    // !! WARN !!
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfiguration;
