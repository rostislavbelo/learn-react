import { hot } from "react-hot-loader/root";
import * as React from "react";
import styles from "./examples.css";

//----------------------------------------------------------
// дз по тс

// затипизировать функцию конкатенации строк

type concatTextType = (arg1: string, arg2: string) => string;

const concatText: concatTextType = function (arg1, arg2) {
  let result = `${arg1} ${arg2}`;
  return result;
};
//----------------------------------------------------------------

// создать интерфейс сложного объекта
interface IMyHometask {
  [N: string]: | (string | number)[] | string | { [M: string]: (string | number)[] | string }[];
}

const MyHometask: IMyHometask = {
  howIDoIt: "I Do It Wel",

  simeArray: ["string one", "string two", 42],

  withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
};
//---------------------------------------------------------

// создать дженерик метода reduce
interface MyArray<T> {
  [N: number]: T;
  reduce<U>( callbackfn: (initialValue: U, currentValue: T, currentIndex: number, array: MyArray<T>) => U, initialValue?: U  ): U;
}

let someArray: MyArray<number> = [10, 20, 30, 40, 50];

const result = someArray.reduce(
  (initialValue, currentValue) => initialValue + currentValue,
  300
);


//-------------- Карирование пример
function add(left: number) {
  return (right: number) => left + right;
}

// то же, но стрелкой
const add2 = (left: number) => (right: number) => left + right;

const addOne = add(1);

// Работа со списками урок 5.3 ---------------------------------------------------------------

interface IItem {
  value: string;
  id: string;
  onClick: () => void;
  
}

interface IMyListProps {
  list: IItem[];
}


export function MyList({list}:IMyListProps) {
  return (
    <ul>
      {
        list.map((item:IItem) => (
          <li onClick={item.onClick} key={item.id}>{item.value}</li>
        ))
      }
    </ul>
  )
}

export function assoc<K extends string, T extends string>(key: K, value: T) {
  return <O extends Object>(obj: O) => ({...obj, [key]: value}) as K extends keyof O ? (Omit<O, K> & Record<K, T>) : (O & Record<K, T>) // необязательный хвост
}

// Генерация случайных строк для ключей 
const generateRandomString = () => Math.random().toString(36).substring(2, 15);

const assignId =  assoc('id', generateRandomString());

const generateId = <O extends object>(obj: O) => assoc('id', generateRandomString())(obj);

const LIST = [
  {value: 'some'},
  {value: 'some1'},
  {value: 'some2'}
].map(generateId);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

//-- дропдаун с выпадающим списком

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: ()=>void;
  onClose?: ()=>void;

}

const NOOP = ()=>{};

export function Dropdown({button, children, isOpen, onClose=NOOP, onOpen=NOOP}: IDropdownProps) {

  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen)

  React.useEffect(()=> setIsDropdownOpen(isOpen), [isOpen])
  React.useEffect(()=> isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  }

  return (
    <div>
      <div onClick={handleOpen}>
        {button}
        </div>
        {isDropdownOpen && (
          <div>
            <div onClick={()=> setIsDropdownOpen(false) }>
              {children}
            </div>

          </div>
        )}
    </div>
  );
}



export function ExamplesComponent() {

  const [list, setList] = React.useState(LIST);

  const handleItemClick = (id:string) => {
    setList(list.filter((item) => item.id !== id))
  }

  const handleAdd = () => {
    setList( list.concat(generateId({ value: document.querySelector('input')?.value || generateRandomString()})))
  }
  
  return (
    <div>
      <h1 className={styles.example}>Hello React</h1>
      <p className={styles.example}>{concatText("превед", "медвед")}</p>
      <p className={styles.example}>{result}</p>
      <p className={styles.example}>{add(1)(2)}</p>
      <p className={styles.example}>{addOne(5)}</p>
      <p className={styles.example}>{generateRandomString()}</p>
      <input></input>
      <button onClick={handleAdd}>Add element</button>
      <MyList list = {list.map((item)=>({...item, onClick: () => handleItemClick(item.id)}))} />
      <br/>
      <Dropdown 
      onClose={() => console.log('close')} 
      onOpen={() => console.log('open')} 
      
      button={<button>test</button>}>
        <ul>
          <li onClick={console.log}>1</li>
        </ul>
      </Dropdown>
      
    </div>
  );
}
