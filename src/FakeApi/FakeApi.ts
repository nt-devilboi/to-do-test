import {Task} from "../Pages/Todo/Todo";


export class FakeApi {
    static GetDataTodo(): Task[] {
        return [
            {title: "C#", description: "изучать алгосы!!", isComplete: false,
                subtasks: [{title: "задачи по regexp 1 час", isComplete: false}]},
            {title: "Typesctript", description: "изучать mobx", isComplete: false,
                subtasks: []}, // дописать
            {title: "Прокт", description: "исправлять баги", isComplete: false,
                subtasks: []}
        ]
    }
}