// Modern Dark Mode Navbar Styles
const injectNavbarStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
        /* Modern Dark Navbar Container */
        .enhanced-navbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 55px;
            background: var(--gradient-navbar);
            box-shadow: var(--shadow-lg);
            z-index: 1001;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
            backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--color-border-primary);
        }

        /* Modern Navbar Content */
        .navbar-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 100%;
            padding: 0 var(--spacing-lg);
            max-width: 1400px;
            margin: 0 auto;
        }

        /* Modern Left Section - Logo */
        .navbar-left {
            display: flex;
            align-items: center;
        }

        .logo-container {
            display: flex;
            align-items: center;
            gap: var(--spacing-md);
        }

        .enhanced-logo {
            height: 32px;
            width: auto;
            object-fit: contain;
            filter: brightness(1.1);
        }

        .brand-text {
            display: flex;
            flex-direction: column;
            line-height: 1.1;
        }

        .brand-title {
            font-size: 15px;
            font-weight: 700;
            color: var(--color-text-primary);
            letter-spacing: 0.3px;
        }

        .brand-subtitle {
            font-size: 9px;
            color: var(--color-secondary-main);
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1.2px;
        }

        /* Modern Center Section - Quick Actions */
        .navbar-center {
            display: flex;
            align-items: center;
        }

        .quick-actions {
            display: flex;
            gap: var(--spacing-sm);
        }

        .quick-action-btn {
            position: relative;
            background: var(--alpha-white-10);
            border: 1px solid var(--color-border-primary);
            color: var(--color-text-secondary);
            width: 36px;
            height: 36px;
            border-radius: var(--radius-lg);
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            backdrop-filter: blur(8px);
        }

        .quick-action-btn:hover {
            background: var(--color-secondary-main);
            color: var(--color-text-primary);
            border-color: var(--color-secondary-main);
            transform: translateY(-1px);
            box-shadow: var(--shadow-glow);
        }

        .action-badge {
            position: absolute;
            top: -4px;
            right: -4px;
            background: var(--color-status-error);
            color: var(--color-text-primary);
            font-size: 9px;
            font-weight: 700;
            padding: 2px 5px;
            border-radius: var(--radius-full);
            min-width: 16px;
            text-align: center;
            line-height: 1.1;
            box-shadow: var(--shadow-sm);
        }

        /* Modern Right Section - User Info */
        .navbar-right {
            display: flex;
            align-items: center;
            gap: var(--spacing-md);
        }

        /* Modern Messages Button */
        .messages-btn {
            position: relative;
            background: var(--alpha-white-10);
            border: 1px solid var(--color-border-primary);
            color: var(--color-text-secondary);
            width: 40px;
            height: 40px;
            border-radius: var(--radius-lg);
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            backdrop-filter: blur(8px);
        }

        .messages-btn:hover {
            background: var(--color-secondary-main);
            color: var(--color-text-primary);
            border-color: var(--color-secondary-main);
            transform: translateY(-1px);
            box-shadow: var(--shadow-glow);
        }

        .message-badge {
            position: absolute;
            top: -4px;
            right: -4px;
            background: var(--color-status-error);
            color: var(--color-text-primary);
            font-size: 9px;
            font-weight: 700;
            padding: 2px 5px;
            border-radius: var(--radius-full);
            min-width: 16px;
            text-align: center;
            line-height: 1.1;
            box-shadow: var(--shadow-sm);
        }

        /* Modern User Dropdown */
        .user-dropdown {
            position: relative;
        }

        .user-trigger {
            display: flex;
            align-items: center;
            gap: var(--spacing-sm);
            padding: var(--spacing-xs) var(--spacing-md);
            background: var(--alpha-white-10);
            border: 1px solid var(--color-border-primary);
            border-radius: var(--radius-full);
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(8px);
        }

        .user-trigger:hover {
            background: var(--alpha-white-15);
            border-color: var(--color-secondary-main);
            box-shadow: var(--shadow-md);
        }

        .user-image {
            width: 32px;
            height: 32px;
            border-radius: var(--radius-full);
            object-fit: cover;
            border: 2px solid var(--color-secondary-main);
        }

        .user-info {
            display: flex;
            flex-direction: column;
            line-height: 1.2;
        }

        .user-name {
            font-size: 13px;
            font-weight: 600;
            color: var(--color-text-primary);
        }

        .user-id {
            font-size: 10px;
            color: var(--color-text-tertiary);
            font-weight: 500;
        }

        .dropdown-icon {
            color: var(--color-text-tertiary);
            font-size: 10px;
            transition: transform 0.3s ease;
        }

        /* Modern Dropdown Menu */
        .dropdown-menu {
            position: absolute;
            top: 100%;
            right: 0;
            background: var(--color-surface-primary);
            border: 1px solid var(--color-border-primary);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-xl);
            min-width: 180px;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-8px);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            margin-top: var(--spacing-sm);
            backdrop-filter: blur(12px);
        }

        .dropdown-menu.show {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }

        .dropdown-item {
            padding: var(--spacing-sm) var(--spacing-md);
            color: var(--color-text-secondary);
            cursor: pointer;
            transition: all 0.2s ease;
            border-bottom: 1px solid var(--color-border-subtle);
            display: flex;
            align-items: center;
            gap: var(--spacing-sm);
            font-size: 13px;
        }

        .dropdown-item:hover {
            background: var(--alpha-secondary-10);
            color: var(--color-text-primary);
        }

        .dropdown-item:last-child {
            border-bottom: none;
        }

        .dropdown-item i {
            width: 16px;
            text-align: center;
            color: var(--color-secondary-main);
        }

        /* Modern Toggle Button */
        .navbar-toggle-btn {
            position: absolute;
            top: 50%;
            right: -45px;
            transform: translateY(-50%);
            background: var(--color-secondary-main);
            color: var(--color-text-primary);
            border: none;
            width: 32px;
            height: 32px;
            border-radius: var(--radius-lg);
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            font-size: 12px;
            box-shadow: var(--shadow-lg);
            backdrop-filter: blur(8px);
        }

        .navbar-toggle-btn:hover {
            background: var(--color-hover-secondary);
            transform: translateY(-50%) scale(1.05);
            box-shadow: var(--shadow-glow);
        }

        /* Responsive Design - Compact */
        @media (max-width: 768px) {
            .navbar-content {
                padding: 0 10px;
            }

            .brand-text {
                display: none;
            }

            .quick-actions {
                gap: 8px;
            }

            .quick-action-btn {
                width: 30px;
                height: 30px;
                font-size: 12px;
            }

            .user-info {
                display: none;
            }

            .user-trigger {
                padding: 6px;
                border-radius: 50%;
                background: transparent;
                border: 1px solid rgba(52, 152, 219, 0.3);
            }

            .dropdown-icon {
                display: none;
            }
        }

        @media (max-width: 480px) {
            .navbar-center {
                display: none;
            }

            .messages-btn {
                width: 30px;
                height: 30px;
                font-size: 12px;
            }
        }

        /* Animation for elements */
        @keyframes slideInDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .enhanced-navbar {
            animation: slideInDown 0.5s ease forwards;
        }

        /* Modern Layout Adjustments */
        body {
            padding-top: 55px !important;
            background: var(--color-functional-background) !important;
        }

        /* Modern Main Content Layout */
        .page-container {
            margin-left: 240px !important;
            padding-top: 0 !important;
            transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .page-content-wrapper {
            margin-left: 0 !important;
        }

        .page-content {
            margin-left: 0 !important;
            padding: var(--spacing-lg) !important;
            background: var(--color-functional-background);
        }

        /* Modern Card Containers */
        .portlet {
            margin-bottom: var(--spacing-lg);
            background: var(--color-surface-primary);
            border: 1px solid var(--color-border-primary);
            border-radius: var(--radius-xl);
            box-shadow: var(--shadow-lg);
            backdrop-filter: blur(8px);
            transition: all 0.3s ease;
        }

        .portlet:hover {
            box-shadow: var(--shadow-xl);
            transform: translateY(-1px);
        }

        .portlet-title {
            background: var(--gradient-surface);
            color: var(--color-text-primary);
            padding: var(--spacing-md) var(--spacing-lg);
            border-radius: var(--radius-xl) var(--radius-xl) 0 0;
            border-bottom: 1px solid var(--color-border-primary);
        }

        .portlet-title .caption {
            color: var(--color-text-primary) !important;
            font-weight: 600;
            font-size: 15px;
        }

        .portlet-body {
            padding: var(--spacing-lg);
            background: var(--color-surface-primary);
        }

        /* Modern Table Styling - Comprehensive */
        .table, .table_data, table {
            background: var(--color-surface-primary) !important;
            border-radius: var(--radius-lg);
            overflow: hidden;
            box-shadow: var(--shadow-md);
            border: 1px solid var(--color-border-primary) !important;
        }

        .table thead th, .table_data thead th, table thead th {
            background: var(--color-surface-secondary) !important;
            color: var(--color-text-primary) !important;
            border: none !important;
            padding: var(--spacing-md) !important;
            font-weight: 600;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .table tbody td, .table_data tbody td, table tbody td {
            background: var(--color-surface-primary) !important;
            color: var(--color-text-secondary) !important;
            padding: var(--spacing-md) !important;
            border-bottom: 1px solid var(--color-border-subtle) !important;
            border-left: none !important;
            border-right: none !important;
            border-top: none !important;
            vertical-align: middle;
        }

        .table tbody tr, .table_data tbody tr, table tbody tr {
            background: var(--color-surface-primary) !important;
        }

        .table tbody tr:hover, .table_data tbody tr:hover, table tbody tr:hover {
            background: var(--alpha-secondary-5) !important;
        }

        .table tbody tr:nth-child(even), .table_data tbody tr:nth-child(even), table tbody tr:nth-child(even) {
            background: var(--color-surface-secondary) !important;
        }

        .table tbody tr:nth-child(even):hover, .table_data tbody tr:nth-child(even):hover, table tbody tr:nth-child(even):hover {
            background: var(--alpha-secondary-10) !important;
        }

        /* Status badges in tables */
        .table tbody td:last-child, .table_data tbody td:last-child, table tbody td:last-child {
            font-weight: 600;
        }

        /* Ensure all text in tables is visible */
        .table *, .table_data *, table * {
            color: var(--color-text-secondary) !important;
        }

        .table thead *, .table_data thead *, table thead * {
            color: var(--color-text-primary) !important;
        }

        .clickable-row {
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .clickable-row:hover {
            background: var(--alpha-secondary-10) !important;
            color: var(--color-text-primary) !important;
            transform: translateY(-1px);
            box-shadow: var(--shadow-md);
        }

        .clickable-row:hover * {
            color: var(--color-text-primary) !important;
        }

        /* Comprehensive Dark Mode for All Page Elements */

        /* Page content background */
        .page-content, #portlet-sub-page-body, .portlet-body {
            background: var(--color-functional-background) !important;
            color: var(--color-text-secondary) !important;
        }

        /* All text elements */
        .page-content *, #portlet-sub-page-body *, .portlet-body * {
            color: var(--color-text-secondary) !important;
        }

        /* Headings */
        .page-title, h1, h2, h3, h4, h5, h6 {
            color: var(--color-text-primary) !important;
        }

        /* Breadcrumbs */
        .page-breadcrumb, .breadcrumb {
            background: transparent !important;
        }

        .page-breadcrumb li, .breadcrumb li {
            color: var(--color-text-tertiary) !important;
        }

        .page-breadcrumb a, .breadcrumb a {
            color: var(--color-secondary-main) !important;
        }

        /* Forms */
        input, textarea, select {
            background: var(--color-surface-primary) !important;
            color: var(--color-text-primary) !important;
            border: 1px solid var(--color-border-primary) !important;
            border-radius: var(--radius-md) !important;
        }

        input:focus, textarea:focus, select:focus {
            border-color: var(--color-secondary-main) !important;
            box-shadow: var(--color-focus-ring) !important;
        }

        /* Buttons */
        .btn, button {
            background: var(--color-secondary-main) !important;
            color: var(--color-text-primary) !important;
            border: 1px solid var(--color-secondary-main) !important;
            border-radius: var(--radius-lg) !important;
            transition: all 0.3s ease !important;
        }

        .btn:hover, button:hover {
            background: var(--color-hover-secondary) !important;
            transform: translateY(-1px) !important;
        }

        /* Alerts */
        .alert {
            background: var(--color-surface-secondary) !important;
            color: var(--color-text-primary) !important;
            border: 1px solid var(--color-border-primary) !important;
            border-radius: var(--radius-lg) !important;
        }

        .alert-info {
            background: var(--alpha-secondary-10) !important;
            border-color: var(--color-secondary-main) !important;
        }

        .alert-danger {
            background: var(--alpha-background-10) !important;
            border-color: var(--color-status-error) !important;
        }

        .alert-success {
            background: var(--alpha-background-10) !important;
            border-color: var(--color-status-success) !important;
        }

        /* Labels and small text */
        label, .label, small, .small {
            color: var(--color-text-tertiary) !important;
        }

        /* Links */
        a {
            color: var(--color-secondary-main) !important;
        }

        a:hover {
            color: var(--color-hover-secondary) !important;
        }

        /* Dividers */
        hr {
            border-color: var(--color-border-primary) !important;
        }

        /* Status text styling */
        td:contains("LUNAS"), span:contains("LUNAS") {
            color: var(--color-status-success) !important;
            font-weight: 600 !important;
        }

        td:contains("BELUM LUNAS"), span:contains("BELUM LUNAS") {
            color: var(--color-status-error) !important;
            font-weight: 600 !important;
        }

        /* Hide original navbar when enhanced is active */
        .page-header.navbar {
            display: none;
        }

        /* Hide original sidebar when enhanced is active */
        .page-sidebar-wrapper {
            display: none;
        }
    `;
    document.head.appendChild(style);
};

// Make injectNavbarStyles available globally
window.injectNavbarStyles = injectNavbarStyles;
