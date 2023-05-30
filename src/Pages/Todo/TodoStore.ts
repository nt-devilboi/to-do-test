import {makeObservable, observable} from "mobx";
import {Task} from "./Todo";

export class TodoStore {
    @observable
    Tasks: Task[] = [];

    constructor() {
        makeObservable(this)
    }

    GetTask() {
        this.Tasks = this.Tasks;
    }
}