import React from "react";

function Banner({ type, children }) {
  const bannerRef = React.useRef();
  React.useEffect(() => {
    const timeOut = window.setTimeout(() => {
      bannerRef.current.style.display = "none";
    }, 2000);
    return () => {
      window.clearTimeout(timeOut);
    };
  }, []);

  return (
    <div ref={bannerRef} className={`banner ${type}`}>
      {children}
    </div>
  );
}

export default Banner;
