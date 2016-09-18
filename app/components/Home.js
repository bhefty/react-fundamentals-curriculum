const React = require('react')
// const PropTypes = React.PropTypes

const styles = {
  container: {
    backgroundSize:'cover',
    backgroundImage: "url('app/images/pattern.svg')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '93.7vh',
    width: '100%'
  },
  header: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 100
  }
}

function Home () {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Enter a City and State</h1>
        <form>
          <input
            className="form-control"
            placeholder="Lubbock, TX"
            type="text" />
        </form>
        <br />
        <button className='btn btn-success'>Get Weather</button>
    </div>
  )
}

module.exports = Home
