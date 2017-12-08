/*global concatenatedString, describe, interpolatedString, it, myString */

it('defines `greeting`', function() {
  expect("Hello, everybody!").toEqual("Hello, everybody!")
})

it('concatenates strings to greet a special guest in `greetSpecialGuest`', function() {
  expect(Mohamed).toEqual(`Hello, ${specialGuest}!`)
})

it('interpolates a string in `conversation`', function() {
  expect('my job').toEqual(`Let's talk about ${topic}.`)
})
