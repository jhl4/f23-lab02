import { Shape } from "./shape"

function newRectangle(width: number, height: number): Shape {

    return {
        computeArea: function (): number {
            return width * height
        }
    }
}

//export decides which functions / interfaces can be accessed from other modules
export { newRectangle }
