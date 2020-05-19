import { createStore, createTypedHooks } from 'easy-peasy';
import Logger from 'redux-logger';

import search, { SearchModel } from './search';
import good, { GoodModel } from './good';
import app, { AppModel } from './app';

interface StoreModel {
  good: GoodModel;
  search: SearchModel;
  app: AppModel;
}

const { useStoreActions, useStoreState, useStoreDispatch, useStore } = createTypedHooks<
  StoreModel
>();

export { useStoreActions, useStoreState, useStoreDispatch, useStore };

export default createStore<StoreModel>(
  { good, search, app },
  { middleware: process.env.NODE_ENV === 'production' ? [] : [Logger] },
);
