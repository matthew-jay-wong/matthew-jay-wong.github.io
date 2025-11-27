---
description: Create a new blog post with the current date
---

Create a new blog post in the `blog/` directory. Follow these steps:

1. Ask the user for the following information:
   - **Slug**: URL-friendly identifier (e.g., "my-first-post")
   - **Title**: The post title
   - **Tags**: Comma-separated tags (e.g., "sports, hockey")
   - **Category**: Main category (sports, tech, reading, movies-tv, lifestyle)

2. Get today's date in YYYY-MM-DD format

3. Create the blog post file as `blog/YYYY-MM-DD-{slug}.md` with this template:

```markdown
---
slug: {slug}
title: {title}
authors: [matthew]
tags: [{tags}]
---

[Write an engaging 2-3 sentence introduction that hooks the reader and previews what the post is about]

<!--truncate-->

## [First Section Title]

[Main content goes here]

## [Second Section Title]

[Additional content]

---

[Optional: Add a closing thought or call-to-action]
```

4. After creating the file:
   - Open it in the editor
   - Let the user know the file has been created
   - Remind them to replace the placeholder text with actual content
   - Suggest running `npm run clear` if they want to see the post immediately in development

Important notes:
- Use the author key `matthew` (defined in blog/authors.yml)
- Tags should match existing tags from blog/tags.yml when possible
- The `<!--truncate-->` marker controls what appears in the blog post list preview
- File naming format: YYYY-MM-DD-slug.md (e.g., 2024-01-15-welcome-to-sports.md)