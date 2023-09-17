# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @idil.m/lotide`

**Require it:**

`const _ = require('@idil.m/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(...)`: description
* `function2(...)`: description
* `function3(...)`: description
*  `assertArraysEqual(...)`: description a function which will take in two arrays and console.log an appropriate message to the console.
* `assertEquals (...)`: description a function which will take in two values and console.log an appropriate message to the console.
* `assertObjectsEqual (...)`: description a function which will take in two objects and console.log an appropriate message to the console.
* `countLetters(...)`: description function which take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `countOnly(...)`: descriptiona function which will be given an array and an object. It will return an object containing counts of everything that the input object listed.
* `eqArrays(...)`: description a function that takes in two arrays and returns true or false, based on a perfect match.
* `eqObjects(...)`: description a function which will take in two objects and returns true or false, based on a perfect match.
* `findKey(...)`: description a function which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `findKeyByValue(...)`: description a function which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `flatten(...)`: description a function which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
* `head(...)`: description a functionwhich returns the first item in the array
* `letterPositions(...)`: description a function which will return all the indices (zero-based positions) in the string where each character is found.
* `middle(...)`: description a function which will take in an array and return the middle-most element(s) of the given array.
* `tail(...)`: description a function which returns the "tail" of an array: everything except for the first item (head) of the provided array.
* `takeUntil(...)`: description a function which will keep collecting items from a provided array until the callback provided returns a truthy value.
* `without(...)`: description a function which will return a subset of a given array, removing unwanted elements.