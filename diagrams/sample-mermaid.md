# Sample Mermaid Diagram

This is a sample Mermaid flowchart that demonstrates the conversion capabilities.

```mermaid
flowchart TD
    A(("Start: Business Challenge")) --> B{"Evaluate Options"}
    B -->|"Traditional Path"| C["Buy Software"]
    B -->|"Modern Path"| D["Service-as-Software"]
    
    C --> E["Learn & Configure"]
    E --> F["Manage & Maintain"]
    F --> G["Hope It Works"]
    
    D --> H["Describe Your Need"]
    H --> I["AI Builds Solution"]
    I --> J["We Run It 24/7"]
    J --> K(("Success: Guaranteed Results"))
    
    %% Class definitions for colors
    classDef startEnd fill:#c8e6c9,stroke:#388e3c
    classDef process fill:#bbdefb,stroke:#1976d2
    classDef decision fill:#fff9c4,stroke:#f9a825
    classDef fail fill:#ffe0b2,stroke:#f57c00
    classDef ai fill:#e1bee7,stroke:#7b1fa2
    
    %% Apply classes
    class A,K startEnd
    class C,E,F,H process
    class B decision
    class G fail
    class D,I,J ai
```

## Features Demonstrated:

1. **Different Node Shapes:**
   - `(("text"))` - Circles/ellipses for start/end
   - `{"text"}` - Diamonds for decisions
   - `["text"]` - Rectangles for processes

2. **Arrow Types:**
   - `-->` - Standard arrows
   - `-->|"label"|` - Labeled arrows

3. **Color Coding:**
   - Custom class definitions with fill and stroke colors
   - Class assignments to specific nodes

4. **Flow Direction:**
   - `flowchart TD` - Top Down layout
