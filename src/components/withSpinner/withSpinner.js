import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "../../shared/components/common-components";

const withSpinner = (WrappedComponent) => {
  return ({ loading, ...props }) => {
    console.log(loading);

    return loading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...props} />
    );
  };
};

export default withSpinner;
