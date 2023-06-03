import {action, computed, makeObservable, observable} from "mobx";
import {Task} from "./Todo";
import {FakeApi} from "../../FakeApi/FakeApi";

export class TodoStore {
    @observable
    TasksUp: Task[] = [];
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
    addTask(title: string, task?: Task) {
        const newTask: Task = {
            id: Math.floor((Math.random() * 1000000) + 1),
            isComplete: false,
            title: title,
            description: '',
            subtasks: [],
            isOpen: false,
            active: false
        }

        if (task === undefined)
            this.TasksUp.push(newTask);
        else
            task.subtasks.push(newTask);
    }

    @action
    removeSelectedTask() {
        this.SelectedTask = undefined;
    }

    @action
    LoadTask() {
        this.TasksUp = FakeApi.GetDataTodo();
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
        this.dfsFindTask(task, this.TasksUp)
    }

    private dfsFindTask(curTask: Task, prevTask: Task[]) {
        const curTasks = prevTask;
        const index = curTasks.indexOf(curTask, 0);
        if (index > -1) {
            curTasks.splice(index, 1);
            this.removeSelectedTask();
            return;
        }

        for (let task of curTasks) {
            if (task.subtasks.length !== 0) {
                console.log("asfas", task)
                this.dfsFindTask(curTask, task.subtasks)
            }
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

// todo реализовать счётчик выполенных задач сomputedte