import React, {PropsWithChildren} from "react";
import {Checkbox, Grid, Header, Icon, Segment, Sidebar} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import {Task} from "../../Pages/Todo/Todo";
import styles from "./SideBare.module.scss"
import {observer} from "mobx-react";

type props = {
    task?: Task;
    onClose: () => void;
    onChangeTitle: (newTitle: string) => void;
    onChangeDesc: (newDesc: string) => void;
    onClickCheckBox: () => void;
}
@observer
export class SideBar extends React.Component<PropsWithChildren<props>> {
    handleKeyPress(event: any) {
        if (event.key === 'Enter') {
            // Ваши действия при нажатии клавиши "Enter"
            console.log('Нажата клавиша Enter');
        }
    }

    render() {



        return (
            <div >
            <Grid columns={1}>
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

                            <Segment className={styles.Segment}>
                                <div style={{display: "flex", flexDirection: "row"   }}>
                                    <Checkbox className={styles.checkBox}
                                              checked={this.props.task?.isComplete}
                                              onClick={() => this.props.onClickCheckBox()}/>

                                    <input className={styles.input} type={"text"} value={this.props.task?.title}
                                           onChange={(e) => this.props.onChangeTitle(e.target.value)}
                                    placeholder={"Напиши Задачу"}/>

                                </div>
                            </Segment>

                            <Segment className={styles.Segment}>
                                <div style={{display: "flex", flexDirection: "column"  }}>
                                    <input className={styles.input} type={"text"} value={this.props.task?.description}
                                    onChange={(e) => this.props.onChangeDesc(e.target.value)}
                                    placeholder={"описание задачи"}/>
                                </div>
                            </Segment>

                        </Sidebar>
                        <Sidebar.Pusher >
                            <Segment basic color={"purple"} >
                                <div style={{height: "100vh"}}>
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