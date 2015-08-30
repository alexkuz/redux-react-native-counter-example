import React, {
  View, TouchableHighlight, Text, StyleSheet, PropTypes, Component
} from 'react-native';
import { connect } from 'react-redux/native';
import * as CounterActions from '../actions/CounterActions';
import { bindActionCreators } from 'redux';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  button: {
    width: 60,
    height: 60,
    borderColor: '#999999',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20
  },

  wideButton: {
    width: 160,
    height: 60,
    borderColor: '#999999',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 40
  }
});

@connect(
  state => ({ counter: state.counter }),
  dispatch => ({ actions: bindActionCreators(CounterActions, dispatch) })
)
export default class Counter extends Component {
  static propTypes = {
    actions: PropTypes.shape({
      increment: PropTypes.func.isRequired,
      incrementIfOdd: PropTypes.func.isRequired,
      decrement: PropTypes.func.isRequired,
    }).isRequired,
    counter: PropTypes.number.isRequired
  }

  render() {
    const { counter, actions: { increment, incrementIfOdd, decrement } } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.wideButton}>
          <Text>Clicked: {counter} times</Text>
        </View>

        <View style={styles.buttons}>
          <TouchableHighlight onPress={decrement} style={styles.button}>
            <Text>-</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={increment} style={styles.button}>
            <Text>+</Text>
          </TouchableHighlight>
        </View>

        <TouchableHighlight onPress={incrementIfOdd} style={styles.wideButton}>
          <Text>Increment if odd</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
