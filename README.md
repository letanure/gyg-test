# Search test

## Development

```bash
yarn install
yarn serve
```

## Stack

I decided to use [vuejs](https://vuejs.org/) because is the framework that I'm using in the last year,
but instead of just copy the base of some old project I prefer to try the new [@vue/cli 3.0.](https://github.com/vuejs/vue-cli)
to finish the test and try something new to learn and see the differences to the last version.

Some of the things I used to configure now default, like:

- PUG HTML preprocessor
- Stylus CSS preprocessor

I like this 2 tools because they force me, and the rest of the team to be consistent in the coding style because of the
adopted syntax, besides the regular things that all preprocessors have, and I keep all in the same NodeJS stack

After install, I made some small updates in the default template:

- added [commitizen](http://commitizen.github.io/cz-cli/) and extras to force a pattern on GitHub commit messages
- regular [editorconfig](http://editorconfig.org/)
- enforced more strict lint rules

After this, I clean the demo code, added some basic routes and started the development of each module

I created view components, for home and search results, these views don't have any logic, they just group and display the
other small components.

The small components are divided into 2 categories, UI (should be buttons, lists, icons, etc, just presentation layer, like a style guide)
and the custom components, in general, they are a combination of UI components with logic and real data.

I created a vuex store with a module named search, to load the mock data and handle the filters and searches.
In a real case scenario, I have another layer, the API, that have an API wrapper and all the specific maps to endpoints,
and this API layer is used inside the store actions as promises

I have another folder with small functions, the helpers, with pure JS functions used in different parts of the code

In the CSS I created some basic styles, where you can see some of the techniques like in the grid or buttons with custom CSS properties

## Behavior

I created I small component Named Search form, used in the home and search page, with an input and a clear placeholder,
with more than just a label or instructions, but more like an example

The autocomplete works calculating the Levenshtein Distance from what the user typed and the available options.
Is not working perfectly because I don't have a real API, so it is just a small demo, showing some good practices,
like the highlight of the work, misspelling tolerance

I didn't have time to enable the keyboard control, but in a real case, I think we should add some options to navigate in the options

The search works hitting enter or clicking the button because is bound on the form to submit.

Another point of interest has I added in the same component the schema for Google, using JSON/LD

Below the input, I added some small hints for the user, in case he doesn't have any idea how to search.

These suggestions are based on the data, just counting the most common words, removing some not useful like 'the, with', etc

Clicking on this words will fill the form, not make the search because the idea is to guide the user to a proper search, instead of making the search for him.


After the search is submitted, the URL is updated with a friendly slug and in the new page we have the same search box,
with the words provided and a message about the number of results.

Because of the time, I didn't create the zero results message, with some behavior to help the user.

The results are simply because I don't have images or something like this, so I focused in small things like highlight, misspelling corrections (try a search for German instead of German or Reichstag instead of Reichstag)


The code is just a demo, not working perfect, but I think is a good overview of I write JS, CSS, code organization, and UX concerns.




