[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# Search test

## Stack

I decided to use [vuejs](https://vuejs.org/) because is the framework that im using in the last year,
but instead of just copy the base of some old project I prefer try the new [@vue/cli 3.0.](https://github.com/vuejs/vue-cli)
to finish the etst and try something new to learn and see the differences to the last version.

Someof the things I used to configure are now default, like:

- PUG HTML preprocessor
- Stylus CSS preprocessor

I like this 2 tools because they force me, and the erst of the team to be consistent in the coding style, because the
adopted syntax, besides the regular things that all preprocessors have, and I keep all in the same NodeJS stack

After install, I made some small updates in the default template:

- added [commitizen](http://commitizen.github.io/cz-cli/) and extras to force a pattern on github commits messages
- regular [editorconfig](http://editorconfig.org/)
- enforced more strict lint rules

After this I clean the demo code, added some basic routes and started the development of each module

I created view components, for home and serach results, this views dont have any logic, they just group and display the
other small components.

The small components are divided in 2 categories, UI (should be buttons, lists, icons, etc, just presentation layer, like a styleguide)
and the custom components, in general they are a combination of UI components with logic and real data.

I cerated a vuex store with a module named search, to load the mock data and handle the filters and searchs.
In a real case scenario, I have another layer, the API, that have a API whapper and all the specific maps to endpoints,
and this API layer is used inside the store actions as promises

I have another folder with small functions, the helpers, with pure JS functons used in differents parts of the code

In the CSS I created some basic styles, where you can see some of techniques like in the grud or buttons with custom css properties

## Behavior

I cerated I small component Named Search form, used in the home and search page, with a input and a clear placeholder,
with more than just a label or instructions, but more like a example

The autocomplete works calculating the Levenshtein Distance from what teh user typed and the avaliable options.
Is not working perfect because I dont have a real API, so it is just a small demo, showing some good practices,
like hilight of the work, misspeling tolerance

I didnt have time to enable the keyboard control, but in a real case, I think we should add some options to navigate in the options

The search works hiting enter or clicking the button, because is binded on the form submit.

Another point of interest is I added in teh same component the schema for google, using JSON/LD

Below the input I added some small hints for the user, in case he dont have any idea how to search.

This suggestions are based in the data, just counting the most common words, removing some not useful like 'the, with', etc

Clicking on this wrods will fill the form, not make the search, because the idea is guide the user to a proper search, instead of make the search for him.


After the search is submited, the URL is pudated with a friendly slug and in the enw page we have the same search box,
with the words provided and a message about the number of results.

Because the time, I didnt cerated the zero results message, with some behavior to help the user.

The resuls are simple, because I dont have images or something like this, so I focused in small things like, hilight, missepeling corrections (try search for germam instead of german or reichtag instead of reichstag)


The code is just a demo, not working perfect, but I think is a good overview of I write JS, CSS, code organisation and UX concerns.




