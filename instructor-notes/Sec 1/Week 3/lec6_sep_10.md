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

<!-- 

Todays goals: 

 - Explain CSS properties: Color, Font, Box model, Flexbox, Positioning

 How:

 - Build in front of them 
 - When a concept comes up, show slides

 -->


Web Engineering & Development (SWE 363) 
# 3.2 CSS Properties
### Dr. Omar Hammad
### Presented By Hasan Al-kaf

---

# Announcements 📣
- Phase 2 added 
- Grading started 

---

# In today's Lecture: 

- Color: background, text 
- Display: block, inline, inline-block
- Font: size, weight, family
- Text: alignment, decoration, transform
- Box model: border, padding, margin
- Flexbox: display, flex-direction, justify-content, align-items
- Positioning: static, relative, absolute, fixed, z-index

### Reference: 
- Zybook: 3.4 to 3.8

---

# Inspirational Websites
https://www.awwwards.com/
https://www.producthunt.com/
https://www.raycast.com

# CSS Variables Local Vs Global
 <img src="img/CssVariable.jpg" alt="Css Variables" width="500">


---
# Color Systems

<p>Named &#8594; easy keywords.</p>
<p>HEX &#8594; classic web format.</p>
<p>RGB(A) &#8594; direct red/green/blue values.</p>
<p>HSL(A) &#8594; intuitive hue/saturation/lightness.</p>
<p>HWB &#8594; intuitive for mixing white &amp; black.</p>
<p>color() &#8594; modern color spaces for wide-gamut displays.</p>

---

# Box model 

---

# Flexbox 

---

---

<!-- _class: demo -->

>45m
# Demo
Starter code at: web-engineering-kfupm-classroom-3-2-css-properties/

---


# Next Class
- JS