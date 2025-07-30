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

// Make dataFetchers available globally
window.dataFetchers = dataFetchers;
