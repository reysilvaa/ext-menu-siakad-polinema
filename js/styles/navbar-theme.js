// Enhanced Navbar Styles - Universal Color Palette
const injectNavbarStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
        /* Enhanced Navbar Container - Compact Size */
        .enhanced-navbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 55px;
            background: var(--color-primary-main);
            box-shadow: 0 2px 8px var(--color-functional-shadow);
            z-index: 1001;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        /* Navbar Content - Compact Padding */
        .navbar-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 100%;
            padding: 0 20px;
            max-width: 1400px;
            margin: 0 auto;
        }

        /* Left Section - Logo */
        .navbar-left {
            display: flex;
            align-items: center;
        }

        .logo-container {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .enhanced-logo {
            height: 35px;
            width: auto;
            object-fit: contain;
        }

        .brand-text {
            display: flex;
            flex-direction: column;
            line-height: 1.1;
        }

        .brand-title {
            font-size: 16px;
            font-weight: 700;
            color: var(--color-primary-contrast);
            letter-spacing: 0.5px;
        }

        .brand-subtitle {
            font-size: 10px;
            color: var(--color-secondary-main);
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        /* Center Section - Quick Actions */
        .navbar-center {
            display: flex;
            align-items: center;
        }

        .quick-actions {
            display: flex;
            gap: 15px;
        }

        .quick-action-btn {
            position: relative;
            background: transparent;
            border: 1px solid var(--color-secondary-main);
            color: var(--color-secondary-main);
            width: 35px;
            height: 35px;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            opacity: 0.8;
        }

        .quick-action-btn:hover {
            background: var(--color-secondary-main);
            color: var(--color-secondary-contrast);
            border-color: var(--color-secondary-main);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px var(--color-secondary-main);
            opacity: 1;
        }

        .action-badge {
            position: absolute;
            top: -5px;
            right: -5px;
            background: #3498db;
            color: white;
            font-size: 10px;
            font-weight: 600;
            padding: 2px 6px;
            border-radius: 10px;
            min-width: 18px;
            text-align: center;
            line-height: 1.2;
        }

        /* Right Section - User Info */
        .navbar-right {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        /* Messages Button */
        .messages-btn {
            position: relative;
            background: transparent;
            border: 2px solid rgba(52, 152, 219, 0.3);
            color: #3498db;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
        }

        .messages-btn:hover {
            background: #3498db;
            color: white;
            border-color: #3498db;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
        }

        .message-badge {
            position: absolute;
            top: -5px;
            right: -5px;
            background: #3498db;
            color: white;
            font-size: 10px;
            font-weight: 600;
            padding: 2px 6px;
            border-radius: 10px;
            min-width: 18px;
            text-align: center;
            line-height: 1.2;
        }

        /* User Dropdown */
        .user-dropdown {
            position: relative;
        }

        .user-trigger {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 8px 15px;
            background: rgba(52, 152, 219, 0.1);
            border: 1px solid rgba(52, 152, 219, 0.2);
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .user-trigger:hover {
            background: rgba(52, 152, 219, 0.2);
            border-color: #3498db;
        }

        .user-image {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid #3498db;
        }

        .user-info {
            display: flex;
            flex-direction: column;
            line-height: 1.2;
        }

        .user-name {
            font-size: 14px;
            font-weight: 600;
            color: white;
        }

        .user-id {
            font-size: 11px;
            color: #3498db;
            font-weight: 500;
        }

        .dropdown-icon {
            color: #3498db;
            font-size: 12px;
            transition: transform 0.3s ease;
        }

        /* Dropdown Menu */
        .dropdown-menu {
            position: absolute;
            top: 100%;
            right: 0;
            background: white;
            border: 1px solid rgba(52, 152, 219, 0.2);
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(44, 62, 80, 0.15);
            min-width: 180px;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: all 0.3s ease;
            margin-top: 10px;
        }

        .dropdown-menu.show {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }

        .dropdown-item {
            padding: 12px 20px;
            color: #2c3e50;
            cursor: pointer;
            transition: all 0.2s ease;
            border-bottom: 1px solid rgba(52, 152, 219, 0.1);
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 14px;
        }

        .dropdown-item:hover {
            background: rgba(52, 152, 219, 0.1);
            color: #3498db;
        }

        .dropdown-item:last-child {
            border-bottom: none;
        }

        .dropdown-item i {
            width: 16px;
            text-align: center;
        }

        /* Toggle Button */
        .navbar-toggle-btn {
            position: absolute;
            top: 50%;
            right: -50px;
            transform: translateY(-50%);
            background: #3498db;
            color: white;
            border: none;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 14px;
            box-shadow: 0 2px 8px rgba(52, 152, 219, 0.3);
        }

        .navbar-toggle-btn:hover {
            background: #2980b9;
            transform: translateY(-50%) scale(1.1);
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

        /* Adjust layout for compact navbar and sidebar */
        body {
            padding-top: 55px !important;
        }

        /* Adjust main content area for compact sidebar */
        .page-container {
            margin-left: 240px !important;
            padding-top: 0 !important;
        }

        .page-content-wrapper {
            margin-left: 0 !important;
        }

        .page-content {
            margin-left: 0 !important;
            padding: 20px !important;
        }

        /* Adjust portlet containers */
        .portlet {
            margin-bottom: 20px;
            background: var(--color-functional-surface);
            border: 1px solid var(--color-functional-border);
            border-radius: 8px;
            box-shadow: 0 2px 8px var(--color-functional-shadow);
        }

        .portlet-title {
            background: var(--gradient-primary);
            color: var(--color-primary-contrast);
            padding: 15px 20px;
            border-radius: 8px 8px 0 0;
            border-bottom: none;
        }

        .portlet-title .caption {
            color: var(--color-primary-contrast) !important;
            font-weight: 600;
            font-size: 16px;
        }

        .portlet-body {
            padding: 20px;
        }

        /* Table styling */
        .table {
            background: var(--color-functional-surface);
            border-radius: 6px;
            overflow: hidden;
            box-shadow: 0 1px 3px var(--color-functional-shadow);
        }

        .table thead th {
            background: var(--color-primary-light);
            color: var(--color-primary-contrast);
            border: none;
            padding: 12px 15px;
            font-weight: 600;
        }

        .table tbody td {
            padding: 12px 15px;
            border-bottom: 1px solid var(--color-functional-border);
            vertical-align: middle;
        }

        .table tbody tr:hover {
            background: var(--color-neutral-light);
        }

        .clickable-row {
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .clickable-row:hover {
            background: var(--color-secondary-main) !important;
            color: var(--color-secondary-contrast) !important;
            transform: translateY(-1px);
            box-shadow: 0 2px 8px var(--color-functional-shadow);
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
