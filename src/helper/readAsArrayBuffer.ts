const readAsArrayBuffer = (file: File) =>
  new Promise<ArrayBuffer>(resolve => {
    const reader = new FileReader();

    reader.addEventListener('loadend', e => {
      resolve(e.target.result as ArrayBuffer);
    });

    reader.readAsArrayBuffer(file);
  });

export default readAsArrayBuffer;
