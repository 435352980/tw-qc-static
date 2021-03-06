import seed from '@/seed';
import DataHelper from '@/dataHelper';

const getDataSource = (lang: 'cn' | 'en' | 'ko' = 'cn') =>
  seed.then(({ images, ...source }) => {
    const { stageGoods, stageUnits, heroes, drops, makes, exclusives } = source[lang];
    return new DataHelper(stageGoods, stageUnits, heroes, drops, makes, exclusives, images);
  });

export default getDataSource;
