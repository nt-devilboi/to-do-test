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
    addTask(title: string) {
        const newTask: Task = {
            id: Math.floor((Math.random() * 100000) + 1),
            isComplete: false,
            title: title,
            description: '',
            subtasks: [],
            isOpen: false,
            active: false
        }

        this.Tasks.push(newTask);
    }

    @action
    removeSelectedTask() {
        this.SelectedTask = undefined;
    }

    @action
    LoadTask() {
        this.Tasks = FakeApi.GetDataTodo();
    }

    @action
    changeIsComplete(task: Task) {
        task.isComplete = !task.isComplete;
    }


    @action
    changeTitle(title: string, task: Task) {
        task.title = title;
    }

    @action
    removeTask(task: Task) {
        const index = this.Tasks.indexOf(task, 0);
        if (index > -1) {
            this.Tasks.splice(index, 1);
            this.SelectedTask = undefined;
        }
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