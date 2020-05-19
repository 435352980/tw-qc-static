import { Action, action } from 'easy-peasy';

import DataHelper from '@/dataHelper';

/**
 * 程序模块Model
 */
export interface AppModel {
  /**
   * 界面文本
   */
  local: Local;

  /**
   * 设置界面文本
   */
  setLocal: Action<AppModel, Local>;

  /**
   * 数据源
   */
  dataHelper: DataHelper | null;

  /**
   * 设置数据源工具
   */
  setDataHelper: Action<AppModel, DataHelper>;
}

const appModel: AppModel = {
  local: null,
  setLocal: action((state, payload) => {
    state.local = payload;
  }),

  dataHelper: null,

  setDataHelper: action((state, payload) => {
    state.dataHelper = payload;
  }),
};

export default appModel;
