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


  // constructors and destructors

  {
    id: 4,
    topic: 'Constructors & Destructors',
    title: 'The Auto-Filled Employee Badge',
    difficulty: 'Easy',
    statement: `
      Scenario:
      A company wants every new employee badge to be automatically initialized the moment it's created — no manual setup step allowed.

      Requirements:

      Class EmployeeBadge with data members: name (string), employeeID (int), department (string).
      Parameterized constructor that takes all three values and initializes the object directly (no separate setData() function).
      Default constructor that initializes an "unassigned" badge with placeholder values (e.g., "Unassigned", 0, "None").
      displayBadge() — prints badge details.
      Destructor that prints a message like "Badge for [name] destroyed." when the object goes out of scope.

      Expected Behavior:

      In main(), create 2 badges: one using the parameterized constructor (with input values), one using the default constructor.
      Display both.
      Let the objects go out of scope naturally (end of main()) and observe destructor messages.

      Constraints:

      No setData()-style function allowed — all initialization must happen via constructors.
    `,
  percent: 60
  },

  {
    id: 5,
    topic: 'Constructors & Destructors',
    title: 'Temporary File Handler Simulation',
    difficulty: 'Medium',
    statement: `
    Scenario:
      You're simulating a simplified "temporary file" system. Every time a TempFile object is created, it should register itself as "opened," and when destroyed, it must clean up by printing that it deleted itself — mimicking real resource management (like RAII in C++).

      Requirements:

      Class TempFile with data members: fileName (string), sizeInKB (int), and a static int activeFilesCount (tracks how many TempFile objects currently exist).
      
      Parameterized constructor: sets fileName and sizeInKB, increments activeFilesCount, and prints "[fileName] opened."
      Destructor: prints "[fileName] deleted. Space freed: [sizeInKB] KB." and decrements activeFilesCount.
      static void showActiveFiles() — prints how many temp files currently exist.

      Expected Behavior:

      In main(), create 3 TempFile objects inside a nested block { } (not the whole main()), each with different names/sizes taken via input.
      Call showActiveFiles() inside the block after all 3 are created.
      Let the block end (objects go out of scope) — destructors should fire automatically.
      Call showActiveFiles() again after the block ends, to confirm the count dropped back to 0.

      Constraints:

      activeFilesCount must be accurate at all times — no manual increment/decrement outside the constructor/destructor.
    `,
    percent: 40
  },

  {
    id: 6,
    topic: 'Constructors & Destructors',
    title: 'Hotel Room Reservation Lifecycle',
    difficulty: 'Challenging',
    statement: `
      Scenario:
      A hotel wants to simulate room bookings where a room object represents an active reservation. The moment a reservation is created, the room should be marked "Occupied," and the moment the reservation ends (object destroyed), the room should automatically be marked "Available" again — with a full nightly cost calculated at destruction time.

      Requirements:

      Class Reservation with data members: guestName (string), roomNumber (int), nightlyRate (double), numberOfNights (int).
      Constructor: takes all 4 values as parameters, prints "Room [roomNumber] reserved for [guestName]."
      
      Destructor: calculates totalCost = nightlyRate * numberOfNights and prints a full checkout summary: guest name, room number, nights stayed, and total cost. Then prints "Room [roomNumber] is now available."
      extendStay(int extraNights) — increases numberOfNights by the given amount and prints confirmation.

      Expected Behavior:

      In main(), use an array of 3 Reservation objects, created inside a function (not main() directly) called runHotelSimulation().
      Inside that function, take input for all 3 reservations via the constructor (loop through creation).
      For at least one reservation, call extendStay() before the function ends.
      When runHotelSimulation() finishes and returns, all 3 objects go out of scope — destructors should fire automatically, printing checkout summaries for all 3.

      Constraints:

      All checkout math (totalCost) must be computed inside the destructor, not stored ahead of time.
      Must demonstrate destructor firing on function return, not just at program end.
    `,
    percent: 30
  },

  {
    id: 7,
    topic: 'Constructors & Destructors',
    title: 'Multiplayer Game Session Manager',
    difficulty: 'Advanced',
    statement: `
      Scenario:
      You're building a simplified multiplayer game lobby system. Each Player object represents an active player connection. Players join with a constructor call and "disconnect" when their object is destroyed — but there's a twist: you must track a shared session score pool across all players using a static member, and correctly handle both normal destruction and early "kicking" of a player mid-session.

      Requirements:

      Class Player with data members: playerName (string), score (int), playerID (int, auto-generated).
      Static int nextID — used to auto-assign a unique playerID to each player as they're constructed (no manual ID input).
      Static int totalSessionScore — running total of all players' scores combined.
      
      Constructor: takes playerName and initial score, auto-assigns playerID using nextID (then increments nextID), adds score to totalSessionScore, prints a join message.
      addPoints(int pts) — increases this player's score and updates totalSessionScore accordingly.
      
      Destructor: subtracts this player's current score from totalSessionScore (since they're leaving), and prints a disconnect message showing final score and updated totalSessionScore.
      static void showSessionStatus() — prints totalSessionScore and how many player slots have been used (nextID).

      Expected Behavior:

      In main(), create an array of 4 Player objects using a loop (parameterized constructor, taking name and starting score via input).
      Call showSessionStatus() after all are created.
      
      Simulate gameplay: use addPoints() on at least 2 players via a loop/menu.
      Simulate one player being "kicked early" by placing them in a separate nested scope { } that ends before the others (their destructor fires early, mid-main()), and show showSessionStatus() immediately after to prove the total updated correctly.
      At the end of main(), the remaining players go out of scope naturally — observe final disconnect messages and final session state.

      Constraints:

      totalSessionScore must always reflect only currently connected players at any given moment — verified by calling showSessionStatus() at multiple points.
      playerID assignment must be fully automatic via the static counter — never manually set.
    `,
    percent: 25
  }









]

export default localData;
