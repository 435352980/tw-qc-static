/**
 * 格式化提示框文本
 * @param tipChunks 提示框文本段
 */
export const formatTipString = (...tipChunks: string[]) =>
  tipChunks
    .reduce((pre: string[], chunk) => {
      if (chunk) {
        pre.push(chunk.replace(/\r\n|\n/g, '<br/>'));
      }
      return pre;
    }, [])
    .join('<br/>');


/**
 * 物品 lodash orderBy 降序
 */
export const goodDescSort = (key: keyof Good) => (good: Good) => (good[key] ? good[key] : -1);
/**
 * 物品 lodash orderBy 升序
 */
export const goodAscSort = (key: keyof Good) => (good: Good) => (good[key] ? good[key] : 99);

/**
 * 单位 lodash orderBy 降序
 */
export const unitDescSort = (key: keyof Unit) => (unit: Unit) => (unit[key] ? unit[key] : -1);
/**
 * 单位 lodash orderBy 升序
 */
export const unitAscSort = (key: keyof Unit) => (unit: Unit) => (unit[key] ? unit[key] : 99);
