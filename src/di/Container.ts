
import "reflect-metadata";

import { PrismaClient } from "@prisma/client";
import { Container } from "inversify";
import { TYPES } from "./Types";
import { Hasher } from "../adapters/hasher/hasher";
import { HasherAdapter } from "../adapters/hasher/bcrypt.adapter";
import { JWTSignAdapter } from "../adapters/jwt/jwtSign.adapter";
import { JWTSign } from "../adapters/jwt/jwtSign";
import { AuthDataSource } from "../domain/datasource/auth/AuthDataSource";
import { AuthDataSourceImpl } from "../infrastructure/datasource/auth/AuthDataSourceImpl";
import { AuthDAO } from "../domain/daos/auth/AuthDAO";
import { AuthDAOImpl } from "../infrastructure/daos/auth/AuthDAO.impl";
import { AuthRepository } from "../domain/repository/AuthRepository";
import { AuthRepositoImpl } from "../infrastructure/repository/auth/AuthRepositoryImpl";
import { TodoDAOImpl } from "../infrastructure/daos/todo/TodoDAO.impl";
import { TodoDAO } from "../domain/daos/todo/TodoDAO";
import { TodoData } from "../domain/model/Todo.data";
import { envs } from "../config/envs";
import { AuthController } from "../presentation/auth/auth.controller";
import { TodoDataSource } from "../domain/datasource/todo/TodoDataSource";
import { TodoDataSourceImpl } from "../infrastructure/datasource/todo/TodoDataSourceImpl";
import { TodoRepository } from '../domain/repository/TodoRepository';
import { TodoRepoImpl } from "../infrastructure/repository/todo/TodoRepositoryImpl";
import { TodoController } from "../presentation/todo/todo.controller";





const myContainer = new Container();

myContainer.bind<string>(TYPES.JWT_SECRET).toConstantValue(envs.JWT_SECRET);

myContainer.bind<PrismaClient>(TYPES.prisma).toConstantValue(new PrismaClient());

myContainer.bind<Hasher>(TYPES.hash).to(HasherAdapter).inSingletonScope();
myContainer.bind<JWTSign>(TYPES.jwt).to(JWTSignAdapter).inSingletonScope();


myContainer.bind<AuthDAO>(TYPES.AuthDAO).to(AuthDAOImpl).inSingletonScope();
myContainer.bind<AuthDataSource>(TYPES.AuthDataSource).to(AuthDataSourceImpl).inSingletonScope();
myContainer.bind<AuthRepository>(TYPES.AuthRepository).to(AuthRepositoImpl).inSingletonScope();
myContainer.bind<AuthController>(TYPES.AuthController).to(AuthController).inSingletonScope();

myContainer.bind<TodoDAO>(TYPES.TodoDAO).to(TodoDAOImpl).inSingletonScope();
myContainer.bind<TodoDataSource>(TYPES.TodoDataSource).to(TodoDataSourceImpl).inSingletonScope();
myContainer.bind<TodoRepository>(TYPES.TodoRepository).to(TodoRepoImpl).inSingletonScope();
myContainer.bind<TodoController>(TYPES.TodoController).to(TodoController).inSingletonScope();




export { myContainer };