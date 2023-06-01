import {action, computed, makeObservable, observable} from "mobx";
import {Task} from "./Todo";
import {FakeApi} from "../../FakeApi/FakeApi";

export class TodoStore {
    @observable
    Tasks: Task[] = [];

    constructor() {
        makeObservable(this)
    }

    @computed
    get SelectedTask() : Task  { //todo не забыть прописать норм логику
     for (let task of this.Tasks) {
         if (task.active)
             return task;
     }
        return this.Tasks[0]
    }
    @action
    GetTask() {
        console.log("я работаю")
        this.Tasks = FakeApi.GetDataTodo();
    }

    @action
    ChangeOpen(task: Task): void {
        task.isOpen = !task.isOpen;
    }
}