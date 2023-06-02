import {action, computed, makeObservable, observable} from "mobx";
import {Task} from "./Todo";
import {FakeApi} from "../../FakeApi/FakeApi";

export class TodoStore {
    @observable
    Tasks: Task[] = [];

    @observable
    SelectedTask?: Task;

    constructor() {
        makeObservable(this)
    }

    @action
    changeSelectedTask(task: Task) {
        this.SelectedTask = task;
    }

    @action
    removeSelectedTask()  {
        this.SelectedTask = undefined;
    }
    @action
    getTask() {
        console.log("я работаю")
        this.Tasks = FakeApi.GetDataTodo();
    }

    @action
    changeTitle(title: string, task: Task) {
        task.title = title;
    }
    @action
    changeDesc(desc: string, task: Task) {
        task.description = desc
    }
    @action
    changeOpen(task: Task): void {
        task.isOpen = !task.isOpen;
    }
}