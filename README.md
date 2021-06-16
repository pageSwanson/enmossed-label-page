# enmossed-label-page
A static page for Enmossed

# structure
## tabs
each tab is defined with a unique `.html` file, including `index.html`, representing the
home

## components
Contains templating functions for generating tab content dynamically. Organized by content.
Each component is consumed as a module, with exports for the exposed templating functions.

The `enmossed-sources.js` module is meant to contain all source material for dynamically 
generated content. The content is kept in json format. Each particular component is
responsible for using the property interface of the source information properly.

Each templating function defines as small a piece of functionality as possible for easier
content management and adjustment.

## assets
All referenced assets are kept here. If hosting externally, this can be removed and
file references can be replaced with hosted urls

## css
All custom css is kept here. This is referenced at the top of each tab source file.

# setup
## local development
Using referenced scripts locally poses [this issue](https://stackoverflow.com/questions/62518166/cross-origin-request-blocked-error-when-loading-a-json-file)    
A small webserver solves this:

```npm i -g http-server```    
```http-server <path-to-respository-root>```
