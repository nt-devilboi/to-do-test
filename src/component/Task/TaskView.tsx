import React from "react";
import {Accordion, Icon} from "semantic-ui-react";
import {Task} from "../../Pages/Todo/Todo";
import 'semantic-ui-css/semantic.min.css'
import {observer} from "mobx-react";

@observer
export class TaskView extends React.Component<{ task: Task, onClick: (task: Task) => void }> {
    handleClick() {

    }

    render() {
        const {task, onClick} = this.props;
        console.log("hello", task.subtasks)
        return (
            <div>
                <Accordion.Title
                    active={task.isOpen}
                    index={task.id}
                    onClick={() => onClick(task)}
                >
                    <Icon name='dropdown'/>
                    {task.title}
                </Accordion.Title>
                <Accordion.Content active={task.isOpen}>
                    {
                        task.subtasks.length !== 0 &&
                        task.subtasks.map(subTask => <TaskView onClick={(subTask) => onClick(subTask)} task={subTask}/>)
                    }
                </Accordion.Content>
            </div>


        );
    }
}