interface IMailTo{
  name: string,
  email: string
}

interface IMailMessage {
  subject: string,
  body: string
  attachment?: string[]
}

interface IMessagoDTO {
  to: IMailTo,
  message: IMailMessage
}

interface IEmailService {
  sendMail(request: IMessagoDTO): void
}

class EmailService implements IEmailService{
  sendMail({ to, message }: IMessagoDTO){
    console.log(`Email enviado para ${to.name}: ${message.subject}`)
  }
}

export default EmailService;