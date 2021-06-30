# JS

# React
## What is the difference between state and props?
props (short for “properties”) and state are both plain JavaScript objects. While both hold information that influences the output of render, they are different in one important way: 
- props get passed to the component (similar to function parameters);
- state is managed within the component (similar to variables declared within a function).

## what is the difference between React elements and components?
- React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.
-  the only way to update the UI is to create a new element, and pass it to ReactDOM.render()
- Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

## What's the difference between components, their instances, React elements.
- An element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other elements in their props. Creating a React element is cheap. Once an element is created, it is never mutated.
- to create elements, use React.createElement(), JSX, or an element factory helper.
- A component can be declared in several different ways. It can be a class with a render() method. Alternatively, in simple cases, it can be defined as a function. In either case, it takes props as an input, and returns an element tree as the output.
- When a component receives some props as an input, it is because a particular parent component returned an element with its type and these props. This is why people say that the props flows one way in React: from parents to children.

## what is the difference between function and class components?
The formal version of function component does not have state. But now you can define state with React Hooks within the function component.

Class component has lifecycle. Function component try to do the same with the help of useEffect.
### 3 ways to create a React component:
- Function component:
```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
- Using the React.createClass() factory
```js
const Button = React.createClass({
  render() {
    const { children, color } = this.props;
    return {
      type: 'button',
      props: {
        className: 'button button-' + color,
        children: {
          type: 'b',
          props: {
            children: children
          }
        }
      }
    };
  }
});
```
- ES6 class component
```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## Why Lifecycle
In applications with many components, it’s very important to free up resources taken by the components when they are destroyed.
[![lifecycle](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)]

### How to Converte a Function to a Class [example 1]

[//]: # (These are reference links used in the body of this note)
[example 1]:<https://reactjs.org/docs/state-and-lifecycle.html#converting-a-function-to-a-class>




