// т.к. изначально jest работает без браузера и только эмулирует DOM в node.js то window там нет
// что бы включить его нужно прописать такую конструкцию в начале файла с тестом:
//  если мы работаем с window и нужен его полифил то можно им так воспользоваться, но лучше его не прописывать потому что тесты с
// jsDOM работаеют дольше
/**
 * @jest-environment jsdom
 */

import React from 'react';
import { DropDown } from '../DropDown';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('DropDown', () => {
  test('should render', () => {
    // в Enzym что бы проверить без браузера что компонент зарендерился нужно использовать ф-ю shallow которая идёт вместе с Enzym
    const wrapper = shallow(<DropDown button={<button />} children={<div></div>} isOpen={false} />);

    expect(wrapper).toBeDefined(); // проверям что компонент существует т.е. отрендерился
    // expect(wrapper.find('#button')).toBeDefined(); // проверям что кнопка внутри DropDown отрендерилась

    /** сейчас тесты всегда зеленные т.к. shallow всегда возвращает shallow wrapper который может быть пустым, что бы посмотреть что внутри можно написать так: */
    // console.log(wrapper.find('hello').debug()); // ничего не верёт, только "console.log"
    // console.log(wrapper.find('#button').debug()); // ничего не верёт, только "console.log"
    // console.log(wrapper.find('div.container').debug()); // вернёт div с классом container

    // уберём предыдущие expect и напишем уже с новым найденным элементом
    expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
  });

  test('should render (snapshot)', () => {
    const wrapper = shallow(<DropDown button={<button />} children={<div></div>} isOpen={false} />);

    expect(wrapper).toMatchSnapshot(); // toMatchSnapshot это специальный матчер для работы со snapshot'ами
  });
});
