'use strict'

class Office {
  constructor() {
    this.rooms = [];
  }

  room() {
    return this.rooms;
  }

  addRooms(room) {
    this.rooms.push(room);
  }

  availableRooms() {
    return this.rooms.filter(room => room.isRoomAvailable() === true);
  }
}
