// UI Builders
const uiBuilders = {
    createCard(icon, title, url, colorKey) {
        const card = utils.createEl('div', 'menu-card');

        // Get color from universal palette
        const color = COLOR_PALETTE.menuItems[colorKey] || COLOR_PALETTE.secondary.main;
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

// Make uiBuilders available globally
window.uiBuilders = uiBuilders;
