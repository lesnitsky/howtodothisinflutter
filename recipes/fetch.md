import Example from '../components/Example';

# Fetching data

<Example reactnative>

```js
fetch('https://somedomain.com/api')
    .then(res => res.json())
    .then(console.log);
```

</Example>

<Example flutter>

```yaml
dependencies:
    http: ^0.12.0
```

```dart
import 'dart:convert'; // json
import 'package:http/http.dart' as http;

http.get('someurl').then((http.Response res) {
    final data = json.decode(res.body);
});

```

</Example>
