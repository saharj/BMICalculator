// an example karma.conf.js
module.exports = function(config) {
  config.set({
    files: [ 
    'bower_components/angular/angular.js', 
    'bower_components/angular-animate/angular-animate.js', 
    'bower_components/angular-aria/angular-aria.js',
    'bower_components/angular-material/angular-material.js',
    'test/controller.test.js',
    'js/bmi.js'], 
    browsers: ['Chrome'],
    frameworks: ['jasmine']
  });
};