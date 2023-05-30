import React from "react";

export interface Task {
    title: string;
    description: string;
    isComplete: boolean;
    subtasks: subtask[];
}

export interface subtask {
    title: string;
    isComplete: boolean;
}

export class Todo extends React.Component {

    render() {
        return (
            <div>

            </div>
        );
    }
}