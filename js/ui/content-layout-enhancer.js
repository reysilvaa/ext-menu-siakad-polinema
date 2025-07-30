// Content Layout Enhancement Module
const contentLayoutEnhancer = {
    
    // Initialize content layout adjustments
    init() {
        this.adjustMainLayout();
        this.enhancePortlets();
        this.enhanceTables();
        this.enhanceModals();
        this.addResponsiveHandling();
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
    }
};

// Make contentLayoutEnhancer available globally
window.contentLayoutEnhancer = contentLayoutEnhancer;
