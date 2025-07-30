// Content Layout Enhancement Module
const contentLayoutEnhancer = {
    
    // Initialize content layout adjustments
    init() {
        this.adjustMainLayout();
        this.enhancePortlets();
        this.enhanceTables();
        this.enhanceModals();
        this.addResponsiveHandling();
        this.applyDarkModeToAllContent();

        // Re-apply dark mode when content changes
        this.observeContentChanges();
    },
    
    // Adjust main page layout for navbar and sidebar
    adjustMainLayout() {
        // Adjust page container for compact sidebar
        const pageContainer = document.querySelector('.page-container');
        if (pageContainer) {
            pageContainer.style.marginLeft = '240px';
            pageContainer.style.paddingTop = '0';
            pageContainer.style.transition = 'margin-left 0.3s ease';
        }
        
        // Adjust page content wrapper
        const pageContentWrapper = document.querySelector('.page-content-wrapper');
        if (pageContentWrapper) {
            pageContentWrapper.style.marginLeft = '0';
        }
        
        // Adjust page content for compact navbar
        const pageContent = document.querySelector('.page-content');
        if (pageContent) {
            pageContent.style.marginLeft = '0';
            pageContent.style.padding = '15px';
            pageContent.style.minHeight = 'calc(100vh - 55px)';
        }
        
        // Hide original sidebar
        const originalSidebar = document.querySelector('.page-sidebar-wrapper');
        if (originalSidebar) {
            originalSidebar.style.display = 'none';
        }
    },
    
    // Enhance portlet containers
    enhancePortlets() {
        const portlets = document.querySelectorAll('.portlet');
        
        portlets.forEach(portlet => {
            // Add enhanced styling
            portlet.style.background = COLOR_PALETTE.functional.surface;
            portlet.style.border = `1px solid ${COLOR_PALETTE.functional.border}`;
            portlet.style.borderRadius = '8px';
            portlet.style.boxShadow = `0 2px 8px ${COLOR_PALETTE.functional.shadow}`;
            portlet.style.marginBottom = '20px';
            portlet.style.overflow = 'hidden';
            
            // Enhance portlet title
            const portletTitle = portlet.querySelector('.portlet-title');
            if (portletTitle) {
                portletTitle.style.background = COLOR_PALETTE.gradients.primary;
                portletTitle.style.color = COLOR_PALETTE.primary.contrast;
                portletTitle.style.padding = '15px 20px';
                portletTitle.style.borderRadius = '8px 8px 0 0';
                portletTitle.style.borderBottom = 'none';
                portletTitle.style.margin = '0';
                
                // Enhance caption
                const caption = portletTitle.querySelector('.caption');
                if (caption) {
                    caption.style.color = COLOR_PALETTE.primary.contrast;
                    caption.style.fontWeight = '600';
                    caption.style.fontSize = '16px';
                    caption.style.display = 'flex';
                    caption.style.alignItems = 'center';
                    caption.style.gap = '10px';
                }
            }
            
            // Enhance portlet body
            const portletBody = portlet.querySelector('.portlet-body');
            if (portletBody) {
                portletBody.style.padding = '20px';
                portletBody.style.background = COLOR_PALETTE.functional.surface;
            }
        });
    },
    
    // Enhance table styling
    enhanceTables() {
        const tables = document.querySelectorAll('.table');
        
        tables.forEach(table => {
            // Table container styling
            table.style.background = COLOR_PALETTE.functional.surface;
            table.style.borderRadius = '6px';
            table.style.overflow = 'hidden';
            table.style.boxShadow = `0 1px 3px ${COLOR_PALETTE.functional.shadow}`;
            table.style.border = 'none';
            table.style.marginBottom = '0';
            
            // Header styling
            const headers = table.querySelectorAll('thead th');
            headers.forEach(th => {
                th.style.background = COLOR_PALETTE.primary.light;
                th.style.color = COLOR_PALETTE.primary.contrast;
                th.style.border = 'none';
                th.style.padding = '12px 15px';
                th.style.fontWeight = '600';
                th.style.fontSize = '14px';
                th.style.textTransform = 'uppercase';
                th.style.letterSpacing = '0.5px';
            });
            
            // Body cell styling
            const cells = table.querySelectorAll('tbody td');
            cells.forEach(td => {
                td.style.padding = '12px 15px';
                td.style.borderBottom = `1px solid ${COLOR_PALETTE.functional.border}`;
                td.style.verticalAlign = 'middle';
                td.style.fontSize = '14px';
                td.style.color = COLOR_PALETTE.neutral.black;
            });
            
            // Row hover effects
            const rows = table.querySelectorAll('tbody tr');
            rows.forEach(row => {
                row.style.transition = 'all 0.2s ease';
                
                row.addEventListener('mouseenter', () => {
                    row.style.background = COLOR_PALETTE.alpha.secondary[10];
                    row.style.transform = 'translateY(-1px)';
                    row.style.boxShadow = `0 2px 8px ${COLOR_PALETTE.functional.shadow}`;
                });
                
                row.addEventListener('mouseleave', () => {
                    row.style.background = '';
                    row.style.transform = '';
                    row.style.boxShadow = '';
                });
                
                // Enhanced clickable rows
                if (row.classList.contains('clickable-row')) {
                    row.style.cursor = 'pointer';
                    
                    row.addEventListener('mouseenter', () => {
                        row.style.background = COLOR_PALETTE.alpha.secondary[20];
                        row.style.color = COLOR_PALETTE.secondary.dark;
                    });
                }
            });
        });
    },
    
    // Enhance modal styling
    enhanceModals() {
        const modals = document.querySelectorAll('.modal');
        
        modals.forEach(modal => {
            const modalContent = modal.querySelector('.modal-content');
            if (modalContent) {
                modalContent.style.borderRadius = '12px';
                modalContent.style.border = 'none';
                modalContent.style.boxShadow = `0 10px 30px ${COLOR_PALETTE.alpha.primary[30]}`;
            }
            
            const modalHeader = modal.querySelector('.modal-header');
            if (modalHeader) {
                modalHeader.style.background = COLOR_PALETTE.gradients.primary;
                modalHeader.style.color = COLOR_PALETTE.primary.contrast;
                modalHeader.style.borderRadius = '12px 12px 0 0';
                modalHeader.style.borderBottom = 'none';
                modalHeader.style.padding = '20px';
                
                const modalTitle = modalHeader.querySelector('.modal-title');
                if (modalTitle) {
                    modalTitle.style.color = COLOR_PALETTE.primary.contrast;
                    modalTitle.style.fontWeight = '600';
                }
            }
            
            const modalBody = modal.querySelector('.modal-body');
            if (modalBody) {
                modalBody.style.padding = '20px';
                modalBody.style.background = COLOR_PALETTE.functional.surface;
            }
            
            const modalFooter = modal.querySelector('.modal-footer');
            if (modalFooter) {
                modalFooter.style.background = COLOR_PALETTE.neutral.light;
                modalFooter.style.borderTop = `1px solid ${COLOR_PALETTE.functional.border}`;
                modalFooter.style.borderRadius = '0 0 12px 12px';
                modalFooter.style.padding = '15px 20px';
            }
        });
    },
    
    // Add responsive handling
    addResponsiveHandling() {
        const handleResize = () => {
            const pageContainer = document.querySelector('.page-container');
            if (!pageContainer) return;
            
            if (window.innerWidth <= 768) {
                // Mobile layout
                pageContainer.style.marginLeft = '0';

                // Show mobile menu button if sidebar is enhanced
                const enhancedSidebar = document.querySelector('.enhanced-sidebar');
                if (enhancedSidebar) {
                    enhancedSidebar.style.transform = 'translateX(-100%)';

                    // Create mobile menu button if not exists
                    if (!document.querySelector('.mobile-menu-btn')) {
                        const mobileBtn = utils.createEl('button', 'mobile-menu-btn');
                        mobileBtn.innerHTML = '<i class="fa fa-bars"></i>';
                        mobileBtn.style.position = 'fixed';
                        mobileBtn.style.top = '10px';
                        mobileBtn.style.left = '10px';
                        mobileBtn.style.zIndex = '1002';
                        mobileBtn.style.background = COLOR_PALETTE.secondary.main;
                        mobileBtn.style.color = COLOR_PALETTE.secondary.contrast;
                        mobileBtn.style.border = 'none';
                        mobileBtn.style.borderRadius = '50%';
                        mobileBtn.style.width = '40px';
                        mobileBtn.style.height = '40px';
                        mobileBtn.style.fontSize = '16px';
                        mobileBtn.style.cursor = 'pointer';
                        mobileBtn.style.boxShadow = `0 2px 8px ${COLOR_PALETTE.functional.shadow}`;

                        mobileBtn.addEventListener('click', () => {
                            enhancedSidebar.style.transform =
                                enhancedSidebar.style.transform === 'translateX(0px)' ?
                                'translateX(-100%)' : 'translateX(0px)';
                        });

                        document.body.appendChild(mobileBtn);
                    }
                }
            } else {
                // Desktop layout with compact sidebar
                pageContainer.style.marginLeft = '240px';
                
                const enhancedSidebar = document.querySelector('.enhanced-sidebar');
                if (enhancedSidebar) {
                    enhancedSidebar.style.transform = 'translateX(0px)';
                }
                
                // Remove mobile menu button
                const mobileBtn = document.querySelector('.mobile-menu-btn');
                if (mobileBtn) {
                    mobileBtn.remove();
                }
            }
        };
        
        // Initial call
        handleResize();
        
        // Listen for resize events
        window.addEventListener('resize', handleResize);
    },
    
    // Toggle between enhanced and original layout
    toggleLayout() {
        const pageContainer = document.querySelector('.page-container');
        const originalSidebar = document.querySelector('.page-sidebar-wrapper');
        const enhancedSidebar = document.querySelector('.enhanced-sidebar');
        
        if (pageContainer.style.marginLeft === '240px') {
            // Switch to original layout
            pageContainer.style.marginLeft = '235px'; // Original sidebar width
            if (originalSidebar) originalSidebar.style.display = 'block';
            if (enhancedSidebar) enhancedSidebar.style.display = 'none';
        } else {
            // Switch to enhanced layout
            pageContainer.style.marginLeft = '240px';
            if (originalSidebar) originalSidebar.style.display = 'none';
            if (enhancedSidebar) enhancedSidebar.style.display = 'block';
        }
    },

    // Apply comprehensive dark mode to all content
    applyDarkModeToAllContent() {
        // Apply to all tables
        this.applyDarkModeToTables();

        // Apply to all text elements
        this.applyDarkModeToText();

        // Apply to all form elements
        this.applyDarkModeToForms();

        // Apply to all other elements
        this.applyDarkModeToMiscElements();

        // Catch-all for any remaining elements
        this.applyCatchAllDarkMode();
    },

    applyDarkModeToTables() {
        const tables = document.querySelectorAll('table, .table, .table_data');

        tables.forEach(table => {
            // Table container
            table.style.background = '#1a1a1a';
            table.style.border = '1px solid #404040';
            table.style.borderRadius = '8px';
            table.style.overflow = 'hidden';
            table.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.5)';

            // Table headers
            const headers = table.querySelectorAll('thead th, thead td');
            headers.forEach(header => {
                header.style.background = '#2d2d2d';
                header.style.color = '#ffffff';
                header.style.border = 'none';
                header.style.padding = '12px 15px';
                header.style.fontWeight = '600';
            });

            // Table body cells
            const cells = table.querySelectorAll('tbody td, tbody th');
            cells.forEach(cell => {
                cell.style.background = '#1a1a1a';
                cell.style.color = '#e5e5e5';
                cell.style.padding = '12px 15px';
                cell.style.borderBottom = '1px solid #404040';
                cell.style.borderLeft = 'none';
                cell.style.borderRight = 'none';
                cell.style.borderTop = 'none';
            });

            // Table rows
            const rows = table.querySelectorAll('tbody tr');
            rows.forEach((row, index) => {
                row.style.background = index % 2 === 0 ? '#1a1a1a' : '#2d2d2d';

                // Add hover effect
                row.addEventListener('mouseenter', () => {
                    row.style.background = '#3a3a3a';
                });

                row.addEventListener('mouseleave', () => {
                    row.style.background = index % 2 === 0 ? '#1a1a1a' : '#2d2d2d';
                });
            });
        });
    },

    applyDarkModeToText() {
        // Page content containers
        const contentContainers = document.querySelectorAll('.page-content, #portlet-sub-page-body, .portlet-body');
        contentContainers.forEach(container => {
            container.style.background = '#0f0f0f';
            container.style.color = '#e5e5e5';
        });

        // All text elements
        const textElements = document.querySelectorAll('p, span, div, td, th, li');
        textElements.forEach(element => {
            if (element.style.color === '' || element.style.color === 'inherit') {
                element.style.color = '#e5e5e5';
            }
        });

        // Headings
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6, .page-title');
        headings.forEach(heading => {
            heading.style.color = '#ffffff';
        });

        // Links
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            link.style.color = '#3b82f6';
        });
    },

    applyDarkModeToForms() {
        const formElements = document.querySelectorAll('input, textarea, select');
        formElements.forEach(element => {
            element.style.background = '#2d2d2d';
            element.style.color = '#ffffff';
            element.style.border = '1px solid #404040';
            element.style.borderRadius = '8px';
        });

        const buttons = document.querySelectorAll('button, .btn');
        buttons.forEach(button => {
            button.style.background = '#3b82f6';
            button.style.color = '#ffffff';
            button.style.border = '1px solid #3b82f6';
            button.style.borderRadius = '8px';
        });
    },

    applyDarkModeToMiscElements() {
        // Alerts
        const alerts = document.querySelectorAll('.alert');
        alerts.forEach(alert => {
            alert.style.background = '#2d2d2d';
            alert.style.color = '#ffffff';
            alert.style.border = '1px solid #404040';
        });

        // Breadcrumbs
        const breadcrumbs = document.querySelectorAll('.breadcrumb, .page-breadcrumb');
        breadcrumbs.forEach(breadcrumb => {
            breadcrumb.style.background = 'transparent';
            const items = breadcrumb.querySelectorAll('li, a');
            items.forEach(item => {
                if (item.tagName === 'A') {
                    item.style.color = '#3b82f6';
                } else {
                    item.style.color = '#a3a3a3';
                }
            });
        });

        // Announcements
        const announcements = document.querySelectorAll('.announcement, .announcement-item');
        announcements.forEach(announcement => {
            announcement.style.background = '#2d2d2d';
            announcement.style.border = '1px solid #404040';
            announcement.style.borderRadius = '8px';
            announcement.style.padding = '15px';
            announcement.style.marginBottom = '10px';
            announcement.style.borderLeft = '4px solid #f59e0b';
        });

        // Announcement titles
        const announcementTitles = document.querySelectorAll('.announcement-title');
        announcementTitles.forEach(title => {
            title.style.color = '#ffffff';
            title.style.fontWeight = '600';
            title.style.marginBottom = '5px';
        });

        // Announcement dates
        const announcementDates = document.querySelectorAll('.announcement-date');
        announcementDates.forEach(date => {
            date.style.color = '#f59e0b';
            date.style.fontWeight = '600';
            date.style.marginBottom = '5px';
        });

        // Announcement content
        const announcementContents = document.querySelectorAll('.announcement-content');
        announcementContents.forEach(content => {
            content.style.color = '#e5e5e5';
        });
    },

    // Catch-all function to apply dark mode to any remaining elements
    applyCatchAllDarkMode() {
        // Get all elements in the page content
        const pageContent = document.querySelector('.page-content') || document.querySelector('#portlet-sub-page-body') || document.body;

        if (pageContent) {
            // Find all elements with light backgrounds or default colors
            const allElements = pageContent.querySelectorAll('*');

            allElements.forEach(element => {
                const computedStyle = window.getComputedStyle(element);
                const backgroundColor = computedStyle.backgroundColor;
                const color = computedStyle.color;

                // Check for light backgrounds and apply dark mode
                if (backgroundColor === 'rgb(255, 255, 255)' ||
                    backgroundColor === 'white' ||
                    backgroundColor === '#ffffff' ||
                    backgroundColor === '#f9f9f9' ||
                    backgroundColor === 'rgb(249, 249, 249)') {
                    element.style.background = '#1a1a1a';
                }

                // Check for dark text on potentially light backgrounds
                if (color === 'rgb(0, 0, 0)' ||
                    color === 'black' ||
                    color === '#000000' ||
                    color === '#333' ||
                    color === 'rgb(51, 51, 51)' ||
                    color === '#666' ||
                    color === 'rgb(102, 102, 102)') {
                    element.style.color = '#e5e5e5';
                }

                // Special handling for specific classes that commonly have visibility issues
                if (element.classList.contains('announcement-title') ||
                    element.classList.contains('announcement-date') ||
                    element.classList.contains('announcement-content')) {

                    if (element.classList.contains('announcement-title')) {
                        element.style.color = '#ffffff';
                        element.style.fontWeight = '600';
                    } else if (element.classList.contains('announcement-date')) {
                        element.style.color = '#f59e0b';
                        element.style.fontWeight = '600';
                    } else if (element.classList.contains('announcement-content')) {
                        element.style.color = '#e5e5e5';
                    }
                }

                // Handle any div or span that might contain text
                if ((element.tagName === 'DIV' || element.tagName === 'SPAN') &&
                    element.textContent.trim() &&
                    !element.querySelector('*')) {
                    // This is a text-only element
                    if (!element.style.color || element.style.color === 'inherit') {
                        element.style.color = '#e5e5e5';
                    }
                }
            });
        }

        // Force style specific problematic elements
        this.forceStyleProblematicElements();
    },

    // Force styling on elements that are commonly problematic
    forceStyleProblematicElements() {
        // Target announcement elements specifically
        const announcementSelectors = [
            '.announcement-item',
            '.announcement-title',
            '.announcement-date',
            '.announcement-content'
        ];

        announcementSelectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                if (selector === '.announcement-item') {
                    element.style.setProperty('background', '#2d2d2d', 'important');
                    element.style.setProperty('border', '1px solid #404040', 'important');
                    element.style.setProperty('border-left', '4px solid #f59e0b', 'important');
                    element.style.setProperty('border-radius', '8px', 'important');
                    element.style.setProperty('padding', '15px', 'important');
                } else if (selector === '.announcement-title') {
                    element.style.setProperty('color', '#ffffff', 'important');
                    element.style.setProperty('font-weight', '600', 'important');
                } else if (selector === '.announcement-date') {
                    element.style.setProperty('color', '#f59e0b', 'important');
                    element.style.setProperty('font-weight', '600', 'important');
                } else if (selector === '.announcement-content') {
                    element.style.setProperty('color', '#e5e5e5', 'important');
                }
            });
        });

        // Also target any remaining text elements that might be invisible
        const textElements = document.querySelectorAll('p, span, div, td, th, li, label');
        textElements.forEach(element => {
            const computedStyle = window.getComputedStyle(element);
            if (computedStyle.color === 'rgb(255, 255, 255)' &&
                (computedStyle.backgroundColor === 'rgb(255, 255, 255)' ||
                 computedStyle.backgroundColor === 'rgba(0, 0, 0, 0)')) {
                element.style.setProperty('color', '#e5e5e5', 'important');
            }
        });
    },

    // Observe content changes and reapply dark mode
    observeContentChanges() {
        const observer = new MutationObserver((mutations) => {
            let shouldReapply = false;

            mutations.forEach((mutation) => {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            shouldReapply = true;
                        }
                    });
                }
            });

            if (shouldReapply) {
                setTimeout(() => {
                    this.applyDarkModeToAllContent();
                }, 100);
            }
        });

        // Observe the main content area
        const mainContent = document.querySelector('.page-content') || document.body;
        if (mainContent) {
            observer.observe(mainContent, {
                childList: true,
                subtree: true
            });
        }
    }
};

// Make contentLayoutEnhancer available globally
window.contentLayoutEnhancer = contentLayoutEnhancer;
