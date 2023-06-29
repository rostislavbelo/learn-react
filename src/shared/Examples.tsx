import { hot } from "react-hot-loader/root";
import * as React from "react";
import styles from "./examples.css";

type concatTextType = (arg1: string, arg2: string) => string;

const concatText: concatTextType = function (arg1, arg2) {
  let result = `${arg1} ${arg2}`;
  return result;
};

interface IMyHometask {
  [N: string]: (string | number)[] | string | {[M:string]:(string | number)[] | string}[];
}


const MyHometask: IMyHometask = {
  howIDoIt: "I Do It Wel",

  simeArray: ["string one", "string two", 42],

  withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23]}],
};

interface MyArray<T> {
  [N: number]: T;
  reduce<U>(callbackfn: (initialValue: U, currentValue: T, currentIndex: number, array: MyArray<T>) => U, initialValue?: U): U;
}


let someArray:MyArray<number> = [10, 20, 30, 40, 50];


const result = someArray.reduce((initialValue, currentValue) => initialValue + currentValue, 300)


export function ExamplesComponent() {
  return (
    <header>
      <h1 className={styles.example}>Hello React</h1>
      <p className={styles.example}>{concatText("превед", "медвед")}</p>
      <p className={styles.example}>{result}</p>
    </header>
  );
}

