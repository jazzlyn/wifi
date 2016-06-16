(function () {
  'use strict';
  var sidebar = document.getElementById('sidebar');
  var sidebarHandle = document.getElementById('sidebarHandle');
  sidebarHandle.addEventListener('click', function (e) {
    sidebar.classList.toggle('open');
  });
}());
