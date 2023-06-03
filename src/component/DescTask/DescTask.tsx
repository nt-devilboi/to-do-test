import React from "react";
import {Task} from "../../Pages/Todo/Todo";
import {Segment} from "semantic-ui-react";
import styles from "./DescTask.module.scss"

export class DescTask extends React.Component<{
    task: Task;
    onChange: (e: string) => void
}> {
    render() {
        return <Segment className={styles.Segment}>
            <div style={{display: "flex", flexDirection: "column", height: "100px"}}>
                <input className={styles.input} type={"text"}
                       value={this.props.task?.description}
                       onChange={(e) => this.props.onChange(e.target.value)}
                       placeholder={"описание задачи"}/>
            </div>
        </Segment>;
    }
}