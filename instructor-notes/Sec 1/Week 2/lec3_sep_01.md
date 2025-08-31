
Web Engineering & Development (SWE 363) 
# 2.1 Basics of HTML (Hypertext Markup Language) 
### Hasan Al-kaf

---

<!-- Goal of todays lecture: by the end of this lecture, students will

0. Understand the basic principles of HTML
1. Understand the structure of HTML 
2. Be able to write a simple HTML including Lists, Tables & Images
3. Understand the basics of Github & be able to fork, 

 -->


Announcements 📣
- Project Assignment #1 is due This Thursday at 11:59 PM
- New Demos structure (Github Classrooms)
- Attendance starts from today 

---

# In today's Lecture: 

- HTML Document structure
- Basic HTML Tags 
- HTML Lists
- HTML Tables 
- HTML Images

---

<!-- _class: center -->

# HTML
What?

---

# HTML

- Hyper Text: Text with links to other documents or resources. 
- Markup: Defines the structure and meaning of different parts of the document. 
- Language: A set of rules for writing HTML code properly. 

<!-- Examples of markup languages other than HTML:  YAML, XML, Markdown -->

---

<!-- _class: center -->

# So what does CSS & JS do?

<!--  CSS is for styling the HTML elements, JS is for making the HTML elements interactive. -->

---

<!-- _class: center big-code -->

# HTML Elements 
```html
<p>Hello</p>
```

---

<!-- _class: center big-code -->

# HTML Elements 
```html
<p>Hello</p>
```
Examples include: ```<h1>```, ```<h2>```, ```<h3>```, ```<h4>```, ```<h5>```, ```<h6>```, ```<ul>```, ```<ol>```, ```<li>```, ```<table>```, ```<tr>```, ```<td>``` etc.

---

<!-- _class: center big-code -->

# HTML Attribute

```html
<a href="https://google.com">Link</a>

```

---

<!-- _class: center big-code -->

# HTML Attribute

```html
<a href="https://google.com">Link</a>
```
Examples include: ```href```, ```src```, ```alt```, ```class```, ```id```, ```style``` etc.

---

# A Simple HTML Page

<!-- Annotate for students to explain the different parts -->

```html
<!doctype html> 
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <style>
      body { background-color: lightblue; }
    </style>
  </head>
  <body>
    Hello, world!
    <script>
      console.log('Hello from JavaScript!');
    </script>
  </body>
</html>
```

---

<!-- _class: activity -->

# Let's Build a Simple HTML 

---

# HTML Elements reference
## https://developer.mozilla.org/en-US/docs/Web/HTML
## https://www.w3schools.com/html/default.asp

---

# HTML common text elements 
- Paragraph ```<p>```: Used to define a paragraph of text
- Headings ```<h1>``` to ```<h6>```: Used to define headings of different levels
- Formatting ``` <em> <i> <b> <mark> ```: Used to format text

---

<!-- _class: activity -->
```Board Challenge: write the html code for the following:```

# SWE 363
## Introduction to HTML 
A course where we will learn the basics of HTML, CSS & JS.

---

# HTML Lists 

There are two types of lists: Ordered ```<ol>``` and Unordeered ```<ul>```

```html
<!-- Example of a list -->
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
```

 <i>How can we make a nested list?</i>

---


# HTML Tables 

Consists of rows ```<tr>``` and columns ```<td>```

```html
<table>
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
    <td>Row 1, Cell 3</td>
  </tr>
</table>

```

---

<!-- _class: footer-none -->

Tables can get complex ...
```html
<table>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">Row 1, Cell 1 (spans 2 rows)</td>
      <td>Row 1, Cell 2</td>
      <td>Row 1, Cell 3</td>
    </tr>
    <tr>
      <td>Row 3, Cell 1</td>
      <td colspan="2">Row 3, Cell 2 (spans 2 columns)</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Footer (spans all columns)</td>
    </tr>
  </tfoot>
</table>

```

---

# HTML Images 

Images are <i>void</i> elements, they don't have a closing tag.

```html
<img src="link_to_image.jpg" alt="image description">
```

---

# Void elements 

Void elements are elements that don't have a closing tag.
Examples: ```<img>```, ```<br>```, ```<hr>```, ```<input>```, ```<link>```, ```<meta>```, ```<area>```, ```<base>```, ```<col>```, ```<embed>```, ```<hr>```, ```<img>```, ```<input>```, ```<link>```, ```<meta>```, ```<param>```, ```<source>```, ```<track>```, ```<wbr>```

---


<!-- _class: activity -->

# Let's build a rich html page 
Follow along the instructor 


---


# Next Class
- Links
- Containers
- Forms




