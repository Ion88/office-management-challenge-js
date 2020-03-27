'use strict'

describe('MeetingRoom', function() {
  var meetingroom;

  beforeEach(function() {
    meetingroom = new MeetingRoom('Flower');
  });

  it('checks if meeting room is available', function() {
    expect(meetingroom.isRoomAvailable()).toEqual(true);
  });

  describe('enter room', function() {
    it('raises an error if I try to use a room that has already been entered', function() {
      meetingroom.enterRoom();
      expect(function(){ meetingroom.enterRoom();}).toThrowError('Error! You already enter this room');
    });

    it('makes room unavailable when enter', function() {
      expect(meetingroom.enterRoom()).toEqual(false);
    });
  });


  it('makes room available agaim after leaving', function() {
    expect(meetingroom.leaveRoom()).toEqual(true);
  });
});
