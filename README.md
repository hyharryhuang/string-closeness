# string-closeness
Node implementation of calculating how 'similar' two strings are to each other, by computing the Levenshtein/edit distance.

## Example

The following code returns 3, as 3 is the minimum number of character alterations (inserations, deletions or changes) to get from `kitten` to `sitting`.

```javascript
var Close = require('closeness.js');
console.log(Close.closeness('kitten', 'sitting'));
```
