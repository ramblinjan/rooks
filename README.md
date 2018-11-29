# ⚓ rooks

Collection of regularly used custom hooks as utils for React

## [Website](https://react-hooks.org)

## Packages

# @rooks/use-boundingclientrect

### Installation

```
npm install --save @rooks/use-boundingclientrect
```

### Usage

```react
function Demo() {
  const myRef = useRef();
  const getBoundingClientRect = useBoundingclientrect(myRef);
  const [XOffset, setXOffset] = useState(0);
  const [YOffset, setYOffset] = useState(300);
  const displayString = JSON.stringify(getBoundingClientRect, null, 2);
  return (
    <>
      <div
        style={{
          width: 300,
          background: "lightblue",
          padding: "10px",
          position: "absolute",
          left: XOffset,
          top: YOffset
        }}
        ref={myRef}
      >
        <div
          style={{
            resize: "both",
            overflow: "auto",
            background: "white",
            color: "blue",
            maxWidth: "100%"
          }}
        >
          <p>
            Resize this div as you see fit. To demonstrate that it also updates
            on child dom nodes resize
          </p>
        </div>
        <h2>Bounds</h2>
        <p>
          <button onClick={() => setXOffset(XOffset - 5)}> Move Left </button>
          <button onClick={() => setXOffset(XOffset + 5)}> Move Right </button>
        </p>
        <p>
          <button onClick={() => setYOffset(YOffset - 5)}> Move Up </button>
          <button onClick={() => setYOffset(YOffset + 5)}> Move Down </button>
        </p>
      </div>
      <div style={{ height: 500 }}>
        <pre>{displayString}</pre>
      </div>
    </>
  );
}

render(<Demo/>)
```

Bounding client rect hook for React

# @rooks/use-counter

### Installation

```
npm install --save @rooks/use-counter
```

### Usage

```react
function CounterComponent() {
  const {
    value,
    increment,
    decrement,
    incrementBy,
    decrementBy,
    reset
  } = useCounter(3);


  function incrementBy5(){
     incrementBy(5)
  }
  function decrementBy7(){
     decrementBy(7)
  }

  return <>
      Current value is {value}
      <hr/>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={incrementBy5} >incrementBy5</button>
      <button onClick={decrementBy7} >decrementBy7</button>
      <hr/>
      <button onClick={reset}>reset</button>
  </>;
}

render(<CounterComponent/>)
```

Counter hook for React

# @rooks/use-did-mount

### Installation

```
npm install --save @rooks/use-did-mount
```

### Usage

```react
function Demo() {
  useDidMount(function(){
    console.log("mounted")
  });
  return null
}

render(<Demo/>)
```

# A React hooks package for componentDidMount

# @rooks/use-input

### Installation

```
npm install --save @rooks/use-input
```

### Usage

**Base**

```react
function Demo() {
  const myInput = useInput("hello");
  return (
    <div>
      <input {...myInput} />
      <p>
        Value is <b>{myInput.value}</b>
      </p>
    </div>
  );
}

render(<Demo/>)
```

**With optional validator**

```react
function Demo() {
  const myInput = useInput("hello", {
    validate: value => true
  });
  return (
    <div>
      <input {...myInput} />
      <p>
        Value is <b>{myInput.value}</b>
      </p>
    </div>
  );
}

render(<Demo/>)
```

Input hook for React

# @rooks/use-interval

### Installation

```
npm install --save @rooks/use-interval
```

### Usage

```react
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function Demo() {
  const [value, dispatcher] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatcher({
      type: "increment"
    });
  }

  const { start, stop } = useInterval(() => {
    increment();
  }, 1000);

  return (
    <>
      <p>value is {value.count}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </>
  );
}
render(<Demo/>)
```

# A react hook for using setInterval

# @rooks/use-mouse

### Installation

```
npm install --save @rooks/use-mouse
```

### Usage

```react
function Demo() {
  const { x, y } = useMouse();
  return (
    <>
      <p> Move mouse here to see changes to position </p>
      <p>X position is {x || "null"}</p>
      <p>X position is {y || "null"}</p>
    </>
  );
}

render(<Demo/>)
```

Mouse hook for React

# @rooks/use-mutation-observer

### Installation

```
npm install --save @rooks/use-mutation-observer
```

### Usage

```react
function Demo() {
  const myRef = useRef();
  const [mutationCount, setMutationCount] = useState(0);
  const incrementMutationCount = () => {
    return setMutationCount(mutationCount + 1);
  };
  useMutationObserver(myRef, incrementMutationCount);
  const [XOffset, setXOffset] = useState(0);
  const [YOffset, setYOffset] = useState(300);
  return (
    <>
      <div
        style={{
          width: 300,
          background: "lightblue",
          padding: "10px",
          position: "absolute",
          left: XOffset,
          top: YOffset
        }}
        ref={myRef}
      >
        <div
          style={{
            resize: "both",
            overflow: "auto",
            background: "white",
            color: "blue",
            maxWidth: "100%"
          }}
        >
          <p>
            Resize this div as you see fit. To demonstrate that it also updates
            on child dom nodes resize
          </p>
        </div>
        <h2>Bounds</h2>
        <p>
          <button onClick={() => setXOffset(XOffset - 5)}> Move Left </button>
          <button onClick={() => setXOffset(XOffset + 5)}> Move Right </button>
        </p>
        <p>
          <button onClick={() => setYOffset(YOffset - 5)}> Move Up </button>
          <button onClick={() => setYOffset(YOffset + 5)}> Move Down </button>
        </p>
      </div>
      <div style={{ height: 500 }} onClick={incrementMutationCount}>
        <pre>Mutation count {mutationCount}</pre>
      </div>
    </>
  );
}

render(<Demo/>)
```

Mutation Observer hook for React

# @rooks/use-navigator-language

### Installation

```
npm install --save @rooks/use-navigator-language
```

### Usage

```react
function Demo() {
 const language = useNavigatorLanguage();
  return <p>Language is {language}</p>;
}

render(<Demo/>)
```

Navigator Language hook for React

# @rooks/use-online

### Installation

```
npm install --save @rooks/use-online
```

### Usage

```react
function Demo() {
  const isOnline = useOnline();
  return <p>Online status - {isOnline.toString()}</p>;
}

render(<Demo/>)
```

Online Status hook for React

# @rooks/use-select

### Installation

```
npm install --save @rooks/use-select
```

### Usage

```react

const list = [
  {
    heading: "Tab 1",
    content: "Tab 1 Content"
  },
  {
    heading: "Tab 2",
    content: "Tab 2 Content"
  }
];

function Demo() {
  const { index, setIndex, item } = useSelect(list, 0);
  return (
    <div>
      {list.map((listItem, listItemIndex) => (
        <button
          key={listItemIndex}
          style={{
            background: index === listItemIndex ? "dodgerblue" : "inherit"
          }}
          onClick={() => setIndex(listItemIndex)}
        >
          {listItem.heading}
        </button>
      ))}
      <p>{item.content}</p>
    </div>
  );
}
render(<Demo/>)
```

List Selection hook for React

# @rooks/use-time-ago

### Installation

```
npm install --save @rooks/use-time-ago
```

### Usage

```react
function Demo() {
  const [date, setDate] = useState(new Date());
  const timeAgo = useTimeAgo(date.getTime() - 1000 * 12, {
    locale: "zh_CN"
  });
  const timeAgo2 = useTimeAgo(date.getTime() - 1000 * 12);
  return (
    <>
      <p>{timeAgo}</p>
      <p>{timeAgo2}</p>
    </>
  );
}

render(<Demo/>)
```

# A React Hook to get time ago for timestamp millisecond value

# @rooks/use-timeout

### Installation

```
npm install --save @rooks/use-timeout
```

### Usage

```react
function TimeoutComponent() {
  function doAlert() {
    window.alert("timeout expired!");
  }
  const { start, clear } = useTimeout(doAlert, 2000);
  return (
    <>
      <button onClick={start}> Start timeout </button>
      <button onClick={clear}> Clear timeout </button>
    </>
  );
}

render(<TimeoutComponent/>)
```

Counter hook for React

# @rooks/use-toggle

### Installation

```
npm install --save @rooks/use-toggle
```

### Usage

```react

const customToggleFunction = v => (v === "start" ? "stop" : "start");

function Demo() {
  const { value: value1, toggleValue: toggleValue1 } = useToggle();
  const { value: value2, toggleValue: toggleValue2 } = useToggle(true);
  const { value: value3, toggleValue: toggleValue3 } = useToggle(
    "start",
    customToggleFunction
  );

  return (
    <>
      <section>
        <h3>Base</h3>
        <button onClick={toggleValue1}>{value1.toString()}</button>
        <hr />
      </section>
      <section>
        <h3>Initial true</h3>
        <button onClick={toggleValue2}>{value2.toString()}</button>
        <hr />
      </section>
      <section>
        <h3>Custom values</h3>
        <button onClick={toggleValue3}>{value3}</button>
      </section>
    </>
  );
}

render(<Demo/>)
```

Toggle hook for React

# @rooks/use-visibility-sensor

Visibility sensor hook for React

### Installation

```
npm install --save @rooks/use-visibility-sensor
```

### Usage

```react

function Demo() {
    const rootNode = useRef(null);
    const { isVisible, visibilityRect } = useVisibilitySensor(rootNode, {
        intervalCheck: false,
        scrollCheck: true,
        resizeCheck: true
    });
    return (
        <div ref={rootNode}>
        <p>
            {isVisible ? "Visible" : isVisible === null ? "Null" : "Not Visible"}
        </p>
        </div>
    );
}

render(<Demo/>)
```

It checks whether an element has scrolled into view or not. A lot of the logic is taken from [react-visibility-sensor](https://github.com/joshwnj/react-visibility-sensor) and is rewritten for the hooks proposal.

> **Note:** This is using the new [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
> which is subject to change until React 16.7 final.
>
> You'll need to install `react`, `react-dom`, etc at `^16.7.0-alpha.0`

## Demo

[![Image from Gyazo](https://i.gyazo.com/98634bb2a962733670d798d1e754d63e.gif)](https://gyazo.com/98634bb2a962733670d798d1e754d63e)

## Options

The first argument of the `useVisibilitySensor` hook is a ref, the second argument is an options object. The available options are as follow:

`intervalCheck: false` - Accepts `int | bool`, if an `int` is supplied, that will be the interval in `ms` and it keeps checking for visibility

`partialVisibility: false` - Accepts `bool | string` : Tells the hook if partial visibility should be considered as visibility or not. Accepts `false` and directions `top`, `bottom`, `left` and `right`
`containment: null` - A `DOMNode` element which defaults to `window`. The element relative to which visibility is checked against

`scrollCheck: true` - A `bool` to determine whether to check for scroll behavior or not

`scrollDebounce: 250` - The debounce ms for scroll

`scrollThrottle: -1` - The throttle ms for scroll. If throttle > -1, debounce is ignored.

`resizeCheck: false` - A `bool` to determine whether to check for resize behavior or not

`resizeDebounce: 250` - The debounce ms for resize

`resizeThrottle: -1` - The throttle ms for resize. If throttle > -1, debounce is ignored.

`shouldCheckOnMount: true` - A `bool` which determines whether an initial check on first render should happen or not.

`minTopValue: 0` - An `int` top value to determine what amount of top visibility should be considered for `visibility`

## Todo

- [x] Init
- [x] Scroll and Resize support
- [x] Debounce and throttling
- [x] Option to opt-out of initial check on mount
- [x] Documentation of all options
- [x] Tests _ WIP _
- [ ] More examples _ WIP _

# @rooks/use-will-unmount

### Installation

```
npm install --save @rooks/use-will-unmount
```

### Usage

```react

function Message(){

  useWillUnmount(function () {
    alert("unmounted")
  })
  return <p> Message </p>
}


function Demo() {
  const [
    value,
    changeValue
   ] = useState(true);

  function toggleValue(){
    changeValue(!value)
  }

  return <>
    <p><button onClick={toggleValue}>Toggle show </button></p>
    {value && <Message/>}
  </>;
}

render(<Demo/>)
```

# A React hook for componentWillUnmount lifecycle method

# @rooks/use-window-size

### Installation

```
npm install --save @rooks/use-window-size
```

### Usage

```react
function WindowComponent() {
  const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();

  return (
    <div>
      <p>
        <span>innerHeight - </span>
        <span>{innerHeight}</span>
      </p>
      <p>
        <span>innerWidth - </span>
        <span>{innerWidth}</span>
      </p>
      <p>
        <span>outerHeight - </span>
        <span>{outerHeight}</span>
      </p>
      <p>
        <span>outerWidth - </span>
        <span>{outerWidth}</span>
      </p>
    </div>
  );
}
render(<WindowComponent/>)
```

Counter hook for React

# @rooks/use-worker

### Installation

```
npm install --save @rooks/use-worker
```

```jsx
import React, { useState } from "react";
import ReactDOM from "react-dom";
import useWorker from "./useWorker";
import "./styles.css";

function Demo() {
  const [value, setValue] = useState(0);
  const [error, setError] = useState(null);
  const worker = useWorker("/worker.js", {
    onMessage: e => {
      console.log("message received from worker");
      console.log(e.data);
      setValue(e.data);
    },
    onMessageError: e => {
      console.log(e);
    }
  });
  return value;
}

const rootElement = document.getElementById("root");

ReactDOM.render(<Demo />, rootElement);
```
