import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {ToDo} from "../entity/ToDo";
import { ClientResponse } from "http";

    var date = new Date();
    var dateJson = date.toJSON();
    

export class ToDoController {

    private toDoRepository = getRepository(ToDo);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.toDoRepository.find();
    }

    async filterByCategory(request: Request, response: Response, next: NextFunction) {
        console.log(request.params.category)
        return this.toDoRepository.find(request.params.category);
    }

    async filterByCompleteStatus(request: Request, response: Response, next: NextFunction) {
        return this.toDoRepository.find(request.params.completed);
    }

    async filterByTaskToday(request: Request, response: Response, next: NextFunction) {
        return this.toDoRepository.find();
    }

    async addTask(request: Request, response: Response, next: NextFunction){
        let ToDo = await this.toDoRepository.save({
            description: request.body.description,
            completed: request.body.completed,
            notes: request.body.notes,
            category: request.body.category,
        })
        ToDo.created_at = new Date()
        this.toDoRepository.save(ToDo)

        console.log(ToDo)
        response.send("Task Created")
        
    }

    async updateTaskStatus(request: Request, response: Response, next: NextFunction){
        let ToDo = await this.toDoRepository.findOne(request.params.taskId)
        ToDo.completed = request.body.completed,
        ToDo.completed_at = dateJson
        return this.toDoRepository.save(ToDo)
        
    }

    async updateTaskDetails(request: Request, response: Response, next: NextFunction){
        let ToDo = await this.toDoRepository.findOne(request.params.taskId)
        ToDo.description = request.body.description,
        ToDo.notes = request.body.notes,
        ToDo.category = request.body.category
        return this.toDoRepository.save(ToDo)
    }

    async removeTask(request: Request, response: Response, next: NextFunction) {
        let ToDo = await this.toDoRepository.findOne(request.body.taskId);
        await this.toDoRepository.remove(ToDo);
        response.send("Deleted successfully")
    }
    
}