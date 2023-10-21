# EurekaHacks2024

Eureka Hacks 2024 Website

## Running locally

1. Clone the repo

```bash
$ git clone https://github.com/Eureka.git
```

2. Install dependencies and run

```bash
$ npm install
$ npm start
```

To build for production and test response times you can use the following

```bash
$ npm run build
$ serve -s build
```

## Short React Intro

React is a super fun framework!

### Basic Stuff

Once you have installed and successfully ran the application you can start looking at the code, index.html is like the base of everything that is later rendered.

However, index.js is where everything actually starts, you can see it actually takes the App component and renders it to the root element in index.html.

This also makes index.css like the global css file that should be imported everywhere automatically (though technically every components css is global).

App.js is where the main component is, it is the parent of all the other components and is where the routing is done.

Think of it like the trunk of the tree, whereas index.js is like the roots.

### Components vs Pages

Technically, pages are really just components, except we call them pages since they'll be the biggest and parent component of a page.

Components are like lego blocks, you literally use them to build the website and section it off into different parts, this makes it a lot easier to collaborate and organize code...

Components need to follow a few rules, you may need to add `import React from "react";` since linters like eslint will occasionally complain if you don't.

Then you need to create a component, and export it, this is done like so:

```js
function ComponentName() {
    return (
        <div>
            <h1>Hello World!</h1>
        </div>
    );
}
export default ComponentName;
```

You can also directly export it which you'll see me doing pretty much every time since it's shorter...

**Note that all components can only have one parent div, you can't have <div></div> and then another <div></div> straight after, it has to be wrapped in one component.**

### CSS

You may want to import css files into your components, this is done like so:

```js
import "./ComponentName.css";
```

Yes, it's that simple, no more stylesheets, that's all you have to do, you should name it the same as the component it's being imported into.

### Final Notes

If I remember more stuff I'll add it but you can find everything online, try to stick to the general coding styles and uses double quotes.

Also, once you're done writing a component/ready to commit run npm run lint to quickly fix any errors you may have made.
