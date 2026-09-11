# ASSETS GUIDE

This directory contains all media files for the Pack Food website.

## Directory Structure

```
assets/
├── logo.svg                 # Restaurant logo (SVG format)
├── hero-burger.png         # Hero section burger image
├── menu/                   # Menu item images
│   ├── burger-1.png       # Grilled Chicken Burger
│   ├── burger-2.png       # Beef Burger
│   ├── burger-3.png       # Classic Burger
│   ├── burger-4.png       # Shrimp Burger
│   ├── breakfast-1.png    # Chicken Sandwich with Fries
│   ├── breakfast-2.png    # Smoked Meat Sandwich
│   ├── breakfast-3.png    # Hot Dog
│   ├── breakfast-4.png    # Falafel Wrap
│   ├── sides-1.png        # French Fries
│   ├── sides-2.png        # Onion Rings
│   ├── sides-3.png        # Coleslaw
│   ├── sides-4.png        # Vegetable Salad
│   ├── drinks-1.png       # Soft Drink
│   ├── drinks-2.png       # Fresh Juice
│   ├── drinks-3.png       # Milkshake
│   └── drinks-4.png       # Iced Coffee
└── gallery/               # Gallery images
    ├── interior-1.jpg     # Restaurant interior
    ├── interior-2.jpg     # Restaurant interior
    ├── food-1.jpg        # Food photography
    └── food-2.jpg        # Food photography
```

## Image Specifications

### Logo (logo.svg)
- Format: SVG
- Size: 200x200px recommended
- Content: Pack Food logo from image 5

### Hero Image (hero-burger.png)
- Format: PNG with transparency
- Size: 600x600px recommended
- Content: High-quality burger image

### Menu Item Images
- Format: PNG or JPG
- Size: 400x300px recommended
- Content: High-quality food photography
- Should show the actual menu items

### Gallery Images
- Format: JPG
- Size: 1200x800px recommended
- Quality: High resolution
- Content: Interior and food photos

## How to Add Images

1. **Create the assets folder structure**
   ```bash
   mkdir -p assets/menu
   mkdir -p assets/gallery
   ```

2. **Add your image files**
   - Place logo.svg in the assets folder
   - Place menu images in assets/menu/
   - Place gallery images in assets/gallery/

3. **Update image paths if needed**
   - Current paths in index.html: `assets/logo.svg`, `assets/menu/burger-1.png`, etc.
   - If you use different filenames, update the src attributes in index.html

## Image Optimization Tips

- Use compression tools (TinyPNG, ImageOptim)
- Keep file sizes under 200KB for web
- Use PNG for images with transparency
- Use JPG for photographs
- Use SVG for logos and icons
- Provide responsive images using srcset for better mobile performance

## Notes

- All paths are relative from the root directory
- Ensure image filenames match exactly (case-sensitive on Linux/Mac)
- Always backup original high-resolution images separately
