import { MailtrapProvider } from "../../providers/implementations/MailtrapProvider";
import { MysqlUsersRepository } from "../../repositories/implementations/MysqlUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapProvider = new MailtrapProvider ();
const mysqlUsersRepository = new MysqlUsersRepository();

const createUserUseCase = new CreateUserUseCase(
  mysqlUsersRepository,
  mailtrapProvider
)

const createUserController = new CreateUserController(
  createUserUseCase
);

export {createUserUseCase, createUserController};