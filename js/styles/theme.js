// Modern Dark Mode Main Theme Styles
const injectStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
        /* Modern Dark Mode Enhanced SIAKAD */
        .enhanced-siakad {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
            max-width: 1200px;
            margin: 0 auto;
            padding: var(--spacing-lg);
            background: var(--color-functional-background);
            border-radius: var(--radius-xl);
            box-shadow: var(--shadow-xl);
        }

        .enhanced-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: var(--spacing-lg);
            border-bottom: 1px solid var(--color-border-primary);
            margin-bottom: var(--spacing-lg);
        }

        .enhanced-header h1 {
            color: var(--color-text-primary);
            margin: 0;
            font-size: 28px;
            font-weight: 700;
        }

        .student-info {
            text-align: right;
        }

        .student-name {
            font-size: 18px;
            font-weight: 600;
            color: var(--color-text-primary);
        }

        .student-id {
            font-size: 14px;
            color: var(--color-text-tertiary);
        }

        .menu-container, .main-info-container, .additional-info-container {
            margin-bottom: var(--spacing-xl);
        }

        .menu-container h2, .schedule-container h3, .payment-container h3, .attendance-container h3, .academic-container h3 {
            margin-top: 0;
            margin-bottom: var(--spacing-md);
            color: var(--color-text-primary);
            font-size: 20px;
            font-weight: 600;
            border-bottom: 2px solid var(--color-border-primary);
            padding-bottom: var(--spacing-sm);
        }

        .menu-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: var(--spacing-md);
        }

        .menu-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: var(--spacing-lg);
            background: var(--color-surface-primary);
            color: var(--color-text-primary);
            border-radius: var(--radius-xl);
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            height: 120px;
            border: 1px solid var(--color-border-primary);
            box-shadow: var(--shadow-md);
        }

        .menu-card:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-xl);
            background: var(--color-surface-secondary);
        }

        .menu-card i {
            font-size: 32px;
            margin-bottom: var(--spacing-sm);
            color: var(--color-secondary-main);
        }

        .card-title {
            font-weight: 600;
            text-align: center;
            font-size: 13px;
        }

        /* Modern Container Layouts */
        .main-info-container, .additional-info-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--spacing-lg);
        }

        .schedule-container, .payment-container, .attendance-container, .academic-container {
            background: var(--color-surface-primary);
            padding: var(--spacing-lg);
            border-radius: var(--radius-xl);
            box-shadow: var(--shadow-lg);
            border: 1px solid var(--color-border-primary);
        }

        .schedule-item, .payment-item {
            padding: var(--spacing-md);
            margin-bottom: var(--spacing-sm);
            background: var(--color-surface-secondary);
            border-radius: var(--radius-lg);
            border-left: 4px solid var(--color-secondary-main);
        }

        .schedule-time {
            font-weight: 600;
            color: var(--color-secondary-main);
            margin-bottom: var(--spacing-xs);
        }

        .schedule-course {
            font-weight: 600;
            margin-bottom: var(--spacing-xs);
            color: var(--color-text-primary);
        }

        .schedule-lecturer {
            font-size: 13px;
            color: var(--color-text-tertiary);
        }

        .payment-term {
            font-weight: 600;
            margin-bottom: var(--spacing-xs);
            color: var(--color-text-primary);
        }

        .payment-type {
            margin-bottom: var(--spacing-xs);
            color: var(--color-text-secondary);
        }

        .payment-status {
            display: inline-block;
            padding: 4px 8px;
            border-radius: var(--radius-sm);
            font-weight: 600;
            font-size: 11px;
        }

        .payment-status.paid {
            background: var(--color-status-success);
            color: var(--color-text-primary);
        }

        .payment-status.unpaid {
            background: var(--color-status-error);
            color: var(--color-text-primary);
        }

        .attendance-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--spacing-sm);
            margin-bottom: var(--spacing-md);
        }

        .attendance-item {
            padding: var(--spacing-md);
            text-align: center;
            border-radius: var(--radius-lg);
            color: var(--color-text-primary);
        }

        .attendance-item.present {
            background: var(--color-status-success);
        }

        .attendance-item.absent {
            background: var(--color-status-error);
        }

        .attendance-item.permit {
            background: var(--color-status-warning);
        }

        .attendance-item.sick {
            background: var(--color-status-info);
        }

        .attendance-value {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: var(--spacing-xs);
        }

        .attendance-label {
            font-size: 13px;
            opacity: 0.9;
        }

        .no-schedule, .no-payment {
            color: var(--color-text-tertiary);
            font-style: italic;
            text-align: center;
            padding: var(--spacing-lg);
        }

        .view-all-btn {
            display: block;
            width: 100%;
            padding: var(--spacing-sm);
            background: var(--color-secondary-main);
            color: var(--color-text-primary);
            border: none;
            border-radius: var(--radius-lg);
            cursor: pointer;
            margin-top: var(--spacing-sm);
            font-weight: 600;
            transition: all 0.3s ease;
        }

        .view-all-btn:hover {
            background: var(--color-hover-secondary);
            transform: translateY(-1px);
        }

        /* Modern Announcement Styling */
        .announcement {
            margin-top: var(--spacing-sm);
        }

        .announcement-item {
            padding: var(--spacing-md);
            background: var(--color-surface-secondary) !important;
            border-radius: var(--radius-lg);
            border-left: 4px solid var(--color-status-warning) !important;
            margin-bottom: var(--spacing-sm);
            box-shadow: var(--shadow-sm);
        }

        .announcement-title {
            font-weight: 600 !important;
            color: var(--color-text-primary) !important;
            margin-bottom: var(--spacing-xs) !important;
            font-size: 14px;
        }

        .announcement-date {
            color: var(--color-status-warning) !important;
            font-weight: 600 !important;
            margin-bottom: var(--spacing-xs) !important;
            font-size: 12px;
        }

        .announcement-content {
            color: var(--color-text-secondary) !important;
            font-size: 13px;
            line-height: 1.4;
        }
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
