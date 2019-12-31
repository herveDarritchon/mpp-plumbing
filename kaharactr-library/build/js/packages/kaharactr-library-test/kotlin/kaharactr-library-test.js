(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kaharactr-library', 'kotlin-test'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kaharactr-library'), require('kotlin-test'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kaharactr-library-test'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kaharactr-library-test'.");
    }
    if (typeof this['kaharactr-library'] === 'undefined') {
      throw new Error("Error loading module 'kaharactr-library-test'. Its dependency 'kaharactr-library' was not found. Please, check whether 'kaharactr-library' is loaded prior to 'kaharactr-library-test'.");
    }
    if (typeof this['kotlin-test'] === 'undefined') {
      throw new Error("Error loading module 'kaharactr-library-test'. Its dependency 'kotlin-test' was not found. Please, check whether 'kotlin-test' is loaded prior to 'kaharactr-library-test'.");
    }
    root['kaharactr-library-test'] = factory(typeof this['kaharactr-library-test'] === 'undefined' ? {} : this['kaharactr-library-test'], kotlin, this['kaharactr-library'], this['kotlin-test']);
  }
}(this, function (_, Kotlin, $module$kaharactr_library, $module$kotlin_test) {
  'use strict';
  var addition = $module$kaharactr_library.fr.hervedarritchon.products.kaharactr.addition_vux9f0$;
  var assertEquals = $module$kotlin_test.kotlin.test.assertEquals_3m0tl5$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var test = $module$kotlin_test.kotlin.test.test;
  var suite = $module$kotlin_test.kotlin.test.suite;
  var sayHelloKotlinConf = $module$kaharactr_library.fr.hervedarritchon.products.kaharactr.sayHelloKotlinConf;
  var lines = Kotlin.kotlin.text.lines_gw00vp$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  function FunctionsTest() {
  }
  FunctionsTest.prototype.should_add_2_positive_Int_together = function () {
    assertEquals(5, addition(2, 3));
  };
  FunctionsTest.prototype.should_add_a_positive_and_a_negative_Int_together = function () {
    assertEquals(-1, addition(2, -3));
  };
  FunctionsTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FunctionsTest',
    interfaces: []
  };
  function SayHelloKotlinConfTest() {
  }
  SayHelloKotlinConfTest.prototype.should_say_hello_to_kotlin_conf = function () {
    assertEquals('Hello KotlinConf, Kotlin/Multiplatform is awesome!', first(lines(sayHelloKotlinConf())));
  };
  SayHelloKotlinConfTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SayHelloKotlinConfTest',
    interfaces: []
  };
  function SayHelloKotlinConfJsTest() {
  }
  SayHelloKotlinConfJsTest.prototype.testSayHelloJs = function () {
    assertEquals('We are running on JavaScript', last(lines(sayHelloKotlinConf())));
  };
  SayHelloKotlinConfJsTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SayHelloKotlinConfJsTest',
    interfaces: []
  };
  var package$fr = _.fr || (_.fr = {});
  var package$hervedarritchon = package$fr.hervedarritchon || (package$fr.hervedarritchon = {});
  var package$products = package$hervedarritchon.products || (package$hervedarritchon.products = {});
  var package$kaharactr = package$products.kaharactr || (package$products.kaharactr = {});
  package$kaharactr.FunctionsTest = FunctionsTest;
  package$kaharactr.SayHelloKotlinConfTest = SayHelloKotlinConfTest;
  package$kaharactr.SayHelloKotlinConfJsTest = SayHelloKotlinConfJsTest;
  suite('fr.hervedarritchon.products.kaharactr', false, function () {
    suite('FunctionsTest', false, function () {
      test('should_add_2_positive_Int_together', false, function () {
        return (new FunctionsTest()).should_add_2_positive_Int_together();
      });
      test('should_add_a_positive_and_a_negative_Int_together', false, function () {
        return (new FunctionsTest()).should_add_a_positive_and_a_negative_Int_together();
      });
    });
    suite('SayHelloKotlinConfTest', false, function () {
      test('should_say_hello_to_kotlin_conf', false, function () {
        return (new SayHelloKotlinConfTest()).should_say_hello_to_kotlin_conf();
      });
    });
    suite('SayHelloKotlinConfJsTest', false, function () {
      test('testSayHelloJs', false, function () {
        return (new SayHelloKotlinConfJsTest()).testSayHelloJs();
      });
    });
  });
  Kotlin.defineModule('kaharactr-library-test', _);
  return _;
}));

//# sourceMappingURL=kaharactr-library-test.js.map
