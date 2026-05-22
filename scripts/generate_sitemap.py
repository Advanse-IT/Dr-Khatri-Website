import datetime

def generate_sitemap():
    base_url = "https://drskhatri.com.au/"
    today = datetime.date.today().isoformat()
    
    pages = [
        {"url": "", "priority": "1.0", "changefreq": "monthly"},
        {"url": "#about", "priority": "0.8", "changefreq": "monthly"},
        {"url": "#services", "priority": "0.9", "changefreq": "monthly"},
        {"url": "#recognition", "priority": "0.8", "changefreq": "monthly"},
        {"url": "#reviews", "priority": "0.8", "changefreq": "monthly"},
        {"url": "#faq", "priority": "0.7", "changefreq": "monthly"},
        {"url": "#contact", "priority": "0.9", "changefreq": "monthly"},
    ]
    
    xml_content = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml_content += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    
    for page in pages:
        xml_content += '  <url>\n'
        xml_content += f'    <loc>{base_url}{page["url"]}</loc>\n'
        xml_content += f'    <lastmod>{today}</lastmod>\n'
        xml_content += f'    <changefreq>{page["changefreq"]}</changefreq>\n'
        xml_content += f'    <priority>{page["priority"]}</priority>\n'
        xml_content += '  </url>\n'
        
    xml_content += '</urlset>'
    
    with open('/home/ubuntu/Dr-Khatri-Website/public/sitemap.xml', 'w') as f:
        f.write(xml_content)
    print("Sitemap generated successfully at /home/ubuntu/Dr-Khatri-Website/public/sitemap.xml")

if __name__ == "__main__":
    import os
    os.makedirs('/home/ubuntu/Dr-Khatri-Website/scripts', exist_ok=True)
    generate_sitemap()
