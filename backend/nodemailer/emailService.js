import { transport, senderEmail } from "./email.config.js";
import { PASSWORD_RESET_SUCCESS_TEMPLATE, RESET_PASSWORD_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE, WELLCOME_EMAIL_TEMPLATE } from "./emailTemplate.js";

export const verifyEmail = async (email, code) => {
  const mailOptions = {
    from: senderEmail,
    to: email,
    subject: "Email Verification",
    html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", code),
  };

  try {
    const info = await transport.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error
  }
};


export const welcomeEmail = async (email, name) => {
  const mailOptions = {
    from: senderEmail,
    to: email,
    subject: "Welcome Email",
    html: WELLCOME_EMAIL_TEMPLATE.replace("{{name}}", name),
  };

  try {
    const info = await transport.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error
  }
};


export const welcomeBackEmail = async (email, name) => {
  const mailOptions = {
    from: senderEmail,
    to: email,
    subject: "Welcome Email",
    html: WELLCOME_EMAIL_TEMPLATE.replace("{{name}}", name),
  };

  try {
    const info = await transport.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error
  }
};

export const forgotPasswordEmail = async (email, url) => {
  const mailOptions = {
    from: senderEmail,
    to: email,
    subject: "Forgot password",
    html: RESET_PASSWORD_TEMPLATE.replace("{resetURL}",url),
  };

  try {
    const info = await transport.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error
  }
};


export const resetSuccessEmail = async (email) => {
  const mailOptions = {
    from: senderEmail,
    to: email,
    subject: "Reset Password successfully",
    html: PASSWORD_RESET_SUCCESS_TEMPLATE,
  };

  try {
    const info = await transport.sendMail(mailOptions);
    console.log("Reset Password email sent successfully:", info.response);
  } catch (error) {
    console.error("Error sending Reset Password email:", error);
    throw error
  }
};