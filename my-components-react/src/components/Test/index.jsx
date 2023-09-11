import { Component } from 'react'

export default class VTest extends Component {
  render() {
    const text = this.props.text || '我是Test组件-react版, 是不是很简单！'
    return (
      <p>{text}</p>
    )
  }
}
