import { RootState } from '@/store/reducer';

/* eslint-disable @typescript-eslint/no-explicit-any */
export type TypeReducerAction = {
  type: string;
  [props: string]: any;
};

export type GetState = () => RootState;

export enum TypePlaySequence {
  order = 0,
  random = 1,
  single = 2,
}
