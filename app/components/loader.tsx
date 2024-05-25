import React from "react";
import { Circles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <Circles
        height="30"
        width="30"
        color="#1a186c"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
