import React from "react";
import {render} from "react-dom";
import Slide2D from ".";

const div = document.createElement("div");
document.body.appendChild(div);

render(
<Slide2D width={600} height={300}>{{
  "background": "#efd",
  "size": [ 800, 600 ],
  "draws": [
    [ "drawImage", "http://i.imgur.com/N8a9CkZ.jpg", 530, 700, 800, 200, 0, 400, 800, 200 ],
    { "font": "italic bold 20px monospace", "fillStyle": "#09f", "textBaseline": "top", "textAlign": "right" },
    [ "fillText", "some texts...\nLorem ipsum dolor sit amet,\n consectetur adipiscing elit,\n sed do eiusmod tempor incididunt ut labore\net dolore magna aliqua.", 780, 10, 20 ],
    { "font": "italic 40px sans-serif", "fillStyle": "#099", "textBaseline": "middle", "textAlign": "center" },
    [ "fillText", "does support\nmulti-line texts!\n\nusing the '\\n' character.\n\nand also supports images :)", 400, 200, 48],
    [ "beginPath" ],
    { "fillStyle": "#f00" },
    [ "arc", 40, 40, 20, 0, 7 ],
    [ "fill" ],
    [
      { "fillStyle": "#f0f", "strokeStyle": "#909", "lineWidth": 4 },
      [ "beginPath" ],
      [ "moveTo", 100, 60 ],
      [ "lineTo", 80, 20 ],
      [ "lineTo", 120, 20 ],
      [ "fill" ],
      [ "closePath" ],
      [ "stroke" ]
    ],
    [
      [ "rotate", -1.5708 ],
      { "font": "normal 60px sans-serif", "fillStyle": "#f00", "textBaseline": "top", "textAlign": "right" },
      [ "fillText", "Some shapes", -80, 0 ]
    ],
    [
      [ "beginPath" ],
      { "strokeStyle": "rgba(0,0,0,0.2)", "lineWidth": 4 },
      [ "rect", 2, 2, 796, 596 ],
      [ "stroke" ]
    ]
  ]
}}</Slide2D>,
div);
