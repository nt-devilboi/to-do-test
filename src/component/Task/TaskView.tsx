import React from "react";
import {Accordion, Checkbox, Icon} from "semantic-ui-react";
import {Task} from "../../Pages/Todo/Todo";
import 'semantic-ui-css/semantic.min.css'
import {observer} from "mobx-react";
import styles from "./Task.module.scss"

@observer
export class TaskView extends React.Component<{
    task: Task,
    onClickCheckbox: (task: Task) => void,
    onClickTask: (task: Task) => void
}> {
    handleClick() {

    }

    render() {
        const {task, onClickCheckbox: onClickDropDown, onClickTask} = this.props;
        console.log("hello", task.subtasks)
        return (
            <div>
                <Accordion.Title className={styles.toDo}
                                 active={task.isOpen}
                                 index={task.id}
                                 onClick={() => onClickTask(task)}
                >
                    <button className={styles.switcher} onClick={() => onClickDropDown(task)}>
                        <Icon name='dropdown'/>
                        {task.title}
                    </button>
                    <div>
                        <Checkbox className={styles.checkBox} onClick={(e) => e.stopPropagation()}/>
                    </div>
                </Accordion.Title>
                <Accordion.Content active={task.isOpen}>
                    {

                        task.subtasks.length !== 0 &&
                        task.subtasks.map(subTask =>
                            <div>
                                <TaskView onClickTask={(task) => onClickTask(task)}
                                          onClickCheckbox={(subTask) => onClickDropDown(subTask)}
                                          task={subTask}/>
                            </div>
                        )
                    }
                </Accordion.Content>

            </div>


        );
    }
}