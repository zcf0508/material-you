

var colorPicker = function () {
  var res = app.showColorPicker();
  if (res) {
    return app.foregroundColor.rgb.hexValue;
  } else {
    return null;
  }
};

var setColor = function (color) {
  var resColor = color;
  if (color[0] == "#") {
    resColor = color.substring(1, color.length);
  }
  app.foregroundColor.rgb.hexValue = resColor;
};
