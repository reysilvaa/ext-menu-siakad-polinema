(function () {
    'use strict';

    // Check if all required modules are loaded
    function checkModulesLoaded() {
        const requiredModules = ['CONFIG', 'utils', 'dataFetchers', 'uiBuilders', 'injectStyles'];
        const missingModules = requiredModules.filter(module => !window[module]);

        if (missingModules.length > 0) {
            console.error('Missing modules:', missingModules);
            return false;
        }
        return true;
    }

    // Check if all required modules are loaded
    function checkModulesLoaded() {
        const requiredModules = ['CONFIG', 'utils', 'dataFetchers', 'uiBuilders', 'injectStyles'];
        const missingModules = requiredModules.filter(module => !window[module]);

        if (missingModules.length > 0) {
            console.error('Missing modules:', missingModules);
            return false;
        }
        return true;
    }

    // Main UI creation function
    async function createNewUI() {
        // Only run enhanced homepage on beranda
        if (!window.location.href.includes('siakad.polinema.ac.id/beranda')) return;

        console.log("Creating enhanced UI for SIAKAD Polinema");

        // Wait for modules to load
        if (!checkModulesLoaded()) {
            console.log("Modules not ready, retrying in 100ms...");
            setTimeout(createNewUI, 100);
            return;
        }

        console.log("Creating enhanced UI for SIAKAD Polinema");

        // Wait for modules to load
        if (!checkModulesLoaded()) {
            console.log("Modules not ready, retrying in 100ms...");
            setTimeout(createNewUI, 100);
            return;
        }

        try {
            // Get student data
            const studentName = document.querySelector(CONFIG.selectors.studentName)?.textContent.trim() || 'Mahasiswa';
            const studentId = document.querySelector(CONFIG.selectors.studentId)?.textContent.trim().split(' / ')[0] || '';

            // Fetch all data
            const [scheduleData, paymentData, attendanceData] = await Promise.all([
                dataFetchers.getScheduleData(),
                dataFetchers.getPaymentData(),
                dataFetchers.getAttendanceData()
            ]);

            // Create main container
            const container = utils.createEl('div', 'enhanced-siakad');

            // Create header
            const header = utils.createEl('div', 'enhanced-header');
            const headerTitle = utils.createEl('h1', '', 'SIAKAD Polinema');
            const studentInfo = utils.createEl('div', 'student-info');
            studentInfo.appendChild(utils.createEl('div', 'student-name', studentName));
            studentInfo.appendChild(utils.createEl('div', 'student-id', studentId));
            header.appendChild(headerTitle);
            header.appendChild(studentInfo);
            container.appendChild(header);

            // Create menu section
            const menuContainer = utils.createEl('div', 'menu-container');
            menuContainer.appendChild(utils.createEl('h2', '', 'Menu Cepat'));
            const menuGrid = utils.createEl('div', 'menu-grid');
            CONFIG.menuItems.forEach(item => {
                menuGrid.appendChild(uiBuilders.createCard(item.icon, item.title, item.url, item.colorKey));
            });
            menuContainer.appendChild(menuGrid);
            container.appendChild(menuContainer);

            // Create main info section
            const mainInfoContainer = utils.createEl('div', 'main-info-container');
            mainInfoContainer.appendChild(uiBuilders.createTodaySchedule(scheduleData));
            mainInfoContainer.appendChild(uiBuilders.createAcademicInfo());
            container.appendChild(mainInfoContainer);

            // Create additional info section
            const additionalInfoContainer = utils.createEl('div', 'additional-info-container');
            additionalInfoContainer.appendChild(uiBuilders.createPaymentSummary(paymentData));
            additionalInfoContainer.appendChild(uiBuilders.createAttendanceSummary(attendanceData));
            container.appendChild(additionalInfoContainer);

            // Inject styles and replace page content
            injectStyles();
            const pageContent = document.querySelector(CONFIG.selectors.pageContent);
            if (pageContent) {
                pageContent.innerHTML = '';
                pageContent.appendChild(container);

                // Muat data presensi untuk semester terbaru setelah UI dibuat
                setTimeout(() => {
                    const semesterSelect = document.querySelector('#attendance-semester');
                    const attendanceContainer = document.querySelector('.attendance-container');
                    if (semesterSelect && semesterSelect.value && attendanceContainer) {
                        uiBuilders.loadAttendanceData(semesterSelect.value, attendanceContainer);
                    }
                }, 1000);
            }

        } catch (error) {
            console.error('Error creating UI:', error);
        }
    }

    // Initialize UI enhancements for all SIAKAD pages
    const initUIEnhancements = () => {
        if (window.location.href.includes('siakad.polinema.ac.id')) {

            // Initialize sidebar enhancement
            if (typeof sidebarEnhancer !== 'undefined' &&
                typeof injectSidebarStyles !== 'undefined') {
                injectSidebarStyles();
                sidebarEnhancer.init();
            }

            // Initialize navbar enhancement
            if (typeof navbarEnhancer !== 'undefined' &&
                typeof injectNavbarStyles !== 'undefined') {
                injectNavbarStyles();
                navbarEnhancer.init();
            }

            // Initialize content layout enhancement
            if (typeof contentLayoutEnhancer !== 'undefined') {
                setTimeout(() => {
                    contentLayoutEnhancer.init();
                }, 1500); // Wait a bit longer for content to load
            }
        }
    };

    // Initialize
    const init = () => {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(createNewUI, 500);
                setTimeout(initUIEnhancements, 1000);
            });
        } else {
            setTimeout(createNewUI, 500);
            setTimeout(initUIEnhancements, 1000);
        }
    };

    // Listen for messages from background script
    if (typeof chrome !== 'undefined' && chrome.runtime) {
        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
            if (request.action === 'pageLoaded') {
                setTimeout(createNewUI, 500);
            }
        });
    }

    init();
})();
