var Dialog = require('dialog');
var Tabs = require('tabs');

module.exports = function(options){
  options = options || {};
  var show = options.show || true;
  options.show = false;

  var modal = new Dialog(options);

  modal.on('show', function(){
    var tabs = new Tabs({
      el: modal.el.find('.js-tabs')
    });
  });

  if(show === true) {
    modal.show();
  }

  return modal;
};