# Portfy Templates

Free, open-source portfolio templates from [EasyLife Solutions](https://portfolio.easylife.solutions). Fill in one file, get a clean personal website with light and dark modes — no build step, no framework, no cost.

It ships with two templates:

- **`index.html` — Personal portfolio**: about, skills, projects, experience and contact.
- **`business.html` — Small-business / freelancer site**: selected work, services, why-us, a four-step process and an enquiry form.

This repo is the open-source companion to **Portfy** ([portfolio.easylife.solutions](https://portfolio.easylife.solutions)), where you can also build a portfolio and an ATS-friendly resume without writing any code.

## Features

- **One file to edit** — all your content lives in `profile.js`
- **Light & dark mode** — follows the visitor's system setting, with a toggle
- **Responsive** — works on phones, tablets and desktops
- **Contact form without a backend** — opens the visitor's email app with the message filled in
- **Zero dependencies** — plain HTML, CSS and JavaScript
- **Free hosting ready** — deploy to GitHub Pages, Netlify or Vercel in a minute

## Quick start

1. Click **Use this template** (or fork / download this repo).
2. Open `profile.js` and replace the sample details with your own.
3. Add your `resume.pdf` to the folder (or set `resumeUrl` to `""` to hide the button).
4. Open `index.html` in your browser to preview.

## Deploy on GitHub Pages

1. Push the files to a public repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

## Project structure

```
index.html           Portfolio template
profile.js           Your portfolio content — edit this
app.js               Renders the portfolio, theme toggle and contact form
business.html        Business / freelancer template
business-profile.js  Your business content — edit this
business.js          Renders the business page and enquiry form
style.css            Shared theme colors, typography and layout
```

## Security

These templates have no backend and need no API keys, passwords or tokens. Contact forms open the visitor's own email app. Never commit credentials to `profile.js` or `business-profile.js` — they are public.

## Customizing

- **Colors:** change the variables at the top of `style.css` (`--accent`, `--bg`, and so on). Dark-mode colors are defined right below.
- **Sections:** remove a section from `index.html` and its data from `profile.js` if you don't need it.

## Contributing

New templates, accessibility fixes and bug reports are all welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE) © 2026 EasyLife Solutions
