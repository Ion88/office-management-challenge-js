'use strict'

describe('Office', function() {
  var office;


  beforeEach(function() {
    office = new Office();
  });

  it('office has no rooms by default', function() {
    expect(office.room()).toEqual([]);
  });

  it('can add rooms to office', function() {
    office.addRooms('Tree');
    expect(office.room()).toEqual(['Tree']);
  });
});
