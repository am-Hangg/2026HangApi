import {google} from "google/gemini";
import  config  from "../config/config.js";
import { Resend } from 'resend';

const resend = new Resend(config.resendEmailApiKey);
const gemini = new google.GenerativeModel("gemini-pro");

const sendEmail = ({recipient, subject, html}) => {
  resend.emails.send({
    from: "onboarding@resend.dev",
    to: recipient,
    subject,
    html,
  });
};

export default sendEmail;