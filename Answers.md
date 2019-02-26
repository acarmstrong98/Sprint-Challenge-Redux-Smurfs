1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    1. map    
    2. filter   
    3. reduce   

    4. spread

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    1. Actions create an object containing a type and a payload which is sent to     the reducer to be put to use.
    
    2. The reducer receives the object sent by the action and tests it against a     switch statement, when the condition is validated then it will run certain    code that is applied to the conditional, which will then update the state     with whatever is changed.   
    
    3. Store is just centralized state.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    - Application state is global state, accessible to the entire application       when paired with the connect keyword while Component state is excluded to     that component and that component alone, unless passed down through props.

4.  What is middleware?

    - middleware intercepts some processes, then runs a function at the             interception point, then continues the process or stops it completely,        acting as sort of a checkpoint. (ie. logger or thunk)

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    - redux thunk calls a function inside of the action-creator as opposed to       sending an object. This allows us to make an asyncronist call to the server   for information using keywords like get, post, delete, or put

6.  Which `react-redux` method links up our `components` with our `redux store`?

    - Connect
