import * as React from 'react';
import { shallow } from 'enzyme';
import NumberPicker from '../../src/components/NumberPicker';

describe("NumberPicker", () => {
  describe("render", () => {
    test('Debería renderizar los 3 átomos', () => {
      const wrapper = shallow(<NumberPicker />);
      expect(wrapper.find('div').children()).toHaveLength(3);
    });

    test('Debería renderizar 2 botones', () => {
      const wrapper = shallow(<NumberPicker />);
      expect(wrapper.find('button')).toHaveLength(2);
    });

    test('Debería tener un span a 0', () => {
      const wrapper = shallow(<NumberPicker />);
      expect(wrapper.find('span').text()).toBe('0');
    });

    test('El primer botón debería ser un +', () => {
      const wrapper = shallow(<NumberPicker />);
      expect(wrapper.find('button').at(0).text()).toBe('+');
    });

    test('El primer botón debería ser un -', () => {
      const wrapper = shallow(<NumberPicker />);
      expect(wrapper.find('button').at(1).text()).toBe('-');
    });

    test('El primer elemento es un +', () => {
      const wrapper = shallow(<NumberPicker />);
      expect(wrapper.find('div').childAt(0).text()).toBe('+');
    });

    test('El segundo elemento es un 0 y es un span', () => {
      const wrapper = shallow(<NumberPicker />);
      expect(wrapper.find('div').childAt(1).text()).toBe('0');
      expect(wrapper.find('div').childAt(1).is('span')).toBeTruthy();
    });

    test('El orden debe ser +, 0, -.', () => {
      const wrapper = shallow(<NumberPicker />);
      const texts = wrapper.find('div').children().map(node => node.text());
      expect(texts).toEqual(['+', '0', '-']);
    });

    test('Cuando hago click en el Botón de sumar, este suma 1', () => {
      const wrapper = shallow(<NumberPicker />);
      wrapper.find('button').at(0).simulate("click");
      expect(wrapper.find("span").text()).toBe("1");
    });

    test('Cuando hago click en el Botón de restar, este resta 1', () => {
      const wrapper = shallow(<NumberPicker />);
      wrapper.find('button').at(1).simulate("click");
      expect(wrapper.find("span").text()).toBe("-1");
    });

    test('El elemento span no puede ser más grande que 10', () => {
      const wrapper = shallow(<NumberPicker />);
      expect(parseInt(wrapper.find('span').text())).not.toBeGreaterThan(10);
    });

    test.skip('Verificamos que el valor se cumple', () => {
      const maxValue = 100;
      const wrapper = shallow(<NumberPicker />);
      wrapper.find('button').at(0).simulate("click");
      wrapper.find('button').at(0).simulate("click");
      expect(wrapper.find('span').text()).toBe('1');
    });
    test('Si el contador llega a -1, al hacer click en disminuir no disminuye', () => {
      const wrapper = shallow(<NumberPicker />);
      wrapper.find('button').childAt(1).simulate('click');
      wrapper.find('button').childAt(1).simulate('click');
      expect(wrapper.find('span').text()).toBe('-1');
    });
  });
});
