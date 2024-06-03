 public class CreditCard {
    private Money balance;
    private Money creditLimit;
    private Person owner;

    public CreditCard(Person newCardHolder, Money limit) {
        this.owner = newCardHolder;
        this.creditLimit = new Money(limit);
        this.balance = new Money(0.0);
    }

    public Money getBalance() {
        return new Money(balance);
    }

    public Money getCreditLimit() {
        return new Money(creditLimit);
    }

    public String getPersonals() {
        return owner.toString();
    }

    public void charge(Money amount) {
        Money newBalance = balance.add(amount);
        if (newBalance.compareTo(creditLimit) > 0) {
            throw new IllegalArgumentException("Charge exceeds credit limit");
        }
        balance = newBalance;
    }

    public void payment(Money amount) {
        balance = balance.subtract(amount);
    }

    @Override
    public String toString() {
        return "CreditCard [owner=" + owner + ", balance=" + balance + ", creditLimit=" + creditLimit + "]";
    }
}

