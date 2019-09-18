import {UserController} from "./controller/UserController";
import {ToDoController} from "./controller/ToDoController";

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
}, {
    method: "get",
    route: "/todo",
    controller: ToDoController,
    action: "all"
}, {
    method: "get",
    route: "/todo/filterByCategory/:category",
    controller: ToDoController,
    action: "filterByCategory"
}, {
    method: "get",
    route: "/todo/filterByCompleteStatus/:completed",
    controller: ToDoController,
    action: "filterByCompleteStatus"
}, {
    method: "get",
    route: "/todo/filterByTaskToday",
    controller: ToDoController,
    action: "filterByTaskToday"
}, {
    method: "post",
    route: "/todo/addTask",
    controller: ToDoController,
    action: "addTask"
}, {
    method: "post",
    route: "/todo/updateTaskStatus/:taskId",
    controller: ToDoController,
    action: "updateTaskStatus"
}, {
    method: "post",
    route: "/todo/updateTaskDetails/:taskId",
    controller: ToDoController,
    action: "updateTaskDetails"
}, {
    method: "delete",
    route: "/todo/:taskId",
    controller: ToDoController,
    action: "removeTask"
}];