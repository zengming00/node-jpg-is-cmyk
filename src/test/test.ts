import { isCmykFromFile } from '../index';

// tslint:disable:no-console
!async function () {

  // const ret = await isCmykFromFile('C:/Users/admin/Desktop/0001.jpg');
  // const ret = await isCmykFromFile('C:/Users/admin/Desktop/out3.jpg');
  // const ret = await isCmykFromFile('C:/Users/admin/Desktop/out.jpg');
  const ret = await isCmykFromFile('./res/omer.jpg');
  // const ret = await isCmykFromFile('./res/七牛处理后(隐式CMYK).jpg');
  // const ret = await isCmykFromFile('./res/cmyk2.jpg');
  // const ret = await isCmykFromFile('./res/带icc图片.jpg');
  // const ret = await isCmykFromFile('./res/原始图.jpg');
  // const ret = await isCmykFromFile('./res/exif带旋转.jpg');
  // const ret = await isCmykFromFile('./res/err.jpg');
  console.log('ret=', ret);

}().catch(function (err) {
  console.error('eeeeee:', err);
});


