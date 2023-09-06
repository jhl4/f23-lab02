import { newRenderer } from "./renderer.js"
import { newRectangle } from "./shapes/rectangle.js";
import { circle } from "./shapes/circle.js";
import { Shape } from "./shapes/shape.js";

const rectangle: Shape = newRectangle(3, 3)
const circ: Shape = circle(3)

const renderer = newRenderer(rectangle)
renderer.draw();

const renderer2 = newRenderer(circ)
renderer2.draw();