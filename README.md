# 🍔 Pack Food - Professional Restaurant Website

A fully responsive, bilingual (Arabic/English) restaurant website for Pack Food - a premium fast-food establishment in King Khalid Military City, Saudi Arabia.

## ✨ Features

### 🌍 Language Support
- **Arabic as Primary Language** - RTL (Right-to-Left) layout optimized for Arabic users
- **Bilingual Interface** - Easy switch between Arabic and English
- **Language Persistence** - User's language preference is saved in localStorage

### 📱 Responsive Design
- **Mobile-First Approach** - Optimized for all device sizes
- **Tested Breakpoints** - 320px, 375px, 390px, 430px, 768px, and desktop
- **Fluid Layouts** - Adapts seamlessly to any screen size
- **Touch-Friendly** - Proper spacing and tap targets for mobile users

### 🎨 Premium Design
- **Cream & Brown Color Scheme** - Warm, inviting aesthetic
- **Smooth Animations** - Fade-up, zoom, and slide animations
- **Professional Typography** - Cairo font for Arabic, Poppins for English
- **Gradient Effects** - Modern gradient buttons and accents

### 🍽️ Menu Features
- **Dynamic Menu Tabs** - Burgers, Breakfast, Sides, Drinks
- **Full Menu Items** - 4+ items per category with descriptions and pricing
- **Responsive Menu Grid** - Single column on mobile, multi-column on desktop
- **High-Quality Images** - Optimized menu item images

### 📸 Gallery
- **Restaurant Photos** - Interior and food photography
- **Interactive Lightbox** - Click to view full-size images
- **Smooth Animations** - Zoom and fade effects
- **Lazy Loading** - Images load on demand for performance

### ⭐ Reviews System
- **Customer Testimonials** - Real reviews with ratings
- **Review Submission Form** - Users can leave their own reviews
- **Star Rating System** - Interactive 5-star rating picker
- **Responsive Layout** - Works perfectly on mobile and desktop

### 📞 Contact & Location
- **Complete Contact Info** - Phone, address, hours
- **Contact Form** - Email form for inquiries
- **Multiple Options** - Dine-in, Delivery, Takeaway available
- **Integration Ready** - Can connect to backend services

### ♿ Accessibility
- **Semantic HTML** - Proper structure for screen readers
- **Keyboard Navigation** - Full keyboard support
- **ARIA Labels** - Accessibility attributes where needed
- **Color Contrast** - WCAG compliant contrast ratios

### ⚡ Performance
- **Optimized Code** - Minified and efficient
- **Lazy Loading** - Images load when needed
- **Smooth Scrolling** - Lightweight animations
- **Fast Load Times** - Minimal dependencies

## 📁 Project Structure

```
pack-food-website/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles (mobile-first)
├── script.js           # JavaScript functionality
├── README.md          # This file
└── assets/            # Media files (to be added)
    ├── logo.svg
    ├── hero-burger.png
    ├── menu/
    │   ├── burger-1.png
    │   ├── burger-2.png
    │   └── ...
    └── gallery/
        ├── interior-1.jpg
        ├── food-1.jpg
        └── ...
```

## 🚀 Quick Start

1. **Clone the Repository**
   ```bash
   git clone https://github.com/mahamedalwali-pixel/pack-food-website.git
   cd pack-food-website
   ```

2. **Open in Browser**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server:
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

3. **Add Your Assets**
   - Replace placeholder image paths with actual restaurant images
   - Update contact information to match your location
   - Customize menu items and prices

## 🎯 Sections

### Header & Navigation
- Logo with restaurant name
- Navigation menu with smooth scrolling
- Language switcher (Top-right)
- Mobile hamburger menu with animations

### Hero Section
- Eye-catching title and subtitle
- Call-to-action button
- Hero image with shadow effects
- Animated entrance animations

### Quick Info
- Operating hours
- Star ratings
- Delivery options
- Card-based layout with hover effects

### Menu
- Category tabs (Burgers, Breakfast, Sides, Drinks)
- Menu items with:
  - Product images
  - Arabic name and description
  - Single and double pricing
  - Smooth hover animations

### Gallery
- Restaurant interior photos
- Food photography
- Interactive lightbox viewer
- Zoom animations on hover

### Reviews
- Customer testimonial cards
- Star ratings
- Submission form with rating picker
- Form validation and success messages

### Contact
- Address and location
- Phone number (clickable)
- Business hours
- Contact form for inquiries
- Multiple service options

### Footer
- Company information
- Quick links
- Social media icons
- Copyright information

## 🎨 Color Scheme

```css
Primary Color:      #D4713D (Warm Orange-Brown)
Primary Dark:       #B85C2C (Darker Brown)
Secondary Color:    #8B7355 (Neutral Brown)
Accent Color:       #F5A962 (Light Orange)
Light Background:   #FBF8F3 (Cream)
Dark Background:    #2C2C2C (Dark Gray)
Text Dark:          #333333
Text Light:         #666666
```

## 📱 Responsive Breakpoints

| Device | Width | Breakpoint |
|--------|-------|-----------|
| Small Mobile | 320px | Extra Small |
| Mobile | 375px | Small |
| Mobile | 390px - 430px | Medium |
| Tablet | 768px | Medium |
| Desktop | 1024px+ | Large |

## ✅ Testing Checklist

- [x] Mobile responsiveness (320px - 430px)
- [x] Tablet responsiveness (768px)
- [x] Desktop responsiveness (1024px+)
- [x] Arabic RTL layout
- [x] English LTR layout
- [x] Language switching functionality
- [x] Mobile menu hamburger
- [x] Menu tabs switching
- [x] Form submissions
- [x] Image galleries
- [x] Smooth scrolling
- [x] Animations and transitions
- [x] Cross-browser compatibility

## 🔧 Customization

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #D4713D;
    --accent-color: #F5A962;
    /* ... more colors ... */
}
```

### Update Text
All text uses `data-ar` and `data-en` attributes for bilingual support:
```html
<h1 data-ar="النص بالعربية" data-en="English Text">النص بالعربية</h1>
```

### Add Menu Items
Duplicate a menu item in the appropriate category and update the content.

### Change Fonts
Modify font imports in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

## 📊 SEO & Meta Tags

The website includes:
- Proper meta description
- Open Graph tags (ready to customize)
- Semantic HTML structure
- Mobile-friendly viewport
- Structured data ready

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 Files Overview

### index.html
- Complete semantic HTML structure
- Bilingual content with data attributes
- All sections and components
- Font and icon library imports

### styles.css
- Mobile-first responsive design
- CSS custom properties for theming
- Animations and transitions
- Breakpoint-specific styles
- Accessibility considerations

### script.js
- Language switching with persistence
- Mobile navigation functionality
- Menu tab switching
- Form handling and validation
- Scroll animations
- Gallery lightbox
- Keyboard navigation
- Error handling

## 🔐 Security Notes

- Forms are client-side validated
- To submit forms to a server, update the form handlers in `script.js`
- Sanitize any user input on the backend
- Use HTTPS when deploying

## 📞 Contact Information

**Pack Food Restaurant**
- 📍 King Khalid Military City 39748
- 📱 +966 53 080 9125
- ⏰ Open until 2 AM daily
- 🚗 Delivery, Dine-in, Takeaway available

## 📝 License

This project is open source and available for commercial use.

## 🙌 Credits

- Design: Professional Restaurant Website
- Code: Modern, Accessible, Responsive
- Assets: To be provided by restaurant

## 📞 Support & Updates

For updates, issues, or suggestions, please visit the GitHub repository.

---

**Made with ❤️ for Pack Food Restaurant**

Version: 1.0.0  
Last Updated: September 2026
