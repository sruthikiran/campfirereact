import React from 'react';
import ReactQuill from 'react-quill';
import {Button} from 'react-materialize'


class MyEditor extends React.Component {
    constructor(props) {
      super(props)
      this.state = { text: '' } // You can also pass a Quill Delta here
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(value) {
      this.setState({ text: value })
    }

    render() {
      return (
        <React.Fragment>
          <ReactQuill value={this.state.text}
                    onChange={this.handleChange} />
          <Button className="indigo" style={btnStyle}>Send</Button>
        </React.Fragment>
      )
    }
  }

  const btnStyle = {
    float: 'right',
    marginTop: '1em',
  }

export default MyEditor
