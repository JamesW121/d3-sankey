import {linkHorizontal} from "d3-shape";

function horizontalSource(d) {
  return [d.source.x1, d.y0];
}

function horizontalTarget(d) {
  // If y1 equals y0 add a tiny offset so gradients work with userSpaceOnUse
  // See https://stackoverflow.com/questions/21638169/svg-line-with-gradient-stroke-wont-display-straight
  return [d.target.x0, d.y1 + (d.y1 === d.y0 ? 0.0001 : 0)];
}

export default function() {
  return linkHorizontal()
      .source(horizontalSource)
      .target(horizontalTarget);
}
