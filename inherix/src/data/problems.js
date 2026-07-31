const localData = [
  {
    id: 0,
    topic: 'Classes & Objects',
    title: 'The Library Card System',
    difficulty: 'Easy',
    statement: `Scenario:
      A small local library wants a simple digital system to manage member cards. Each card should store a member's name, ID number, and how many books they currently have borrowed.

      Requirements:

      Create a class LibraryCard with private/appropriate data members:
      name (string)
      memberID (int)
      booksBorrowed (int)

      Add member functions:
      setDetails() — takes input from the user and sets the values.
      displayCard() — prints the card details in a neat format.
      borrowBook() — increases booksBorrowed by 1, but only if it's less than 5 (max limit). Otherwise, print a message saying the limit is reached.
      returnBook() — decreases booksBorrowed by 1, but not below 0.

      Expected Behavior:

      In main(), create 2 LibraryCard objects for two different members.
      Set their details using input.
      Simulate borrowing and returning a few books for each, and display the final card state.

      Constraints:

      booksBorrowed must never go negative or exceed 5.`,

    percent: 80,
  },
  {
    id: 1,
    topic: 'Classes & Objects',
    title: 'Movie Ticket Booking Counter',
    difficulty: 'Medium',
    statement: `Scenario:
      A small cinema wants a program to simulate ticket booking for a single movie screening with limited seats.

      Requirements:

      Create a class MovieScreening with data members:
      movieName (string)
      totalSeats (int)
      seatsBooked (int)
      ticketPrice (double)

      Member functions:
      setupScreening() — sets movie name, total seats, and ticket price via input.
      bookTickets(int numTickets) — checks if enough seats are available:
      If yes, books them (increase seatsBooked), and prints total cost (numTickets * ticketPrice).
      If not, print how many seats are actually available and don't book anything.
      showStatus() — displays movie name, seats booked, seats remaining, and total revenue collected so far.

      Expected Behavior:

      Create one MovieScreening object.
      Simulate at least 3 different booking attempts (using a loop), where the number of tickets requested is taken as input each time.
      After each booking attempt, call showStatus().
      Use a loop with a switch or if-else to let the user choose: (1) Book Tickets, (2) Show Status, (3) Exit.

      Constraints:

      Seats booked can never exceed totalSeats.
      Revenue must be tracked as a running total, calculated only from successful bookings.`,
    percent: 72,
  },
  {
    id: 2,
    topic: 'Classes & Objects',
    title: 'Warehouse Inventory Tracker',
    difficulty: 'Challenging',
    statement: `
      Scenario:
      A small warehouse wants to track multiple products using an array of objects. Each product has a name, price, and stock quantity. The manager wants to run daily operations: restocking, selling, and generating a low-stock report.

      Requirements:

      Create a class Product with data members:
      productName (string)
      price (double)
      quantity (int)
      Member functions:
      setProduct() — sets all details via input.
      sellUnits(int amount) — reduces quantity if enough stock exists; otherwise, prints an error and sells nothing.
      restock(int amount) — increases quantity.
      getTotalValue() — returns price * quantity (this represents the value of that product currently in stock).
      displayProduct() — prints all details neatly.

      Expected Behavior:

      In main(), create an array of 4 Product objects.
      Use a loop to input details for all 4 products.
      Simulate a "business day":
      Randomly (or via user input) sell some units from a few products.
      Restock at least one product.
      After the day ends:
      Display all products.
      Calculate and display the total inventory value (sum of getTotalValue() across all 4 products).
      Print a "Low Stock Alert" for any product where quantity < 10.

      Constraints:

      Quantity should never become negative due to overselling.
      Use loops to process the array — no repeating code manually for each product.
    `,
    percent: 68,
  },
  {
    id: 3,
    topic: 'Classes & Objects',
    title: 'Multi-Account Bank Simulator',
    difficulty: 'Advanced',
    statement: `
      Scenario:
      A small digital bank wants to simulate handling multiple customer accounts in a single session, supporting deposits, withdrawals, and transfers between accounts — entirely from the command line.

      Requirements:

      Create a class BankAccount with data members:
      accountHolder (string)
      accountNumber (int)
      balance (double)

      Member functions:
      setAccount() — sets holder name, account number, and initial balance via input.
      deposit(double amount) — adds to balance (reject negative/zero amounts with a message).
      withdraw(double amount) — subtracts from balance only if sufficient funds exist; otherwise print "Insufficient funds."
      transferTo(BankAccount &other, double amount) — withdraws from the current object and deposits into other, only if the withdrawal is valid. Print a confirmation message showing both account holders and the amount transferred.
      displayAccount() — prints account details.

      Expected Behavior:

      In main(), create an array of 3 BankAccount objects and initialize them via a loop.
      Build a menu-driven system (using a loop + switch) that lets the user:
      Deposit into a chosen account (select by account number).
      Withdraw from a chosen account.
      Transfer between two chosen accounts.
      Display all account balances.
      Exit.
      The program should keep running until the user selects Exit.

      Constraints:

      No account balance should ever go negative.
      You must search the array to find the account matching a given account number (use a loop, not hardcoded indexing) — if not found, print an error message.
      transferTo must correctly modify both the calling object and the referenced object's balance.
    `,
    percent: 45,
  },
  {
    id: 4,
    topic: 'Polymorphism',
    title: 'Multi-Account Bank Simulator',
    difficulty: 'Advanced',
  },
  {
    id: 5,
    topic: 'Inheritance',
    title: 'Multi-Account Bank Simulator',
    difficulty: 'Advanced',
  }
]

export default localData;
