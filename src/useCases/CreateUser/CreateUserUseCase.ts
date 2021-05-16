import { createUserController } from ".";
import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUSersRepository } from "../../repositories/IUserRepository";
import { ICreateUserREquestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {

  constructor(
    private usersRepository: IUSersRepository,
    private mailProvider: IMailProvider
  ){}

  async execute(data: ICreateUserREquestDTO){
    const userAleradyExists = await this.usersRepository.findByEmail(data.email);

    if(userAleradyExists){
      throw new Error('User already exists.')
    }

    const user = new User(data);

    await this.usersRepository.save(user);

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email
      },
      from: {
        name: "Equipe do App",
        email: "equipe@meuapp.com"
      },
      subject: "Seja bem-vindo a plataforma",
      body: '<h1>Você já pode fazer login em nossa plataforma.</h1>',

    })
  }
}