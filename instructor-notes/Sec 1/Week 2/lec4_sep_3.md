---
marp: true
paginate: true
style: |
  :root {
    --background: rgb(25, 27, 32);
    --background-light: rgb(93, 102, 121);
    --foreground: #ffffff;
    --light-background: #ffffff;
    --accent: #ffcc00;
    --secondary: rgb(76, 22, 114);
  }

  section { background-color: var(--background); color: var(--foreground); }
  h1, h2, h3, h4, h5 { color: var(--foreground); }

  section.boxes ul { display: flex; list-style: none; padding: 0; width: 100%; }
  section.boxes li {
    background-color: var(--foreground);
    color: var(--background);
    padding: 40px;
    margin: 10px;
    border-radius: 10px;
    flex: 1;
    text-align: center;
  }

  blockquote { color: white; }
  strong { color: var(--accent); }
  header, footer { width: 100%; margin: 0 auto; color: var(--background-light); }

  section.activity { background: var(--accent); color: var(--background); }
  section.activity h1,
  section.activity h2,
  section.activity h3,
  section.activity h4,
  section.activity h5 { color: var(--background); }
  section.activity footer { display: none; }
  section.activity blockquote {
    display: inline-block;
    border: 4px solid black;
    color: white;
    border-radius: 10px;
    background-color: var(--background);
  }
  section.activity a {
    color: var(--background);
    text-decoration: underline;
    font-weight: bold;
  }

  a { color: var(--accent); }

  section.demo { background: var(--secondary); color: var(--foreground); }
  section.demo h1,
  section.demo h2,
  section.demo h3,
  section.demo h4,
  section.demo h5 { color: var(--foreground); }
  section.demo footer,
  section.footer-none footer { display: none; }
  section.demo blockquote {
    display: inline-block;
    color: var(--secondary);
    border-radius: 10px;
    background-color: var(--foreground);
  }

  section.light { background-color: var(--light-background); color: var(--background); }
  section.light h1,
  section.light h2,
  section.light h3,
  section.light h4,
  section.light h5 { color: var(--background); }

  section.graph pre {
    background-color: #ffffff;
    color: var(--background);
    padding: 10px;
    border-radius: 5px;
    overflow-x: auto;
  }

  section.center { text-align: center; }
  section.big-code pre { font-size: 2rem; }
footer: "SWE 363 | 251 | Sec 1 | KFUPM"
---

Web Engineering & Development (SWE 363) 
# 2.2 More HTML (Hypertext Markup Language) 
### Prepared By Dr. Omar Hammad
### presented By Hasan Al-kaf

---

<!-- 

By the end of this lecture, students will be able to:
- Use Link, containers, and forms in HTML 
- Links: Know relative path, surround images, use target
- Containers: why, structure, meaning, block vs inline
- Forms: why?, structure, GET vs POST
- Form Widgets: Input, Select, Textarea, Button, checkboxes, radio buttons


How: 
- Build a simple page with links, containers, and forms in front of them and explain as you go 

 -->

 Announcements 📣
 - We allow teams of 4 but with higher expectations 
 - Graders assigned and will be looking into your code


 ---

 # In today's Lecture: 

 - Links
 - Containers
 - Forms
 - Form Widgets

Reference: 
- Zybook: 2.6 to 2.7

---

<!-- _class: center -->

# Links
Connect different pages together

---

 # a simple Link

<!-- _class: center big-code -->
 ```html
 <a href="https://google.com">Link</a>
 ```
 ---

 # A link with an image

<!-- _class: center big-code -->
 ```html
 <a href="https://google.com">
  <img src="https://google.com/logo.png" alt="Google Logo">
 </a>
 ```
 ---

 <!-- _class: activity -->
 
 >Board activity:
 # How can we link to a page located in the same directory?

 ---

 <!-- _class: center -->

 # Containers
 grouping elements together

---

# Common Container tags 

- ```<header>```: Header
- ```<main>```: Main Content
- ```<section>```: Section
- ```<article>```: Article
- ```<footer>```: Footer
- ```<nav>```: Navigation
- ```<div>```: Division
- ```<span>```: Span

---

<!-- _class: center big-code -->
# Messy Code Example

```html
<html><head><title>My Page</title></head><body><h1>Welcome</h1><p>This is a paragraph with no spacing or proper indentation making it very hard to read and maintain</p><div><ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul></div><a href="link.html">Click here</a><img src="image.jpg" alt="image"><script>function doSomething(){var x=1;var y=2;var result=x+y;return result;}</script></body></html>
```

---

<!-- _class: activity -->

>Board Challenge:
# How would you structure this page using containers?

---

<!-- _class: center big-code -->
# Clean Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Page</title>
</head>
<body>
    <header>
        <h1>Welcome</h1>
    </header>
    
    <main>
        <p>This is a paragraph with proper spacing and indentation, making it easy to read and maintain.</p>
        
        <section class="content">
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </section>
        
        <a href="link.html">Click here</a>
        <img src="image.jpg" alt="Descriptive image text">
    </main>

</body>
</html>
```

---

# Block vs Inline Elements

- **Block**: Takes up the full width of the container: ```<div>```, ```<section>```, ```<article>```, ```<header>```, ```<footer>```, ```<p>```, ```<h1>```, ```<h2>```, ```<h3>```, ```<h4>```, ```<h5>```, ```<h6>```
- **Inline**: Takes up only the width of the content: ```<span>```, ```<a>```, ```<img>```, ```<strong>```, ```<em>```

---

<!-- _class: center-->

# Forms 
Make website interactive

---

<!-- _class: big-code -->

# A simple form 

```html
<form action="process_form.php" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <input type="submit" value="Submit">
</form>
```

action: The URL where the form data will be sent
method: The HTTP method to use (POST or GET)
input: The input field where the user will enter the data
submit: The button that will submit the form

---

# Get vs Post

- Get: Sends the data in the URL
- Post: Sends the data in the body of the request

---

# Data look like: 

## Client Request

```
GET /process_form.php?name=John
```

```
POST /process_form.php
```

## Data (key-value pairs)

```
name=John
```

## Server Response

---

# Common Form Widgets (Elements)

- ```<input>```: Input (text, password, email, number, etc.)
- ```<select>```: Select (dropdown menu)
- ```<textarea>```: Textarea (large text field)
- ```<button>```: Button (submit, reset, etc.)
- ```<checkbox>```: Checkbox (multiple choice)
- ```<radio>```: Radio (single choice)
- ```<submit>```: Submit (submit the form)
- ```<reset>```: Reset (reset the form)

---

<!-- _class: demo -->
>30m
# Let's build a social media app


Starter code at: github.com/Web-Engineering-KFUPM/2.2_social_media_app

---

# Next Class
- Basics of CSS

---