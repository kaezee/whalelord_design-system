// COMPASS DESIGN SYSTEM - NAVIGATION
// Include this script on every page for consistent sidebar navigation

document.addEventListener('DOMContentLoaded', function() {
    // Create and inject sidebar HTML
    const sidebarHTML = `
        <aside class="sidenav">
            <div class="sidenav-section">
                <div class="sidenav-section-title">Getting Started</div>
                <a href="index.html" class="sidenav-item">Overview</a>
                <a href="installation.html" class="sidenav-item">Installation</a>
            </div>

            <div class="sidenav-section">
                <div class="sidenav-section-title">Foundation</div>
                <a href="colors.html" class="sidenav-item">Colors</a>
                <a href="typography.html" class="sidenav-item">Typography</a>
                <a href="spacing.html" class="sidenav-item">Spacing</a>
                <a href="icons.html" class="sidenav-item">Icons</a>
            </div>

            <div class="sidenav-section">
                <div class="sidenav-section-title">Components</div>
                
                <button class="sidenav-collapsible" onclick="toggleSidebarMenu(this)">
                    <span>Buttons</span>
                    <svg class="sidenav-collapsible-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
                <div class="sidenav-submenu">
                    <a href="buttons.html#primary" class="sidenav-subitem">Primary</a>
                    <a href="buttons.html#light" class="sidenav-subitem">Light Fluid</a>
                    <a href="buttons.html#tertiary" class="sidenav-subitem">Tertiary</a>
                    <a href="buttons.html#states" class="sidenav-subitem">States</a>
                </div>

                <button class="sidenav-collapsible" onclick="toggleSidebarMenu(this)">
                    <span>Form Elements</span>
                    <svg class="sidenav-collapsible-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
                <div class="sidenav-submenu">
                    <a href="forms.html#inputs" class="sidenav-subitem">Text Inputs</a>
                    <a href="forms.html#textarea" class="sidenav-subitem">Textarea</a>
                    <a href="forms.html#select" class="sidenav-subitem">Select</a>
                    <a href="forms.html#checkbox" class="sidenav-subitem">Checkbox</a>
                </div>

                <a href="badges.html" class="sidenav-item">Badges</a>

                <button class="sidenav-collapsible" onclick="toggleSidebarMenu(this)">
                    <span>Cards</span>
                    <svg class="sidenav-collapsible-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
                <div class="sidenav-submenu">
                    <a href="cards.html#basic" class="sidenav-subitem">Basic Cards</a>
                    <a href="cards.html#image" class="sidenav-subitem">With Image</a>
                    <a href="cards.html#icon" class="sidenav-subitem">With Icon</a>
                </div>

                <a href="accordion.html" class="sidenav-item">Accordion</a>
                <a href="stepper.html" class="sidenav-item">Stepper</a>
                <a href="snackbar.html" class="sidenav-item">Snackbar</a>
                <a href="chips.html" class="sidenav-item">Chips</a>
            </div>

            <div class="sidenav-section">
                <div class="sidenav-section-title">Patterns</div>
                <a href="product-cards.html" class="sidenav-item">Product Cards</a>
                <a href="navigation-patterns.html" class="sidenav-item">Navigation</a>
                <a href="form-patterns.html" class="sidenav-item">Forms</a>
                <a href="data-tables.html" class="sidenav-item">Data Tables</a>
            </div>
        </aside>
    `;

    // Insert sidebar before main content
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.insertAdjacentHTML('beforebegin', sidebarHTML);
        
        // Set active states based on current page
        highlightActivePage();
    }
});

// Toggle submenu function
function toggleSidebarMenu(button) {
    button.classList.toggle('expanded');
}

// Highlight active page and expand its parent section
function highlightActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const currentHash = window.location.hash;
    
    // Find and activate matching links
    document.querySelectorAll('.sidenav-item, .sidenav-subitem').forEach(link => {
        const linkHref = link.getAttribute('href');
        if (!linkHref) return;
        
        const [linkPage, linkHash] = linkHref.split('#');
        
        // Check if this is the active page
        if (linkPage === currentPage || linkPage === `./${currentPage}`) {
            // If there's a hash, match it exactly
            if (currentHash && linkHash) {
                if (`#${linkHash}` === currentHash) {
                    link.classList.add('active');
                }
            } else if (!linkHash) {
                // No hash in link, activate if page matches
                link.classList.add('active');
            }
            
            // Expand parent collapsible if this is a subitem
            if (link.classList.contains('sidenav-subitem')) {
                const collapsible = link.parentElement.previousElementSibling;
                if (collapsible && collapsible.classList.contains('sidenav-collapsible')) {
                    collapsible.classList.add('expanded');
                }
            }
        }
    });
}
