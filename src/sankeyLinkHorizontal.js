import {linkHorizontal} from "d3-shape";

var MIN_OFFSET = 0.01;

function horizontalSource(d) {
  return [d.source.x1, d.y0];
}

function horizontalTarget(d) {
  // If y1 approximately equals y0, add a pixel offset so gradients work with default gradientUnits
  // See https://stackoverflow.com/questions/21638169/svg-line-with-gradient-stroke-wont-display-straight
  var y1 = d.y1;
  var height = y1 - d.y0;
  if (Math.abs(height) < MIN_OFFSET) {
    if (height >= 0) y1 = d.y0 + MIN_OFFSET;
    else y1 = d.y0 - MIN_OFFSET;
  }
  return [d.target.x0, y1];
}

export default function() {
  return linkHorizontal()
      .source(horizontalSource)
      .target(horizontalTarget);
}
