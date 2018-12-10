import Example from '../components/md/Example';

# Arrays

<Example reactnative>

```js
const length = items.length;

const newItems = items.concat(otherItems);

const allEven = items.every(item => item % 2 == 0);

const filled = items.fill(42);

const even = items.filter(n => n % 2 === 0);

const found = items.find(item => item.id == 42);

const index = items.findIndex(item => item.id == 42);

const flat = items.flat();

const mapped = items.flatMap(item => item + 1);

items.forEach(item => console.log(item));

items.forEach((item, index) => console.log(item, index));

const includes = items.includes(42);

const indexOf = items.indexOf(item => item === itemToFind);

const joined = items.join(',');

const newItems = items.map(item => item + 1);

const item = items.pop();

items.push(42);

const reduced = items.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});

items.reverse();

items.shift();

const slice = items.slice(15, 42);

const hasOdd = items.some(item => item % 2);

items.sort((a, b) => a - b);

items.splice(15, 42, [1, 2, 3]);

items.unshift(42);
```

</Example>

<Example flutter>

```dart
final length = items.length;

final newItems = items.addAll(otherItems);

final allEven = items.every((item) => item % 2 == 0);

final filled = new List<int>.filled(3, 42);

final even = items.where((n) => n % 2 == 0);

final found = items.firstWhere((item) => item.id == 42);

final index = items.findIndex(item => item.id == 42);

final flat = items.expand((_) => _);

final mapped = items.expand((item) => item + 1);

items.forEach((item) => print(item));

items.asMap().forEach((index, item) => print('$item, $index'));

final includes = items.contains(42);

final indexOf = items.indexOf(42);

final joined = items.join(',');

final newItems = items.map((item) => item + 1);

final item = items.removeLast();

items.add(42);

final reduced = items.fold({}, (acc, item) => {
  acc[item.id] = item;
  return acc;
});

final reversed = items.reversed;

items.removeAt(0);

final slice = items.sublist(15, 42);

final hasOdd = items.any((item) => item % 2 == 0);

items.sort((a, b) => a - b);

items.replaceRange(15, 42, [1, 2, 3]);

items.insert(0, 42);
```

</Example>
