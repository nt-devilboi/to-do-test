import {Task} from "../Pages/Todo/Todo";


export class FakeApi {
    static GetDataTodo(): Task[] {
        return [
            {
                id: 1,
                title: "C#",
                active: false,
                isComplete: false,
                description: "изучать алгосы!!",
                isOpen: false,
                subtasks: [
                    {
                        id: 2,
                        title: "задачи по regexp 1 час",
                        active: false,
                        isOpen: false,
                        isComplete: false,
                        description: "bla bla bla",
                        subtasks: [
                            {
                                active: false,
                                id: 4,
                                isComplete: false,
                                title: "Деревья",
                                description: "сложное ааа",
                                isOpen: false,
                                subtasks: [],

                            },
                            {
                                active: false,
                                id: 5,
                                isComplete: false,
                                title: "бин поиск",
                                description: "ого можно решать квд",
                                isOpen: false,
                                subtasks: [],

                            }
                        ]
                    }
                ]
            },
            {
                id: 7,
                active: false,
                isComplete: false,
                title: "Typesctript",
                description: "изучать mobx",
                isOpen: false,
                subtasks: []
            }, // дописать
            {
                id: 10,
                active: false,
                isComplete: false,
                title: "Проект",
                description: "исправлять баги",
                isOpen: false,
                subtasks: []
            }
        ]
    }
}