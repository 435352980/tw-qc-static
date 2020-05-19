const getGooTypeString = (goodType: any, lang: 'cn' | 'eng' | 'hg' = 'cn') => {
  switch (goodType) {
    case 1:
      return { cn: '武器', eng: 'Weapon', hg: '무기' }[lang];
    case 2:
      return { cn: '衣服', eng: 'Armor', hg: '갑옷' }[lang];
    case 3:
      return { cn: '头盔', eng: 'Helm', hg: '헬멧' }[lang];
    case 4:
      return { cn: '饰品', eng: 'Ring', hg: '보석' }[lang];
    case 5:
      return { cn: '翅膀', eng: 'Wing', hg: '날개' }[lang];
    case 6:
      return { cn: '材料', eng: 'Material', hg: '재료' }[lang];
    case 7:
      return { cn: '结晶', eng: 'Token', hg: '토큰' }[lang];
    case 8:
      return { cn: '徽章', eng: 'Icon', hg: '아이콘' }[lang];
    case 9:
      return { cn: '藏品', eng: 'Wing Frame', hg: '날개 틀' }[lang];
    case 10:
      return { cn: '任务', eng: 'Quest', hg: '임무' }[lang];
    case 11:
      return { cn: '召唤器', eng: 'Summoner', hg: '소환자' }[lang];
    case 12:
      return { cn: '书籍', eng: 'Book', hg: '책' }[lang];
    default:
      return '';
  }
};

export default getGooTypeString;
