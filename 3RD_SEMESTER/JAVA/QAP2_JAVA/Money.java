 public class Money {
    private long dollars;
    private long cents;

    public Money(double amount) {
        if (amount < 0) {
            throw new IllegalArgumentException("Amount cannot be negative");
        }
        this.dollars = (long) amount;
        this.cents = Math.round((amount - dollars) * 100);
    }

    public Money(Money other) {
        this.dollars = other.dollars;
        this.cents = other.cents;
    }

    public Money add(Money other) {
        long totalCents = this.toCents() + other.toCents();
        return new Money(totalCents / 100.0);
    }

    public Money subtract(Money other) {
        long totalCents = this.toCents() - other.toCents();
        if (totalCents < 0) {
            throw new IllegalArgumentException("Resulting amount cannot be negative");
        }
        return new Money(totalCents / 100.0);
    }

    public int compareTo(Money other) {
        return Long.compare(this.toCents(), other.toCents());
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Money money = (Money) obj;
        return dollars == money.dollars && cents == money.cents;
    }

    @Override
    public String toString() {
        return String.format("$%d.%02d", dollars, cents);
    }

    private long toCents() {
        return dollars * 100 + cents;
    }
}

