---
title: "Fix-The-Grid Website Post Contribution Guide"
date: 2026-05-14 20:39:00 +0000
author: turibius
categories: ["Commentary"]
---

# Fix-The-Grid Website Post Contribution Guide

## Option 1 (Simple)

<div style="position: relative; padding-bottom: 75%; height: 0; overflow: hidden;">
  <iframe
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    src="https://www.youtube.com/embed/l4zrKMfyr24"
    title="Contributing to the Fix The Grid Website (Simple)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

## Option 2 (Advanced)

<div style="position: relative; padding-bottom: 75%; height: 0; overflow: hidden;">
  <iframe
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    src="https://www.youtube.com/embed/n-qYgpdz2RQ"
    title="Contributing to the Fix The Grid Website"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

## Overview

There are two methods by which you can contribute to
[Fix-The-Grid](https://fix-the-grid.org/)'s blog posts:

1. Email Turibius (current maintainer, [turibius@bu.edu](mailto:turibius@bu.edu))
   with your **unformatted** post, any images/links to include, and your name.
2. Make posts yourself on [FTG's Github
   page](https://github.com/fix-the-grid/fix-the-grid.github.io).

The rest of this guide covers the latter:

1. Getting access to contribute posts to the website.
2. Making a post.
3. Submitting the post.

---

## Getting Access

This step should take less than 4 minutes on your part:

1. Go to [https://www.github.com](https://www.github.com).
2. Click 'Sign up' on top right.
3. Enter your email, password, username. Remember to save your password
   somewhere safe!
4. Verify your email.
5. Email your username to current maintainer at [turibius@bu.edu](mailto:turibius@bu.edu).
6. At some point within 2 business days, check your mail box for an invitation
   link. Accept on 'view invitation', and then accept it.

---

## Making a Post

1. Open the `_posts` folder on GitHub. [Direct link to
   posts](https://github.com/fix-the-grid/fix-the-grid.github.io/tree/master/_posts)
2. Click on 'Add file' near top right, and then 'Create new file'.
3. Follow the "Post Guide" below.
4. Submit a **pull request** (a review request).
5. The site owner reviews it, approves any changes, and publishes it.
6. You are notified when your post goes live.

---

### Post Guide

#### 1 — Naming

In the name field at the top of the editor, type your filename in this exact format:

```
YYYY-MM-DD-your-post-title.md
```

**Rules:**

- Begin with the post date: `YYYY-MM-DD` (e.g., `2026-05-14`)
- Use only **lowercase** letters, numbers, and **hyphens** (`-`)
- No spaces, capital letters, or special characters (`!`, `?`, `&`, `#`, etc.)
- End with `.md`

| ✅ Good                         | ❌ Bad                                            |
| ------------------------------- | ------------------------------------------------- |
| `2023-03-22-solidarity-work.md` | `Soliditary Work.md` — spaces, no date, uppercase |
| `2023-08-23-global-power-up.md` | `2023-08-23 global-power-up!.md` — space and `!`  |

#### 2 — Write Your Post

Copy the post template from below into the editor.
Replace all placeholder text with your content. See **Formatting Reference** for help.

```markdown
---
title: "Your Title Here"
date: YYYY-MM-DD HH:mm:ss +0000
author: your_last_name_lowercase
categories: ["Action"]
---

## Your Main Heading

Write your opening paragraph here. You can use **bold text** and _italic text_ anywhere
in your content. You can also add [a hyperlink](https://example.com) using that format.

### Another Section Heading

Add more paragraphs and sections as needed. Leave a blank line between each paragraph.

### Inserting an Image

![Description of the image here](/assets/images/your-image-filename.jpg)

### Embedding a YouTube Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_HERE"
frameborder="0" allowfullscreen></iframe>
```

**Available categories — choose exactly one, replacing `"Action"` with your choice:**

- `"Technical Analysis"`
- `"Action"`
- `"News"`
- `"Technical"`
- `"Events"`
- `"Commentary"`

---

##### Front Matter Fields Explained

The block at the very top of every post (between the two `---` lines) is called **front matter**.
All four fields are required.

| Field        | What to enter                                              | Example                        |
| ------------ | ---------------------------------------------------------- | ------------------------------ |
| `title`      | Your post title in double quotes                           | `"Summer Blockbusters Ranked"` |
| `date`       | Post date and time                                         | `2026-05-14 10:00:00 +0000`    |
| `author`     | Your last name, all lowercase, no spaces                   | `smith`                        |
| `categories` | Exactly ONE category from the list, in brackets and quotes | `["Action"]`                   |

---

#### 3 — Submit as a Pull Request ⚠️

Scroll to the bottom of the editor page to the **"Commit new file"** section.

1. Optionally type a short description in the first box, e.g., `Add post: Summer Movie Review`.
2. Select **"Create a new branch for this commit and start a pull request."**
3. Do **not** select _"Commit directly to the main branch"_ — this bypasses the review step.
4. Click **Propose new file**.
5. On the next page, click **Create pull request**.

Done! The site owner will review and publish your post when it is ready.

---

### Formatting Reference

#### Bold and Italic Text

| Style         | Type this         | Result          |
| ------------- | ----------------- | --------------- |
| Bold          | `**your text**`   | **your text**   |
| Italic        | `_your text_`     | _your text_     |
| Bold + Italic | `**_your text_**` | **_your text_** |

#### Headings

Use `##` for main section headings and `###` for sub-sections.
**Do not use a single `#`** — that level is reserved for the page title.

#### Hyperlinks

Format: `[Visible text](https://the-url.com)`

Example: `[Visit Google](https://google.com)` → creates a clickable link reading "Visit Google"

#### Images

**Image already hosted online:**

```
![Description of the image](https://example.com/image.jpg)
```

**Uploading an image from your computer:**

1. Navigate to the `assets/images/` folder in the repository.
2. Click **Add file** → **Upload files**.
3. Upload your image. Name the file with lowercase letters and hyphens only
   (e.g., `summer-poster.jpg`).
4. For this upload step only, committing directly to `main` is acceptable —
   image uploads do not affect the site layout.
5. In your post, reference it like this:

```
![Description of the image](/assets/images/summer-poster.jpg)
```

> **Tip:** Always write a meaningful description in the `[ ]` brackets —
> e.g., `[Protest Outside Of ISO-NE]`. This helps screen reader users
> and improves search engine visibility.

#### Embedding a YouTube Video

1. Find the video ID in the YouTube URL — the part after `?v=`.
   - URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
   - Video ID: `dQw4w9WgXcQ`
2. Paste the embed code below into your post on its own line.
   Replace `VIDEO_ID_HERE` with the actual ID.

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/VIDEO_ID_HERE"
  frameborder="0"
  allowfullscreen
></iframe>
```

#### Bullet Lists

```
- First item
- Second item
- Third item
```

#### Numbered Lists

```
1. First item
2. Second item
3. Third item
```

---

## Common Mistakes to Avoid

| Mistake                            | How to fix it                                                      |
| ---------------------------------- | ------------------------------------------------------------------ |
| Missing `---` in the front matter  | Both `---` lines must be on their own line with nothing else on it |
| More than one category selected    | Use exactly one, keeping both the `[ ]` brackets and `" "` quotes  |
| Using Tab key in the front matter  | Use the spacebar — tabs break the formatting                       |
| Committing directly to `main`      | Always choose _"Create a new branch → Pull request"_               |
| File not in `_posts/`              | Confirm you are inside `_posts/` before clicking "Create new file" |
| Spaces or capitals in the filename | Lowercase, numbers, and hyphens only — no spaces                   |
| Forgetting `.md` at the end        | Every post file must end with `.md`                                |

---
