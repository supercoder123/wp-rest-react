import React from "react"
import ActionButton from "../ActionButton"

export default function ListComponent({ type = "question", list }) {
  return (
    <div>
      {list.map(({ id, name, title, excerpt, ...otherDetails }) => (
        <ActionButton
          key={id}
          title={title.rendered}
          excerpt={excerpt.rendered}
          type={type}
          categoryName={name}
          {...otherDetails}
        />
      ))}
    </div>
  )
}
