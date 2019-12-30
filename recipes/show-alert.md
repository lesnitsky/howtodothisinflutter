import Example from '../components/md/Example';

<Example flutter>

```dart
showDialog<void>(
  context: context,
  barrierDismissible: false,
  builder: (BuildContext context) {
    return AlertDialog(
      title: Text('Alert Title'),
      content: Text('My Alert Msg'),
      actions: <Widget>[
        FlatButton(
          child: Text('Ask me later'),
          onPressed: () {
            print('Ask me later pressed');
            Navigator.of(context).pop();
          },
        ),
        FlatButton(
          child: Text('Cancel'),
          onPressed: () {
            print('Cancel pressed');
            Navigator.of(context).pop();
          },
        ),
        FlatButton(
          child: Text('OK'),
          onPressed: () {
            print('OK pressed');
            Navigator.of(context).pop();
          },
        ),
      ],
    );
  },
);
```

</Example>
