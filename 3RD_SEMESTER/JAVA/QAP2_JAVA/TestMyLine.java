 public class TestMyLine {
    public static void main(String[] args) {
        // Create MyPoint instances
        MyPoint p1 = new MyPoint(0, 0);
        MyPoint p2 = new MyPoint(3, 4);

        // Create MyLine instance using points
        MyLine line1 = new MyLine(p1, p2);

        // Testing methods
        System.out.println(line1);  // MyLine [begin=(0,0), end=(3,4)]
        System.out.println("Begin point: " + line1.getBegin());  // (0,0)
        System.out.println("End point: " + line1.getEnd());  // (3,4)
        System.out.println("Length: " + line1.getLength());  // 5.0
        System.out.println("Gradient: " + line1.getGradient());  // 0.9272952180016122 (in radians)

        // Set new points
        line1.setBegin(new MyPoint(1, 1));
        line1.setEnd(new MyPoint(4, 5));

        // Testing methods after setting new points
        System.out.println(line1);  // MyLine [begin=(1,1), end=(4,5)]
        System.out.println("Begin point: " + line1.getBegin());  // (1,1)
        System.out.println("End point: " + line1.getEnd());  // (4,5)
        System.out.println("Length: " + line1.getLength());  // 5.0
        System.out.println("Gradient: " + line1.getGradient());  // 0.7853981633974483 (in radians)
    }
} 
