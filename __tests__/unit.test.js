// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

test('isPhoneNumber passing test', () => {
  expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber passing test', () => {
  expect(functions.isPhoneNumber('010-345-8989')).toBe(true);
});

test('isPhoneNumber failing test', () => {
  expect(functions.isPhoneNumber('abc-def-hijk')).toBe(false);
});

test('isPhoneNumber failing test', () => {
  expect(functions.isPhoneNumber('123-45')).toBe(false);
});

test('isEmail passing test', () =>{
  expect(functions.isEmail('test@test.com')).toBe(true);
});

test('isEmail passing test', () =>{
  expect(functions.isEmail('email1234@test.com')).toBe(true);
});

test('isEmail failing test', () =>{
  expect(functions.isEmail('oogabooga')).toBe(false);
});

test('isEmail failing test', () =>{
  expect(functions.isEmail('test#test.com')).toBe(false);
});

test('isStrongPassword passing test', () =>{
  expect(functions.isStrongPassword('aAwW12')).toBe(true);
});

test('isStrongPassword passing test', () =>{
  expect(functions.isStrongPassword('SuPeR5tr0ng')).toBe(true);
});

test('isStrongPassword failing test', () =>{
  expect(functions.isStrongPassword('abc')).toBe(false);
});

test('isStrongPassword failing test', () =>{
  expect(functions.isStrongPassword('123')).toBe(false);
});

test('isDate passing test', () =>{
  expect(functions.isDate('05/28/2023')).toBe(true);
});

test('isDate passing test', () =>{
  expect(functions.isDate('05/29/2023')).toBe(true);
});

test('isDate failing test', () =>{
  expect(functions.isDate('280/193/239')).toBe(false);
});

test('isDate failing test', () =>{
  expect(functions.isDate('notADate')).toBe(false);
});

test('isHexColor passing test', () =>{
  expect(functions.isHexColor('#abcdef')).toBe(true);
});

test('isHexColor passing test', () =>{
  expect(functions.isHexColor('#ff0000')).toBe(true);
});

test('isHexColor failing test', () =>{
  expect(functions.isHexColor('black')).toBe(false);
});

test('isHexColor failing test', () =>{
  expect(functions.isHexColor('#gg0123')).toBe(false);
});
