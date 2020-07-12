import React from "react"
import styles from "./styles.module.scss"
import SearchBar from "../SearchBar"

export const Header = () => {
  return (
    <div className={styles.header}>
      <p className={styles.headerText}>How can we Help ? </p>
      <SearchBar />
    </div>
  )
}
