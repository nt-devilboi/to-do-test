import {Task} from "../Pages/Todo/Todo";


export class FakeApi {
    static GetDataTodo(): Task[] {
        return [
            {
                id: 1,
                title: "C#",
                description: "изучать алгосы!!",
                isOpen: false,
                subtasks: [
                    {
                        id: 2,
                        title: "задачи по regexp 1 час",
                        isOpen: false,
                        description: "bla bla bla",
                        subtasks: [
                            {
                                id: 4,
                                title: "Деревья",
                                description: "сложное ааа",
                                isOpen: false,
                                subtasks: []
                            }
                        ]
                    }
                ]
            },
            {
                id: 3,
                title: "Typesctript",
                description: "изучать mobx",
                isOpen: false,
                subtasks: []}, // дописать
            {
                id: 4,
                title: "Прокт",
                description: "исправлять баги",
                isOpen: false,
                subtasks: []
            }
        ]
    }
}