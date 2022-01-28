import React from "react";

import QuadraticUI from "../ui/QuadraticUI";
import QuadraticGrid from "../grid/QuadraticGrid";

interface QuadraticAppProps {
  isLoading: boolean;
  setIsLoading: Function;
}

export default function QuadraticApp(props: QuadraticAppProps) {
  const { isLoading, setIsLoading } = props;

  const [isOpenCellTypeMenu, setIsOpenCellTypeMenu] =
    React.useState<boolean>(false);
  const [isOpenCodeEditor, setIsOpenCodeEditor] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    setIsOpenCodeEditor(false);
  }, []);

  return (
    <>
      {/* Provider of WebGL Canvas and Quadratic Grid */}
      <QuadraticGrid
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      ></QuadraticGrid>
      {/* Provider of All React UI Components */}
      {!isLoading && (
        <QuadraticUI
          isOpenCellTypeMenu={isOpenCellTypeMenu}
          setIsOpenCellTypeMenu={setIsOpenCellTypeMenu}
          isOpenCodeEditor={isOpenCodeEditor}
          setIsOpenCodeEditor={setIsOpenCodeEditor}
        ></QuadraticUI>
      )}
    </>
  );
}