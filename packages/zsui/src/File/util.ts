export const FileMimeSuffix = {
    Image: ['jpg', 'jpeg', 'png'],
    Pdf: ['pdf'],
    Word: ['doc', 'docx'],
    Excel: ['xlsx', 'xls'],
    PPT: ['ppt', 'pptx'],
    Audio: ['mp3'],
    Video: ['mp4', 'mov', 'avi'],
    Zip: ['zip', 'rar'],
    Dwg: ['dwg'],
};

export const getSysSupportFileTypes = () => [
    ...FileMimeSuffix.Pdf,
    ...FileMimeSuffix.Word,
    ...FileMimeSuffix.Excel,
    ...FileMimeSuffix.PPT,
    ...FileMimeSuffix.Dwg,
    ...FileMimeSuffix.Image,
    ...FileMimeSuffix.Audio,
    ...FileMimeSuffix.Video,
    ...FileMimeSuffix.Zip,
];

export const getFileSuffix = (fileName?: string) => {
    if (!fileName) {
      return '';
    }
  
    const arr = fileName.split('.');
    const suffix = arr.pop() as string;
  
    if (suffix === fileName) {
      return '';
    }
  
    const lowerSuffix = suffix.toLowerCase();
  
    return lowerSuffix;
};

export const getFileName = (name?: string) => {
    if (!name) {
      return '';
    }

    const arr = name.split('.');
    // 去除 后缀名
    arr.pop();
  
    return arr.join('.');
};    


export const isPdf = (fileName = '') =>
    FileMimeSuffix.Pdf.includes(getFileSuffix(fileName));
  
  export const isWord = (fileName = '') =>
    FileMimeSuffix.Word.includes(getFileSuffix(fileName));
  
  export const isImage = (fileName = '') =>
    FileMimeSuffix.Image.includes(getFileSuffix(fileName));
  
  export const isExcel = (fileName = '') =>
    FileMimeSuffix.Excel.includes(getFileSuffix(fileName));
  
  export const isPPT = (fileName = '') =>
    FileMimeSuffix.PPT.includes(getFileSuffix(fileName));
  
  export const isAudio = (fileName = '') =>
    FileMimeSuffix.Audio.includes(getFileSuffix(fileName));
  
  export const isVideo = (fileName = '') =>
    FileMimeSuffix.Video.includes(getFileSuffix(fileName));
  
  export const isZip = (fileName = '') =>
    FileMimeSuffix.Zip.includes(getFileSuffix(fileName));
  
  export const isDwg = (fileName = '') =>
    FileMimeSuffix.Dwg.includes(getFileSuffix(fileName));
  