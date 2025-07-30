// Modern Dark Mode Sidebar Styles
const injectSidebarStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
        /* Modern Dark Sidebar Container */
        .enhanced-sidebar {
            width: 240px;
            background: var(--gradient-sidebar);
            height: calc(100vh - 55px);
            padding: var(--spacing-lg) var(--spacing-md);
            box-shadow: var(--shadow-xl);
            position: fixed;
            left: 0;
            top: 55px;
            z-index: 1000;
            overflow-y: auto;
            overflow-x: hidden;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
            backdrop-filter: blur(20px);
            border-right: 1px solid var(--color-border-primary);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Modern Section Titles */
        .enhanced-sidebar .section-title {
            color: var(--color-text-primary);
            font-size: 11px;
            font-weight: 700;
            margin: 0 0 var(--spacing-md) 0;
            padding: var(--spacing-sm) 0;
            border-bottom: 1px solid var(--color-border-subtle);
            text-transform: uppercase;
            letter-spacing: 1.5px;
            position: relative;
            display: flex;
            align-items: center;
            opacity: 0.9;
        }

        .enhanced-sidebar .section-title::before {
            content: '';
            width: 3px;
            height: 12px;
            background: var(--color-secondary-main);
            border-radius: var(--radius-sm);
            margin-right: var(--spacing-sm);
            box-shadow: var(--shadow-glow);
        }

        /* Modern Quick Access Section */
        .quick-access-section {
            margin-bottom: var(--spacing-lg);
        }

        .quick-access-grid {
            display: grid;
            gap: var(--spacing-sm);
        }

        .quick-access-card {
            background: var(--color-surface-primary);
            border-radius: var(--radius-lg);
            padding: var(--spacing-md);
            display: flex;
            align-items: center;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: var(--shadow-md);
            border: 1px solid var(--color-border-primary);
            backdrop-filter: blur(12px);
            position: relative;
            overflow: hidden;
        }

        .quick-access-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: var(--gradient-secondary);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .quick-access-card:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
            background: var(--color-surface-secondary);
            border-color: var(--color-secondary-main);
        }

        .quick-access-card:hover::before {
            opacity: 1;
        }

        .quick-access-card:active {
            transform: translateY(-1px);
        }

        .quick-icon {
            font-size: 18px;
            margin-right: var(--spacing-md);
            width: 20px;
            text-align: center;
            transition: all 0.3s ease;
            color: var(--color-secondary-main);
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
        }

        .quick-access-card:hover .quick-icon {
            transform: scale(1.1);
            filter: drop-shadow(0 4px 8px rgba(59, 130, 246, 0.4));
        }

        .card-content {
            flex: 1;
            min-width: 0;
        }

        .card-title {
            font-weight: 600;
            color: var(--color-text-primary);
            margin-bottom: 2px;
            font-size: 13px;
            line-height: 1.3;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .card-desc {
            font-size: 10px;
            color: var(--color-text-tertiary);
            line-height: 1.4;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        /* Modern Search Section */
        .search-section {
            margin-bottom: var(--spacing-md);
        }

        .search-container {
            position: relative;
        }

        .search-input {
            width: 100%;
            padding: var(--spacing-sm) 40px var(--spacing-sm) var(--spacing-md);
            border: 1px solid var(--color-border-primary);
            border-radius: var(--radius-full);
            background: var(--color-surface-primary);
            color: var(--color-text-primary);
            font-size: 12px;
            outline: none;
            transition: all 0.3s ease;
            backdrop-filter: blur(8px);
        }

        .search-input::placeholder {
            color: var(--color-text-tertiary);
        }

        .search-input:focus {
            background: var(--color-surface-secondary);
            border-color: var(--color-secondary-main);
            box-shadow: var(--color-focus-ring);
        }

        .search-icon {
            position: absolute;
            right: var(--spacing-md);
            top: 50%;
            transform: translateY(-50%);
            color: var(--color-text-tertiary);
            font-size: 14px;
            transition: color 0.3s ease;
        }

        .search-input:focus + .search-icon {
            color: var(--color-secondary-main);
        }

        /* Modern Categorized Menu */
        .categorized-menu-section {
            margin-bottom: var(--spacing-lg);
        }

        .category-card {
            margin-bottom: var(--spacing-md);
            border-radius: var(--radius-lg);
            overflow: hidden;
            background: var(--alpha-white-5);
            backdrop-filter: blur(12px);
            border: 1px solid var(--color-border-subtle);
        }

        .category-header {
            padding: var(--spacing-md);
            color: var(--color-text-primary);
            cursor: pointer;
            display: flex;
            align-items: center;
            transition: all 0.3s ease;
        }

        .category-header:hover {
            background: var(--alpha-white-10);
        }

        .category-header i:first-child {
            margin-right: var(--spacing-md);
            font-size: 16px;
            width: 18px;
            text-align: center;
            color: var(--color-secondary-main);
        }

        .category-name {
            flex: 1;
            font-weight: 600;
            font-size: 13px;
        }

        .category-toggle {
            font-size: 10px;
            transition: transform 0.3s ease;
            color: var(--color-text-tertiary);
        }

        .category-items {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            background: var(--color-surface-primary);
        }

        .category-items.expanded {
            max-height: 300px;
        }

        .category-item {
            padding: var(--spacing-sm) var(--spacing-lg);
            cursor: pointer;
            transition: all 0.2s ease;
            border-bottom: 1px solid var(--color-border-subtle);
            color: var(--color-text-secondary);
            font-size: 12px;
        }

        .category-item:hover {
            background: var(--alpha-secondary-10);
            padding-left: calc(var(--spacing-lg) + var(--spacing-xs));
            color: var(--color-text-primary);
        }

        .category-item:last-child {
            border-bottom: none;
        }

        /* Modern Recent Section */
        .recent-section {
            margin-bottom: var(--spacing-md);
        }

        .recent-list {
            background: var(--alpha-white-5);
            border-radius: var(--radius-lg);
            overflow: visible;
            border: 1px solid var(--color-border-subtle);
            backdrop-filter: blur(8px);
        }

        .recent-item {
            padding: var(--spacing-sm) var(--spacing-md);
            cursor: pointer;
            transition: all 0.3s ease;
            border-bottom: 1px solid var(--color-border-subtle);
            position: relative;
        }

        .recent-item:hover {
            background: var(--alpha-white-10);
            transform: translateX(2px);
        }

        .recent-item:last-child {
            border-bottom: none;
        }

        .recent-title {
            color: var(--color-text-primary);
            font-size: 11px;
            font-weight: 600;
            margin-bottom: 2px;
            line-height: 1.3;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 100%;
        }

        .recent-time {
            color: var(--color-text-tertiary);
            font-size: 9px;
            font-weight: 400;
        }

        .empty-recent {
            padding: var(--spacing-xl) var(--spacing-md);
            text-align: center;
            color: var(--color-text-tertiary);
            font-size: 11px;
            font-style: italic;
            line-height: 1.4;
        }



        /* Modern Toggle Button */
        .sidebar-toggle-btn {
            width: 100%;
            padding: var(--spacing-sm) var(--spacing-md);
            background: var(--alpha-white-10);
            border: 1px solid var(--color-border-primary);
            border-radius: var(--radius-full);
            color: var(--color-text-primary);
            font-weight: 600;
            font-size: 11px;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            margin-top: var(--spacing-md);
            backdrop-filter: blur(12px);
            text-transform: uppercase;
            letter-spacing: 0.8px;
        }

        .sidebar-toggle-btn:hover {
            background: var(--alpha-white-20);
            border-color: var(--color-secondary-main);
            transform: translateY(-1px);
            box-shadow: var(--shadow-md);
        }

        .sidebar-toggle-btn:active {
            transform: translateY(0);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .enhanced-sidebar {
                width: 100%;
                transform: translateX(-100%);
                transition: transform 0.3s ease;
            }

            .enhanced-sidebar.mobile-open {
                transform: translateX(0);
            }

            .quick-access-grid {
                grid-template-columns: 1fr;
            }

            .quick-access-card {
                padding: 12px;
            }

            .quick-icon {
                font-size: 20px;
                margin-right: 12px;
            }

            .card-title {
                font-size: 13px;
            }

            .card-desc {
                font-size: 11px;
            }
        }

        /* Modern Scrollbar Styling */
        .enhanced-sidebar::-webkit-scrollbar {
            width: 4px;
        }

        .enhanced-sidebar::-webkit-scrollbar-track {
            background: var(--alpha-white-5);
            border-radius: var(--radius-sm);
        }

        .enhanced-sidebar::-webkit-scrollbar-thumb {
            background: var(--alpha-white-20);
            border-radius: var(--radius-sm);
            transition: background 0.3s ease;
        }

        .enhanced-sidebar::-webkit-scrollbar-thumb:hover {
            background: var(--alpha-white-30);
        }

        .enhanced-sidebar::-webkit-scrollbar-corner {
            background: transparent;
        }

        /* Modern Animations */
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(16px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeInSlide {
            from {
                opacity: 0;
                transform: translateX(-8px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes pulse {
            0%, 100% {
                opacity: 1;
            }
            50% {
                opacity: 0.8;
            }
        }

        .quick-access-card,
        .category-card {
            animation: slideInUp 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .recent-item {
            animation: fadeInSlide 0.3s ease forwards;
            opacity: 0;
        }

        .quick-access-card:nth-child(2) { animation-delay: 0.05s; }
        .quick-access-card:nth-child(3) { animation-delay: 0.1s; }
        .quick-access-card:nth-child(4) { animation-delay: 0.15s; }

        /* Modern Mobile Menu Button */
        .mobile-menu-btn {
            display: none;
            position: fixed;
            top: var(--spacing-lg);
            left: var(--spacing-lg);
            z-index: 1001;
            background: var(--color-secondary-main);
            color: var(--color-text-primary);
            border: none;
            border-radius: var(--radius-full);
            width: 48px;
            height: 48px;
            font-size: 18px;
            cursor: pointer;
            box-shadow: var(--shadow-lg);
            transition: all 0.3s ease;
        }

        .mobile-menu-btn:hover {
            transform: scale(1.05);
            box-shadow: var(--shadow-xl);
        }

        @media (max-width: 768px) {
            .mobile-menu-btn {
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    `;
    document.head.appendChild(style);
};

// Make injectSidebarStyles available globally
window.injectSidebarStyles = injectSidebarStyles;
