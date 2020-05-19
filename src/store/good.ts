import { Action, action } from 'easy-peasy';

export interface GoodModel {
  /**
   * 类型过滤
   */
  filterCat: FilterCat;
  /**
   * 设置类型过滤
   */
  setFilterCat: Action<GoodModel, FilterCat>;
}

const goodModel: GoodModel = {
  filterCat: 'Weapon',
  setFilterCat: action((state, payload) => {
    state.filterCat = payload;
  }),
};

export default goodModel;
