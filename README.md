# How to do this in Flutter?

[![Build Status](https://travis-ci.com/lesnitsky/howtodothisinflutter.svg?branch=master)](https://travis-ci.com/lesnitsky/howtodothisinflutter)

📄 Cheet sheet for react-native developers.

> Built with [mdx](https://mdxjs.com/) and [nextjs](https://nextjs.org/)

## Motivation

As a react-native dev I found Flutter really similar to react-native in many ways. However when I first tried Flutter, turned out that doing simple things like fetchng data from back-end or building statefull component is not as straightforward as in React Native (actually it _is_ straightforward after the first time :smirk:)

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
-   ➕ add your name to `CONTRIBUTORS.md`
-   📦 commit your changes
-   ⤴️ create Pull Request
-   👍 kudos

## License

MIT © [Andrei Lesnitsky](https://twitter.com/lesnitsky_a)
