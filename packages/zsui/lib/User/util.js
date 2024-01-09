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
const colors = ["#1e80ff", "#0fbf60", "#ff8b07", "#10C3A9"];
const nameToColor = (name) => {
  const index = parseInt(String(name.charCodeAt(name.length - 1)), 10) % colors.length;
  const hexColor = colors[index];
  const rgbColor = hex2rgb(`${hexColor}`);
  const startColor = `rgba(${rgbColor}, 0.6)`;
  const endColor = `rgba(${rgbColor}, 1)`;
  return `radial-gradient(circle at 18.7% 37.8%, ${startColor} 0%, ${endColor} 90%)`;
};
exports.nameToColor = nameToColor;
