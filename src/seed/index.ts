import cnData from './cn.data';
import imagesData from './images.data';

const fetchData = (url: string) => fetch(url).then(data => data.arrayBuffer());

export default Promise.all([fetchData(cnData), fetchData(imagesData)]).then(arr => {
  const [cnBuffer, imagesBuff] = arr;
  return import('wasm-flate').then(module => {
    const cn = JSON.parse(Buffer.from(module.deflate_decode_raw(Buffer.from(cnBuffer))).toString());
    const images = JSON.parse(
      Buffer.from(module.deflate_decode_raw(Buffer.from(imagesBuff))).toString(),
    );
    return { cn, images };
  });
});

// export default import('wasm-flate').then(module => {
//   const cn = JSON.parse(Buffer.from(module.deflate_decode_raw(cnData)).toString());
//   const en = JSON.parse(Buffer.from(module.deflate_decode_raw(enData)).toString());
//   const ko = JSON.parse(Buffer.from(module.deflate_decode_raw(koData)).toString());
//   return { cn, en, ko };
// });
