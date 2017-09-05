# node-jpg-is-cmyk
check jpg file is cmyk

# install 
```
npm install jpg-is-cmyk
```

# API
```
// @param data                 file path
// @return Promise<boolean>    true if jpg is cmyk
isCmykFromFile(file: string) 


// @param data         file data Buffer
// @return boolean     true if jpg is cmyk
isCmykFromData(data: Buffer) 
```
# DEMO

```typescript
import * as jpg from 'jpg-is-cmyk';

// const file = 'C:/Users/admin/Desktop/0001.jpg';
// const file = 'C:/Users/admin/Desktop/out3.jpg';
const file = 'C:/Users/admin/Desktop/out.jpg';

jpg.isCmykFromFile(file).then(function (r) {
  // tslint:disable-next-line:no-console
  console.log('ret=' + r);
}).catch(function (err) {
  console.error('err:', err);
});

```

# License
MIT