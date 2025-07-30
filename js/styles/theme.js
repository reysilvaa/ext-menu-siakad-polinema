// CSS Styles - Universal Color Palette
const injectStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
        .enhanced-siakad { font-family: 'Open Sans', Arial, sans-serif; max-width: 1200px; margin: 0 auto; padding: 20px; background-color: var(--color-functional-background); border-radius: 8px; box-shadow: 0 2px 10px var(--color-functional-shadow); }
        .enhanced-header { display: flex; justify-content: space-between; align-items: center; padding-bottom: 20px; border-bottom: 1px solid var(--color-functional-border); margin-bottom: 20px; }
        .enhanced-header h1 { color: var(--color-secondary-main); margin: 0; font-size: 28px; }
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

// Make injectStyles available globally
window.injectStyles = injectStyles;
