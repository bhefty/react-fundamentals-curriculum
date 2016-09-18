const React = require('react')

const styles = {
  container: {
    width: '100%',
    height: '92%',
    backgroundColor: '#FE6B1F',
    // marginTop: -20,
  },
  header: {
    color: 'white',
    fontSize: 30,
    paddingTop: 15,
    // padding: 10,
  }
}

const Main = React.createClass({
  render: function () {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <p className='col-sm-3'>Weather Report</p>
            <form className='col-sm-3 pull-right form-inline'>
              <input
                className="form-control"
                placeholder="Lubbock, TX"
                type="text" />&nbsp;
              <button className='btn btn-success'>Get Weather</button>
            </form>
        </div>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main
