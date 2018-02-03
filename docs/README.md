Let's learn how to use Responsive Dojo in easiest way.

## Download

This comes with both the minified and unminified CSS and JavaScript files. This option requires little to no setup.

[Download the latest release.](https://github.com/jhayrdmz/responsivedojo/archive/v1.0.0.zip)

## Setting up our Project

After downloading, extract the files into the directory where your website is located. Your directory will look something like this. Folders are in bold text.

You'll notice that there are two sets of files. The minified version for production and unminified version for development.

```
responsive-dojo/
├── css/
│   ├── responsive-dojo.css
│   └── responsive-dojo.min.css
├── images/
    └── icons/
        └── arrow-down.png
└── js/
    ├── responsive-dojo.js
    └── responsive-dojo.min.js
```

## HTML Structure

Next you just have to make sure you link the files properly in your webpage. Generally it is wise to import javascript files at the end of the body to reduce page load time. Follow the example below on how to import Responsive Dojo into your webpage.

One last thing to note is that you have to import jQuery before importing responsive-dojo.js.

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <title>Your Project Title</title>

  <!-- import material design icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/2.1.19/css/materialdesignicons.min.css">

  <!-- import responsive-dojo.min.css -->
  <link rel="stylesheet" href="css/responsive-dojo.min.css">
</head>
<body>
  
  <!-- import jquery before responsive-dojo.min.js -->
  <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>

  <!-- import responsive-dojo.min.js -->
  <script src="js/responsive-dojo.min.js"></script>
</body>
</html>
```