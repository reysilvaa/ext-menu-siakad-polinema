// Modern Dark Mode Color Palette for SIAKAD Extension
const COLOR_PALETTE = {
    // Dark Mode Primary Colors - Deep dark grays
    primary: {
        main: '#0f0f0f',        // Deep dark background
        light: '#1a1a1a',       // Slightly lighter dark
        medium: '#2a2a2a',      // Medium dark surface
        dark: '#000000',        // Pure black
        contrast: '#ffffff'     // High contrast white text
    },

    // Dark Mode Secondary Colors - Modern accent
    secondary: {
        main: '#3b82f6',        // Modern blue (Next.js inspired)
        light: '#60a5fa',       // Lighter blue variant
        dark: '#1d4ed8',        // Darker blue variant
        contrast: '#ffffff'     // White text on secondary
    },

    // Dark Mode Surface Colors - Elevated surfaces
    surface: {
        primary: '#2d2d2d',     // Primary elevated surface
        secondary: '#3a3a3a',   // Secondary elevated surface
        tertiary: '#404040',    // Tertiary elevated surface
        overlay: '#525252',     // Overlay surface
        contrast: '#ffffff'     // Text on surfaces
    },

    // Dark Mode Text Colors - High contrast hierarchy
    text: {
        primary: '#ffffff',     // Primary text (highest contrast)
        secondary: '#e5e5e5',   // Secondary text
        tertiary: '#a3a3a3',    // Tertiary text (lower contrast)
        disabled: '#6b7280',    // Disabled text
        inverse: '#0f0f0f'      // Inverse text (dark on light)
    },

    // Dark Mode Border Colors - Subtle borders
    border: {
        primary: '#404040',     // Primary borders
        secondary: '#525252',   // Secondary borders
        accent: '#3b82f6',      // Accent borders
        subtle: '#2a2a2a'       // Very subtle borders
    },

    // Status Colors - Dark mode optimized
    status: {
        success: '#10b981',     // Green (dark mode optimized)
        warning: '#f59e0b',     // Amber (dark mode optimized)
        error: '#ef4444',       // Red (dark mode optimized)
        info: '#3b82f6'         // Blue (same as secondary)
    },

    // Functional Colors - Dark mode system
    functional: {
        background: '#0f0f0f',
        surface: '#1a1a1a',
        elevated: '#2d2d2d',
        border: '#404040',
        shadow: 'rgba(0, 0, 0, 0.5)',
        overlay: 'rgba(0, 0, 0, 0.8)',
        backdrop: 'rgba(0, 0, 0, 0.6)'
    },

    // Modern Dark Mode Gradients
    gradients: {
        primary: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #2a2a2a 100%)',
        secondary: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 50%, #60a5fa 100%)',
        success: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
        surface: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        sidebar: 'linear-gradient(145deg, #0f0f0f 0%, #1a1a1a 50%, #2a2a2a 100%)',
        navbar: 'linear-gradient(90deg, #0f0f0f 0%, #1a1a1a 100%)',
        glassmorphism: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
    },

    // Dark Mode Alpha Variants
    alpha: {
        background: {
            5: 'rgba(15, 15, 15, 0.05)',
            10: 'rgba(15, 15, 15, 0.1)',
            20: 'rgba(15, 15, 15, 0.2)',
            50: 'rgba(15, 15, 15, 0.5)',
            80: 'rgba(15, 15, 15, 0.8)',
            95: 'rgba(15, 15, 15, 0.95)'
        },
        surface: {
            5: 'rgba(45, 45, 45, 0.05)',
            10: 'rgba(45, 45, 45, 0.1)',
            20: 'rgba(45, 45, 45, 0.2)',
            50: 'rgba(45, 45, 45, 0.5)',
            80: 'rgba(45, 45, 45, 0.8)'
        },
        secondary: {
            5: 'rgba(59, 130, 246, 0.05)',
            10: 'rgba(59, 130, 246, 0.1)',
            20: 'rgba(59, 130, 246, 0.2)',
            30: 'rgba(59, 130, 246, 0.3)',
            50: 'rgba(59, 130, 246, 0.5)',
            80: 'rgba(59, 130, 246, 0.8)'
        },
        white: {
            5: 'rgba(255, 255, 255, 0.05)',
            10: 'rgba(255, 255, 255, 0.1)',
            15: 'rgba(255, 255, 255, 0.15)',
            20: 'rgba(255, 255, 255, 0.2)',
            30: 'rgba(255, 255, 255, 0.3)',
            50: 'rgba(255, 255, 255, 0.5)',
            80: 'rgba(255, 255, 255, 0.8)',
            90: 'rgba(255, 255, 255, 0.9)'
        }
    },

    // Dark Mode Menu Item Colors
    menuItems: {
        jadwal: '#10b981',      // Emerald (dark mode optimized)
        krs: '#3b82f6',         // Blue (secondary)
        nilai: '#f59e0b',       // Amber (dark mode optimized)
        ukt: '#8b5cf6',         // Violet (dark mode optimized)
        biodata: '#6b7280',     // Gray (dark mode optimized)
        lms: '#ef4444',         // Red (dark mode optimized)
        presensi: '#06b6d4',    // Cyan (dark mode optimized)
        surat: '#f97316'        // Orange (dark mode optimized)
    },

    // Dark Mode Hover States
    hover: {
        primary: '#2a2a2a',
        secondary: '#1d4ed8',
        surface: '#3a3a3a',
        success: '#059669',
        warning: '#d97706',
        error: '#dc2626',
        border: '#525252'
    },

    // Dark Mode Focus States
    focus: {
        primary: 'rgba(59, 130, 246, 0.25)',
        secondary: 'rgba(59, 130, 246, 0.4)',
        outline: '#3b82f6',
        ring: '0 0 0 3px rgba(59, 130, 246, 0.1)'
    },

    // Modern Spacing Scale (4px base)
    spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px'
    },

    // Modern Border Radius Scale
    radius: {
        none: '0',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        full: '9999px'
    },

    // Modern Shadow Scale
    shadows: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)',
        glow: '0 0 20px rgba(59, 130, 246, 0.3)'
    }
};

// Helper functions for color manipulation
const colorUtils = {
    // Get color with alpha
    withAlpha: (color, alpha) => {
        // Convert hex to rgba
        const hex = color.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    },
    
    // Get hover color (slightly darker)
    getHover: (color) => {
        return COLOR_PALETTE.hover[color] || color;
    },
    
    // Get contrast color (white or black based on brightness)
    getContrast: (color) => {
        // Simple contrast calculation
        const hex = color.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness > 128 ? COLOR_PALETTE.neutral.black : COLOR_PALETTE.neutral.white;
    }
};

// Modern CSS Custom Properties Generator
const generateCSSVariables = () => {
    let cssVars = ':root {\n';

    // Primary colors
    Object.entries(COLOR_PALETTE.primary).forEach(([key, value]) => {
        cssVars += `  --color-primary-${key}: ${value};\n`;
    });

    // Secondary colors
    Object.entries(COLOR_PALETTE.secondary).forEach(([key, value]) => {
        cssVars += `  --color-secondary-${key}: ${value};\n`;
    });

    // Surface colors
    Object.entries(COLOR_PALETTE.surface).forEach(([key, value]) => {
        cssVars += `  --color-surface-${key}: ${value};\n`;
    });

    // Text colors
    Object.entries(COLOR_PALETTE.text).forEach(([key, value]) => {
        cssVars += `  --color-text-${key}: ${value};\n`;
    });

    // Border colors
    Object.entries(COLOR_PALETTE.border).forEach(([key, value]) => {
        cssVars += `  --color-border-${key}: ${value};\n`;
    });

    // Status colors
    Object.entries(COLOR_PALETTE.status).forEach(([key, value]) => {
        cssVars += `  --color-status-${key}: ${value};\n`;
    });

    // Functional colors
    Object.entries(COLOR_PALETTE.functional).forEach(([key, value]) => {
        cssVars += `  --color-functional-${key}: ${value};\n`;
    });

    // Gradients
    Object.entries(COLOR_PALETTE.gradients).forEach(([key, value]) => {
        cssVars += `  --gradient-${key}: ${value};\n`;
    });

    // Menu item colors
    Object.entries(COLOR_PALETTE.menuItems).forEach(([key, value]) => {
        cssVars += `  --color-menu-${key}: ${value};\n`;
    });

    // Hover states
    Object.entries(COLOR_PALETTE.hover).forEach(([key, value]) => {
        cssVars += `  --color-hover-${key}: ${value};\n`;
    });

    // Focus states
    Object.entries(COLOR_PALETTE.focus).forEach(([key, value]) => {
        cssVars += `  --color-focus-${key}: ${value};\n`;
    });

    // Spacing scale
    Object.entries(COLOR_PALETTE.spacing).forEach(([key, value]) => {
        cssVars += `  --spacing-${key}: ${value};\n`;
    });

    // Border radius scale
    Object.entries(COLOR_PALETTE.radius).forEach(([key, value]) => {
        cssVars += `  --radius-${key}: ${value};\n`;
    });

    // Shadow scale
    Object.entries(COLOR_PALETTE.shadows).forEach(([key, value]) => {
        cssVars += `  --shadow-${key}: ${value};\n`;
    });

    // Alpha variants
    Object.entries(COLOR_PALETTE.alpha).forEach(([category, variants]) => {
        Object.entries(variants).forEach(([key, value]) => {
            cssVars += `  --alpha-${category}-${key}: ${value};\n`;
        });
    });

    cssVars += '}\n';
    return cssVars;
};

// Inject CSS variables into document
const injectColorVariables = () => {
    const style = document.createElement('style');
    style.textContent = generateCSSVariables();
    document.head.appendChild(style);
};

// Make everything available globally
window.COLOR_PALETTE = COLOR_PALETTE;
window.colorUtils = colorUtils;
window.injectColorVariables = injectColorVariables;

// Accessibility and Performance Enhancements
const accessibilityEnhancements = {
    // WCAG AA Contrast Ratios (minimum 4.5:1 for normal text, 3:1 for large text)
    validateContrast: (foreground, background) => {
        // Simple contrast ratio calculation
        const getLuminance = (color) => {
            const hex = color.replace('#', '');
            const r = parseInt(hex.substr(0, 2), 16) / 255;
            const g = parseInt(hex.substr(2, 2), 16) / 255;
            const b = parseInt(hex.substr(4, 2), 16) / 255;

            const sRGB = [r, g, b].map(c => {
                return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
            });

            return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
        };

        const l1 = getLuminance(foreground);
        const l2 = getLuminance(background);
        const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);

        return {
            ratio: ratio,
            passAA: ratio >= 4.5,
            passAAA: ratio >= 7,
            passLarge: ratio >= 3
        };
    },

    // Reduced motion preferences
    respectsReducedMotion: () => {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    },

    // High contrast mode detection
    detectHighContrast: () => {
        return window.matchMedia('(prefers-contrast: high)').matches;
    }
};

// Performance optimizations
const performanceOptimizations = {
    // Debounce function for resize events
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // CSS containment for better performance
    addContainment: () => {
        const style = document.createElement('style');
        style.textContent = `
            .enhanced-sidebar {
                contain: layout style paint;
            }
            .enhanced-navbar {
                contain: layout style;
            }
            .menu-card, .quick-access-card {
                contain: layout style paint;
            }
        `;
        document.head.appendChild(style);
    },

    // Optimize animations for performance
    optimizeAnimations: () => {
        if (accessibilityEnhancements.respectsReducedMotion()) {
            const style = document.createElement('style');
            style.textContent = `
                *, *::before, *::after {
                    animation-duration: 0.01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 0.01ms !important;
                }
            `;
            document.head.appendChild(style);
        }
    }
};

// Enhanced CSS variables with accessibility considerations
const generateAccessibleCSSVariables = () => {
    let cssVars = generateCSSVariables();

    // Add accessibility-specific variables
    cssVars += `
        /* Accessibility Enhancements */
        --focus-ring-width: 2px;
        --focus-ring-offset: 2px;
        --touch-target-min: 44px;
        --animation-duration: ${accessibilityEnhancements.respectsReducedMotion() ? '0.01ms' : '0.3s'};
        --transition-duration: ${accessibilityEnhancements.respectsReducedMotion() ? '0.01ms' : '0.3s'};

        /* High contrast mode adjustments */
        --border-contrast: ${accessibilityEnhancements.detectHighContrast() ? '2px' : '1px'};
        --text-contrast: ${accessibilityEnhancements.detectHighContrast() ? '#ffffff' : 'var(--color-text-primary)'};
    `;

    return cssVars;
};

// Initialize accessibility and performance enhancements
const initializeEnhancements = () => {
    // Apply performance optimizations
    performanceOptimizations.addContainment();
    performanceOptimizations.optimizeAnimations();

    // Listen for preference changes
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', () => {
        performanceOptimizations.optimizeAnimations();
    });

    window.matchMedia('(prefers-contrast: high)').addEventListener('change', () => {
        // Re-inject CSS variables with updated contrast settings
        const existingStyle = document.querySelector('style[data-color-variables]');
        if (existingStyle) {
            existingStyle.remove();
        }

        const style = document.createElement('style');
        style.setAttribute('data-color-variables', 'true');
        style.textContent = generateAccessibleCSSVariables();
        document.head.appendChild(style);
    });
};

// Enhanced injection function
const injectAccessibleColorVariables = () => {
    const style = document.createElement('style');
    style.setAttribute('data-color-variables', 'true');
    style.textContent = generateAccessibleCSSVariables();
    document.head.appendChild(style);
};

// Make everything available globally
window.accessibilityEnhancements = accessibilityEnhancements;
window.performanceOptimizations = performanceOptimizations;
window.initializeEnhancements = initializeEnhancements;

// Auto-inject enhanced CSS variables and initialize enhancements
injectAccessibleColorVariables();
initializeEnhancements();
