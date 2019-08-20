import { Action, action } from 'easy-peasy';

export interface SearchModel {
  /**
   * 检索文本
   */
  searchText: string;
  /**
   * 设置检索文本
   */
  setSearchText: Action<SearchModel, string>;
}

const search: SearchModel = {
  searchText: '',
  setSearchText: action((state, payload) => {
    state.searchText = payload;
  }),
};

export default search;
