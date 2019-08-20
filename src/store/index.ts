import { createStore, createTypedHooks } from 'easy-peasy';
import Logger from 'redux-logger';

import search, { SearchModel } from './search';
import good, { GoodModel } from './good';

interface StoreModel {
  good: GoodModel;
  search: SearchModel;
}

const { useStoreActions, useStoreState, useStoreDispatch } = createTypedHooks<StoreModel>();

export { useStoreActions, useStoreState, useStoreDispatch };

const store = createStore<StoreModel>({ search, good }, { middleware: [Logger] });

export default store;
