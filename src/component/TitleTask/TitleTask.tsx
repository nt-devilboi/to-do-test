import {observer} from "mobx-react";
import React from "react";
import {Task} from "../../Pages/Todo/Todo";
import {Checkbox, Segment} from "semantic-ui-react";
import styles from "./TitleTask.module.scss"

@observer
export class TitleTask extends React.Component<{
    task: Task,
    onClick: () => void,
    onChange: (e: string) => void
}> {
    render() {
        return <Segment className={styles.Segment}>
            <div style={{display: "flex", flexDirection: "row"}}>
                <Checkbox className={styles.checkBox}
                          checked={this.props.task?.isComplete}
                          onClick={this.props.onClick}/>

                <input className={styles.input} type={"text"} value={this.props.task?.title}
                       onChange={(e) => this.props.onChange(e.target.value)}
                       placeholder={"Напиши Задачу"}/>
            </div>
        </Segment>;
    }
}