(function (Drupal) {
  /**
   * This script manages user interaction for daisyUI theme switching.
   *
   * Functionality:
   * - Syncs visual UI state (checkboxes/radios) with the active `data-theme`.
   * - Handles persistence via `localStorage`.
   * - Supports Toggles (Override vs Default) and Setters (Specific Theme).
   */
  
  Drupal.behaviors.themeControllerDaisyUI = {
    attach: function (context, settings) {
      // Avoid double-initialization on the same context if possible, 
      // but we need to run syncThemeUI globally at least once.
      // We use a distinct class or marker on the document to ensure global sync only happens once per page load/interaction if needed,
      // but simple idempotency is better.
      
      const storageKey = 'theme';
      const docEl = document.documentElement;

      // --- 1. Synchronization Logic ---
      // Updates all theme controllers to match the active theme.
      // the data-theme value currently stored in the browser's LocalStorage is the single source of truth.
      // For example if there is the same widget in the footer of every page
      // then the widget will correctly reflect the current theme state.
      // However if the user uses an aqua-valentine widget on page 1
      // and a lemonade-cyberpunk widget on page 2, the theme applied
      // to the page will be correct but the value shown by the widget
      // will be out of sync because a lemonade-cyberpunk widget cannot display
      // a value for valentine. 
      function syncThemeUI(activeTheme) {
        // We search the entire document to ensure all instances (header, footer, content) update together.
        
        // A. Sync Toggles [data-toggle-theme]
        const togglers = document.querySelectorAll('[data-toggle-theme]');
        togglers.forEach(el => {
          const toggleTheme = el.getAttribute('data-toggle-theme');
          if (el.tagName === 'INPUT' && (el.type === 'checkbox' || el.type === 'radio')) {
            // Check if the active theme matches this toggle's override theme.
            el.checked = (activeTheme === toggleTheme);
          }
        });

        // B. Sync Setters [data-set-theme]
        const setters = document.querySelectorAll('[data-set-theme], .theme-controller');
        setters.forEach(el => {
          const setTheme = el.getAttribute('data-set-theme') || el.value;
          if (el.tagName === 'INPUT' && el.type === 'radio') {
            const isMatch = Boolean(activeTheme && activeTheme === setTheme);
            el.checked = isMatch;
          }
        });

        // C. Sync 'toggle-custom-colors' local variants
        const customColorToggles = document.querySelectorAll('.mytheme-controller input[type="checkbox"].toggle');
        customColorToggles.forEach(inputEl => {
           const labelEl = inputEl.closest('.mytheme-controller');
           if(labelEl) {
               // This variant relies on its own internal state logic usually, 
               // but if we wanted to strictly sync it to global state we could. 
               // However, the existing logic treats it as a local overrides. 
               // We will leave it loosely coupled as per original design unless it controls global theme.
               // Original design: data-toggle-theme is present on these inputs too, so 'Step A' handles the Checked state!
               // We just need to ensure the visual 'local' theme attribute is updated.
               
               // If Step A checked it, we should apply the local theme attribute.
               const localTheme = inputEl.checked ? labelEl.dataset.localThemeChecked : labelEl.dataset.localThemeUnchecked;
               if (localTheme) {
                   inputEl.setAttribute('data-theme', localTheme);
               } else {
                   inputEl.removeAttribute('data-theme');
               }
           }
        });
      }

      // --- 2. Event Handlers ---

      // Handler for Toggles [data-toggle-theme]
      const themeTogglers = context.querySelectorAll('[data-toggle-theme]');
      themeTogglers.forEach(el => {
        if (el.dataset.themeListenerAttached) return;
        el.dataset.themeListenerAttached = 'true';

        // Use 'change' for inputs, 'click' fallback for others
        const eventType = (el.tagName === 'INPUT') ? 'change' : 'click';

        el.addEventListener(eventType, function() {
          const overrideTheme = this.getAttribute('data-toggle-theme');
          const currentTheme = docEl.getAttribute('data-theme');
          
          // Logic: If we are currently ON the override theme, turn it OFF (Default).
          // Otherwise, turn it ON.
          // This simplifies the logic and fixes the "Reload Bug".
          
          let newTheme = null;
          
          if (currentTheme === overrideTheme) {
             // Turn Off -> Revert to Default (null)
             newTheme = null;
          } else {
             // Turn On -> Set Override
             newTheme = overrideTheme;
          }

          updateTheme(newTheme);
        });
      });

      // Handler for Setters [data-set-theme]
      const themeSetters = context.querySelectorAll('[data-set-theme], .theme-controller');
      themeSetters.forEach(el => {
        if (el.dataset.themeListenerAttached) return;
        el.dataset.themeListenerAttached = 'true';

        const eventType = (el.tagName === 'INPUT') ? 'change' : 'click';

        el.addEventListener(eventType, function() {
          const themeName = this.getAttribute('data-set-theme') || this.value;
          // For radios, if we click one that is already active, it stays active.
          // If we click a new one, the browser updates checked state, and we update the theme.
          updateTheme(themeName);
        });
      });

      // Handler for Reset [data-theme-reset]
      const themeResetters = context.querySelectorAll('[data-theme-reset]');
      themeResetters.forEach(el => {
        if (el.dataset.themeResetListenerAttached) return;
        el.dataset.themeResetListenerAttached = 'true';

        el.addEventListener('click', function(e) {
          e.preventDefault();
          updateTheme(null);
        });
      });

      // --- 3. Core Update Function ---
      function updateTheme(newTheme) {
        if (newTheme && newTheme !== 'default') {
          docEl.setAttribute('data-theme', newTheme);
          localStorage.setItem(storageKey, newTheme);
          console.log('Theme updated:', newTheme);
          syncThemeUI(newTheme);
        } else {
          // Resetting to default.
          // Check if we have a stored server-side default.
          const originalTheme = docEl.getAttribute('data-drupal-original-theme');
          if (originalTheme) {
            docEl.setAttribute('data-theme', originalTheme);
          } else {
            docEl.removeAttribute('data-theme');
          }
          
          localStorage.removeItem(storageKey);
          console.log('Theme reset to default');
          syncThemeUI(originalTheme || null);
        }
      }

      // --- 4. Initial Sync on Load ---
      // Get current state (from HTML attribute which was set by head script, or fallback to localStorage)
      const currentActiveTheme = docEl.getAttribute('data-theme');
      syncThemeUI(currentActiveTheme);
      
    }
  };
})(Drupal);
