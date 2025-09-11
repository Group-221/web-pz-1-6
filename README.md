# Practical lesson pz-1-6 WEB
> repository contains base tamplate

### Students should create responsive html markups for mobile, table, desktop use different methodology float, flex, grid.
### Acceptance criteria
* Use different files for different methodology 
* Use css media queries
* Use css variables 
* Markups must be adaptive and responsive according to design

### Directory Structure

Follow this pattern for organization of developed components.

```
├── pz-1-6
│   ├── float.html
│   ├── flex.html
│   ├── grid.html
│   ├── css
│   │   ├── float.css
│   │   ├── grid.css
│   │   ├── flex.css
│   │   ├── float-media-query.css
│   │   ├── flex-media-query.css
│   │   ├── grid-media-query.css
│   │   ├── reset.css
│   │   ├── variables.css
│   │   └── media-query.css
│   ├── img
│   │   ├── main-mobile.jpg
│   │   ├── main-table.jpg
│   │   └── main-desktop.jpg
└── 
```

### Markup for mobile
![Screenshot 2021-09-11 at 13 49 43](https://user-images.githubusercontent.com/10829855/132945343-3b7c7532-688b-4a54-9d71-c22268dde74f.png)
### Markup for table
![Screenshot 2021-09-11 at 13 50 02](https://user-images.githubusercontent.com/10829855/132945348-6b3b32ae-221d-434d-93fb-837c5312337b.png)
### Markup for desktop
![Screenshot 2021-09-11 at 13 50 27](https://user-images.githubusercontent.com/10829855/132945359-2b302a46-c4a6-48ff-8160-05623b209a77.png)

# Markup
Scripts should be placed before closing body tag.
 
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes"/>
  <title>PZ_1_6</title>
  <link rel="stylesheet" type="text/css" href="css/reset.css">
  <link rel="stylesheet" type="text/css" href="css/variables.css">
</head>
<body>
<header>
</header>
<div class="app-main-wrap">
</div>
<footer>
</footer>
</body>
</html>

```

# Useful links

* [https://caniuse.com](https://caniuse.com/?search=calc).
* [CSS var()](https://www.w3schools.com/css/css3_variables.asp).
* [CSS calc()](https://developer.mozilla.org/en-US/docs/Web/CSS/calc()).
* [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).
* [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/).
* [All About Floats](https://css-tricks.com/all-about-floats/).
* [Responsive Web Design - Media Queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp).
* [Практическое применение FlexBox](https://habr.com/ru/post/242545/).


