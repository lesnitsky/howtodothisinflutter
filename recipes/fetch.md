import Example from '../components/md/Example';

<Example reactnative>

```js
fetch(API_URL)
  .then(res => res.json())
  .then(console.log);
```

</Example>

<Example flutter>


```dart
import 'dart:io';
import 'dart:convert';

void main() async {
  // Produces a request object
  var request = await HttpClient().getUrl(Uri.parse(API_URL));
  // Sends the request
  var response = await request.close(); 

  // Transforms and prints the response
  await for (var contents in response.transform(Utf8Decoder())) {
    print(contents);
  }
}
```

</Example>
