import { isEqual, cloneDeep } from 'lodash';

export const deepEqual = <T>(a: T, b: T): boolean => {
    return isEqual(a, b);
};

export const deepClone = <T>(obj: T): T => {
    return cloneDeep(obj);
};
