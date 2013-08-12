describe('Signin validator directive tests', function () {


  // Steps:

  // Step 1: Just the describe line

  // Step 2: Add before each with module, inject expect

  var expect = chai.expect;


  beforeEach(function () {
    module('testangular');
  });

  // Step 3: Create the html text
  var html = '<form signin-validator><input type="text" ng-model="username">';

  // Step 3-1: Scope creation and compile

  var scope;

  beforeEach(inject(function($rootScope, $compile) {
    scope = $rootScope.$new();
    scope.valid = false;

    // Compile the HTML and link to the scope.
    var compiled = $compile(html);
    compiled(scope);
  }));


  // Step 4: mark the form as invalid if nothing inserted

  describe('Invalid Email', function() {

    it('Should be invalid if nothing entered', function() {

      // Run the digest loop to allow the hooks to catch the changes
      scope.$digest();

      expect(scope.valid).to.be.false;
    });


    // Step 5: Add additional test
    it('Should be invalid if username isn\'t an email', function() {

      scope.username = "test";

      // Run the digest loop to allow the hooks to catch the changes
      scope.$digest();

      expect(scope.valid).to.be.false;
    });
  });


  // Step 6: Add tests for valid email

  describe('Valid email', function() {

    it('Should be valid if email entered', function() {

      scope.username = "sheldon@bigpanda.io";

      scope.$digest();

      expect(scope.valid).to.be.true;
    });
  });

});