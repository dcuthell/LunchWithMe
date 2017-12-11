import React, { Component } from 'react'
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  View
} from 'native-base'

class SideMenu extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let list = [{
      title: "Map",
      onPress: () => {
        this.props.navigator.replace({
          title: 'Map',
          passProps: this.props
        })
        this.props.toggleDrawer();
      }
    }, {
      title: "Appointments",
      onPress: () => {
        this.props.navigator.replace({
          title: 'Appointments',
          passProps: this.props
        })
        this.props.toggleDrawer();

      }
    }]
    return (
      <Container theme={this.props.theme}>
        <Header/>
        <Content>
        <View>
          <List dataArray={list} renderRow={(item) =>
            <ListItem button onPress={item.onPress.bind(this)}>
              <Text style={{color: 'black'}}> {item.title} </Text>
            </ListItem>
          }/>
        </View>
        </Content>
      </Container>
    )
  }
}

export default SideMenu;
