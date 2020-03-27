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
}
