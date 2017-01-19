# README

This application is based on lectures from Stephen's Grider's 
<a target="_blank" href="https://www.udemy.com/react-redux/">React-Redux</a>
course on Udemy.


## Next Steps
- Lecture 74

## Lecture 74
- Here are the basic steps to bring in routes:
  - Replace the <App /> in src/index.js with the Router history={}
  - Create src/routes.js
  - Import react, route, indexroute
  - export default the route that you wish to make available
  - <Router history={browserHistory} routes={routes}/>

## Lecture 75
- If we ever want to nest children routes under the App component, we need to do 
add {this.props.children} to the App component otherwise it won't know where to
display it

## Lecture 80
- In the weather app, user clicked 'search' which called the action creator, the action
goes through middleware, reducer
- when the URL changes, need to somehow call an action creator to fetch data
- componentWillMount() is a lifecycle method that React recognizes and calls automatically whenever
the component is about to be rendered for the first time.  
- it will not be called on subsequent re-renders though
- this is a great place to fetch our data