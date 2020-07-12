import React from "react"
import ActionButton from "../ActionButton"
import styles from "./styles.module.scss"

const CategoriesList = ({ categories }) => {
  return (
    <div className={styles.categories}>
      <p className={styles.header}>Browse Categories</p>
      {categories.map(({ name, count, ...otherDetails }) =>
        count > 1 ? (
          <ActionButton
            key={otherDetails.id}
            type="category"
            categoryName={name}
            {...otherDetails}
          />
        ) : null
      )}
    </div>
  )
}

export default CategoriesList
