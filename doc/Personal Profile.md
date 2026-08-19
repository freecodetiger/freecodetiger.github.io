# Personal Profile — Pengcheng

> This document is a design and content reference for building Pengcheng's personal website.
> 
> It is **not a resume**.  
> It describes the person, engineering philosophy, projects, interests, technical identity, and the kind of impression the website should communicate.

---

# 1. Identity

**Name:** Pengcheng

**Role:** Software Engineer / Builder

**Background:** Computer Science student, currently doing mobile-side engineering work in a video editing SDK team.

**Primary technical interests:**

- Systems
    
- C++
    
- Swift
    
- macOS
    
- Rendering
    
- Media
    
- Video Editing
    
- Developer Tools
    
- AI Agents
    
- Runtime Architecture
    
- UX / Interaction
    

Pengcheng is not interested in being defined by a single platform.

Although current professional experience is related to mobile development and video editing SDKs, his interests extend across:

```text
Applications
    ↓
Frameworks
    ↓
Runtime
    ↓
Rendering
    ↓
Systems
```

He enjoys understanding what happens underneath an abstraction instead of only using the abstraction.

---

# 2. Personal Positioning

The most accurate positioning is:

> **A builder who likes going from user experience all the way down to systems.**

Another useful description:

> **Software engineer interested in the intersection of systems, media, interfaces and AI.**

Potential personal tagline:

> **I build software from pixels to systems.**

The website should communicate that Pengcheng is:

- curious
    
- technically ambitious
    
- highly hands-on
    
- product-oriented
    
- sensitive to UX
    
- willing to work close to the system
    
- interested in difficult engineering problems
    
- capable of independently turning ideas into working products
    

He should **not** be presented as simply:

> “A college student who knows many technologies.”

Instead:

> **Someone who repeatedly turns technical curiosity into real software.**

---

# 3. Engineering Personality

Pengcheng likes to build things himself.

He tends to ask:

> “What is actually happening underneath this API?”

rather than stopping at:

> “How do I use this API?”

For example, when learning a media system, the interesting questions are not only:

- How do I call Seek?
    
- How do I play a video?
    

But also:

- What is the Media Timeline?
    
- What happens to PTS / DTS during seeking?
    
- How are audio and video clocks synchronized?
    
- What happens to decoder state?
    
- How does buffering affect perceived latency?
    
- What should the SDK expose to an upper-layer orchestrator?
    
- How can Seek UX be optimized beyond the underlying player API?
    

Similarly, for rendering:

- How does GPU rendering actually work?
    
- What is Metal's role?
    
- How does AppKit interact with rendering?
    
- Where are the main-thread bottlenecks?
    
- How can scrolling remain smooth under heavy output?
    
- What happens between a high-level UI and machine-level rendering?
    

This curiosity is an important part of the person's identity.

---

# 4. Product Philosophy

Pengcheng does not only care about whether something works.

He cares about:

> **How does it feel to use?**

A recurring design philosophy is:

### “Technical complexity should disappear into the experience.”

The user should not need to know that something is technically difficult.

For example:

- Smooth scrolling should simply feel smooth.
    
- A terminal should feel responsive.
    
- A media editor should feel immediate.
    
- An AI agent should feel natural.
    
- A macOS application should feel native.
    

This creates an interesting combination:

```text
Deep Engineering
        +
Product Sensibility
        +
Interaction Quality
```

This combination should be visible throughout the personal website.

---

# 5. Open Source / Personal Projects

## 5.1 ProGhostty

**ProGhostty** is the most representative personal project.

It is a modern macOS terminal built around the Ghostty ecosystem.

Repository:

[https://github.com/freecodetiger/ProGhostty](https://github.com/freecodetiger/ProGhostty)

Core technologies include:

- C++
    
- Swift
    
- AppKit
    
- Metal
    
- libghostty
    
- libghostty-vt
    

The project is not simply a terminal clone.

The focus is on rethinking the terminal experience:

- multi-workspace
    
- split panes
    
- smooth scrolling
    
- terminal rendering
    
- AI CLI workflows
    
- interaction quality
    
- large-output performance
    

One of the interesting engineering problems is smooth terminal scrolling.

Traditional terminal rendering can become difficult when:

- output is continuously generated
    
- large amounts of text are present
    
- attributed strings need rebuilding
    
- AppKit is constrained by the main thread
    
- scrolling must remain visually smooth
    

The project explores mechanisms such as:

- overscan snapshots
    
- sub-row offsets
    
- scroll coordination
    
- rendering optimization
    
- separation between terminal semantics and UI rendering
    

The deeper idea:

> A terminal does not have to feel like a terminal application from twenty years ago.

ProGhostty should receive the **highest visual weight** on the personal website.

It is the clearest representation of:

```text
Systems
+
Rendering
+
UX
+
Native macOS
+
C++ / Swift
+
Independent Product Development
```

---

# 6. AirTrim

**AirTrim** is a voice-driven video editing project.

It represents the intersection of:

- Media
    
- Audio
    
- Video Editing
    
- AI / interaction
    
- Product design
    

The important story is not merely that it is a video editor.

The interesting aspect is:

> Using a more natural interaction model to reduce the complexity of traditional media editing.

AirTrim demonstrates that Pengcheng is interested in building software where technology changes the interaction paradigm instead of merely adding another feature.

---

# 7. openRec

**openRec** is a native macOS screen recording application.

It represents interest in:

- macOS native development
    
- media capture
    
- system APIs
    
- performance
    
- recording pipelines
    
- polished desktop software
    

It also reinforces a broader pattern:

> Pengcheng likes building developer / creator tools that live close to the operating system.

---

# 8. DDL Agent

**DDL Agent** is a local-first Android AI assistant.

Relevant technologies and concepts include:

- Android
    
- Kotlin
    
- Room / SQLite
    
- AI APIs
    
- Voice interaction
    
- Agent architecture
    
- Local-first architecture
    

The project demonstrates another side of Pengcheng:

> AI should be integrated into useful products rather than existing only as a chatbot demo.

The local-first design reflects interest in:

- local data ownership
    
- practical AI products
    
- lightweight architecture
    
- mobile-first interaction
    

---

# 9. Current Professional Direction

Current professional experience is in a **mobile / video editing SDK environment**.

This is important because it connects several existing interests:

```text
Mobile
   ↓
Media
   ↓
Video Editing
   ↓
SDK / Infrastructure
   ↓
Performance
   ↓
User Experience
```

This experience should not dominate the website like a conventional resume.

Instead, it should appear naturally under:

**Now / Currently Building / Experience**

The website should communicate that professional engineering experience and personal projects reinforce each other.

---

# 10. Technical Knowledge Map

Do not represent skills using progress bars.

The person's technical interests are better represented as a system.

```text
                         SOFTWARE
                            │
          ┌─────────────────┼─────────────────┐
          │                 │                 │
       SYSTEMS            MEDIA              AI
          │                 │                 │
       C / C++           Video             Agents
       Rust              Audio             LLM
       Swift             FFmpeg            RAG
       Runtime           Timeline          Voice
          │                 │                 │
          └─────────────────┼─────────────────┘
                            │
                         PRODUCT
                            │
                           UX
```

Relevant areas:

### Languages

- C++
    
- Swift
    
- Kotlin
    
- Java
    
- Rust
    
- TypeScript
    

### Native / Client

- macOS
    
- AppKit
    
- Metal
    
- Android
    
- Kotlin
    
- React Native / cross-platform concepts
    

### Systems

- Runtime
    
- ABI
    
- FFI
    
- IPC
    
- Rendering
    
- GPU
    
- Memory
    
- Performance
    

### Media

- FFmpeg
    
- H.264 / H.265
    
- I-frame / P-frame / B-frame
    
- PTS / DTS
    
- Audio / Video synchronization
    
- Decoder / Encoder
    
- Media Timeline
    
- Seeking
    
- Buffering
    

### AI

- LLM
    
- Agents
    
- RAG
    
- LangGraph
    
- Voice interaction
    
- Local-first AI
    
- AI developer tools
    

### Backend / Infrastructure

- Spring Boot
    
- Java
    
- MySQL
    
- Redis
    
- RabbitMQ
    
- REST / service architecture
    

The site should **not attempt to show all of these at once**.

The most important ones should emerge through projects and technical writing.

---

# 11. Technical Curiosity

Some topics Pengcheng naturally tends to explore deeply:

### Rendering

- Metal
    
- GPU rendering
    
- AppKit
    
- text rendering
    
- terminal rendering
    
- smooth scrolling
    
- frame performance
    

### Media

- decoder state
    
- seek
    
- buffering
    
- PTS / DTS
    
- audio clock
    
- video clock
    
- synchronization
    
- media timeline
    
- crossfade
    
- AudioTrack
    
- AudioUnit
    
- AVAudioEngine
    

### Runtime / Cross-platform

- ABI
    
- FFI
    
- Objective-C interoperability
    
- Swift / Kotlin interoperability
    
- KMP
    
- React Native architecture
    
- JSI
    
- Bridge
    
- Runtime
    

### AI

- Transformer architecture
    
- Agent architecture
    
- Context management
    
- KV Cache
    
- RAG
    
- tool calling
    
- AI CLI
    
- local-first agents
    

### Developer Tools

- terminals
    
- Git
    
- CLI
    
- Markdown
    
- coding agents
    
- IDE workflows
    

These topics can become the **Notes / Lab** section of the site.

---

# 12. Developer Tool Obsession

A recurring theme is improving tools used by developers.

Examples include:

- ProGhostty
    
- AI CLI workflows
    
- terminal rendering
    
- terminal scrolling
    
- Markdown preview
    
- developer productivity tools
    

There is an underlying philosophy:

> **Developer tools should feel like products, not utilities.**

A tool can be technically powerful and still feel bad.

Pengcheng is particularly interested in the gap between:

```text
It works.
```

and

```text
It feels great.
```

That gap is where many of his projects live.

---

# 13. Design Taste

The preferred design language is:

- minimal
    
- dark
    
- technical
    
- precise
    
- dense
    
- elegant
    
- editorial
    
- subtle
    
- fast
    
- tactile
    
- slightly experimental
    

Avoid:

- excessive gradients
    
- purple AI aesthetic
    
- cyberpunk
    
- neon
    
- excessive glassmorphism
    
- excessive 3D
    
- particle backgrounds
    
- fake terminal interfaces
    
- generic developer portfolio templates
    

The preferred visual metaphor is:

> **Engineering Laboratory**

rather than:

> Cyberpunk Hacker.

---

# 14. “Slight Vitality”

One notable UX preference is the idea of:

> **轻微的生命力 / Slight Vitality**

Interfaces should not feel completely static.

Examples:

```text
● BUILDING
```

The dot can subtly breathe.

Or:

```text
CURRENTLY

Building media systems
        ↓
Thinking about rendering
        ↓
Exploring AI agents
```

The motion should be:

- subtle
    
- calm
    
- responsive
    
- physically believable
    

Not:

- flashy
    
- attention-seeking
    
- distracting
    

The ideal reaction from the visitor is:

> “This website feels alive.”

Not:

> “This website has a lot of animations.”

---

# 15. Relationship With Technology

Technology is not the identity.

Technology is the material.

The website should not say:

> “Look at how many frameworks I know.”

It should say:

> “Look at what I can build with them.”

For example, instead of:

```text
C++ ★★★★★
Swift ★★★★☆
Kotlin ★★★★☆
```

prefer:

```text
Built a custom rendering architecture
around libghostty.

Worked across C++ and Swift boundaries.

Optimized scrolling under continuous
terminal output.
```

This distinction is extremely important.

---

# 16. Personal Working Style

Likely strengths to emphasize:

### Strong curiosity

Willing to go beneath abstractions.

### High autonomy

Able to independently turn an idea into a functioning product.

### Cross-layer thinking

Can think simultaneously about:

```text
UX
↓
Application
↓
Framework
↓
Runtime
↓
System
```

### Product awareness

Does not consider “technically correct” sufficient.

### Engineering taste

Interested in architecture, performance and long-term maintainability.

### Experimentation

Likes building prototypes to understand an idea rather than only reading about it.

---

# 17. What the Website Should Make People Think

After visiting the website, the ideal impression is:

> “This person actually builds things.”

Then:

> “He seems to care about how things work underneath.”

Then:

> “He also cares about the experience, not just the implementation.”

And finally:

> “I want to see what he is going to build next.”

The website should create **curiosity about the person**, not simply communicate qualifications.

---

# 18. Suggested Personal Narrative

A useful narrative for the entire website:

```text
I like building things.

That led me to applications.

Applications led me to frameworks.

Frameworks led me to runtimes.

Runtimes led me to systems.

And systems eventually brought me
back to the user experience.
```

This is a strong conceptual foundation for the website.

It connects:

```text
ProGhostty
AirTrim
openRec
DDL Agent
Media SDK
Rendering
AI
Systems
UX
```

into one coherent identity.

---

# 19. Website Content Hierarchy

Priority should be:

### Tier 1 — Identity

Who is this person?

### Tier 2 — ProGhostty

What can this person actually build?

### Tier 3 — Other Projects

What breadth does this person have?

### Tier 4 — Engineering Thinking

How deeply does this person think?

### Tier 5 — Current Work

What is this person working on now?

### Tier 6 — Background

Education / experience / contact.

Do not reverse this hierarchy.

The site should not open with a resume.

---

# 20. Suggested Homepage Content

Potential hero:

```text
PENGCHENG

Software Engineer

I build software
from pixels to systems.
```

Selected Work:

```text
ProGhostty
A modern terminal for macOS.

AirTrim
Voice-driven video editing.

openRec
Native macOS screen recording.

DDL Agent
A local-first AI assistant.
```

Current:

```text
Currently building
video editing infrastructure.

Interested in
systems / media / rendering / AI.
```

Lab:

```text
Designing a better Seek()

Can a terminal scroll at 120Hz?

Object-based terminal rendering

GPU accelerated text rendering

Local-first AI architecture
```

---

# 21. Important Personality Constraint

Do not make the website sound overly corporate.

Avoid language such as:

- Passionate technology enthusiast
    
- Results-driven engineer
    
- Innovative problem solver
    
- Experienced software developer
    
- Strong communication skills
    

These are generic resume phrases.

Prefer language that sounds like an actual engineer:

> I like understanding why things feel slow.

> I like building tools I wish existed.

> I tend to follow abstractions until I hit the machine underneath.

> Most of my interesting projects start as a question.

This should feel like a **real person**, not an HR profile.

---

# 22. Content Tone

Tone should be:

- confident but not arrogant
    
- technical but understandable
    
- concise
    
- slightly curious
    
- occasionally playful
    
- honest
    
- personal
    

The writing should assume that the reader is intelligent.

Do not explain every technical term.

Do not overuse jargon to demonstrate competence.

---

# 23. Overall Concept

The entire personal website can be understood as:

```text
                 PENGCHENG
                     │
        ┌────────────┼────────────┐
        │            │            │
      BUILD        THINK        EXPLORE
        │            │            │
     Projects       Lab          Notes
        │            │            │
        └────────────┼────────────┘
                     │
                  SYSTEMS
                     │
              MEDIA · AI · UX
                     │
                 SOFTWARE
```

The website is not a resume.

It is:

> **A living map of what Pengcheng builds, what he is learning, and what he is curious about.**

---

# 24. Final Design Principle

If there is ever a conflict between:

**“This looks technically impressive”**

and

**“This feels like Pengcheng”**

always choose:

> **This feels like Pengcheng.**

The website should feel like it could only have been made by this person.

It should have the same qualities as his best projects:

> **Technically deep.  
> Product-aware.  
> Minimal.  
> Fast.  
> Slightly experimental.  
> And quietly ambitious.**