# comic-hint

> A simple jQuery plugin for showing a message inside a nice comic balloon is give hints, help or any kind of message to the users

## Usage

1. Copy the contents of src/ to the corresponding asset directories in your project.

2. Insert the neccesary elements in your document's `<head>` section, e.g.:

```html
<link rel="stylesheet" href="src/css/comic.hint.css" />
<script type="text/javascript" src="src/js/comic.hint.js"></script>
```

 Remember to include comic.hint.js *after* including the main jQuery library.

 3. Initialise Comic-Hint in your document.onload, e.g.:

```js
<script type="text/javascript">
	$(document).ready(function() {
		$("#element").comicHint({ text: "Your message here!" });
	});
</script>
```