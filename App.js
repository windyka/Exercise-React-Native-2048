/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        {/* display 1 */}
        <View style={[styles.displayOne, styles.oneParent]}>
          {/* display 1 left --------------------------------------------- */}
          {/* wrapper */}
          <View style={styles.displayWrap} />
          {/* wrapper */}
          <View style={[styles.oneFirst, styles.oneFirstParent]}>
            <View style={[styles.oneChildOne, styles.oneChildOneParent]}>
              <View style={styles.oneChildOneChild}>
                <Text style={styles.oneChildOneChildText}>2048</Text>
              </View>
            </View>
            <View style={[styles.oneChildTwo, styles.oneChildTwoParent]}>
              <View style={styles.oneChildTwoChild}>
                <Text style={styles.oneChildTwoChildText}>Endless Mode</Text>
              </View>
            </View>
          </View>
          {/* display 1 right ------------------------------------------ */}
          <View style={[styles.oneSecond, styles.oneSecondParent]}>
            {/* wrapper second */}
            <View style={styles.displayWrapSecond} />
            {/* wrapper second */}
            <View
              style={[
                styles.oneChildSecondOne,
                styles.oneChildSecondOneParent
              ]}>
              <View
                style={[
                  styles.oneChildSecondOneChild,
                  styles.oneChildSecondOneChildParents
                ]}>
                <View style={styles.oCSOC}>
                  <Text style={styles.oCSOCText}>SCORE</Text>
                </View>
                <View style={styles.oCSOCS}>
                  <Text style={styles.oCSOCSText}>22388</Text>
                </View>
              </View>
              <View
                style={[
                  styles.oneChildSecondOneSecondChild,
                  styles.oneChildSecondOneSecondChildParents
                ]}>
                <View style={styles.oCSOSC}>
                  <Text style={styles.oCSOSCText}>HIGH-SCORE</Text>
                </View>
                <View style={styles.oCSOSCS}>
                  <Text style={styles.oCSOSCSText}>22388</Text>
                </View>
              </View>
            </View>
            <View
              style={[
                styles.oneChildSecondTwo,
                styles.oneChildSecondTwoParent
              ]}>
              <View style={styles.oneChildSecondTwoFirstChild} />
              <View style={styles.oneChildSecondTwoSecondChild} />
              <View style={styles.oneChildSecondTwoThirdChild} />
            </View>
          </View>
        </View>

        <View style={styles.displayTwo} />

        <View style={styles.displayThree} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  displayOne: {
    flex: 1
    // backgroundColor: 'yellow',
  },

  displayTwo: {
    flex: 2.8,
    backgroundColor: '#776E65',
    borderRadius: 15
  },

  displayThree: {
    flex: 1,
    backgroundColor: 'blue'
  },
  // ---------------------------CONTAINER----------------------------//

  oneParent: {
    display: 'flex',
    flexDirection: 'row'
    // backgroundColor: 'pink'
  },

  displayWrap: {
    flex: 0.7
    // backgroundColor: 'cyan',
    // paddingLeft: 20,
  },

  oneFirst: {
    flex: 4.3
    // backgroundColor: 'cyan',
    // paddingLeft: 20,
  },

  oneSecond: {
    flex: 5,
    backgroundColor: '#fff'
  },

  oneFirstParent: {
    display: 'flex',
    flexDirection: 'column'
    // backgroundColor: 'red'
  },

  oneChildOne: {
    flex: 0.7
    // backgroundColor: 'yellow'
  },

  oneChildTwo: {
    flex: 0.3
    // backgroundColor: 'blue'
  },

  oneChildOneParent: {
    display: 'flex',
    flexDirection: 'row'
  },

  oneChildOneChild: {
    flex: 1,
    // backgroundColor: 'yellow',
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },

  oneChildOneChildText: {
    fontSize: 60,
    fontWeight: 'bold'
  },

  oneChildTwoParent: {
    display: 'flex',
    flexDirection: 'row'
  },

  oneChildTwoChild: {
    flex: 1,
    // backgroundColor: 'yellow',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },

  oneChildTwoChildText: {
    fontSize: 18,
    fontWeight: '800'
  },

  oneSecondParent: {
    display: 'flex',
    flexDirection: 'column'
  },

  displayWrapSecond: {
    flex: 1,
    backgroundColor: '#fff'
  },

  oneChildSecondOne: {
    flex: 5,
    backgroundColor: '#fff',
    marginRight: 10
  },

  oneChildSecondTwo: {
    flex: 4,
    backgroundColor: 'red',
    marginRight: 10
  },

  oneChildSecondOneParent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  oneChildSecondOneChild: {
    width: 83,
    height: 60,
    backgroundColor: '#776E65',
    borderRadius: 15
  },

  oneChildSecondOneSecondChild: {
    width: 83,
    height: 60,
    backgroundColor: '#776E65',
    borderRadius: 15
  },

  oneChildSecondOneChildParents: {
    display: 'flex',
    flexDirection: 'column'
  },

  oCSOC: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  oCSOCS: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  oCSOCText: {
    color: 'white',
    fontSize: 10
  },

  oCSOCSText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },

  oneChildSecondOneSecondChildParents: {
    display: 'flex',
    flexDirection: 'column'
  },

  oCSOSC: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  oCSOSCS: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  oCSOSCText: {
    color: 'white',
    fontSize: 10
  },

  oCSOSCSText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
  // ------------------------------DISPLAY TWO---------------------------------//
});
