import Example from '../components/md/Example';

# Fetching data

<Example reactnative>

```js
fetch(API_URL)
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

http.get(API_URL).then((http.Response res) {
    final data = json.decode(res.body);
    print(data);
});

```

</Example>
