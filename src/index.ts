import * as fs from 'fs';

// 以文件路径检查是否是cmyk
export function isCmykFromFile(file: string) {
  return new Promise<boolean>((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        return reject(err);
      }
      try {
        resolve(isCmykFromData(data));
      } catch (e) {
        reject(e);
      }
    });
  });
}

// 以Buffer检查是否是cmyk
export function isCmykFromData(data: Buffer) {
  check_valid_jpg(data);
  // check_ICC_PROFILE(data);
  return check_cmyk(data);
}


// 检查是否是有效的jpg
export function check_valid_jpg(data: Buffer) {
  if (data[0] !== 0xff && data[1] !== 0xd8) {
    throw new Error(`invalid JPEG begin`);
  }
  const i = data.length - 2;
  if (data[i] !== 0xff && data[i + 1] !== 0xd9) {
    throw new Error(`invalid JPEG end`);
  }
}

// 检查是否带有ICC_PROFILE
export function check_ICC_PROFILE(data: Buffer) {
  if (data.includes('ICC_PROFILE')) {
    throw new Error(`unsupported ICC_PROFILE`);
  }
}

// 检查是否是cmyk
export function check_cmyk(data: Buffer) {
  // CMYK
  if (data.includes('CMYK')) {
    return true;
  }

  // 解析jpg格式
  let pos = 0;
  while (pos < data.length) {
    pos++;
    switch (data[pos]) {
      case 0xd8: {
        pos++;
        // console.log('SOI');
        break;
      }
      case 0xd9: {
        pos++;
        // console.log('EOI');
        break;
      }
      case 0xc0:
      case 0xc1:
      case 0xc2: {
        // console.log(`SOF${data[pos] - 0xc0}`);
        pos++;
        const len = data.readUInt16BE(pos);
        // const height = data.readUInt16BE(pos + 3);
        // const width = data.readUInt16BE(pos + 5);
        const compoNum = data.readUInt8(pos + 7);
        // console.log(`${width}x${height}:${compo_num}`);
        if (compoNum === 4) {
          // console.log('====================================> cmyk!!!!!!!');
          return true;
        }
        pos += len;
        break;
      }
      case 0xc4: {
        pos++;
        const len = data.readUInt16BE(pos);
        pos += len;
        // console.log('DHT');
        break;
      }
      case 0xda: {
        pos++;
        const len = data.readUInt16BE(pos);
        pos += len;
        // console.log('SOS');
        break;
      }
      case 0xdb: {
        pos++;
        const len = data.readUInt16BE(pos);
        pos += len;
        // console.log('DQT');
        break;
      }
      case 0xdd: {
        pos++;
        const len = data.readUInt16BE(pos);
        pos += len;
        // console.log('DRI');
        break;
      }
      case 0xe0: {
        pos++;
        const len = data.readUInt16BE(pos);
        pos += len;
        // console.log('APP0');
        break;
      }
      case 0xfe: {
        pos++;
        const len = data.readUInt16BE(pos);
        pos += len;
        // console.log('COM');
        break;
      }
      default: {
        // const v = data[pos];
        // if (v <= 0x0f) {
        //   console.log('unknow type: 0x0' + v.toString(16));
        // } else {
        //   console.log('unknow type: 0x' + v.toString(16));
        // }
        pos++;
        const len = data.readUInt16BE(pos);
        pos += len;
      }

    }
  }
  return false;
}
