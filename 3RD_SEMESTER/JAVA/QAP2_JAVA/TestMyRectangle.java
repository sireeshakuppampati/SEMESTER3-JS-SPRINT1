   public class TestMyRectangle {
    public static void main(String[] args) {
        // Create MyPoint instances
        MyPoint p1 = new MyPoint(1, 4);
        MyPoint p2 = new MyPoint(5, 1);

        // Create MyRectangle instance using points
        MyRectangle rect1 = new MyRectangle(p1, p2);

        // Testing methods
        System.out.println(rect1);  // MyRectangle [top-left=(1,4), bottom-right=(5,1)]
        System.out.println("Top-left corner: " + rect1.getTopLeft());  // (1,4)
        System.out.println("Bottom-right corner: " + rect1.getBottomRight());  // (5,1)
        System.out.println("Width: " + rect1.getWidth());  // 4
        System.out.println("Height: " + rect1.getHeight());  // 3
        System.out.println("Area: " + rect1.getArea());  // 12
        System.out.println("Perimeter: " + rect1.getPerimeter());  // 14

        // Set new corners
        rect1.setTopLeft(new MyPoint(2, 5));
        rect1.setBottomRight(new MyPoint(6, 2));

        // Testing methods after setting new points
        System.out.println(rect1);  // MyRectangle [top-left=(2,5), bottom-right=(6,2)]
        System.out.println("Top-left corner: " + rect1.getTopLeft());  // (2,5)
        System.out.println("Bottom-right corner: " + rect1.getBottomRight());  // (6,2)
        System.out.println("Width: " + rect1.getWidth());  // 4
        System.out.println("Height: " + rect1.getHeight());  // 3
        System.out.println("Area: " + rect1.getArea());  // 12
        System.out.println("Perimeter: " + rect1.getPerimeter());  // 14
    }
} 
