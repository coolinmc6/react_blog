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


* finished L78, start L79