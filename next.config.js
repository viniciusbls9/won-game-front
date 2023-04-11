// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public'
})

const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    disable: !isProd
  },
  reactStrictMode: true
})
