// Navbar Enhancement Module
const navbarEnhancer = {
    
    // Enhanced navbar configuration
    navbarConfig: {
        quickActions: [
            {
                icon: 'fa-bell',
                title: 'Notifikasi',
                badge: '3',
                action: () => console.log('Notifications clicked')
            },
            {
                icon: 'fa-calendar',
                title: 'Jadwal Hari Ini',
                action: () => window.location.href = CONFIG.baseUrl + '/mahasiswa/jadwal/index'
            },
            {
                icon: 'fa-graduation-cap',
                title: 'Nilai',
                action: () => window.location.href = CONFIG.baseUrl + '/mahasiswa/akademik/index'
            }
        ]
    },

    // Create enhanced navbar
    createEnhancedNavbar() {
        const navbar = document.querySelector('.page-header.navbar');
        if (!navbar) return;

        // Check if enhanced navbar already exists to prevent duplicates
        if (document.querySelector('.enhanced-navbar')) return;

        // Hide original navbar
        navbar.style.display = 'none';

        // Create enhanced navbar
        const enhancedNavbar = utils.createEl('div', 'enhanced-navbar');

        // Create navbar content
        const navbarContent = this.createNavbarContent();
        enhancedNavbar.appendChild(navbarContent);

        // Insert enhanced navbar
        navbar.parentNode.insertBefore(enhancedNavbar, navbar);

        // Add toggle functionality
        this.addNavbarToggle(navbar, enhancedNavbar);
    },

    createNavbarContent() {
        const content = utils.createEl('div', 'navbar-content');
        
        // Left section - Logo and brand
        const leftSection = this.createLeftSection();
        content.appendChild(leftSection);
        
        // Center section - Quick actions
        const centerSection = this.createCenterSection();
        content.appendChild(centerSection);
        
        // Right section - User info and actions
        const rightSection = this.createRightSection();
        content.appendChild(rightSection);
        
        return content;
    },

    createLeftSection() {
        const section = utils.createEl('div', 'navbar-left');
        
        // Logo container
        const logoContainer = utils.createEl('div', 'logo-container');
        
        const logo = utils.createEl('img', 'enhanced-logo');
        logo.src = 'https://siakad.polinema.ac.id/assets/admin/layout/img/header2.png';
        logo.alt = 'SIAKAD Polinema';
        
        // const brandText = utils.createEl('div', 'brand-text');
        // brandText.appendChild(utils.createEl('div', 'brand-title', 'SIAKAD'));
        // brandText.appendChild(utils.createEl('div', 'brand-subtitle', 'Polinema'));
        
        logoContainer.appendChild(logo);
        // logoContainer.appendChild(brandText);
        section.appendChild(logoContainer);
        
        return section;
    },

    createCenterSection() {
        const section = utils.createEl('div', 'navbar-center');
        
        // Quick actions
        const quickActions = utils.createEl('div', 'quick-actions');
        
        this.navbarConfig.quickActions.forEach(action => {
            const actionBtn = utils.createEl('button', 'quick-action-btn');
            actionBtn.title = action.title;
            
            const icon = utils.createEl('i', `fa ${action.icon}`);
            actionBtn.appendChild(icon);
            
            if (action.badge) {
                const badge = utils.createEl('span', 'action-badge', action.badge);
                actionBtn.appendChild(badge);
            }
            
            actionBtn.addEventListener('click', action.action);
            quickActions.appendChild(actionBtn);
        });
        
        section.appendChild(quickActions);
        return section;
    },

    createRightSection() {
        const section = utils.createEl('div', 'navbar-right');
        
        // Get user info from original navbar
        const originalUserInfo = this.extractUserInfo();
        
        // Messages dropdown
        const messagesBtn = this.createMessagesButton();
        section.appendChild(messagesBtn);
        
        // User dropdown
        const userDropdown = this.createUserDropdown(originalUserInfo);
        section.appendChild(userDropdown);
        
        return section;
    },

    extractUserInfo() {
        const usernameEl = document.querySelector('.username');
        const userImageEl = document.querySelector('.dropdown-user img');
        
        return {
            name: usernameEl ? usernameEl.textContent.trim() : 'User',
            image: userImageEl ? userImageEl.src : '',
            id: usernameEl ? usernameEl.textContent.split('/')[0].trim() : ''
        };
    },

    createMessagesButton() {
        const messagesBtn = utils.createEl('div', 'messages-btn');
        
        const icon = utils.createEl('i', 'fa fa-envelope');
        const badge = utils.createEl('span', 'message-badge', '0');
        
        messagesBtn.appendChild(icon);
        messagesBtn.appendChild(badge);
        
        messagesBtn.addEventListener('click', () => {
            // Handle messages click
            console.log('Messages clicked');
        });
        
        return messagesBtn;
    },

    createUserDropdown(userInfo) {
        const dropdown = utils.createEl('div', 'user-dropdown');
        
        // User trigger
        const userTrigger = utils.createEl('div', 'user-trigger');
        
        if (userInfo.image) {
            const userImage = utils.createEl('img', 'user-image');
            userImage.src = userInfo.image;
            userImage.alt = 'User Photo';
            userTrigger.appendChild(userImage);
        }
        
        const userInfo_div = utils.createEl('div', 'user-info');
        userInfo_div.appendChild(utils.createEl('div', 'user-name', userInfo.name));
        userInfo_div.appendChild(utils.createEl('div', 'user-id', userInfo.id));
        
        const dropdownIcon = utils.createEl('i', 'fa fa-chevron-down dropdown-icon');
        
        userTrigger.appendChild(userInfo_div);
        userTrigger.appendChild(dropdownIcon);
        
        // Dropdown menu
        const dropdownMenu = utils.createEl('div', 'dropdown-menu');
        
        const changePasswordItem = utils.createEl('div', 'dropdown-item');
        changePasswordItem.innerHTML = '<i class="fa fa-key"></i> Change Password';
        changePasswordItem.addEventListener('click', () => {
            if (typeof changePasswordClick === 'function') {
                changePasswordClick();
            }
        });
        
        const logoutItem = utils.createEl('div', 'dropdown-item');
        logoutItem.innerHTML = '<i class="fa fa-sign-out"></i> Log Out';
        logoutItem.addEventListener('click', () => {
            window.location.href = 'https://siakad.polinema.ac.id/login/logout';
        });
        
        dropdownMenu.appendChild(changePasswordItem);
        dropdownMenu.appendChild(logoutItem);
        
        // Toggle dropdown
        userTrigger.addEventListener('click', () => {
            dropdownMenu.classList.toggle('show');
            dropdownIcon.classList.toggle('fa-chevron-down');
            dropdownIcon.classList.toggle('fa-chevron-up');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                dropdownMenu.classList.remove('show');
                dropdownIcon.classList.add('fa-chevron-down');
                dropdownIcon.classList.remove('fa-chevron-up');
            }
        });
        
        dropdown.appendChild(userTrigger);
        dropdown.appendChild(dropdownMenu);
        
        return dropdown;
    },

    addNavbarToggle(originalNavbar, enhancedNavbar) {
        const toggleBtn = utils.createEl('button', 'navbar-toggle-btn');
        toggleBtn.innerHTML = '<i class="fa fa-refresh"></i>';
        toggleBtn.title = 'Toggle Navbar Style';
        
        toggleBtn.addEventListener('click', () => {
            if (originalNavbar.style.display === 'none') {
                originalNavbar.style.display = 'block';
                enhancedNavbar.style.display = 'none';
            } else {
                originalNavbar.style.display = 'none';
                enhancedNavbar.style.display = 'block';
            }
        });
        
        enhancedNavbar.appendChild(toggleBtn);
    },

    // Initialize navbar enhancement
    init() {
        // Wait for page to load
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(() => this.createEnhancedNavbar(), 500);
            });
        } else {
            setTimeout(() => this.createEnhancedNavbar(), 500);
        }
    }
};

// Make navbarEnhancer available globally
window.navbarEnhancer = navbarEnhancer;
