# ES6 Event Dispatcher
Event Dispatcher for ECMAScript 6

[![Build Status](https://img.shields.io/codeship/a46daac0-d6af-0132-05dd-4237fa3960fe.svg)](https://codeship.com/projects/78434)
[![Code Quality](https://img.shields.io/codacy/2970e79e791e40a7bebd54543a660944.svg)](https://www.codacy.com/app/Migme/es6-event-dispatcher)

## Usage

```js
import Dispatcher from 'migme-dispatcher'

Dispatcher.register('someevent', data => {
  console.log('the event was dispatched')
})

Dispatcher.dispatch('someevent', {})
```
