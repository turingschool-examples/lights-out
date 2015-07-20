function Light() {
  this.active = false;
};

Light.prototype.switch = function () {
  this.active = !this.active;
  return this;
}

module.exports = Light;
