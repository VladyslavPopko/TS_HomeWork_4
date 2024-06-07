interface IFirst {
  [key: string]: number | string;
}

interface ISecond {
  [key: string]: (...args: unknown[]) => unknown;
}

interface IThird {
  [key: number]: string;
}

interface IFourth {
  name: string;
  age: number;
  [id: string]: string | number;
}

interface IFive {
  [key: string]: string | number;
}

interface ISix extends IFive {
  name: string;
  age: number;
}

function foo(someObject: IFive, type: string): boolean {
  for (const values in someObject) {
    if (typeof someObject[values] !== type) {
      return false;
    }
  }

  return true;
}

function foo2(someObject: IFive, keys: string[], type: string): boolean {
  for (const key in keys) {
    if (typeof someObject[key] !== type) {
      return false;
    }
  }

  return true;
}
