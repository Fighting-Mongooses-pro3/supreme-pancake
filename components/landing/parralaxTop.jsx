import { Parallax } from "react-scroll-parallax";

export const SlowAndFast = (props) => (
  <>
    <Parallax speed={props.slow}>
      <div id="slow" />
    </Parallax>
    <Parallax speed={props.fast}>
      <div id="fast" />
    </Parallax>
  </>
);
