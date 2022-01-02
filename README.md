# Vue.js 3 & TypeScript PoC
This is a small application created as a proof-of-concept on using Vue.js version 3 in combination with TypeScript.

Since TypeScript adds some more functionalities to JavaScripts OOP I've decided to use class-based components for Vue.js.

#### Note: Even though the project uses Vue.js 3 I've decided to use the old Options API for Vue.js instead of the new Composition API in order to keep it as simple as possible because not everyone has experience with it

## Project setup
### Install packages
```
npm install
```

## Run the application
### Compile FE and start the development server
```
npm run serve
```

### Start the JSON server used as backend
```
npm run backend
```

Open in browser: http://localhost:8080/

## Useful resources
- This playlist on YouTube provided me with basic knowledge on combining Vue.js 3 & Typescript
  - https://www.youtube.com/watch?v=JfI5PISLr9w&list=PL4cUxeGkcC9gCtAuEdXTjNVE5bbMFo5OD


- Some examples on how to use class-based components in Vue.js. This article is for Vue.js version 2 but still contains some useful examples
  - https://webomnizz.com/class-based-component-with-vue-and-typescript/


- Same as the previous point but it contains a bit more examples and descriptions regarding property decorators
  - https://www.sitepoint.com/class-based-vue-js-typescript/


- This answer on Stackoverflow pointed me in the right direction regarding changes from Vue.js 2 to 3 for package `vue-class-component`
  - https://stackoverflow.com/a/63927478/9751251
  - https://github.com/vuejs/vue-class-component/issues/406


- This answer on Stackoverflow demonstrated how to use Vuex `mapActions` and `mapGetters` in class-based components for Vue.js.
  - https://stackoverflow.com/a/61992938/9751251


- Since type aliases and interfaces look the same on the surface in TypeScript, the documentation provides a list of differences (but in most cases it will come down to the personal preference)
  - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
