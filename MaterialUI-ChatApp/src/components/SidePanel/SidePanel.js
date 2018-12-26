import React from "react";
import { Menu, Sidebar, Icon, Segment, Grid, Image } from "semantic-ui-react";

import UserPanel from "./UserPanel";
import Channels from "./Channels";
import DirectMessages from "./DirectMessages";
import Starred from "./Starred";
import Messages from "../Messages/Messages";
import MetaPanel from "../MetaPanel/MetaPanel";

class SidePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state={menuVisible:false};
  }
  render() {
    const { currentUser, primaryColor, currentChannel, isPrivateChannel, userPosts } = this.props;

    return (
      <div>
        <header>
        <nav class="navbar fixed-top navbar-toggleable-md navbar-expand-lg scrolling-navbar double-nav">
          <Menu secondary attached="top" color={{primaryColor}} stackable>
            <Menu.Item onClick={() => this.setState({ menuVisible: !this.state.menuVisible })} >
              <Icon name="sidebar" color="blue"/><b>Menu</b>
            </Menu.Item>          
          </Menu>
        </nav>
        </header>
        <Sidebar.Pushable as={Segment} attached="bottom">
          <Sidebar width="thick" as={Menu} animation="uncover" visible={this.state.menuVisible}      icon="labeled" vertical inline inverted>
            <Menu.Item>
              <UserPanel primaryColor={primaryColor} currentUser={currentUser} />
            </Menu.Item>
            <Menu.Item>
              <Starred currentUser={currentUser} />
            </Menu.Item>
            <Menu.Item>
              <Channels currentUser={currentUser} />
            </Menu.Item>
            <Menu.Item>
              <DirectMessages currentUser={currentUser} />
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher dimmed={this.state.menuVisible}>
            <Segment basic>
            <Grid columns="equal" className="app" style={{ background: primaryColor }} reversed>
              <Grid.Row>
                <Grid.Column>
                  <MetaPanel
                    key={currentChannel && currentChannel.name}
                    userPosts={userPosts}
                    currentChannel={currentChannel}
                    isPrivateChannel={isPrivateChannel}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column style={{ marginLeft: 0 }}>
                  <Messages
                    key={currentChannel && currentChannel.id}
                    currentChannel={currentChannel}
                    currentUser={currentUser}
                    isPrivateChannel={isPrivateChannel}
                  />
                </Grid.Column>
              </Grid.Row>
              </Grid>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default SidePanel;
