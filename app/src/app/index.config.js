(function() {
  'use strict';

  angular
    .config(configTranslation)
    .config(configCompilerProvider)
    .config(configFlowFactoryProvider);


  /** @ngInject */
  function configTranslation ($translateProvider){
    $translateProvider.useUrlLoader('http://localhost:8080/messageBundle');
    $translateProvider.useStorage('UrlLanguageStorage');
    $translateProvider.preferredLanguage('en');
    $translateProvider.fallbackLanguage('en');
  }

  function configFlowFactoryProvider (flowFactoryProvider){
    flowFactoryProvider.defaults = {
      target:'',
      permanentErrors: [500,501],
      maxChunkRetries: 1,
      chunkRetryInterval: 5000,
      simultaneousUploads: 4,
      singleFile: false
    };
    flowFactoryProvider.on('catchAll', function (event) {
      console.log('catchAll', arguments);
    });

  }

  /**@ngInject */
  function configCompilerProvider ($compileProvider){
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|chrome-extension):/);

    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|local|data):/);
  }
})();
