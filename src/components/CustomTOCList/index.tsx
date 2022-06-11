import React from "react"
import styles from "./styles.module.scss"

const CustomTOCList = ({ children }) => (
  <div className={styles["toc-list"]}>{children}</div>
)

const CustomTOCListSection = ({ children }) => (
  <div className={styles["toc-list-section"]}>{children}</div>
)

const CustomTOCListHead = ({ children }) => (
  <div className={styles["toc-list-head"]}>{children}</div>
)

const CustomTOCListContent = ({ children }) => {
  return (
    <ul className={styles["toc-list-content"]}>
      {React.Children.map(children, (child, index) => (
        <li key={`toc-lc-${index}`}>{child}</li>
      ))}
    </ul>
  )
}

export {
  CustomTOCList,
  CustomTOCListSection,
  CustomTOCListHead,
  CustomTOCListContent,
}
