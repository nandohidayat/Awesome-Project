import React, { Component } from 'react'
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native'

export default class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { key: 'Muhammad' },
            { key: 'Nando' },
            { key: 'Hidayat' },
            { key: 'Laksita' },
            { key: 'Kusuma' },
            { key: 'Wardhani' },
            { key: 'Raissa' },
            { key: 'Almira' },
            { key: 'Rachmayanti' }
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    paddingTop: 10,
    fontSize: 18,
    height: 44
  }
})

AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics)
