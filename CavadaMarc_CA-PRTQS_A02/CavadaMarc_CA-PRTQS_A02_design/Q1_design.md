⸻

Assignment 2 – Design Documentation (Markdown)

Q1 – Customer LINQ Mini App

Class Diagram

classDiagram
    class Customer {
        int Id
        string FirstName
        string LastName
        DateTime DateOfBirth
        +ToString() : string
    }

Flowchart

flowchart TD
    A[Start] --> B[Display commands: list, findbyid, findbyfirstname, sortbyfirstname, exit]
    B --> C[User enters command]
    C -->|list| D[Print all customers]
    C -->|findbyid| E[Search by Id]
    E --> F{Found?}
    F -->|Yes| G[Print first & last name]
    F -->|No| H[Print "Customer doesn't exist"]
    C -->|findbyfirstname| I[Search by FirstName]
    I --> J[Print DateOfBirth]
    C -->|sortbyfirstname| K[Sort by FirstName & print list]
    C -->|exit| L[End]


⸻

Q2 – Items Join (LINQ)

Data Structure

classDiagram
    class ItemName {
        int Id
        string Iname
        int SNo
    }

    class ItemPrice {
        int Id
        double Price
    }

Flowchart

flowchart TD
    A[Start] --> B[Load ItemName and ItemPrice lists]
    B --> C[Join lists on Id]
    C --> D[Print all items with prices]
    D --> E[Prompt user to enter item name]
    E --> F[Lookup price and print]
    F --> G[End]


⸻

Q3 – Fibonacci + Operator Overloading

Class Diagram

classDiagram
    class Fibonacci {
        int Position
        int Value
        +ComputeValue() : int
        +++() : Fibonacci
        ++(int m) : Fibonacci
    }

Flowchart

flowchart TD
    A[Start] --> B[Prompt user for n]
    B --> C[Compute F(n)]
    C --> D[Apply ++ operator → F(n+1)]
    D --> E[Apply +m operator → F(n+m)]
    E --> F[Print results]
    F --> G[End]


⸻

Q4 – File Copy

Flowchart

flowchart TD
    A[Start] --> B[Prompt for source file path]
    B --> C{File exists?}
    C -->|No| D[Print error & End]
    C -->|Yes| E[Prompt for destination file path]
    E --> F[Copy file content]
    F --> G[Print success message]
    G --> H[End]


⸻

Notes:
	•	Use mermaid blocks if your Markdown viewer supports it (like VS Code or GitHub).
	•	You can also export these diagrams as PNGs for your design folder.
	•	This fully covers class structure, data relationships, and program logic for Q1–Q4.

⸻
