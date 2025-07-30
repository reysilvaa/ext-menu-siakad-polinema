// Universal Color Palette for SIAKAD Extension
const COLOR_PALETTE = {
    // Primary Colors
    primary: {
        main: '#2c3e50',        // Dark blue-gray (main brand color)
        light: '#34495e',       // Lighter variant
        dark: '#1a252f',        // Darker variant
        contrast: '#ffffff'     // Text on primary
    },
    
    // Secondary Colors  
    secondary: {
        main: '#3498db',        // Clean blue (accent color)
        light: '#5dade2',       // Lighter variant
        dark: '#2980b9',        // Darker variant
        contrast: '#ffffff'     // Text on secondary
    },
    
    // Neutral Colors
    neutral: {
        white: '#ffffff',
        light: '#f8f9fa',       // Very light gray
        medium: '#e9ecef',      // Medium gray
        dark: '#6c757d',        // Dark gray
        black: '#212529'        // Almost black
    },
    
    // Status Colors (using palette harmony)
    status: {
        success: '#27ae60',     // Green (complementary to primary)
        warning: '#f39c12',     // Orange (triadic)
        error: '#e74c3c',       // Red (complementary to success)
        info: '#3498db'         // Same as secondary
    },
    
    // Functional Colors
    functional: {
        background: '#f8f9fa',
        surface: '#ffffff',
        border: '#e9ecef',
        shadow: 'rgba(44, 62, 80, 0.15)',
        overlay: 'rgba(44, 62, 80, 0.8)'
    },
    
    // Gradient Combinations
    gradients: {
        primary: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
        secondary: 'linear-gradient(135deg, #3498db 0%, #5dade2 100%)',
        success: 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)',
        sidebar: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        navbar: 'linear-gradient(90deg, #2c3e50 0%, #34495e 100%)'
    },
    
    // Transparency Variants
    alpha: {
        primary: {
            10: 'rgba(44, 62, 80, 0.1)',
            20: 'rgba(44, 62, 80, 0.2)',
            30: 'rgba(44, 62, 80, 0.3)',
            50: 'rgba(44, 62, 80, 0.5)',
            80: 'rgba(44, 62, 80, 0.8)'
        },
        secondary: {
            10: 'rgba(52, 152, 219, 0.1)',
            20: 'rgba(52, 152, 219, 0.2)',
            30: 'rgba(52, 152, 219, 0.3)',
            50: 'rgba(52, 152, 219, 0.5)',
            80: 'rgba(52, 152, 219, 0.8)'
        },
        white: {
            10: 'rgba(255, 255, 255, 0.1)',
            20: 'rgba(255, 255, 255, 0.2)',
            30: 'rgba(255, 255, 255, 0.3)',
            50: 'rgba(255, 255, 255, 0.5)',
            80: 'rgba(255, 255, 255, 0.8)',
            90: 'rgba(255, 255, 255, 0.9)'
        }
    },
    
    // Menu Item Colors (using harmonious palette)
    menuItems: {
        jadwal: '#27ae60',      // Green
        krs: '#3498db',         // Blue (secondary)
        nilai: '#f39c12',       // Orange
        ukt: '#9b59b6',         // Purple (complementary)
        biodata: '#34495e',     // Dark gray
        lms: '#e74c3c',         // Red
        presensi: '#16a085',    // Teal
        surat: '#d35400'        // Dark orange
    },
    
    // Hover States
    hover: {
        primary: '#34495e',
        secondary: '#2980b9',
        success: '#229954',
        warning: '#e67e22',
        error: '#c0392b',
        light: '#e9ecef'
    },
    
    // Focus States
    focus: {
        primary: 'rgba(44, 62, 80, 0.25)',
        secondary: 'rgba(52, 152, 219, 0.25)',
        outline: '#3498db'
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

// CSS Custom Properties Generator
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
    
    // Neutral colors
    Object.entries(COLOR_PALETTE.neutral).forEach(([key, value]) => {
        cssVars += `  --color-neutral-${key}: ${value};\n`;
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

// Auto-inject CSS variables
injectColorVariables();
