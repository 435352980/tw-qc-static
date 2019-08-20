import { getDb } from '@/db';

export interface SplitGoodData extends Good {
  num?: number;
  choose?: boolean;
  hasChild?: boolean;
}

/**
 * 根据物品ID拆解物品
 * @param id 物品ID
 * @param excludeIds 不需要展现子项的物品ID
 */
export const splitGoodById = (id: string, excludeIds: string[] = []): TreeData<SplitGoodData> => {
  const source = getDb('goods').find('id', id);
  const { name, buildFrom = [] } = source;
  // 默认排除粉末与毛皮项
  const children =
    excludeIds.includes(id) || (name.includes('粉末') || name.includes('冬日毛皮'))
      ? []
      : buildFrom.map(subs => ({
          ...splitGoodById(subs.id, excludeIds),
          choose: !!subs.choose,
          num: subs.num,
        }));
  if (children && children.length > 0) {
    return { ...source, children, hasChild: true };
  } else {
    return { ...source, hasChild: !!source.buildFrom };
  }
};
