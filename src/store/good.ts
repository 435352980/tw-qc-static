import { Action, action } from 'easy-peasy';

export interface GoodModel {
  /**
   * 类型过滤
   */
  filterCat: string;
  /**
   * 设置类型过滤
   */
  setFilterCat: Action<GoodModel, string>;
}

const goodModel: GoodModel = {
  filterCat: 'weapon',
  setFilterCat: action((state, payload) => {
    state.filterCat = payload;
  }),
};

export default goodModel;
