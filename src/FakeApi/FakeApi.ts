import {Task} from "../Pages/Todo/Todo";


export class FakeApi {
    static GetDataTodo(): Task[] {
        return [
            {
                id: 1,
                title: "C#",
                active: false,
                description: "изучать алгосы!!",
                isOpen: false,
                subtasks: [
                    {
                        id: 2,
                        title: "задачи по regexp 1 час",
                        active: false,
                        isOpen: false,
                        description: "bla bla bla",
                        subtasks: [
                            {
                                active: false,
                                id: 4,
                                title: "Деревья",
                                description: "сложное ааа",
                                isOpen: false,
                                subtasks: [],

                            },
                            {
                                active: false,
                                id: 5,
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
                id: 3,
                active: false,
                title: "Typesctript",
                description: "изучать mobx",
                isOpen: false,
                subtasks: []}, // дописать
            {
                id: 4,
                active: false,
                title: "Прокт",
                description: "исправлять баги",
                isOpen: false,
                subtasks: []
            }
        ]
    }
}