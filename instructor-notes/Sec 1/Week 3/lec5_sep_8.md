---
marp: true
paginate: true
style: |
    :root {
      --background:rgb(25, 27, 32);
      --background-light:rgb(93, 102, 121);
      --foreground: #ffffff;
      --light-background: #ffffff;
      --accent: #ffcc00;
      --sedondary:rgb(76, 22, 114);
    }
    section { background-color: var(--background); color: var(--foreground); }
    h1,h2,h3,h4,h5 {color:var(--foreground);}
    section.boxes ul { display: flex; list-style: none; padding: 0; width: 100%; }
    section.boxes li { background-color:var(--foreground); color:var(--background); padding: 40px; margin: 10px; border-radius: 10px; flex: 1; text-align: center; }
    blockquote { color: white; }
    strong { color: var(--accent); }
    header, footer {width:100%; margin:0 auto; color:var(--background-light)}
    section.activity { background: var(--accent); color:var(--background)}
    section.activity h1,section.activity h2, section.activity h3, section.activity h4, section.activity h5 { color: var(--background) }
    section.activity footer { display: none; }
    section.activity blockquote {display:inline-block; border: 4px solid black; color: white; border-radius: 10px; 
    background-color:var(--background)}
    section.activity a {
        color: var(--background);
        text-decoration: underline;
        font-weight: bold;
    }
    a { color:var(--accent) }
    section.demo { background: var(--sedondary); color:var(--foreground)}
    section.demo h1,section.demo h2, section.demo h3, section.demo h4, section.demo h5 { color: var(--foreground) }
    section.demo footer, section.footer-none footer { display: none; }
    section.demo blockquote {display:inline-block; color: var(--sedondary); border-radius: 10px; background-color: var(--foreground)}
    section.light { background-color: var(--light-background); color: var(--background); }
    section.light h1, section.light h2, section.light h3, section.light h4, section.light h5 { color: var(--background); }
    section.grraph pre {
        background-color: #ffffff;
        color: var(--background);
        padding: 10px;
        border-radius: 5px;
        overflow-x: auto;
    }
    section.center {text-align:center}
    section.big-code pre {font-size:2rem}
footer: 'SWE 363 | 251 | Sec 1 | KFUPM'
---

---

Web Engineering & Development (SWE 363) 
# 3.1 Using CSS in HTML
### Hasan Al-kaf

---

<!-- 

By the end of this lecture, students will be able to:
- Using CSS in HTML 
- Basic selectors
- Advanced selectors
- Common properties
- Font and text properties

 -->

 Announcements 📣
 - We allow teams of 4 but with higher expectations 
 - Graders assigned and will be looking into your code


 ---

 # In today's Lecture: 

- Using CSS in HTML 
- Basic selectors
- Advanced selectors
- Common properties
- Font and text properties

Reference: 
- Zybook: 3.1 to 3.5

# 🎨 CSS Basics to Advanced – Lecture Notes

Welcome to the **CSS Lecture Series** 🚀  
This repo summarizes the key points from our slides on **Using CSS in HTML, Selectors, Properties, and Fonts/Text**.  

---

## 📌 1. Using CSS in HTML :contentReference[oaicite:0]{index=0}
CSS (**Cascading Style Sheets**) controls **how webpages look** across devices.  

✅ **Ways to apply CSS**:
- **Inline** – inside an element (`<p style="color:red">`).
- **Embedded** – inside `<style>` in the `<head>`.
- **External** – link to a `.css` file (best practice).

⚡ **Conflict Resolution**:
- Inline > Embedded > External.  
- Child > Parent.  
- Specificity decides which rule wins.  
- `!important` overrides everything (use sparingly).

🔍 **Tip:** Use Chrome DevTools to inspect & debug styles.

---

## 📌 2. Basic Selectors :contentReference[oaicite:1]{index=1}
Selectors target **which HTML elements** get styled.

- **Element Selector:** `p { color: blue; }`
- **Class Selector:** `.notice { color: red; }`
- **ID Selector:** `#title { font-size: 20px; }`

### 👨‍👩‍👧 Relationships:
- **Descendant:** `h2 em { color: blue; }`
- **Pseudo-classes:**  
  - `:hover` → when mouse hovers  
  - `:nth-child(2)` → 2nd child  
  - `:disabled` → disabled form element  

---

## 📌 3. Advanced Selectors :contentReference[oaicite:2]{index=2}
Level-up your targeting 🎯

- **Universal:** `* { margin:0 }`
- **Multiple:** `h1, h2 { color:red }`
- **Child:** `div > p { ... }`
- **Siblings:**  
  - `h1 + p` → next sibling  
  - `h1 ~ p` → all later siblings
- **Attribute:** `a[target="_blank"] { ... }`
- **Pseudo-elements:** `p::first-line`, `p::before`

---

## 📌 4. Common Properties :contentReference[oaicite:3]{index=3}
### 🎨 Colors
- Named: `blue`, `white`, `black`  
- RGB: `rgb(0,0,255)`  
- HEX: `#0000ff`  
- HSL: `hsl(240,100%,50%)`  
- Transparency: `rgba(...)`, `hsla(...)`

### 🖼️ Backgrounds
- `background-color`, `background-image`, shorthand `background`

### 📦 Layout Helpers
- **float:** move elements left/right  
- **clear:** stop floating around elements  
- **display:**  
  - `block`, `inline`, `inline-block`, `none`  
- **CSS Variables:**  
  ```css
  :root { --main-color: red; }
  h1 { color: var(--main-color); }
