(function(){

  angular.module('osierMedia')
    .component('contactForm', {
      templateUrl: './components/contact-form/contact-form.html',
      controller: [contactFormController],
      controllerAs: 'contactFormCtrl'
    }
  );

  //lfdnfkjsndkfndfkjsn

  function contactFormController() {
    var contactFormCtrl = this;

    contactFormCtrl.submit = submit;

    contactFormCtrl.$onInit = function() {

    };

    function submit() {
      contactFormCtrl.showErrors = true;

      if(contactFormCtrl.contactForm.$valid) {
        contactFormCtrl.submitSuccessful = true;
      }
    }

  }
}());
