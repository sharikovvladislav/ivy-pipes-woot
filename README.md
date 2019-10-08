#### Repro

- Execute `git clone git@github.com:sharikovvladislav/ivy-pipes-woot.git` (or use https url `https://github.com/sharikovvladislav/ivy-pipes-woot.git`)
- Go to the created directory (`ivy-pipes-woot` by default)
- Execute `npm i` command and install dependencies
- Execute `ng serve --open` command (`@angular/cli` must be installed)
- Open the developer console of your browser

Actual result:
```
Error: Can't resolve all parameters for SomePipe: (?).
    at getUndecoratedInjectableFactory (vendor.js:23977)
    at injectableDefOrInjectorDefFactory (vendor.js:23961)
    at providerToFactory (vendor.js:24027)
    at providerToRecord (vendor.js:24007)
    at R3Injector.processProvider (vendor.js:23867)
    at vendor.js:23846
    at vendor.js:9750
    at Array.forEach (<anonymous>)
    at deepForEach (vendor.js:9750)
    at R3Injector.processInjectorType
```
