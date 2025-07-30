// Enhanced Sidebar Styles
const injectSidebarStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
        /* Enhanced Sidebar Container - Scrollable Sidebar */
        .enhanced-sidebar {
            width: 240px;
            background: linear-gradient(145deg, var(--color-primary-main) 0%, var(--color-primary-light) 50%, var(--color-secondary-dark) 100%);
            height: calc(100vh - 55px);
            padding: 20px 16px 16px 16px;
            box-shadow: 4px 0 20px var(--color-functional-shadow);
            position: fixed;
            left: 0;
            top: 55px;
            z-index: 1000;
            overflow-y: auto;
            overflow-x: hidden;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            backdrop-filter: blur(10px);
            border-right: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Section Titles - Modern Typography */
        .enhanced-sidebar .section-title {
            color: rgba(255, 255, 255, 0.95);
            font-size: 13px;
            font-weight: 700;
            margin: 0 0 16px 0;
            padding: 8px 12px 8px 0;
            border-bottom: 2px solid rgba(255, 255, 255, 0.15);
            text-transform: uppercase;
            letter-spacing: 1px;
            position: relative;
            display: flex;
            align-items: center;
        }

        .enhanced-sidebar .section-title::before {
            content: '';
            width: 4px;
            height: 16px;
            background: var(--color-secondary-main);
            border-radius: 2px;
            margin-right: 8px;
            box-shadow: 0 0 8px rgba(52, 152, 219, 0.4);
        }

        /* Quick Access Section - Modern Cards */
        .quick-access-section {
            margin-bottom: 24px;
        }

        .quick-access-grid {
            display: grid;
            gap: 10px;
        }

        .quick-access-card {
            background: rgba(255, 255, 255, 0.98);
            border-radius: 12px;
            padding: 14px 12px;
            display: flex;
            align-items: center;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(8px);
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
            background: linear-gradient(90deg, transparent, var(--color-secondary-main), transparent);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .quick-access-card:hover {
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
            background: rgba(255, 255, 255, 1);
            border-color: rgba(52, 152, 219, 0.3);
        }

        .quick-access-card:hover::before {
            opacity: 1;
        }

        .quick-access-card:active {
            transform: translateY(-1px) scale(1.01);
        }

        .quick-icon {
            font-size: 20px;
            margin-right: 12px;
            width: 24px;
            text-align: center;
            transition: all 0.3s ease;
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        }

        .quick-access-card:hover .quick-icon {
            transform: scale(1.1);
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
        }

        .card-content {
            flex: 1;
            min-width: 0;
        }

        .card-title {
            font-weight: 700;
            color: var(--color-primary-main);
            margin-bottom: 3px;
            font-size: 13px;
            line-height: 1.2;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .card-desc {
            font-size: 10px;
            color: var(--color-neutral-dark);
            line-height: 1.3;
            opacity: 0.8;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        /* Search Section - Compact */
        .search-section {
            margin-bottom: 18px;
        }

        .search-container {
            position: relative;
        }

        .search-input {
            width: 100%;
            padding: 8px 35px 8px 12px;
            border: none;
            border-radius: 20px;
            background: rgba(255,255,255,0.9);
            font-size: 12px;
            outline: none;
            transition: all 0.3s ease;
        }

        .search-input:focus {
            background: white;
            box-shadow: 0 0 0 3px rgba(255,255,255,0.3);
        }

        .search-icon {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: #666;
            font-size: 16px;
        }

        /* Categorized Menu */
        .categorized-menu-section {
            margin-bottom: 20px;
        }

        .category-card {
            margin-bottom: 12px;
            border-radius: 12px;
            overflow: hidden;
            background: rgba(255,255,255,0.1);
            backdrop-filter: blur(10px);
        }

        .category-header {
            padding: 15px;
            color: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            transition: all 0.3s ease;
        }

        .category-header:hover {
            background: rgba(255,255,255,0.1);
        }

        .category-header i:first-child {
            margin-right: 12px;
            font-size: 18px;
            width: 20px;
            text-align: center;
        }

        .category-name {
            flex: 1;
            font-weight: 600;
            font-size: 14px;
        }

        .category-toggle {
            font-size: 12px;
            transition: transform 0.3s ease;
        }

        .category-items {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            background: rgba(255,255,255,0.95);
        }

        .category-items.expanded {
            max-height: 300px;
        }

        .category-item {
            padding: 12px 20px;
            cursor: pointer;
            transition: all 0.2s ease;
            border-bottom: 1px solid rgba(0,0,0,0.05);
            color: #333;
            font-size: 13px;
        }

        .category-item:hover {
            background: rgba(102, 126, 234, 0.1);
            padding-left: 25px;
        }

        .category-item:last-child {
            border-bottom: none;
        }

        /* Recent Section - Non-scrollable, Sidebar Scrolls Instead */
        .recent-section {
            margin-bottom: 16px;
        }

        .recent-list {
            background: rgba(255, 255, 255, 0.08);
            border-radius: 12px;
            overflow: visible;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .recent-item {
            padding: 10px 12px;
            cursor: pointer;
            transition: all 0.3s ease;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            position: relative;
        }

        .recent-item:hover {
            background: rgba(255, 255, 255, 0.15);
            transform: translateX(4px);
        }

        .recent-item:last-child {
            border-bottom: none;
        }

        .recent-title {
            color: rgba(255, 255, 255, 0.95);
            font-size: 12px;
            font-weight: 600;
            margin-bottom: 3px;
            line-height: 1.3;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 100%;
        }

        .recent-time {
            color: rgba(255, 255, 255, 0.6);
            font-size: 10px;
            font-weight: 400;
        }

        .empty-recent {
            padding: 24px 16px;
            text-align: center;
            color: rgba(255, 255, 255, 0.6);
            font-size: 12px;
            font-style: italic;
            line-height: 1.4;
        }



        /* Toggle Button - Modern Design */
        .sidebar-toggle-btn {
            width: 100%;
            padding: 10px 16px;
            background: rgba(255, 255, 255, 0.15);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 20px;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 600;
            font-size: 12px;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            margin-top: 12px;
            backdrop-filter: blur(8px);
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .sidebar-toggle-btn:hover {
            background: rgba(255, 255, 255, 0.25);
            border-color: rgba(255, 255, 255, 0.4);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
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

        /* Enhanced Sidebar Scrollbar Styling */
        .enhanced-sidebar::-webkit-scrollbar {
            width: 6px;
        }

        .enhanced-sidebar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 3px;
        }

        .enhanced-sidebar::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 3px;
            transition: background 0.3s ease;
        }

        .enhanced-sidebar::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.4);
        }

        .enhanced-sidebar::-webkit-scrollbar-corner {
            background: transparent;
        }

        /* Animation for cards and items */
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeInSlide {
            from {
                opacity: 0;
                transform: translateX(-10px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        .quick-access-card,
        .category-card {
            animation: slideInUp 0.5s ease forwards;
        }

        .recent-item {
            animation: fadeInSlide 0.4s ease forwards;
            opacity: 0;
        }

        .quick-access-card:nth-child(2) { animation-delay: 0.1s; }
        .quick-access-card:nth-child(3) { animation-delay: 0.2s; }
        .quick-access-card:nth-child(4) { animation-delay: 0.3s; }

        /* Mobile menu button */
        .mobile-menu-btn {
            display: none;
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 1001;
            background: #667eea;
            color: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            font-size: 20px;
            cursor: pointer;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }

        @media (max-width: 768px) {
            .mobile-menu-btn {
                display: block;
            }
        }
    `;
    document.head.appendChild(style);
};

// Make injectSidebarStyles available globally
window.injectSidebarStyles = injectSidebarStyles;
