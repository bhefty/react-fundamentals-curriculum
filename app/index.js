let React = require('react')
let ReactDOM = require('react-dom')

const HelloWorld = React.createClass({
  render () {
    return (
        <div><h1>Hello World!</h1></div>
    )
  }
})

ReactDOM.render(<HelloWorld />, document.getElementById('app'))
