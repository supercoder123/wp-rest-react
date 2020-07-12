import React from "react"
import cx from "classnames/bind"
import styles from "./styles.module.scss"

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.cxm = cx.bind(styles)
    this.state = {
      overlay: false,
    }
  }

  render() {
    return (
      <div
        className={this.cxm({
          search: true,
        })}
      >
        <span role="img" aria-labelledby="img">
          {" "}
          &#x1F50D;{" "}
        </span>
        <input className={styles.search__input} type="text" />
      </div>
    )
  }
}

export default SearchBar
