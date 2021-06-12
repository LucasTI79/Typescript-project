import { Response, Request } from "express";
import EmailService from "../services/EmailService";

const users = [
  { name: 'Lucas', email: 'lukasalves271@gmail.com'}
]

export default {
  async index(req: Request, res: Response){
    return res.json(users)
  },

  async create(req: Request, res: Response){
    const emailService = new EmailService();

    emailService.sendMail({
      to: { 
        name:'Lucas', 
        email:'lukasalves271@gmail.com' 
      },
      message: { 
        subject: 'Bem-vindo ao sistema!!!',
        body: 'Hello!!!'
      }}
    );

    return res.send();
  }
};