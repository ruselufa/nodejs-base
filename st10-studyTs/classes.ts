class Coord {
    lat: number;
    long: number;

    protected test() {
        // метод protected доступен в классе, в классе которых наследуется
        // но не доступен в инстансе этого класса
        // а приватные методы доступны только в этом конкретном классе, но недоступен в наслед. классах
        if ( this.lat > 0) {

        };
    }

    computeDistance(newLat: number, newLong: number): number {
        return 0;
    }

    constructor(lat: number, long: number) {
        this.test();
        this.lat = lat;
        this.long = long;
    }
}



const point = new Coord(0, 1);
point.lat = 1;
point.long = 2;

class MapLocation extends Coord {
    private _name: string; // для геттеров и сеттеров надо делать переменные приватными
    #a: bigint; // использовать толкьо если очень хотим защитить переменную для безопасности
    get name() {
        return this._name;
    }
    set name(s: string) {
        this._name = s + '_cool;';
    }
    override computeDistance(newLat: number, newLong: number): number {
        console.log(this._name);
        this.test();
        return 1;
    }
    constructor(lat: number, long: number, name: string) {
        super(lat, long);
        this.name = name;
    }
}

const loc = new MapLocation(0, 1, 'asdf');
// loc.test() // так не работает, т.к. метод test протектед

interface LoggerService {
    log: (s: string) => void;
}

class Logger implements LoggerService {
    public log(s: string) {
        console.log(s);
    }
    private error(s: string) {
        console.log(s);
    }
    private a = 'asdf';
    protected adf: any;
}

const l = new Logger();
l.log('d');
// l.error('d');

// class MyClass {
//     static a = '1';
//     static {
//
//     }
// }
//
// MyClass.a
// статические методы и переменные существуют до создания инстанса

// generics in class
class MyClass<T> {
    a: T;
}

const b1 = new MyClass<string>();
b1.a;

// abstract classes
abstract class Base {
    print(s: string) {
        console.log(s);
    }

    abstract error(s: string): void;
}

// new Base() // от абстрактного класса нельзя создать инстанс класса, т.к. наш класс абстрактный
class BaseExtended extends Base{
    error(s: string) {

    }
}
new BaseExtended().print('asdf');

// расширение и сужение классав
class Animal {
    name: string;
}

class Dog {
    name: string;
    tail: boolean;
}

const puppy: Animal = new Dog;