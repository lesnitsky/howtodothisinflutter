import Example from '../components/md/Example';

<Example reactnative>

npm i react-navigation react-native-gesture-handler --save

```js
import React from 'react';
import { Button, View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

const FirstScreen = props => (
  <View>
    <Button
      title="Go to SecondScreen"
      onPress={() => props.navigation.navigate('Second')}
    />
  </View>
);

const SecondScreen = props => (
  <View>
    <Button
      title="Go back!"
      onPress={props.navigation.goBack} />

    <Button
      title="Go to SecondScreen... again"
      onPress={() => props.navigation.push('Second')}
    />
  </View>
);

const RootStack = createStackNavigator({
  First: { screen: FirstScreen },
  Second: { screen: SecondScreen },
  },{
    initialRouteName: 'First',
});

const AppContainer = createAppContainer(RootStack);
const App = () => <AppContainer />;
```

</Example>

<Example flutter>

```dart
import 'package:flutter/material.dart';

class FirstScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: RaisedButton(
        child: Text('Go to SecondScreen'),
        onPressed: () => Navigator.pushNamed(context, '/second'),
      ),
    );
  }
}

class SecondScreen extends StatelessWidget {
  void _pushSecondScreen(context) {
    Navigator.push(
        context, MaterialPageRoute(builder: (context) => SecondScreen()));
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        RaisedButton(
            child: Text('Go back!'), onPressed: () => Navigator.pop(context)),
        RaisedButton(
            child: Text('Go to SecondScreen... again!'),
            onPressed: () => _pushSecondScreen(context)),
      ],
    );
  }
}

void main() {
  runApp(MaterialApp(
    initialRoute: '/',
    routes: {
      '/': (context) => FirstScreen(),
      '/second': (context) => SecondScreen(),
  }));
}
```

</Example>
