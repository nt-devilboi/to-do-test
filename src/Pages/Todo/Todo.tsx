import React from "react";
import {TaskView} from "../../component/Task/TaskView";
import {inject, observer} from "mobx-react";
import {TodoStore} from "./TodoStore";
import {Accordion, Icon, Input, Sidebar} from "semantic-ui-react";
import styles from "./Todo.module.scss"
import {SideBar} from "../../component/sidebar/SideBar";
import {InputAddTask} from "../../component/InputAddTask/inputAddTask";

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
        this.injected.toDoStore.LoadTask();
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
                     onClickTrash={() => toDoStore.removeTask(toDoStore.SelectedTask!)}>
                <div>
                    <InputAddTask onClick={(title: string) => toDoStore.addTask(title) }/>
                    {toDoStore.Tasks.map(task =>
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
                </div>
            </SideBar>

        );
    }
}
// todo вынести в компонент todoStore.map ......