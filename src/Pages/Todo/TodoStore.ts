import {action, makeObservable, observable} from "mobx";
import {Task} from "./Todo";
import {FakeApi} from "../../FakeApi/FakeApi";
import {LocalStorageTodos} from "../../Service/LocalStorageTodos";

export class TodoStore {
    @observable
    TasksUp: Task[] = [];
    @observable
    SelectedTask?: Task;

    constructor(private localStoreTodo: LocalStorageTodos) {
        makeObservable(this)
        this.localStoreTodo = localStoreTodo
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
    changeActive(task: Task): void {
        task.active = !task.active;
        if (task.active)
            this.inActive(task.subtasks, task.active)
        else
            this.inNonActive(task, this.TasksUp)
    }

    private inNonActive(findTask: Task, prevTask: Task[]): boolean {
        const curTasks = prevTask;
        const task = curTasks.find(x => x.id === findTask.id);
        if (task !== undefined) {
            task.active = false;
            return true;
        }

        for (let task of curTasks) {
            if (task.subtasks.length !== 0) {
                const isFound = this.inNonActive(findTask, task.subtasks)
                if (isFound) {
                    task.active = false
                    return isFound;
                }
            }
        }

        return false;
    }

    private inActive(FindTask: Task[], active: boolean) {
        for (let task of FindTask) {

            task.active = active;
            if (task.subtasks.length !== 0) {
                this.inActive(task.subtasks, active);
            }
        }
    }

    @action
    GetTask() {
        let result = this.localStoreTodo.tryTake();
        if (result.length !== 0) {
            this.TasksUp = result;
            return
        }

        this.TasksUp = FakeApi.GetDataTodo();
    }

    SaveToLocalStorage() {
        this.localStoreTodo.save(this.TasksUp);
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

    private dfsFindTask(findTask: Task, prevTask: Task[]) {
        const curTasks = prevTask;
        const index = curTasks.indexOf(findTask, 0);
        if (index > -1) {
            curTasks.splice(index, 1);
            this.removeSelectedTask();
            return;
        }

        for (let task of curTasks) {
            if (task.subtasks.length !== 0) {
                this.dfsFindTask(findTask, task.subtasks)
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