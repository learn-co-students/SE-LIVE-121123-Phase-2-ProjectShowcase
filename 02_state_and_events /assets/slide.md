---
theme : "night"
transition: "slide"
highlightTheme: "monokai"
slideNumber: false
title: "P2L2 - React State and Events slides"
---

<!-- slide -->

# State & Events

---

<h2><strong> ✅ Objectives </strong></h2>

- Explain the importance of state {.fragment}
- Explain the difference between state and props {.fragment}
- Observe how to use the useState hook {.fragment}
- Observe how to use DOM events in React {.fragment}

---

<h3 style="text-align: center;"><strong>Why is state important?</strong></h3>
<div style="font-size: 0.7em">

🏹 State is used to track information that changes over time. {.fragment}

🏹 Props are passed from the parent component, state is internal to a component. {.fragment}

🏹 Values stored in state are meant to change, especially in response to user behaviors (as the user interacts with the DOM and triggers events). {.fragment}

🏹 We can do conditional rendering based on state values. This is a key component of declarative programming in React: we tie our components to our state by integrating state values into our JSX rendering logic. This way, changes in state eventually cause changes to the DOM (Updating the Dark Mode button!). {.fragment}
</div>


---

##### React Flow

<img height="360px" alt="Data Display Behavior" src="./data-display-behavior.drawio.svg" />

<div style="font-size: 0.8em">
🔑 We use state to store data that may change in response to user behavior

🏹 To work with state in a functional component, we use the `useState` hook
</div>

---

###### Local Variables vs State Variables

<iframe src="https://codesandbox.io/embed/counter-state-example-0r8stb?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:600px; border:0; border-radius: 4px; overflow:hidden;"
  title="counter-state-example"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>


---

#### Handling events in React 

```js
const Counter = () => {
  return (
    <button onClick={() => console.log("clicked!")}>
      Click Me
    </button>
  );
};
```

**NOTE:** Events can only be attached to DOM elements, we can't attach event listeners directly to our components {.fragment}

---

#### Defining Event Handlers

We can also define event handler functions within our components and pass the function reference to our event listener in the JSX.

```js
const Counter = () => {
  function handleClick(event) {
    console.log(event);
  }

  return <button onClick={handleClick}>Click Me</button>;
};
```

This is helpful in the case where we need to introduce additional event handling logic. We can do so without cluttering our JSX. {.fragment}

---

#### ✅ Toggle Dark Mode Button

<div style="font-size: 0.9em">

Inside the `Header` component, there is a button with textContent of `Light Mode`

```js
<button>Light Mode</button>
```
::: {.fragment}

Attach an `onClick` event to the button: 

```js
<button onClick={() => console.log("clicked")}>Light Mode</button>
```

::: {.fragment}

We can also also refactor using a helper function: 

```js
const handleClick = () => console.log('clicked')

<button onClick={handeClick}>Light Mode</button>
```

::: {.fragment}

💡 We need to now figure out how to properly set new text for the button and perform DOM manipulation to reflect the change. That is where `state` will come in. 

</div>

---

#### Passing State as Props

<iframe src="https://codesandbox.io/embed/vigilant-minsky-iiykrb?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:600px; border:0; border-radius: 4px; overflow:hidden;"
  title="vigilant-minsky-iiykrb"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

---

<img src="./component-lifecycle.drawio.svg" alt="Component Lifecycle" width="1200" />

---

<img height="600px" alt="Data Display Behavior" src="./data-display-behavior.drawio.svg" />

---

## ☕️ Break!!! ☕️

---

#### Filter by project name in ProjectList component 

<div style="font-size: 0.9em">

Currently, we are creating a `ProjectListItem` component for each project inside of the `projects` array:

```js
const projectListItems = projects.map(project => {
  return <ProjectListItem key={project.id} project={project} />
})
```

::: {.fragment}

We need to make this dynamic by implementing a filter feature that returns the projects based on the user's entry in the `search input`

```js
<input type="text" placeholder="Search..." />
```

</div>


---

#### Filter by project name in ProjectList component steps: 

<div style="font-size: 0.9em">

::: {.fragment}

1. Initialize state to track the `searchQuery`:

```js
const [searchQuery, setSearchQuery] = useState("");
```

::: {.fragment}

2. Add on `onChange` event to the input element:

```js
<input onChange={handleSearch} type="text" placeholder="Search..." />
```

::: {.fragment}

3. Update the state in the `handleSearch` helper function:

```js
const handleSearch = (e) => setSearchQuery(e.target.value);
```

</div>


---

#### Filter by project name in ProjectList component steps contd:

<div style="font-size: 0.9em">

::: {.fragment}

4. Filter the `projects` array to return the search results based on the `searchQuery` value:

```js
const searchResults = projects.filter((project) =>
  project.name.toLowerCase().includes(searchQuery.toLowerCase())
);
```

::: {.fragment}

5. Map over `searchResults` instead of `projects` when creating `projectListItems`:

```js
const projectListItems = searchResults.map(project => {
  return <ProjectListItem key={project.id} project={project} />
})
```

::: {.fragment}

<strong>Note:</strong> If the searchQuery is an empty string, the `filter()` will return all the project items

</div>


---

### 💡 Conclusion 

<div style="font-size: 0.9em">

Events and state are both important and can work together to allow the DOM to reflect a users interactions and activities by:

1. Attaching events to parts of our JSX {.fragment}

2. Updating the state based on the goal of the event {.fragment}

3. State change forces a re-render that will cause DOM manipulation and reflect the changes on the interface {.fragment}

::: {.fragment}

<h4 style="text-align: center;"><strong> user behavior -> updates state -> React updates DOM </strong></h4>

</div>