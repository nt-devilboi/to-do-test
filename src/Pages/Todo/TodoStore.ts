import {makeObservable, observable} from "mobx";
import {Task} from "./Todo";
import {FakeApi} from "../../FakeApi/FakeApi";

export class TodoStore {
    @observable
    Tasks: Task[] = [];

    constructor() {
        makeObservable(this)
    }

    GetTask() {
        console.log("я работаю")
        this.Tasks = FakeApi.GetDataTodo();
    }

    ChangeOpen(task: Task): void {
        task.isOpen = !task.isOpen;
    }
}