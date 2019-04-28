import React, { Component } from 'react'
import { AppRegistry, View, Text } from 'react-native'

class Blink extends Component {
  constructor(props) {
    super(props)
    this.state = { isShowingText: true }

    setInterval(() => {
      this.setState(previousState => ({
        isShowingText: !previousState.isShowingText
      }))
    }, 1000)
  }

  render() {
    if (!this.state.isShowingText) {
      return null
    }

    return <Text>{this.props.text}</Text>
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text="Whaaattt" />
        <Blink text="This is awesome dude" />
      </View>
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings)
