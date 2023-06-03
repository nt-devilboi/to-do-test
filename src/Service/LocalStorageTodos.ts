import {Task} from "../Pages/Todo/Todo";

export class LocalStorageTodos {
    save(Tasks: Task[]): void {
        localStorage.setItem("todos", JSON.stringify(Tasks))
    }

    tryTake(): Task[] {
        let result = localStorage.getItem("todos");
        if (result !== null) {
            return JSON.parse(result) as Task[]
        }

        return []
    }
}