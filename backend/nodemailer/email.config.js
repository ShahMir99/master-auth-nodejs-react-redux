import nodemailer from "nodemailer";
import { Config } from "../configs/index.js";

export const transport = nodemailer.createTransport({
  service: Config.nodeMailer.service,
  auth: {
    user: Config.nodeMailer.auth.email,
    pass: Config.nodeMailer.auth.password,
  },
});

export const senderEmail = ` ${Config.nodeMailer.senderName} <${Config.nodeMailer.senderEmail}>`;
