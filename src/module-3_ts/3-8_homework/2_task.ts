/**
 * 2. Работа с интерфейсами
Напишите интерфейс для описания следующих данных

const MyHometask = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}
    Подсказка: если просто написать готовый объект MyHometask и навести на него мышкой можно сразу увидеть структуру типов.
 */

interface MyHometaskInterface {
  howIDoIt: string;
  simeArray: (string | number)[];
  withData: {
    howIDoIt: string;
    simeArray: (string | number)[];
  }[];
}

const MyHometask: MyHometaskInterface = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};
