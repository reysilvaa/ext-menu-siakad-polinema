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

// Make utils available globally
window.utils = utils;
