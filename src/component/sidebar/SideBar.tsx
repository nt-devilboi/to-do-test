import React, {PropsWithChildren} from "react";
import {Grid, Header, Icon, Segment, Sidebar} from "semantic-ui-react";
import Menu from "semantic-ui-react/dist/commonjs/collections/Menu/Menu";
import 'semantic-ui-css/semantic.min.css'
import {Task} from "../../Pages/Todo/Todo";

type props = {
    task: Task
}
export class SideBar extends React.Component<PropsWithChildren<props>> {
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
                            visible={true}
                            width="wide"
                        >
                            <Segment>
                                <div style={{color:"white", width: "30px"} }>
                                </div>

                            </Segment>

                        </Sidebar>
                        <Sidebar.Pusher >
                            <Segment basic color={"purple"} >
                                <div style={{height: "100vh"}}>
                                    <Header as='h3'>Application Content</Header>
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