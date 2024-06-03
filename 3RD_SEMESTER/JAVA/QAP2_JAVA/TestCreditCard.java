 /**
 * The CreditCardDemo class tests the functionality of the CreditCard class.
 */
public class TestCreditCard {

    /**
     *
     * @param args
     */
    public static void main(String[] args) {
        // Create Address instance
        Address address = new Address("237J Harvey Hall", "Menomonie", "WI", "54751");

        // Create Person instance
        Person person = new Person("Diane", "Christie", address);

        // Create Money instances
        Money limit = new Money(1000.0);
        Money chargeAmount1 = new Money(200.0);
        Money chargeAmount2 = new Money(10.02);
        Money paymentAmount = new Money(25.0);
        Money overChargeAmount = new Money(990.0);

        // Create CreditCard instance
        CreditCard card = new CreditCard(person, limit);

        // Print initial state
        System.out.println("Initial State:");
        System.out.println(card);

        // Make charges and payments
        System.out.println("\nAttempt to charge $200.00");
        card.charge(chargeAmount1);
        System.out.println("Balance: " + card.getBalance());

        System.out.println("\nAttempt to charge $10.02");
        card.charge(chargeAmount2);
        System.out.println("Balance: " + card.getBalance());

        System.out.println("\nAttempt to pay $25.00");
        card.payment(paymentAmount);
        System.out.println("Balance: " + card.getBalance());

        System.out.println("\nAttempt to charge $990.00");
        card.charge(overChargeAmount);
        System.out.println("Balance: " + card.getBalance());

        // Print final state
        System.out.println("\nFinal State:");
        System.out.println(card);
    }
}
