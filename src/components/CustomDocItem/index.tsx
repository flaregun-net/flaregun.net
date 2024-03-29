import CustomFooter from "@site/src/components/CustomFooter"
import PageHelpful from "@site/src/components/PageHelpful"
import ActualDocItem from "@theme/DocItem"
import React from "react"
import styles from "./styles.module.scss"

const CustomDocItem = (props) => (
  <div
    className={`custom_doc_item_wrapper ${styles["custom_doc_item_wrapper"]}`}
  >
    <ActualDocItem {...props} />
    <div className={styles["custom_doc_item_footer"]}>
      <PageHelpful />
      {/* <FlaregunBanner /> */}
      <CustomFooter />
    </div>
  </div>
)

export default CustomDocItem
