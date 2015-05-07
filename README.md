# ES6 Event Dispatcher
Event Dispatcher for ECMAScript 6

[![Build Status](https://img.shields.io/codeship/a46daac0-d6af-0132-05dd-4237fa3960fe.svg)](https://codeship.com/projects/78434)
[![Code Quality](https://img.shields.io/codacy/2970e79e791e40a7bebd54543a660944.svg)](https://www.codacy.com/app/Migme/es6-event-dispatcher)

## Usage

```js
import Dispatcher from 'migme-dispatcher'

function listener (data) {
  console.log('the event was dispatched')
}

// Register an event
Dispatcher.register('someevent', listener)

// Dispatch an event
Dispatcher.dispatch('someevent', {})

// Get a list of the listeners
const listeners = Dispatcher.getEventHandlers('someevent')

// Remove event
Dispatcher.remove('someevent', listener)

// Clear all event listeners for an event
Dispatcher.clearEventHandlers('someevent')
```
