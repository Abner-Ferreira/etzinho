import 'dotenv/config'

export default {
  expo: {
    name: 'Etzinho',
    slug: 'Etzinho',
    scheme: 'etzinho',
    extra: {
      CHATBOT_KEY: process.env.CHATBOT_KEY,
    },
  },
}
