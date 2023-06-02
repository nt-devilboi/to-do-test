import React from "react";
import {Icon} from "semantic-ui-react";
import styles from "./inputAddTask.module.scss"

type props = {
    onClick: (title: string) => void;
}

type state = {
    title: string
}
export class InputAddTask extends React.Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {
            title: ""
        }
    }
    render() {
        const {onClick} = this.props;
        return (
            <div style={{marginBottom: "30px", width: "auto"}} className="ui input">
                <input onChange={(e) => this.setState({title: e.target.value})} className={styles.input} type="text"  placeholder="Введи название задачи"/>
                <button className={styles.addTask} onClick={() => onClick(this.state.title)}>
                    <Icon name={"plus"}/>
                </button>
            </div>
        );
    }
}