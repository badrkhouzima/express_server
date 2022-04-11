import express, { Request, Response } from "express";
import { UserController  } from "../controller/UsersController";
import { LogInfo } from "../utils/logger";

// Router from express
let usersRouter = express.Router();

// http://localhost:8000/api/users?id=6253dc47f30baed4c6de7f99
usersRouter.route('/')
    // GET:
    .get(async (req: Request, res: Response) => {
        // Obtain a Query Param (ID)
        let id: any = req?.query?.id;
        LogInfo(`Query Param: ${id}`);
        // Controller Instance to excute method
        const controller: UserController = new UserController();
        // Obtain Reponse
        const response: any = await controller.getUsers(id)
        // Send to the client the response
        return res.send(response);
    })
    // DELETE:
    .delete(async (req:Request, res: Response) => {
        // Obtain a Query Param (ID)
        let id: any = req?.query?.id;
        LogInfo(`Query Param: ${id}`);
        // Controller Instance to excute method
        const controller: UserController = new UserController();
        // Obtain Reponse
        const response: any = await controller.deleteUser(id);
        // Send to the client the response
        return res.send(response);
    })
    // POST:
    .post(async (req:Request, res: Response) => {

        let name: any = req?.query?.name;
        let age: any = req?.query?.age;
        let email: any = req?.query?.email;

        // Controller Instance to excute method
        const controller: UserController = new UserController();

        let user = {
            name: name || 'dafault',
            email: email || 'default email',
            age: age || 18
        }

        // Obtain Response
        const response: any = await controller.createUser(user);
        // Send to the client the response
        return res.send(response);
    })
    .put(async (req:Request, res: Response) => {
        // Obtain a Query Param (ID)
        let id: any = req?.query?.id;
        let name: any = req?.query?.name;
        let email: any = req?.query?.email;
        let age: any = req?.query?.age;
        LogInfo(`Query Params: ${id}, ${name}, ${age}, ${email}`);

        // Controller Instance to excute method
        const controller: UserController = new UserController();

        let user = {
            name: name,
            email: email,
            age: age
        }

        // Obtain Response
        const response: any = await controller.updateUser(id, user);

        // Send to the client the response
        return res.send(response);

    })

// Export Hello Router
export default usersRouter;