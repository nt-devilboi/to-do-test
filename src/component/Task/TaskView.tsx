import React from "react";
import {Accordion, Checkbox, Icon} from "semantic-ui-react";
import {Task} from "../../Pages/Todo/Todo";
import 'semantic-ui-css/semantic.min.css'
import {observer} from "mobx-react";
import styles from "./Task.module.scss"

@observer
export class TaskView extends React.Component<{
    task: Task,
    onClickDropDown: (task: Task) => void,
    onClickTask: (task: Task) => void
    onClickCheckBox: (task: Task) => void;
}> {
    handleClick() {

    }

    render() {
        const {task, onClickDropDown, onClickTask, onClickCheckBox} = this.props;
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
                        <Checkbox className={styles.checkBox} checked={task.isComplete}
                                  onClick={(e) => {
                                      onClickCheckBox(task);
                                      e.stopPropagation()
                                  }}/>
                    </div>
                </Accordion.Title>
                <Accordion.Content active={task.isOpen}>
                    {
                        task.subtasks.length !== 0 &&
                        task.subtasks.map(subTask =>
                            <div>
                                <TaskView onClickTask={(task) => onClickTask(task)}
                                          onClickDropDown={(subTask) => onClickDropDown(subTask)}
                                          task={subTask}
                                          onClickCheckBox={(subTask) => onClickCheckBox(subTask)}/>
                            </div>
                        )
                    }
                </Accordion.Content>

            </div>


        );
    }
}