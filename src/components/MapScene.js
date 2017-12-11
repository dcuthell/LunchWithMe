import React, { Component } from 'react'
import {
  Container,
  Header,
  View,
  Icon,
  Button,
  Title
} from 'native-base'

export default class MapScene extends Component {
  constructor(props)
  {
    super(props);
  }

  render () {
    const { theme, stores, toggleDrawer } = this.props
    return (
      <Container>
        <Header>
          <Button transparent
            onPress={toggleDrawer}>
              <Icon name='menu' />
          </Button>
          <Title>Maps</Title>
        </Header>
      </Container>
    )
  }
}
