# node-jpg-is-cmyk
check jpg file is cmyk

# install 
```
npm install jpg-is-cmyk
```

# API

// @param data   file path
// @return Promise<boolean> true if jpg is cmyk
isCmykFromFile(file: string) 


// @param data    file data Buffer
// @return boolean true if jpg is cmyk
isCmykFromData(data: Buffer) 

# License
MIT