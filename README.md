# ClassList and Transition Image Gallery

## Description
This is an interactive **image gallery** project built with **HTML, CSS, and JavaScript**.  
It demonstrates the use of **`classList`** for adding, removing, and toggling CSS classes, combined with **CSS transitions** to create smooth visual effects.

Users can interact with the gallery using buttons to change layouts, toggle dark mode, and control gallery visibility.  
This project is a great learning example for **DOM manipulation**, **event handling**, and **CSS transitions**.

## Features
- **Dark Mode**: Toggle the page between light and dark themes using the `Dark Mode` button.
- **Grid / Column View**: Switch the gallery layout between grid and column views.
- **Gallery On / Off**: Add or remove borders and backgrounds from gallery images.
- **Menu Toggle**: Show or hide the navigation menu.
- **Hover Transitions**: Smooth scaling and color effects on buttons and navigation links.
- **Responsive Layout**: Flexible image grid that adapts to screen size.

### Button Functionality
| Button | Action |
|--------|--------|
| Dark Mode | Toggles the `.darkMode` class on `<body>` |
| Grid View | Adds the `.grid` class to the gallery `<div>` |
| Column View | Removes the `.grid` class to display images in a column |
| Gallery On | Adds `.border` and `.bg-white` classes to images |
| Gallery Off | Removes `.border` and `.bg-white` classes from images |
| Toggle Menu | Toggles the `.hidden` class on the `<menu>` element |

## Installation / Usage
1. Clone or download this repository.
2. Open the `index.html` file in a web browser.
3. Click the buttons to see dynamic changes in the gallery.

```bash
# Clone repository example
git clone https://github.com/your-username/classlist-transition-gallery.git
