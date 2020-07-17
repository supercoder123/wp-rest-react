import React from "react";
import ActionButton from "../ActionButton";
import styles from "./styles.module.scss";
import { SectionHeader, OuterMargin } from '../../shared/components/common-components';

const CategoriesList = ({ categories }) => {
  return (
    <OuterMargin>
      <SectionHeader className={styles.header}>Browse Categories</SectionHeader>
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
    </OuterMargin>
  );
};

export default CategoriesList;
