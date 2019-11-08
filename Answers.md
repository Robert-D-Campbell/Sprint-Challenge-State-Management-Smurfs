1. What problem does the context API help solve?

# Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

# actions are functions that dispatch direcctions on how to handle a certain type of 'action'

# reducers are basically the filtering process for how previous state changes to the next state

# store is an object where all of our state lives, it is called the single source of truth because it is pure and untouched when it loads for the first time.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

# i think forms are a good example of when a component should hold state, state should be typically held in a centralized location where is can be distributed as needed.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

# Middleware allows to:

# stop actions.

# forward an action untouched.

# dispatch a different action.

# dispatch multiple actions.

# Middleware is useful with async requests

1. What is your favorite state management system you've learned and this sprint? Please explain why!

# I enjoy Redux with hooks. Context is nice, but i enjoy a challenge and look forward to building scalable applications.
