# Awesome Toolbox

This project is a pure javascript project and is used to build some tools for myself. 

It use [angular-cli-ghpages](https://medium.com/tech-insights/how-to-deploy-angular-apps-to-github-pages-gh-pages-896c4e10f9b4) to publish to [Github Pages](https://pages.github.com/)

# Build
Extract localize files:
```bash
ng extract-i18n --output-path src/locale
```
Followig command build and publish the static files:
```bash
ng build --localize --base-href /awesome/ && cp .github/index.html dist/awesome/

# this command will create a branch named "gh-pages" contains the finally static files, these files will be published if Github Pages setting is correct.
npx angular-cli-ghpages --dir=dist/awesome
```

# Visit
After that, you can visit [https://recaton.github.io/awesome/](https://recaton.github.io/awesome/) to see the new changes.

# Reference
* [i18n](https://phrase.com/blog/posts/angular-localization-i18n/#How_do_I_work_with_plurals_in_my_translations)