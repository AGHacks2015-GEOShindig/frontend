'use strict';

describe('Service: springService', function () {

  // load the service's module
  beforeEach(module('frontendApp'));

  // instantiate service
  var springService;
  beforeEach(inject(function (_springService_) {
    springService = _springService_;
  }));

  it('should do something', function () {
    expect(!!springService).toBe(true);
  });

});
