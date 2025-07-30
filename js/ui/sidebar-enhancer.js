// Sidebar Enhancement Module
const sidebarEnhancer = {
    
    // Enhanced sidebar configuration
    sidebarConfig: {
        quickAccess: [
            {
                title: 'Jadwal Hari Ini',
                icon: 'fa-calendar-check-o',
                url: '/mahasiswa/jadwal/index',
                colorKey: 'jadwal',
                description: 'Lihat jadwal kuliah hari ini'
            },
            {
                title: 'Nilai Terbaru',
                icon: 'fa-graduation-cap',
                url: '/mahasiswa/akademik/index',
                colorKey: 'nilai',
                description: 'Cek nilai dan transkrip'
            },
            {
                title: 'Status UKT',
                icon: 'fa-credit-card',
                url: '/mahasiswa/pembayaran/index/gm/ukt',
                colorKey: 'ukt',
                description: 'Status pembayaran UKT'
            },
            {
                title: 'Presensi',
                icon: 'fa-check-square-o',
                url: '/mahasiswa/presensi/index',
                colorKey: 'presensi',
                description: 'Data kehadiran kuliah'
            }
        ],
        
        menuCategories: {
            'General': {
                icon: 'fa-user',
                color: '#607D8B',
                items: [
                    { title: 'Biodata', url: '/mahasiswa/biodata/index/gm/general' },
                    { title: 'KTM Virtual', url: '/mahasiswa/ktm_virtual/index/gm/general' },
                    { title: 'Verifikasi Data', url: '/mahasiswa/tr_validasi_mhs/index/gm/general' }
                ]
            },
            'Akademik': {
                icon: 'fa-university',
                color: '#2196F3',
                items: [
                    { title: 'KRS', url: '/mahasiswa/krs/index' },
                    { title: 'Jadwal', url: '/mahasiswa/jadwal/index' },
                    { title: 'Nilai', url: '/mahasiswa/akademik/index' },
                    { title: 'LMS', url: '/mahasiswa/slc/index' },
                    { title: 'Presensi', url: '/mahasiswa/presensi/index' }
                ]
            },
            'Keuangan': {
                icon: 'fa-money',
                color: '#4CAF50',
                items: [
                    { title: 'Pembayaran UKT', url: '/mahasiswa/pembayaran/index/gm/ukt' },
                    { title: 'Keringanan UKT', url: '/mahasiswa/tr_keringanan_ukt/index/gm/ukt' }
                ]
            },
            'Administrasi': {
                icon: 'fa-envelope-o',
                color: '#FF5722',
                items: [
                    { title: 'Permintaan Surat', url: '/mahasiswa/persuratan/index/gm/surat-sp-%26-sp-kuesioner' },
                    { title: 'Riwayat Surat', url: '/mahasiswa/riwayat_surat/index/gm/surat-sp-%26-sp-kuesioner' },
                    { title: 'Kuesioner', url: '/mahasiswa/kuesioner/index/gm/surat-sp-%26-sp-kuesioner' }
                ]
            }
        }
    },

    // Create enhanced sidebar
    createEnhancedSidebar() {
        const sidebar = document.querySelector('.page-sidebar-wrapper');
        if (!sidebar) return;

        // Check if enhanced sidebar already exists to prevent duplicates
        if (document.querySelector('.enhanced-sidebar')) return;

        // Create enhanced sidebar container
        const enhancedSidebar = utils.createEl('div', 'enhanced-sidebar');
        
        // Add quick access section
        const quickAccessSection = this.createQuickAccessSection();
        enhancedSidebar.appendChild(quickAccessSection);
        
        // Add search functionality
        const searchSection = this.createSearchSection();
        enhancedSidebar.appendChild(searchSection);
        
        // Add categorized menu
        const categorizedMenu = this.createCategorizedMenu();
        enhancedSidebar.appendChild(categorizedMenu);
        
        // Add recent activities
        const recentSection = this.createRecentSection();
        enhancedSidebar.appendChild(recentSection);
        
        // Insert enhanced sidebar before original
        sidebar.parentNode.insertBefore(enhancedSidebar, sidebar);
        
        // Hide original sidebar initially
        sidebar.style.display = 'none';
        
        // Add toggle functionality
        this.addToggleFunctionality(sidebar, enhancedSidebar);
    },

    createQuickAccessSection() {
        const section = utils.createEl('div', 'quick-access-section');
        const title = utils.createEl('h3', 'section-title', 'Akses Cepat');
        section.appendChild(title);
        
        const grid = utils.createEl('div', 'quick-access-grid');
        
        this.sidebarConfig.quickAccess.forEach(item => {
            const card = utils.createEl('div', 'quick-access-card');

            // Get color from universal palette
            const color = COLOR_PALETTE.menuItems[item.colorKey] || COLOR_PALETTE.secondary.main;
            card.style.borderLeft = `4px solid ${color}`;

            const icon = utils.createEl('i', `fa ${item.icon} quick-icon`);
            icon.style.color = color;
            
            const content = utils.createEl('div', 'card-content');
            content.appendChild(utils.createEl('div', 'card-title', item.title));
            content.appendChild(utils.createEl('div', 'card-desc', item.description));
            
            card.appendChild(icon);
            card.appendChild(content);
            
            card.addEventListener('click', () => {
                window.location.href = CONFIG.baseUrl + item.url;
            });
            
            grid.appendChild(card);
        });
        
        section.appendChild(grid);
        return section;
    },

    createSearchSection() {
        const section = utils.createEl('div', 'search-section');
        
        const searchContainer = utils.createEl('div', 'search-container');
        const searchInput = utils.createEl('input', 'search-input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Cari menu...';
        
        const searchIcon = utils.createEl('i', 'fa fa-search search-icon');
        
        searchContainer.appendChild(searchInput);
        searchContainer.appendChild(searchIcon);
        section.appendChild(searchContainer);
        
        // Add search functionality
        searchInput.addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });
        
        return section;
    },

    createCategorizedMenu() {
        const section = utils.createEl('div', 'categorized-menu-section');
        const title = utils.createEl('h3', 'section-title', 'Menu Kategori');
        section.appendChild(title);
        
        Object.entries(this.sidebarConfig.menuCategories).forEach(([categoryName, category]) => {
            const categoryCard = utils.createEl('div', 'category-card');
            
            const header = utils.createEl('div', 'category-header');
            header.style.backgroundColor = category.color;
            
            const icon = utils.createEl('i', `fa ${category.icon}`);
            const name = utils.createEl('span', 'category-name', categoryName);
            const toggle = utils.createEl('i', 'fa fa-chevron-down category-toggle');
            
            header.appendChild(icon);
            header.appendChild(name);
            header.appendChild(toggle);
            
            const itemsList = utils.createEl('div', 'category-items');
            category.items.forEach(item => {
                const itemEl = utils.createEl('div', 'category-item');
                itemEl.textContent = item.title;
                itemEl.addEventListener('click', () => {
                    window.location.href = CONFIG.baseUrl + item.url;
                });
                itemsList.appendChild(itemEl);
            });
            
            // Toggle functionality
            header.addEventListener('click', () => {
                itemsList.classList.toggle('expanded');
                toggle.classList.toggle('fa-chevron-down');
                toggle.classList.toggle('fa-chevron-up');
            });
            
            categoryCard.appendChild(header);
            categoryCard.appendChild(itemsList);
            section.appendChild(categoryCard);
        });
        
        return section;
    },

    createRecentSection() {
        const section = utils.createEl('div', 'recent-section');
        const title = utils.createEl('h3', 'section-title', 'Terakhir Dikunjungi');
        section.appendChild(title);

        const recentList = utils.createEl('div', 'recent-list');

        // Get recent items from localStorage (show up to 8 items since sidebar is scrollable)
        const recentItems = this.getRecentItems().slice(0, 8);

        if (recentItems.length === 0) {
            const emptyMsg = utils.createEl('div', 'empty-recent', 'Belum ada aktivitas terbaru');
            recentList.appendChild(emptyMsg);
        } else {
            recentItems.forEach((item, index) => {
                const recentItem = utils.createEl('div', 'recent-item');

                // Truncate long titles to prevent overflow
                const truncatedTitle = item.title.length > 25 ?
                    item.title.substring(0, 25) + '...' : item.title;

                const titleEl = utils.createEl('div', 'recent-title', truncatedTitle);
                titleEl.title = item.title; // Show full title on hover

                const timeEl = utils.createEl('div', 'recent-time', item.time);

                recentItem.appendChild(titleEl);
                recentItem.appendChild(timeEl);

                recentItem.addEventListener('click', () => {
                    window.location.href = item.url;
                });

                // Add animation delay for staggered appearance
                recentItem.style.animationDelay = `${index * 0.1}s`;

                recentList.appendChild(recentItem);
            });
        }

        section.appendChild(recentList);
        return section;
    },

    addToggleFunctionality(originalSidebar, enhancedSidebar) {
        const toggleBtn = utils.createEl('button', 'sidebar-toggle-btn', 'Menu Klasik');
        toggleBtn.addEventListener('click', () => {
            if (originalSidebar.style.display === 'none') {
                originalSidebar.style.display = 'block';
                enhancedSidebar.style.display = 'none';
                toggleBtn.textContent = 'Menu Enhanced';
            } else {
                originalSidebar.style.display = 'none';
                enhancedSidebar.style.display = 'block';
                toggleBtn.textContent = 'Menu Klasik';
            }
        });
        
        enhancedSidebar.appendChild(toggleBtn);
    },

    handleSearch(query) {
        const items = document.querySelectorAll('.category-item, .quick-access-card');
        
        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(query.toLowerCase())) {
                item.style.display = 'block';
                item.parentElement.classList.add('expanded');
            } else {
                item.style.display = query ? 'none' : 'block';
            }
        });
    },

    getRecentItems() {
        try {
            return JSON.parse(localStorage.getItem('siakad_recent_items') || '[]');
        } catch {
            return [];
        }
    },

    saveRecentItem(title, url) {
        const recentItems = this.getRecentItems();
        const newItem = {
            title,
            url,
            time: new Date().toLocaleString('id-ID')
        };
        
        // Remove if already exists
        const filtered = recentItems.filter(item => item.url !== url);
        
        // Add to beginning and limit to 10 items (store more since sidebar is scrollable)
        filtered.unshift(newItem);
        const limited = filtered.slice(0, 10);
        
        localStorage.setItem('siakad_recent_items', JSON.stringify(limited));
    },

    // Initialize sidebar enhancement
    init() {
        // Wait for page to load
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(() => this.createEnhancedSidebar(), 1000);
            });
        } else {
            setTimeout(() => this.createEnhancedSidebar(), 1000);
        }
        
        // Track page visits for recent items
        this.trackPageVisit();
    },

    trackPageVisit() {
        const currentUrl = window.location.href;
        const pageTitle = document.title;
        
        // Save current page as recent item
        if (currentUrl.includes('siakad.polinema.ac.id') && !currentUrl.includes('/beranda')) {
            this.saveRecentItem(pageTitle, currentUrl);
        }
    }
};

// Make sidebarEnhancer available globally
window.sidebarEnhancer = sidebarEnhancer;
