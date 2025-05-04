import * as dotenv from "dotenv";
dotenv.config();

export const Config = {
  jwtSecret : process.env.JWT_SECRET,
  databaseUrl : process.env.DATABASE_URI,
  databaseName : process.env.DATABASE_NAME,
  appPort : process.env.PORT || 5000,

  clientUrl : process.env.CLIENT_URL,

  nodeMailer: {
    auth: {
      email: process.env.NODEMAILER_EMAIL,
      password: process.env.NODEMAILER_PASS,
    },
    service: process.env.NODEMAILER_SERVICE,
    senderName: process.env.NODEMAILER_SENDER_NAME,
    senderEmail: process.env.NODEMAILER_SENDER_EMAIL,
  },
};
