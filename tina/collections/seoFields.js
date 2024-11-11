const seoFields = {
    type: 'object',
    label: 'SEO Fields',
    name: 'seoFields',
    fields: [
        {
            type: 'string',
            name: 'metaTitle',
            label: 'Meta Title'
        },
        {
            type: 'string',
            name: 'metaDescription',
            label: 'Meta Description'
        },
        {
            type: 'string',
            name: 'metaKeywords',
            label: 'Meta Keywords'
        },
        {
            type: 'string',
            name: 'ogTitle',
            label: 'Open Graph Title'
        },
        {
            type: 'string',
            name: 'ogDescription',
            label: 'Open Graph Description'
        },
        {
            type: 'image',
            name: 'ogImage',
            label: 'Open Graph Image'
        },
        {
            type: 'number',
            name: 'ogImageWidth',
            label: 'Open Graph Image Width'
        },
        {
            type: 'number',
            name: 'ogImageHeight',
            label: 'Open Graph Image Height'
        },
        {
            type: 'string',
            name: 'ogImageType',
            label: 'Open Graph Image Type'
        },
        {
            type: 'string',
            name: 'ogImageAlt',
            label: 'Open Graph Image Alt'
        },
        {
            type: 'string',
            name: 'ogUrl',
            label: 'Open Graph URL'
        },
        {
            type: 'string',
            name: 'ogSiteName',
            label: 'Open Graph Site Name'
        },
        {
            type: 'string',
            name: 'ogLocale',
            label: 'Open Graph Locale'
        },
        {
            type: 'string',
            name: 'ogType',
            label: 'Open Graph Type'
        },
        {
            type: 'string',
            name: 'twitterTitle',
            label: 'Twitter Card Title'
        },
        {
            type: 'string',
            name: 'twitterDescription',
            label: 'Twitter Card Description'
        },
        {
            type: 'image',
            name: 'twitterImage',
            label: 'Twitter Card Image'
        },
        {
            type: 'string',
            name: 'canonicalUrl',
            label: 'Canonical URL'
        }
    ]
}

export default seoFields
