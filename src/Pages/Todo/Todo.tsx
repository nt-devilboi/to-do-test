import React from "react";
import {TaskView} from "../../component/Task/TaskView";
import {inject, observer} from "mobx-react";
import {TodoStore} from "./TodoStore";
import {Accordion, Button} from "semantic-ui-react";
import styles from "./Todo.module.scss"
import {SideBar} from "../../component/sidebar/SideBar";
import {InputToDo} from "../../component/InputAddTask/inputToDo";

export interface Task {
    id: number
    title: string;
    active: boolean;
    description: string;
    isOpen: boolean;
    isComplete: boolean;
    subtasks: Task[];
}


type InjPros = {
    toDoStore: TodoStore;
}

@inject("toDoStore")
@observer
export class Todo extends React.Component {

    componentDidMount() {
        this.injected.toDoStore.GetTask();
    }

    get injected(): InjPros {
        return this.props as InjPros;
    }

    render() {
        const {toDoStore} = this.injected;

        return (
            <SideBar task={toDoStore.SelectedTask}
                     onClose={() => toDoStore.removeSelectedTask()}
                     onChangeTitle={(newTitle: string) => toDoStore.changeTitle(newTitle, toDoStore.SelectedTask!)}
                     onChangeDesc={(newDesc: string) => toDoStore.changeDesc(newDesc, toDoStore.SelectedTask!)}
                     onClickCheckBox={() => toDoStore.changeIsComplete(toDoStore.SelectedTask!)}
                     onClickDeleteTask={() => toDoStore.removeTask(toDoStore.SelectedTask!)}
                     onClickAddSubtask={(e, task) => toDoStore.addTask(e, task)}>
                <div>
                    <InputToDo placeholder={"Введи название задачи"}
                               width={"602px"}
                               onClick={(title: string) => toDoStore.addTask(title) }/>
                    {
                        toDoStore.TasksUp.map(task =>
                        <div className={styles.container}>
                            <Accordion styled={true}>
                                <div>
                                    <TaskView key={task.id} onClickDropDown={(task) => toDoStore.changeOpen(task)}
                                              task={task}
                                              onClickTask={(task) => toDoStore.changeSelectedTask(task)}
                                              onClickCheckBox={(task) => toDoStore.changeIsComplete(task)}/>
                                </div>
                            </Accordion>
                        </div>
                    )}

                    <div>
                        <Button onClick={() => toDoStore.SaveToLocalStorage()}>
                            <span> сохранить </span>
                        </Button>
                    </div>
                </div>
            </SideBar>

        );
    }
}