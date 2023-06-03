import React from "react";
import {Icon} from "semantic-ui-react";
import styles from "./inputAddTask.module.scss"
import {observer} from "mobx-react";

type props = {
    onClick: (title: string) => void;
    width: string;
    placeholder: string;
}

type state = {
    title: string
}

export class InputToDo extends React.Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {
            title: ""
        }
    }

    render() {
        const {onClick, width, placeholder} = this.props;
        return (
            <div style={{marginBottom: "30px", width: "auto"}} className="ui input">
                <input onChange={(e) => this.setState({title: e.target.value})}
                       style={{width: width}}
                       className={styles.input}
                       type="text"
                       value={this.state.title}
                       placeholder={placeholder}/>
                <button className={styles.addTask} onClick={() => {
                    onClick(this.state.title);
                    this.setState({title: ""});
                }}>
                    <Icon name={"plus"}/>
                </button>
            </div>
        );
    }
}