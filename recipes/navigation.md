import Example from '../components/md/Example';

<Example reactnative>

```js
import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

class FirstScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>First Screen</Text>
        <Button
          title="Go to SecondScreen"
          onPress={() => this.props.navigation.navigate('Second')}
        />
      </View>
    );
  }
}

class SecondScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Second Screen</Text>
        <Button
          title="Go back!"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Go to Second... again"
          onPress={() => this.props.navigation.push('Second')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' }
})

const RootStack = createStackNavigator(
    {
      First: {
        screen: FirstScreen,
      },
      Second: {
        screen: SecondScreen,
      },
    },
    {
      initialRouteName: 'First',
    }
  );

  const AppContainer = createAppContainer(RootStack);

  export default class App extends React.Component {
    render() {
      return <AppContainer />;
    }
  }
```

</Example>

<Example flutter>

```dart
import 'package:flutter/material.dart';

class FirstScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('First Screen'),
      ),
      body: Center(
        child: RaisedButton(
          child: Text('Go to SecondScreen'),
          onPressed: () => Navigator.pushNamed(context, '/second'),
        ),
      ),
    );
  }
}

class SecondScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Second Screen"),
        ),
        body: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Center(
              child: RaisedButton(
                child: Text('Go back!'),
                onPressed: () => Navigator.pop(context),
              ),
            ),
            Center(
              child: RaisedButton(
                  child: Text('Go to Second... again!'),
                  onPressed: () => Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => SecondScreen(),
                        ),
                      )),
            ),
          ],
        ));
  }
}

void main() {
  runApp(MaterialApp(
    title: 'Navigation Flutter',
    initialRoute: '/',
    routes: {
      '/': (context) => FirstScreen(),
      '/second': (context) => SecondScreen(),
    },
  ));
}
```

</Example>
