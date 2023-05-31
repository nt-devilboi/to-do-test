import React from "react";
import {Accordion, Icon} from "semantic-ui-react";
import {Task} from "../../Pages/Todo/Todo";
import 'semantic-ui-css/semantic.min.css'
import {observer} from "mobx-react";
import styles from "../../Pages/Todo/Todo.module.scss"
@observer
export class TaskView extends React.Component<{ task: Task, onClick: (task: Task) => void }> {
    handleClick() {

    }

    render() {
        const {task, onClick} = this.props;
        console.log("hello", task.subtasks)
        return (
            <div>
                <Accordion.Title className={styles.toDo}
                    active={task.isOpen}
                    index={task.id}
                    onClick={() => onClick(task)}
                >
                    <Icon name='dropdown'/>
                    <input type={"checkbox"}/>
                    {task.title}
                </Accordion.Title>
                <Accordion.Content className={styles.toDo} active={task.isOpen}>
                    {
                        task.subtasks.length !== 0 &&
                        task.subtasks.map(subTask =>
                            <div className={styles.toDo}>
                                <TaskView onClick={(subTask) => onClick(subTask)} task={subTask}/>
                            </div>
                        )
                    }
                </Accordion.Content>
            </div>


        );
    }
}