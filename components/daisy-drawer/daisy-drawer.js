(function (Drupal, once) {
  'use strict';

  Drupal.behaviors.daisyDrawer = {
    attach: function (context) {
      once('daisy-drawer', '[data-daisy-drawer]', context).forEach(function (drawer) {
        const toggle = drawer.querySelector('.drawer-toggle');
        if (!toggle) return;

        const triggers = drawer.querySelectorAll('.swap');
        function syncSwap() {
          triggers.forEach(function (trigger) {
            trigger.classList.toggle('swap-active', toggle.checked);
          });
        }

        toggle.addEventListener('change', syncSwap);

        // Close when clicking links inside the drawer.
        const links = drawer.querySelectorAll('.drawer-side a');
        links.forEach(function (link) {
          link.addEventListener('click', function () {
            toggle.checked = false;
            syncSwap();
          });
        });

        // Close on Escape key press.
        document.addEventListener('keydown', function (e) {
          if (e.key === 'Escape' && toggle.checked) {
            toggle.checked = false;
            syncSwap();
          }
        });
      });
    }
  };
})(Drupal, once);
