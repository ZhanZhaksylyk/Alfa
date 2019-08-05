import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';

import PanGestureRight from './SnappableRight.js';
import PanGestureLeft from './SnappableLeft.js';

export default class Swipeable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curDate: '',
      cycle: ''
    };
  }

  componentWillMount() {
    setInterval( () => {
      this.setState({
        curDate : new Date().toDateString()
      })
    }, 1000);

    var hours = new Date().getHours();

    if(hours >= 0 && hours <= 12)
      this.setState({cycle: 1})
    else if (hours > 12 && hours <= 17)
      this.setState({cycle: 2})
    else 
      this.setState({cycle: 3})
  }
  
  render() {
    return(
      <View style={styles.mainContainer}>

        <View style={{flex:1}}>
          <PanGestureRight 
            title = 'happy' 
            navigation = {this.props.navigation} 
            info={[this.state.curDate, this.state.cycle]} >
              <View style={styles.panBtnHappy}>
                <Image 
                  source={require('../assets/images/pangesture/happy1.png')} 
                  style={styles.btnMoodLeft} /> 
              </View>
          </PanGestureRight> 
        </View>

        <View style={{flex:1}}>
          <PanGestureLeft
            title = 'good' 
            navigation = {this.props.navigation} 
            info={[this.state.curDate, this.state.cycle]} >

              <View style={styles.panBtnGood}>
                <Image 
                  source = {require('../assets/images/pangesture/good1.png')} 
                  style = {styles.btnMoodRight} />
              </View>
          </PanGestureLeft>
        </View>

        <View style={{flex:1}}>
          <PanGestureRight 
            title = 'meh' 
            navigation = {this.props.navigation} 
            info={[this.state.curDate,this.state.cycle]}>
            <View style={styles.panBtnMeh}>
              <Image 
                source={require('../assets/images/pangesture/meh1.png')}   
                style={styles.btnMoodLeft} />
            </View>
          </PanGestureRight>
        </View>

        <View style={{flex: 1}}>
          <PanGestureLeft 
            title = 'sad' 
            navigation = {this.props.navigation} 
            info={[this.state.curDate, this.state.cycle]}>
            <View style={styles.panBtnSad}>
              <Image 
                source={require('../assets/images/pangesture/sad1.png')} 
                style={styles.btnMoodRight} />
            </View>
          </PanGestureLeft>
        </View>

        <View style={{flex:0.2}}>
          <PanGestureRight 
            title = 'angry' 
            navigation = {this.props.navigation} 
            info={[this.state.curDate, this.state.cycle]} >
            <View style={styles.panBtnAngry} >
              <Image 
                source={require('../assets/images/pangesture/angry1.png')} 
                style={styles.btnMoodLeft} />
            </View>
          </PanGestureRight>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    justifyContent: 'space-around'
  },
  panBtnHappy: 
  {
    height: 60,
    width: '80%',
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'center',
    backgroundColor: '#48FA09',
    shadowColor: "#B1B1B1",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,

    elevation: 4,
  },
  panBtnGood: 
  {
    height: 60,
    width: '80%',
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    backgroundColor: '#00EFFE',
    shadowColor: "#B1B1B1",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,

    elevation: 4,
  },
  panBtnMeh: 
  {
    height: 60,
    width: '80%',
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'center',
    backgroundColor: '#AAB6B1',
    shadowColor: "#B1B1B1",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,

    elevation: 4,
  },
  panBtnSad: 
  {
    height: 60,
    width: '80%',
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    backgroundColor: '#FFB800',
    shadowColor: "#B1B1B1",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,

    elevation: 4,
  },
  panBtnAngry: 
  {
    height: 60,
    width: '80%',
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'center',
    backgroundColor: '#FD3D00',
    shadowColor: "#B1B1B1",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,

    elevation: 4,
  },
  btnMoodLeft: {
    resizeMode: 'contain',
    width: '78%',
    marginLeft: '5%',
    alignSelf: 'flex-end',
    marginRight: 5
  },
  btnMoodRight: {
    resizeMode: 'contain',
    height: '78%',
    marginRight: '5%',
    alignSelf: 'flex-start',
    marginLeft: 5
  }
})