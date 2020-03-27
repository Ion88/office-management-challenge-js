'use strict'

class MeetingRoom {
  constructor(roomName) {
    this.available = true
    this.roomName = roomName
  }

  isRoomAvailable() {
    return this.available;
  }

  enterRoom() {
    if(!this.available) {
  throw new Error('Error! You already enter this room');
  }
    return this.available = false;
  }

  leaveRoom() {
    return this.available = true;
  }
}
