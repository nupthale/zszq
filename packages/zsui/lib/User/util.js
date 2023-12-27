"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function hex2rgb(hex) {
  let color = hex;
  color = color.replace(/ |#/g, "");
  if (color.length === 3) {
    color = color.replace(/(.)/g, "$1$1");
  }
  color = color.match(/../g) || [];
  return [
    parseInt(color[0], 16),
    parseInt(color[1], 16),
    parseInt(color[2], 16)
  ].join(",");
}
const colors = [
  "#1e80ff",
  "#f53f3f",
  "#0fbf60",
  "#ff8b07",
  "#f54a45",
  "#10C3A9",
  "#1c4cba",
  "#3370ff",
  "#078372",
  "#00d6b9",
  "#237b19",
  "#34c724",
  "#667901",
  "#b3d600",
  "#aa7803",
  "#ffc60a",
  "#b26206",
  "#ff8800",
  "#ac2f28",
  "#f54a45",
  "#9e1361",
  "#f01d94",
  "#161fa2",
  "#4954e6",
  "#8c218c",
  "#d136d1"
];
const nameToColor = (name) => {
  const index = parseInt(String(name.charCodeAt(name.length - 1)), 10) % colors.length;
  const hexColor = colors[index];
  const rgbColor = hex2rgb(`${hexColor}`);
  const startColor = `rgba(${rgbColor}, 0.6)`;
  const endColor = `rgba(${rgbColor}, 1)`;
  return `radial-gradient(circle at 18.7% 37.8%, ${startColor} 0%, ${endColor} 90%)`;
};
exports.nameToColor = nameToColor;
