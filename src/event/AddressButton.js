import React from 'react'

class AddressButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = { address: '住所未取得' }
    this.handleClick = this.handleClick.bind(this)
  }

  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    fetch('https://api.zipaddress.net/?zipcode=1000005', {
      mode: 'cors',
    })
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        this.setState({ address: json.data.fullAddress })
      })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        <p>{this.state.address}</p>
      </div>
    )
  }
}

export default AddressButton
