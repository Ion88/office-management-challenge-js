'use strict'

describe('Office', function() {
  var office;
  var meetingroom1;
  var meetingroom2;

  beforeEach(function() {
    office = new Office();

  });

  it('office has no rooms by default', function() {
    expect(office.room()).toEqual([]);
  });

  it('can add rooms to office', function() {
    meetingroom1 = new MeetingRoom('Sky');
    office.addRooms(meetingroom1);
    expect(office.room()).toEqual([meetingroom1]);
  });

  it('can see a list of available rooms', function() {
    meetingroom1 = new MeetingRoom('Sky');
    meetingroom2 = new MeetingRoom('Moon');
    meetingroom2.enterRoom();
    office.addRooms(meetingroom1);
    office.addRooms(meetingroom2);
    expect(office.availableRooms()).toEqual([meetingroom1])
  });
});
