(function () {
    'use strict';

    // Configuration object for easy maintenance
    const CONFIG = {
        baseUrl: 'https://siakad.polinema.ac.id',
        selectors: {
            scheduleTable: '#mytable',
            paymentTable: '.table_data',
            attendanceDiv: '#scrDataPresensiPerSemester',
            semesterSelect: '#idThnSem',
            studentName: '.username',
            studentId: '.page-title',
            pageContent: '#portlet-sub-page-body'
        },
        endpoints: {
            schedule: '/mahasiswa/jadwal/index',
            payment: '/mahasiswa/pembayaran/index/gm/ukt',
            attendance: '/mahasiswa/presensi/load_DataPresensiPerSemester/',
            presensi: '/mahasiswa/presensi/index'
        },
        menuItems: [
            { icon: 'fa-calendar', title: 'Jadwal', url: '/mahasiswa/jadwal/index', color: '#4CAF50' },
            { icon: 'fa-file-text', title: 'KRS', url: '/mahasiswa/krs/index', color: '#2196F3' },
            { icon: 'fa-graduation-cap', title: 'Nilai', url: '/mahasiswa/akademik/index', color: '#FF9800' },
            { icon: 'fa-money', title: 'UKT', url: '/mahasiswa/pembayaran/index/gm/ukt', color: '#9C27B0' },
            { icon: 'fa-user', title: 'Biodata', url: '/mahasiswa/biodata/index/gm/general', color: '#607D8B' },
            { icon: 'fa-book', title: 'LMS', url: '/mahasiswa/slc/index', color: '#E91E63' },
            { icon: 'fa-check-square-o', title: 'Presensi', url: '/mahasiswa/presensi/index', color: '#009688' },
            { icon: 'fa-envelope-o', title: 'Surat', url: '/mahasiswa/persuratan/index/gm/surat-sp-%26-sp-kuesioner', color: '#795548' }
        ],
        // defaultSemesters: [
        //     { value: 'MsTh202501002', text: '2024/2025 Genap' },
        //     { value: 'MsTh202403001', text: '2024/2025 Ganjil' },
        //     { value: 'MsTh202401001', text: '2023/2024 Genap' },
        //     { value: '20231', text: '2023/2024 Ganjil' },
        //     { value: '20222', text: '2022/2023 Genap' },
        //     { value: 'MsTh202204001', text: '2022/2023 Ganjil' }
        // ]
    };

    // Utility functions
    const utils = {
        createEl: (tag, className = '', text = '') => {
            const el = document.createElement(tag);
            if (className) el.className = className;
            if (text) el.textContent = text;
            return el;
        },

        fetchData: async (url, method = 'GET', data = null) => {
            try {
                const options = { method };
                if (data && method === 'POST') {
                    options.headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
                    options.body = data;
                }
                const response = await fetch(url, options);
                return response.ok ? response.text() : null;
            } catch (error) {
                console.error('Fetch error:', error);
                return null;
            }
        },

        parseTable: (tableSelector, dataExtractor) => {
            const table = document.querySelector(tableSelector);
            if (!table) return [];

            const rows = table.querySelectorAll('tbody tr');
            return Array.from(rows).map(dataExtractor).filter(Boolean);
        },

        getDayName: () => {
            const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
            return days[new Date().getDay()];
        }
    };

    // Data fetchers
    const dataFetchers = {
        async getScheduleData() {
            const extractScheduleRow = (row) => {
                const cells = row.querySelectorAll('td');
                if (cells.length < 9) return null;
                return {
                    day: cells[1].textContent.trim(),
                    time: cells[2].textContent.trim(),
                    code: cells[3].textContent.trim(),
                    course: cells[4].textContent.trim(),
                    lecturer: cells[5].textContent.trim()
                };
            };

            let scheduleData = utils.parseTable(CONFIG.selectors.scheduleTable, extractScheduleRow);

            if (scheduleData.length === 0) {
                const html = await utils.fetchData(CONFIG.baseUrl + CONFIG.endpoints.schedule);
                if (html) {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    const table = doc.querySelector(CONFIG.selectors.scheduleTable);
                    if (table) {
                        const rows = table.querySelectorAll('tbody tr');
                        scheduleData = Array.from(rows).map(extractScheduleRow).filter(Boolean);
                    }
                }
            }
            return scheduleData;
        },

        async getPaymentData() {
            const extractPaymentRow = (row) => {
                const cells = row.querySelectorAll('td');
                if (cells.length < 8) return null;
                return {
                    term: cells[1].textContent.trim(),
                    type: cells[2].textContent.trim(),
                    bill: cells[3].textContent.trim(),
                    paid: cells[4].textContent.trim(),
                    discount: cells[5].textContent.trim(),
                    obligation: cells[6].textContent.trim(),
                    status: cells[7].textContent.trim()
                };
            };

            let paymentData = utils.parseTable(CONFIG.selectors.paymentTable, extractPaymentRow);

            if (paymentData.length === 0) {
                const html = await utils.fetchData(CONFIG.baseUrl + CONFIG.endpoints.payment);
                if (html) {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    const table = doc.querySelector(CONFIG.selectors.paymentTable);
                    if (table) {
                        const rows = table.querySelectorAll('tbody tr');
                        paymentData = Array.from(rows).map(extractPaymentRow).filter(Boolean);
                    }
                }
            }
            return paymentData;
        },

        getAttendanceData() {
            const attendanceData = { alpha: 0, ijin: 0, sakit: 0, hadir: 0, courses: {} };
            const attendanceDiv = document.querySelector(CONFIG.selectors.attendanceDiv);

            if (!attendanceDiv) return attendanceData;

            const attendanceTable = attendanceDiv.querySelector('table');
            if (!attendanceTable) return attendanceData;

            const rows = attendanceTable.querySelectorAll('tbody tr');
            rows.forEach(row => {
                const cells = row.querySelectorAll('td');
                if (cells.length < 7) return;

                const courseName = cells[1].textContent.trim();
                const meeting = cells[2].textContent.trim();
                const date = cells[3].textContent.trim();
                const alpha = cells[4].textContent.trim();
                const ijin = cells[5].textContent.trim();
                const sakit = cells[6].textContent.trim();

                if (!attendanceData.courses[courseName]) {
                    attendanceData.courses[courseName] = {
                        alpha: 0, ijin: 0, sakit: 0, hadir: 0, meetings: []
                    };
                }

                attendanceData.courses[courseName].meetings.push({
                    meeting, date, alpha, ijin, sakit
                });

                const parseHours = (timeStr) => timeStr && timeStr !== "0:0" ? parseInt(timeStr.split(':')[0]) || 0 : 0;

                const alphaHours = parseHours(alpha);
                const ijinHours = parseHours(ijin);
                const sakitHours = parseHours(sakit);

                if (alphaHours > 0) {
                    attendanceData.alpha += alphaHours;
                    attendanceData.courses[courseName].alpha += alphaHours;
                } else if (ijinHours > 0) {
                    attendanceData.ijin += ijinHours;
                    attendanceData.courses[courseName].ijin += ijinHours;
                } else if (sakitHours > 0) {
                    attendanceData.sakit += sakitHours;
                    attendanceData.courses[courseName].sakit += sakitHours;
                } else {
                    attendanceData.hadir += 1;
                    attendanceData.courses[courseName].hadir += 1;
                }
            });

            return attendanceData;
        }
    };

    // UI Builders
    const uiBuilders = {
        createCard(icon, title, url, color) {
            const card = utils.createEl('div', 'menu-card');
            card.style.backgroundColor = color;

            const iconEl = utils.createEl('i', `fa ${icon}`);
            const titleEl = utils.createEl('div', 'card-title', title);

            card.appendChild(iconEl);
            card.appendChild(titleEl);

            card.addEventListener('click', () => window.location.href = CONFIG.baseUrl + url);
            return card;
        },

        createTodaySchedule(scheduleData) {
            const today = utils.getDayName();
            const todaySchedule = scheduleData.filter(item => item.day === today);

            const container = utils.createEl('div', 'schedule-container');
            const title = utils.createEl('h3', '', 'Jadwal Hari Ini');
            container.appendChild(title);

            if (todaySchedule.length === 0) {
                container.appendChild(utils.createEl('p', 'no-schedule', 'Tidak ada jadwal hari ini'));
                return container;
            }

            todaySchedule.forEach(item => {
                const scheduleItem = utils.createEl('div', 'schedule-item');
                scheduleItem.appendChild(utils.createEl('div', 'schedule-time', item.time));
                scheduleItem.appendChild(utils.createEl('div', 'schedule-course', item.course));
                scheduleItem.appendChild(utils.createEl('div', 'schedule-lecturer', item.lecturer));
                container.appendChild(scheduleItem);
            });

            return container;
        },

        createPaymentSummary(paymentData) {
            const container = utils.createEl('div', 'payment-container');
            const title = utils.createEl('h3', '', 'Riwayat Pembayaran Terakhir');
            container.appendChild(title);

            if (paymentData.length === 0) {
                container.appendChild(utils.createEl('p', 'no-payment', 'Tidak ada data pembayaran'));
            } else {
                const latestPayment = paymentData[paymentData.length - 1];
                const paymentItem = utils.createEl('div', 'payment-item');

                paymentItem.appendChild(utils.createEl('div', 'payment-term', latestPayment.term));
                paymentItem.appendChild(utils.createEl('div', 'payment-type', latestPayment.type));

                const statusClass = `payment-status ${latestPayment.status === 'LUNAS' ? 'paid' : 'unpaid'}`;
                paymentItem.appendChild(utils.createEl('div', statusClass, latestPayment.status));

                container.appendChild(paymentItem);
            }

            const viewAllBtn = utils.createEl('button', 'view-all-btn', 'Lihat Semua');
            viewAllBtn.addEventListener('click', () => window.location.href = CONFIG.baseUrl + CONFIG.endpoints.payment);
            container.appendChild(viewAllBtn);

            return container;
        },

        createAttendanceSummary(attendanceData) {
            const container = utils.createEl('div', 'attendance-container');
            const title = utils.createEl('h3', '', 'Ringkasan Presensi');
            container.appendChild(title);

            // Semester selector
            const semesterSelector = utils.createEl('div', 'semester-selector');
            const label = utils.createEl('label', '', 'Pilih Semester: ');
            label.setAttribute('for', 'attendance-semester');

            const select = document.createElement('select');
            select.id = 'attendance-semester';
            select.className = 'form-control';

            // Ambil opsi semester dari halaman asli atau gunakan default
            const originalSelect = document.querySelector(CONFIG.selectors.semesterSelect);
            if (originalSelect) {
                Array.from(originalSelect.querySelectorAll('option')).forEach(option => {
                    const newOption = document.createElement('option');
                    newOption.value = option.value;
                    newOption.textContent = option.textContent;
                    newOption.selected = option.selected;
                    select.appendChild(newOption);
                });
            } else {
                // Fallback jika tidak ada select asli
                CONFIG.defaultSemesters.forEach(semester => {
                    const option = document.createElement('option');
                    option.value = semester.value;
                    option.textContent = semester.text;
                    select.appendChild(option);
                });
            }

            // Tambahkan tombol filter seperti di halaman asli
            const filterBtn = utils.createEl('button', 'view-filter-btn', 'Filter');
            filterBtn.addEventListener('click', function () {
                const semesterId = select.value;
                if (semesterId) {
                    uiBuilders.loadAttendanceData(semesterId, container);
                }
            });

            // Memperbaiki event listener untuk menggunakan fungsi yang benar
            select.addEventListener('change', function (e) {
                // Tidak perlu memanggil loadAttendanceData di sini, biarkan user klik tombol filter
            });

            semesterSelector.appendChild(label);
            semesterSelector.appendChild(select);
            semesterSelector.appendChild(filterBtn);
            container.appendChild(semesterSelector);

            // Attendance grid
            const grid = this.createAttendanceGrid(attendanceData);
            container.appendChild(grid);

            // Courses detail
            if (Object.keys(attendanceData.courses).length > 0) {
                const coursesList = this.createCoursesList(attendanceData);
                container.appendChild(coursesList);
            }

            // View detail button
            const viewDetailBtn = utils.createEl('button', 'view-all-btn', 'Lihat Detail');
            viewDetailBtn.addEventListener('click', () => window.location.href = CONFIG.baseUrl + CONFIG.endpoints.presensi);
            container.appendChild(viewDetailBtn);

            return container;
        },

        createAttendanceGrid(attendanceData) {
            const grid = utils.createEl('div', 'attendance-grid');

            const attendanceItems = [
                { label: 'Hadir', value: attendanceData.hadir, className: 'present' },
                { label: 'Alpha', value: `${attendanceData.alpha} jam`, className: 'absent' },
                { label: 'Ijin', value: `${attendanceData.ijin} jam`, className: 'permit' },
                { label: 'Sakit', value: `${attendanceData.sakit} jam`, className: 'sick' }
            ];

            attendanceItems.forEach(item => {
                const attendanceItem = utils.createEl('div', `attendance-item ${item.className}`);
                attendanceItem.appendChild(utils.createEl('div', 'attendance-value', item.value.toString()));
                attendanceItem.appendChild(utils.createEl('div', 'attendance-label', item.label));
                grid.appendChild(attendanceItem);
            });

            return grid;
        },

        createCoursesList(attendanceData) {
            const coursesList = utils.createEl('div', 'courses-list');
            const coursesTitle = utils.createEl('h4', '', 'Detail per Mata Kuliah');
            coursesList.appendChild(coursesTitle);

            Object.entries(attendanceData.courses).forEach(([courseName, course]) => {
                const courseItem = utils.createEl('div', 'course-item');
                const courseHeader = utils.createEl('div', 'course-header');

                courseHeader.appendChild(utils.createEl('div', 'course-title', courseName));

                const courseStatus = utils.createEl('div', 'course-status');
                if (course.alpha > 0) {
                    courseStatus.appendChild(utils.createEl('span', 'status-badge alpha', `Alpha: ${course.alpha} jam`));
                }
                if (course.ijin > 0) {
                    courseStatus.appendChild(utils.createEl('span', 'status-badge ijin', `Ijin: ${course.ijin} jam`));
                }
                if (course.sakit > 0) {
                    courseStatus.appendChild(utils.createEl('span', 'status-badge sakit', `Sakit: ${course.sakit} jam`));
                }

                courseHeader.appendChild(courseStatus);
                courseItem.appendChild(courseHeader);
                coursesList.appendChild(courseItem);
            });

            return coursesList;
        },

        async loadAttendanceData(semesterId, container) {
            try {
                console.log("Memuat data presensi untuk semester:", semesterId);

                // Tambahkan indikator loading
                const loadingDiv = utils.createEl('div', 'loading-indicator', 'Memuat data...');
                container.appendChild(loadingDiv);

                const html = await utils.fetchData(
                    CONFIG.baseUrl + CONFIG.endpoints.attendance,
                    'POST',
                    `idThnSem=${semesterId}`
                );

                // Hapus indikator loading
                if (container.querySelector('.loading-indicator')) {
                    container.removeChild(container.querySelector('.loading-indicator'));
                }

                if (html) {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');

                    // Cari tabel di dalam HTML yang diterima
                    const table = doc.querySelector('table');

                    if (table) {
                        // Ekstrak data presensi dari tabel
                        const newData = { alpha: 0, ijin: 0, sakit: 0, hadir: 0, courses: {} };

                        const rows = table.querySelectorAll('tbody tr');
                        rows.forEach(row => {
                            const cells = row.querySelectorAll('td');
                            if (cells.length >= 7) {
                                const courseName = cells[1].textContent.trim();
                                const meeting = cells[2].textContent.trim();
                                const date = cells[3].textContent.trim();
                                const alpha = cells[4].textContent.trim();
                                const ijin = cells[5].textContent.trim();
                                const sakit = cells[6].textContent.trim();

                                // Tambahkan ke data per mata kuliah
                                if (!newData.courses[courseName]) {
                                    newData.courses[courseName] = {
                                        alpha: 0, ijin: 0, sakit: 0, hadir: 0, meetings: []
                                    };
                                }

                                // Tambahkan detail pertemuan
                                newData.courses[courseName].meetings.push({
                                    meeting, date, alpha, ijin, sakit
                                });

                                // Hitung jam pada kolom alpha, ijin, sakit
                                const parseHours = (timeStr) => timeStr && timeStr !== "0:0" ? parseInt(timeStr.split(':')[0]) || 0 : 0;

                                const alphaHours = parseHours(alpha);
                                const ijinHours = parseHours(ijin);
                                const sakitHours = parseHours(sakit);

                                if (alphaHours > 0) {
                                    newData.alpha += alphaHours;
                                    newData.courses[courseName].alpha += alphaHours;
                                } else if (ijinHours > 0) {
                                    newData.ijin += ijinHours;
                                    newData.courses[courseName].ijin += ijinHours;
                                } else if (sakitHours > 0) {
                                    newData.sakit += sakitHours;
                                    newData.courses[courseName].sakit += sakitHours;
                                } else {
                                    newData.hadir += 1;
                                    newData.courses[courseName].hadir += 1;
                                }
                            }
                        });

                        // Update tampilan dengan data baru
                        uiBuilders.updateAttendanceDisplay(newData, container);
                    } else {
                        console.error('Tabel presensi tidak ditemukan dalam respons');
                        container.appendChild(utils.createEl('p', 'error-message', 'Data presensi tidak ditemukan'));
                    }
                } else {
                    console.error('Gagal memuat data presensi');
                    container.appendChild(utils.createEl('p', 'error-message', 'Gagal memuat data presensi'));
                }
            } catch (error) {
                console.error('Gagal memuat data presensi:', error);
                if (container.querySelector('.loading-indicator')) {
                    container.removeChild(container.querySelector('.loading-indicator'));
                }
                container.appendChild(utils.createEl('p', 'error-message', 'Terjadi kesalahan saat memuat data'));
            }
        },

        updateAttendanceDisplay(newData, container) {
            const grid = container.querySelector('.attendance-grid');
            if (grid) {
                const items = grid.querySelectorAll('.attendance-item .attendance-value');
                if (items.length >= 4) {
                    items[0].textContent = newData.hadir.toString();
                    items[1].textContent = `${newData.alpha} jam`;
                    items[2].textContent = `${newData.ijin} jam`;
                    items[3].textContent = `${newData.sakit} jam`;
                }
            }

            const oldCoursesList = container.querySelector('.courses-list');
            if (oldCoursesList) {
                container.removeChild(oldCoursesList);
            }

            if (Object.keys(newData.courses).length > 0) {
                const coursesList = this.createCoursesList(newData);
                const viewDetailBtn = container.querySelector('.view-all-btn');
                container.insertBefore(coursesList, viewDetailBtn);
            }
        },

        createAcademicInfo() {
            const container = utils.createEl('div', 'academic-container');
            const title = utils.createEl('h3', '', 'Informasi Akademik');
            container.appendChild(title);

            const announcement = utils.createEl('div', 'announcement');
            announcement.innerHTML = `
            <div class="announcement-item">
                <div class="announcement-title">Pengambilan Kelengkapan Mahasiswa Baru</div>
                <div class="announcement-date">12 - 16 Agustus 2024</div>
                <div class="announcement-content">
                    Bertempat di Gedung AT Lt.2 mulai pukul 8.30 - 15.00 WIB
                </div>
            </div>
            `;
            container.appendChild(announcement);

            return container;
        }
    };

    // CSS Styles
    const injectStyles = () => {
        const style = document.createElement('style');
        style.textContent = `
            .enhanced-siakad { font-family: 'Open Sans', Arial, sans-serif; max-width: 1200px; margin: 0 auto; padding: 20px; background-color: #f5f5f5; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); }
            .enhanced-header { display: flex; justify-content: space-between; align-items: center; padding-bottom: 20px; border-bottom: 1px solid #ddd; margin-bottom: 20px; }
            .enhanced-header h1 { color: #3498db; margin: 0; font-size: 28px; }
            .student-info { text-align: right; }
            .student-name { font-size: 18px; font-weight: bold; color: #333; }
            .student-id { font-size: 14px; color: #666; }
            .menu-container, .main-info-container, .additional-info-container { margin-bottom: 30px; }
            .menu-container h2, .schedule-container h3, .payment-container h3, .attendance-container h3, .academic-container h3 { margin-top: 0; margin-bottom: 15px; color: #2c3e50; font-size: 20px; border-bottom: 2px solid #eee; padding-bottom: 8px; }
            .menu-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 15px; }
            .menu-card { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; background-color: #3498db; color: white; border-radius: 8px; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; height: 120px; }
            .menu-card:hover { transform: translateY(-5px); box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); }
            .menu-card i { font-size: 36px; margin-bottom: 10px; }
            .card-title { font-weight: bold; text-align: center; }
            .main-info-container, .additional-info-container { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
            .schedule-container, .payment-container, .attendance-container, .academic-container { background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05); }
            .schedule-item, .payment-item { padding: 15px; margin-bottom: 10px; background-color: #f9f9f9; border-radius: 5px; border-left: 4px solid #3498db; }
            .schedule-time { font-weight: bold; color: #3498db; margin-bottom: 5px; }
            .schedule-course { font-weight: bold; margin-bottom: 5px; }
            .schedule-lecturer { font-size: 14px; color: #666; }
            .payment-term { font-weight: bold; margin-bottom: 5px; }
            .payment-type { margin-bottom: 5px; }
            .payment-status { display: inline-block; padding: 3px 8px; border-radius: 3px; font-weight: bold; }
            .payment-status.paid { background-color: #2ecc71; color: white; }
            .payment-status.unpaid { background-color: #e74c3c; color: white; }
            .attendance-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 15px; }
            .attendance-item { padding: 15px; text-align: center; border-radius: 5px; color: white; }
            .attendance-item.present { background-color: #2ecc71; }
            .attendance-item.absent { background-color: #e74c3c; }
            .attendance-item.permit { background-color: #f39c12; }
            .attendance-item.sick { background-color: #3498db; }
            .attendance-value { font-size: 24px; font-weight: bold; margin-bottom: 5px; }
            .attendance-label { font-size: 14px; }
            .no-schedule, .no-payment { color: #999; font-style: italic; }
            .view-all-btn { display: block; width: 100%; padding: 8px; background-color: #3498db; color: white; border: none; border-radius: 4px; cursor: pointer; margin-top: 10px; font-weight: bold; transition: background-color 0.2s; }
            .view-all-btn:hover { background-color: #2980b9; }
            .announcement { margin-top: 10px; }
            .announcement-item { padding: 15px; background-color: #f9f9f9; border-radius: 5px; border-left: 4px solid #f39c12; }
            .announcement-title { font-weight: bold; color: #333; margin-bottom: 5px; }
            .announcement-date { color: #e74c3c; font-weight: bold; margin-bottom: 5px; }
            .announcement-content { color: #666; }
            .semester-selector { margin-bottom: 15px; display: flex; align-items: center; }
            .semester-selector label { margin-right: 10px; font-weight: bold; color: #333; min-width: 120px; }
            .semester-selector select { flex-grow: 1; padding: 5px; border: 1px solid #ddd; border-radius: 4px; background-color: white; }
            .view-filter-btn { padding: 5px 15px; margin-left: 10px; background-color: #27ae60; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; }
            .view-filter-btn:hover { background-color: #219955; }
            .loading-indicator { margin: 20px 0; text-align: center; color: #3498db; font-weight: bold; }
            .error-message { color: #e74c3c; text-align: center; margin: 20px 0; }
            .courses-list { margin-top: 20px; margin-bottom: 15px; }
            .courses-list h4 { margin-top: 0; margin-bottom: 10px; color: #2c3e50; font-size: 16px; border-bottom: 1px solid #eee; padding-bottom: 5px; }
            .course-item { margin-bottom: 10px; padding: 10px; background-color: #f9f9f9; border-radius: 5px; }
            .course-header { display: flex; justify-content: space-between; align-items: center; }
            .course-title { font-weight: bold; color: #333; }
            .course-status { display: flex; gap: 5px; }
            .status-badge { padding: 2px 6px; border-radius: 3px; font-size: 12px; font-weight: bold; color: white; }
            .status-badge.alpha { background-color: #e74c3c; }
            .status-badge.ijin { background-color: #f39c12; }
            .status-badge.sakit { background-color: #3498db; }
            @media (max-width: 768px) {
                .main-info-container, .additional-info-container { grid-template-columns: 1fr; }
                .menu-grid { grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); }
                .menu-card { height: 100px; }
                .menu-card i { font-size: 28px; }
                .card-title { font-size: 12px; }
                .semester-selector { flex-direction: column; align-items: flex-start; }
                .semester-selector label { margin-bottom: 5px; }
                .semester-selector select { width: 100%; margin-bottom: 10px; }
                .view-filter-btn { width: 100%; margin-left: 0; }
                .course-header { flex-direction: column; align-items: flex-start; }
                .course-status { margin-top: 5px; }
            }
        `;
        document.head.appendChild(style);
    };

    // Main UI creation function
    async function createNewUI() {
        if (!window.location.href.includes('siakad.polinema.ac.id/beranda')) return;

        console.log("Creating enhanced UI for SIAKAD Polinema");

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
                menuGrid.appendChild(uiBuilders.createCard(item.icon, item.title, item.url, item.color));
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

    // Initialize
    const init = () => {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => setTimeout(createNewUI, 500));
        } else {
            setTimeout(createNewUI, 500);
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