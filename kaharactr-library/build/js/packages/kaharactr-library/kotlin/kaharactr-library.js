(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kaharactr-library'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kaharactr-library'.");
    }
    root['kaharactr-library'] = factory(typeof this['kaharactr-library'] === 'undefined' ? {} : this['kaharactr-library'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  function addition(left, right) {
    return left + right | 0;
  }
  function sayHelloKotlinConf() {
    return trimIndent('\n' + '    Hello KotlinConf, Kotlin/Multiplatform is awesome!' + '\n' + '    We are running on ' + platformName() + '\n' + '    ');
  }
  function platformName() {
    return 'JavaScript';
  }
  var package$fr = _.fr || (_.fr = {});
  var package$hervedarritchon = package$fr.hervedarritchon || (package$fr.hervedarritchon = {});
  var package$products = package$hervedarritchon.products || (package$hervedarritchon.products = {});
  var package$kaharactr = package$products.kaharactr || (package$products.kaharactr = {});
  package$kaharactr.addition_vux9f0$ = addition;
  package$kaharactr.sayHelloKotlinConf = sayHelloKotlinConf;
  package$kaharactr.platformName = platformName;
  Kotlin.defineModule('kaharactr-library', _);
  return _;
}));

//# sourceMappingURL=kaharactr-library.js.map
