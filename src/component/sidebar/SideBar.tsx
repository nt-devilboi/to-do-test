import React, {PropsWithChildren} from "react";
import {Grid, Header, Icon, Segment, Sidebar} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import {Task} from "../../Pages/Todo/Todo";
import styles from "./SideBare.module.scss"
import {observer} from "mobx-react";
import {InputToDo} from "../InputAddTask/inputToDo";
import {TitleTask} from "../TitleTask/TitleTask";
import {DescTask} from "../DescTask/DescTask";

type props = {
    task?: Task;
    onClose: () => void;
    onChangeTitle: (newTitle: string) => void;
    onChangeDesc: (newDesc: string) => void;
    onClickCheckBox: () => void;
    onClickDeleteTask: () => void;
    onClickAddSubtask: (title: string, task: Task) => void;
}


@observer
export class SideBar extends React.Component<PropsWithChildren<props>> {
    render() {


        return (
            <div>
                <Grid columns={1} style={{height: "100vh"}}>
                    <Grid.Column>
                        <Sidebar.Pushable as={Segment}>
                            <Sidebar
                                as={Segment}
                                animation='overlay'
                                direction={"right"}
                                icon='labeled'
                                inverted
                                onHide={() => console.log()}
                                vertical
                                visible={this.props.task !== undefined}
                                width="wide"
                            >
                                <button className={styles.exit} onClick={() => this.props.onClose()}>
                                    <Icon color={"orange"} name={"arrow alternate circle right"}/>
                                </button>

                                <TitleTask task={this.props.task!} onClick={() => this.props.onClickCheckBox()}
                                           onChange={(e) => this.props.onChangeTitle(e)}/>

                                <DescTask task={this.props.task!}
                                          onChange={(e) => this.props.onChangeDesc(e)}/>


                                <InputToDo placeholder={"введи название подзадачи"}
                                           width={"342px"}
                                           onClick={(title: string) => this.props.onClickAddSubtask(title, this.props.task!)}/>

                                <button className={styles.trash} onClick={() => this.props.onClickDeleteTask()}>
                                    <Icon size={"big"} color={"red"} name={"trash"}/>
                                </button>
                            </Sidebar>

                            <Sidebar.Pusher>
                                <Segment size={"big"} basic color={"purple"}>
                                    <div>
                                        <Header as='h3'>Todo</Header>
                                        {this.props.children}
                                    </div>
                                </Segment>
                            </Sidebar.Pusher>
                        </Sidebar.Pushable>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}