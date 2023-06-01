import React from "react";
import {TaskView} from "../../component/Task/TaskView";
import {inject, observer} from "mobx-react";
import {TodoStore} from "./TodoStore";
import {Accordion, Sidebar} from "semantic-ui-react";
import styles from "./Todo.module.scss"
import {SideBar} from "../../component/sidebar/SideBar";
export interface Task {
    id: number
    title: string;
    active: boolean;
    description: string;
    isOpen: boolean;
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
            <SideBar task={toDoStore.SelectedTask}>
            <div>
                {toDoStore.Tasks.map(task =>
                    <div className={styles.container} >
                        <Accordion styled={true} >
                            <div >
                                <TaskView onClick={(task) => toDoStore.ChangeOpen(task)} task={task} />
                            </div>
                        </Accordion>
                    </div>
                    )}

            </div>
            </SideBar>

        );
    }
}