
# IT415 - AI Usage Documentation

## Project
Student Supplies Ordering System

## AI Tool Used
ChatGPT

---


# IT415 - AI Usage Documentation

## Project
Student Supplies Ordering System

## AI Tool Used
ChatGPT

---

## AI Interaction 1

### Prompt Used
"Help me develop and improve the shopping cart
functionality of my Student Supplies Ordering
System using JavaScript.

The system must allow customers to add products,
increase or decrease quantities, remove items,
and automatically calculate subtotals and totals.

Please provide a simple implementation and
explain how the functions work."

### Purpose
To develop a functional shopping cart that
automatically updates product quantities,
subtotals, and total amounts.

I also wanted to understand how JavaScript
functions manage shopping cart operations.

### AI Response
ChatGPT provided JavaScript functions for
adding products, adjusting quantities,
removing items, and calculating totals.

It also suggested creating a reusable
getSubtotal() function to simplify the code
and avoid repeated calculations.

### My Evaluation
The AI response was correct and useful
because the suggested functions helped
improve shopping cart calculations.

I tested the system by adding products,
changing quantities, and removing items.
The subtotals and total updated correctly.

### Modifications Made
I created a separate getSubtotal() function
and updated the getTotal() and showCart()
functions to use it.

These changes improved code readability
and simplified the subtotal calculations.

---

## AI Interaction 2

### Prompt Used
"Review and improve the cash payment validation
and digital receipt functionality of my
Student Supplies Ordering System using JavaScript.

The system must reject empty, invalid, negative,
and insufficient payments.

It must calculate the correct change and
generate a receipt with transaction details.

Please suggest improvements and explain
how the validation process works."

### Purpose
To improve the payment validation process
and ensure that customers can only complete
transactions with valid and sufficient payments.

I also wanted to generate an accurate digital
receipt containing the transaction details.

### AI Response
ChatGPT explained how to validate cash
payments before confirming a transaction.

It suggested additional checks for unusually
large amounts and payments containing more
than two decimal places.

It also provided guidance for displaying
complete transaction information in
the digital receipt.

### My Evaluation
The AI response was correct and helpful
because it improved the payment validation
and digital receipt functionality.

I tested the system by purchasing two
ballpens and one notebook.

The total was PHP 59.00, and when I entered
PHP 100.00, the system correctly calculated
PHP 41.00 as change.

### Modifications Made
I added additional payment validation
inside the confirmPayment() function.

I also improved the digital receipt by
adding a message reminding customers
to keep their receipt for their records.

These changes improved the reliability
and usability of the application.

---

## Conclusion

AI assistance helped me develop and improve
the Student Supplies Ordering System.

It helped me understand JavaScript functions,
shopping cart calculations, payment validation,
and digital receipt generation.

I evaluated the AI suggestions, tested the
application, and used Git and GitHub to
track the improvements made to the project.
