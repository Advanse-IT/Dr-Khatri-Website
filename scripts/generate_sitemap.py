import datetime

def generate_sitemap():
    base_url = "https://drskhatri.com.au/"
    pages = [
        {"loc": "", "priority": "1.0", "changefreq": "monthly"},
        {"loc": "about", "priority": "0.8", "changefreq": "monthly"},
        {"loc": "services", "priority": "0.9", "changefreq": "monthly"},
        {"loc": "recognition", "priority": "0.8", "changefreq": "monthly"},
        {"loc": "reviews", "priority": "0.8", "changefreq": "monthly"},
        {"loc": "faq", "priority": "0.7", "changefreq": "monthly"},
        {"loc": "contact", "priority": "0.9", "changefreq": "monthly"},
        {"loc": "legal", "priority": "0.5", "changefreq": "monthly"},
    ]

    now = datetime.datetime.now().strftime("%Y-%m-%d")

    sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n'
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

    for page in pages:
        sitemap += '  <url>\n'
        sitemap += f'    <loc>{base_url}{page["loc"]}</loc>\n'
        sitemap += f'    <lastmod>{now}</lastmod>\n'
        sitemap += f'    <changefreq>{page["changefreq"]}</changefreq>\n'
        sitemap += f'    <priority>{page["priority"]}</priority>\n'
        sitemap += '  </url>\n'

    sitemap += '</urlset>'

    with open("public/sitemap.xml", "w") as f:
        f.write(sitemap)
    print("Sitemap generated successfully!")

if __name__ == "__main__":
    generate_sitemap()
