import low from 'lowdb';
import LocalStorage from 'lowdb/adapters/LocalStorage';
const LodashId = require('lodash-id');

declare module 'lodash' {
  interface LoDashStatic {
    id: string;
    time: string;
    createId(): string;
  }
  interface CollectionChain<T> {
    getById(id: string): ObjectChain<T | undefined>;
    insert: (doc: Omit<T, 'id'>) => ObjectChain<T>;
    upsert: (doc: Omit<T, 'id'>) => ObjectChain<T>;
    updateById: (id: string, doc: T) => ObjectChain<T | undefined>;
    updateWhere: (
      whereAttrs: { [P in keyof T]?: T[P] },
      attrs: { [P in keyof T]?: T[P] },
    ) => CollectionChain<T[]>;
    replaceById: (id: keyof T, attrs: { [P in keyof T]?: T[P] }) => ObjectChain<T | undefined>;
    removeById: (id: string) => ObjectChain<T | undefined>;
    removeWhere: (whereAttrs: { [P in keyof T]?: T[P] }) => CollectionChain<T[]>;
  }
  interface LoDashExplicitWrapper<TValue> {
    createId(): string;
  }
}

export interface LocalRecord {
  /**
   * 存档ID
   */
  id?: string;
  /**
   * 存档文件名称
   */
  file: string;
  /**
   * 游戏ID
   */
  playerName?: string;
  /**
   * 游戏版本
   */
  version?: string;
  /**
   * 兼容版本
   */
  compatible?: string;
  /**
   * 英雄职业
   */
  heroName?: string;
  /**
   * 等级
   */
  level?: string;

  /**
   * 面板物品
   */
  panel: string[];

  /**
   * 背包物品
   */
  bag: string[];

  /**
   * 仓库物品
   */
  store: string[];

  /**
   * 粉末(已废弃)
   */
  dust: string[];

  /**
   * 存档
   */
  codes: string[];

  /**
   * 插入时间
   */
  time: string;
}

interface DataModel {
  records: LocalRecord[];
  unknownRecords: LocalRecord[];
}

const adapter = new LocalStorage<DataModel>('zbsc002');
const db = low(adapter);
db._.mixin(LodashId);
// db._.id = '_id';

db.defaults({ records: [], unknownRecords: [] }).write();

// Data is automatically saved to localStorage

export default db;
