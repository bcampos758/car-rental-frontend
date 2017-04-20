angular.module('velocity-nexus', ['ui.router', 'ngStorage'])
  .config(authConfig)
  .config(router)
  .factory('authInterceptor', authInterceptor)
  .factory('authTokenService', authTokenService)
  .factory('vehicleService', vehicleService)
  .factory('unitService', unitService)
  .controller('AuthController', AuthController)
  .controller('VehicleController', VehicleController)
  .controller('ReservationController', ReservationController)
  .controller('UserController', UserController)
  .controller('MainController', MainController)
  .run(function($rootScope){
    $rootScope.$on('$stateChangeSuccess', function(){
      $('select').material_select();

      $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year
        format: 'mm-dd-yyyy', //date format
        min: new Date(), //prevent being able to select a past date
      });

      $(".dropdown-button").dropdown();
    })
  });

// NOTE: if times allows refactor all services and controller into ES6 classes

// NOTE: look into jasmine or mocha for unit testing

// NOTE: add pesimistic locking or find_with_lock to backend when checking availability - NOT OPTIONAL

// NOTE: fix bug with browse.html sorting checkboxes

// NOTE: fix bug when refreshig the page signs user out

// NOTE: fix bug page refresh on reservation page logs out user and losses data, use $window.history to resolve

// NOTE: fix bug on logout search form datepicker input is not cleared

// NOTE: make diagrams showing sequence diagram, class model, and code snippets for each use case

// NOTE: add comments through code to explain use and purpose

// NOTE: fix review vehicle table size

// NOTE: add better error handler for promises

// NOTE: look for random reservation number generator, if not use ruby faker gem

// NOTE: hide secret in .env file, backend

// NOTE:
