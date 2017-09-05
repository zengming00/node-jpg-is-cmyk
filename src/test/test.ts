import { isCmykFromFile } from '../index';

// tslint:disable:no-console
!async function () {

  // const ret = await isCmykFromFile('C:/Users/admin/Desktop/0001.jpg');
  // const ret = await isCmykFromFile('C:/Users/admin/Desktop/out3.jpg');
  const ret = await isCmykFromFile('C:/Users/admin/Desktop/out.jpg');
  console.log('ret=', ret);

}().catch(function (err) {
  console.error('eeeeee:', err);
});


