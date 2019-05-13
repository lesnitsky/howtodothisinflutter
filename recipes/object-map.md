import Example from '../components/md/Example';

<Example reactnative>

Defining Object
```js
const exampleObject = {
    type: 'example',
    value: 3,
    children: null,
    isEditable: false
}
```

Accessing Object values
```js
exampleObject.type;
exampleObject.value;
```

</Example>

<Example flutter>

In Dart, there is Map like JS Objects but it is a little bit different

Defining Map
```dart
Map<String, dynamic> exampleMap = {
    'type': 'example',
    'value': 3,
    'children': null,
    'isEditable': false,
}
```

Accessing Map values
```dart
exampleMap['type'];
exampleMap['value'];
```

If you want to define and access Map like JS, you need to define a class
```dart
class ExampleClass {
    final String type;
    final int value;
    final List children;
    final bool isEditable;

    ExampleClass({
        this.type,
        this.value,
        this.children,
        this.isEditable,
    });
}

ExampleClass exampleClass = ExampleClass(
    type: 'example',
    value: 3,
    children: null,
    isEditable: false,
);
```

Accessing Class values
```dart
exampleClass.type;
exampleClass.value;
```

</Example>
