import React, { FunctionComponent } from "react";

interface ILoadingProps {
  loading: boolean;
  children?: React.ReactNode;
}

const Loading: FunctionComponent<ILoadingProps> = (props) => {
  const { loading } = props;
  console.log(props);
  if (loading) {
    return <>Loading...</>;
  }
  return <>{props.children}</>;
};

export default Loading;
