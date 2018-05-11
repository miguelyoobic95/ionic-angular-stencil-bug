# ionic-angular-stencil-bug
Bug Reproduction - navigation from a component's constructor breaks the page that is first loaded - it works fine after refreshing

Steps to reproduce:

Install node_modules:

`npm i`

Build stencil components:

`npm run build:stencil`

Serve the app:

`ionic serve`

The app is redirected to a blank page. If you refresh, the components are rendered correctly. 

The expected behavior is for them to render as soon as we navigate to the relevant page.
