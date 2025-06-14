# TUYU Official Website - HTTrack Copy

This is a working copy of the TUYU official website (tuyu-official.jp) created using HTTrack and fixed to work properly as a static site.

## What Was Fixed

The original HTTrack copy had several issues that have been comprehensively resolved:

### 🔧 External Resources Fixed
- **Google Fonts**: Downloaded locally (Noto Sans JP font family)
- **jQuery**: Downloaded locally (versions 2.2.4 and 3.3.1)
- **FontAwesome**: Downloaded locally (kit ae8d61688b)
- **Google Analytics**: Fixed tracking script references
- **CloudFront CDN**: Downloaded 174 CloudFront images locally and fixed all paths
- **All External Assets**: Now served locally from `/lib/` directory

### 🔗 Social Media Links Fixed
- **Twitter**: Fixed links to @TUYU_official and @TUYU_staff
- **Instagram**: Fixed link to @rei_tuyu
- **Facebook**: Fixed Facebook page link
- **TikTok**: Fixed TikTok profile link
- **YouTube**: Fixed YouTube channel and video links
- **Bilibili**: Fixed Bilibili space link
- **Weibo**: Fixed Weibo profile link

### 🎵 Media Links Fixed
- **YouTube Videos**: All embedded videos now link to proper YouTube URLs
- **Music Streaming**: Fixed links to music platforms
- **Video Thumbnails**: YouTube thumbnails load from proper CDN

### 🌐 Domain & URL Fixes
- **Internal Navigation**: All internal links stay within current domain
- **Absolute URLs**: Converted tuyu-official.jp absolute URLs to relative paths
- **WordPress Uploads**: Fixed wp-content upload paths
- **Protocol-relative URLs**: Fixed // URLs to use https://
- **Meta Tags**: Updated meta tag references to use relative paths
- **JavaScript/CSS**: Fixed hardcoded domain references in scripts and styles

## How to Use

### 1. Start Local Server
```bash
python3 -m http.server 8000
```

### 2. Open in Browser
Navigate to: `http://localhost:8000`

### 3. Alternative Servers
You can also use other local servers:

**Node.js (if you have it installed):**
```bash
npx http-server -p 8000
```

**PHP (if you have it installed):**
```bash
php -S localhost:8000
```

## Features That Work

✅ **Navigation**: All internal site navigation works  
✅ **Responsive Design**: Mobile and desktop layouts  
✅ **Images**: All local images display correctly  
✅ **CSS/JS**: All styling and interactive elements work  
✅ **External Links**: Social media and streaming links work  
✅ **YouTube Integration**: Video thumbnails and links work  
✅ **Multi-language**: Both Japanese and English versions work  

## Limitations

⚠️ **Dynamic Features**: This is a static copy, so these won't work:
- Contact forms (no backend processing)
- Search functionality
- User comments or interactions
- Real-time content updates
- WordPress admin features

⚠️ **External Integrations**: Some third-party widgets may not function perfectly

## File Structure

```
├── index.html              # Main homepage
├── en/                     # English version
├── discography/            # Music releases
├── live/                   # Live events and tours
├── news/                   # News articles
├── profile/                # Artist profiles
├── works/                  # Works and collaborations
├── contact/                # Contact information
├── css/                    # Stylesheets
├── js/                     # JavaScript files
├── images/                 # Site images
├── lib/                    # External assets (jQuery, FontAwesome, Google Fonts)
└── cloudfront/             # Downloaded CloudFront images (174 files)
```

## Technical Details

- **Original Site**: tuyu-official.jp (WordPress)
- **HTTrack Version**: 3.x
- **Fixes Applied**: 
  - 226 HTML files processed for CloudFront paths
  - 199 HTML files fixed for external JavaScript references
  - 197 HTML files updated to use local external assets
  - 174 CloudFront images downloaded locally
  - 5 external assets downloaded locally (jQuery, FontAwesome, Google Fonts)
- **External CDNs**: All external assets now served locally (no CDN dependencies)
- **Social Links**: Fixed all major social media platforms
- **Domain Handling**: All URLs properly redirect to current domain
- **File Types Fixed**: HTML, CSS, JavaScript files
- **Loading Issues**: Resolved JavaScript dependency issues in English version and subdirectories
- **English Version**: Fixed broken wp-content image paths in `/en/` directory

---

**Archive Notice**: This repository is an archival copy of the original tuyu-official.jp website, created to preserve the site's content after it was taken offline. This GitHub project exists solely for preservation, educational, and research purposes, and is not affiliated with, endorsed by, or connected to TUYU or their management. All rights to the original content remain with their respective owners.

This archive is maintained by a Dutch individual. The project is provided in accordance with Dutch copyright law (Auteurswet), including exceptions for non-commercial archiving, research, and fair use. If you are a rights holder and wish to request removal or modification of specific content, please contact the repository maintainer.