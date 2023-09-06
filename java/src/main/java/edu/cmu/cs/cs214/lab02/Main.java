package edu.cmu.cs.cs214.lab02;

import edu.cmu.cs.cs214.lab02.shapes.Circle;
import edu.cmu.cs.cs214.lab02.shapes.Rectangle;
import edu.cmu.cs.cs214.lab02.shapes.Shape;

public class Main {
    public static void main(String[] args) {
        Shape rect = new Rectangle(7, 3);
        Shape circ = new Circle(1.0);

        Renderer renderer = new Renderer(rect);
        Renderer renderer2 = new Renderer(circ);

        renderer.draw(); 
        renderer2.draw();
    }
}
