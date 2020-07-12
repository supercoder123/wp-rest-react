import React from "react"
import QuestionBox from "../QuestionBox"
import styles from "./styles.module.scss"

export function CommonQuestions({ questions }) {
  return (
    <div>
      <p className={styles.header}>Common Questions</p>
      <div className={styles.questionContainer}>
        {questions.map((item) => (
          <QuestionBox key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}
