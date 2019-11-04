/**
 * 树对象
 */
type TreeData<T> = T & { children?: TreeData<T>[] };

// type TreeList<T> = T & { children?: TreeList<T>[] };
