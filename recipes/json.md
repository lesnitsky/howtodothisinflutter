import Example from '../components/md/Example';

<Example flutter>

```dart
import 'dart:convert' show json;

json.decode(someString);
json.encode(encodableObject);
```

`json.decode` returns a `dynamic` type, which is probably not very useful

You should describe each entity as a Dart class with `fromJson` and `toJson` methods

```dart
class User {
    String displayName;
    String photoUrl;

    User({this.displayName, this.photoUrl});

    User.fromJson(Map<String, dynamic> json)
      : displayName = json['displayName'],
        photoUrl = json['photoUrl'];

    Map<String, dynamic> toJson() {
      return {
        'displayName': displayName,
        'photoUrl': photoUrl,
      };
    }
}

final user = User.fromJson(json.decode(jsonString));
json.encode(user.toJson());
```

However this approach is error-prone (e.g. you can forget to update map key after class field was renamed), so you can use `json_serializable` as an alternative

Add `json_annotation`, `build_runner` and `json_serializable` to dependencies

```yaml
dependencies:
  json_annotation: ^2.0.0

dev_dependencies:
  build_runner: ^1.0.0
  json_serializable: ^2.0.0
```

Update your code

```dart
import 'package:json_annotation/json_annotation.dart';

part 'user.g.dart';

@JsonSerializable()
class User {
  String displayName;
  String photoUrl;

  User({this.displayName this.photoUrl});

  // _$UserFromJson is generated and available in user.g.dart
  factory User.fromJson(Map<String, dynamic> json) {
    return _$UserFromJson(json);
  }

  // _$UserToJson is generated and available in user.g.dart
  Map<String, dynamic> toJson() => _$UserToJson(this);
}

final user = User.fromJson(json.decode(jsonString));
json.encode(user); // toJson is called by encode
```

Run `flutter packages pub run build_runner build` to generate serialization/deserialization code

To watch for changes run `flutter packages pub run build_runner watch`

[Read more about json and serialization here](https://flutter.io/docs/development/data-and-backend/json)

</Example>
