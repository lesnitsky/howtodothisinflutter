# How to do this in Flutter?

[![Build Status](https://travis-ci.com/lesnitsky/howtodothisinflutter.svg?branch=master)](https://travis-ci.com/lesnitsky/howtodothisinflutter)

[![GitHub stars](https://img.shields.io/github/stars/lesnitsky/howtodothisinflutter.svg?style=social)](https://github.com/lesnitsky/howtodothisinflutter)
[![Twitter Follow](https://img.shields.io/twitter/follow/lesnitsky_a.svg?label=Follow%20me&style=social)](https://twitter.com/lesnitsky_a)

📄 Cheat sheet for react native developers.

> Built with [mdx](https://mdxjs.com/) and [nextjs](https://nextjs.org/)

## Motivation

As a react native dev I found Flutter really similar to react native in many ways ([flutter for react native devs](https://flutter.io/docs/get-started/flutter-for/react-native-devs)). However when I first tried Flutter, turned out that doing simple things like fetchng data from back-end or building stateful component is not as straightforward as in React Native (actually it _is_ straightforward after the first time :smirk:)

Example:

React Native

```js
class Greeter extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
    };

    render() {
        return (
            <View>
                <Text>Hello {this.props.name}!</Text>
            </View>
        );
    }
}
```

Flutter

```dart
class Greeter extends StatelessWidget {
  Greeter({@required this.name});

  final String name;

  @override
  Widget build(BuildContext context) {
    return Container(
        child: Text('Hello $name!'),
    );
  }
}
```

Looks pretty similar, right?
This repo contains a set of examples in React Native and their alternatives written in Flutter

## Contributions

Contributions are very welcome! 🙏

Submit [new issue](https://github.com/lesnitsky/howtodothisinflutter/issues) describing the example you want to see

How to contribute new examples:

-   🍴 fork this repo
-   ⬇ clone this repo
-   🛠 run `yarn`
-   👀 make sure example you want to add doesn't already exist
-   🛠 run `yarn add-example`
-   ✍️ edit `recipes/<your-example-name>.md`
-   ➕ add your name to [Contributors](#contributors) section
-   📦 commit your changes
-   ⤴️ create Pull Request
-   👍 kudos

# Contributors

-   [Andrei Lesnitsky](https://twitter.com/lesnitsky_a)
-   [Vyacheslav Egorov](https://twitter.com/mraleph)
-   [Tiago Almeida](https://twitter.com/TiagoHenriq)

## License

MIT © [Andrei Lesnitsky](https://twitter.com/lesnitsky_a)


[![GitHub stars](https://img.shields.io/github/stars/lesnitsky/howtodothisinflutter.svg?style=social)](https://github.com/lesnitsky/howtodothisinflutter)
[![Twitter Follow](https://img.shields.io/twitter/follow/lesnitsky_a.svg?label=Follow%20me&style=social)](https://twitter.com/lesnitsky_a)
