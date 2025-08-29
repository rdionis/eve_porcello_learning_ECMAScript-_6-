let attendance = {
  _list: [],
  set addName(name) {
    this._list.push(name);
  },

  get list() {
    return this._list.join(", ");
  },
};

attendance.addName = "Joanne Starr";
console.log(attendance.list);

attendance.addName = "Bill Benkelmann";
attendance.addName = "Charlie Charlson";

console.log(attendance.list);
