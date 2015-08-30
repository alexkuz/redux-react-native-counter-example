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
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  button: {
    width: 60,
    height: 60,
    borderColor: '#000000',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  wide: {
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
        <Text style={styles.wide}>Clicked: {counter} times</Text>

        <TouchableHighlight onPress={increment} style={styles.button}>
          <Text>+</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={decrement} style={styles.button}>
          <Text>-</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={incrementIfOdd} style={styles.wide}>
          <Text>Increment if odd</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
