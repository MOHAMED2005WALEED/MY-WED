# Mohamed Waleed | Portfolio

A static portfolio covering my Financial Management studies and practical work in networking, servers, and web development.

[View the portfolio](https://mohamed2005waleed.github.io/MY-WED/)

## Preview locally

From the parent directory of a checkout named `MY-WED`, run:

```sh
python -m http.server 8000
```

Open <http://localhost:8000/MY-WED/> to check the same URL prefix used by GitHub Pages.

## Styling

The responsive layouts use Tailwind CSS 2.2.19 utilities from a version-pinned, prebuilt stylesheet. Component colors, backgrounds, and animations are in `styles.css`. Start with the narrow layout in `index.html` and add `sm:`, `md:`, and `lg:` utilities for wider screens.

## Update content

- Edit the profile, skills, and project cards in `index.html`.
- Add project photos to `projects/` and update the corresponding gallery entry in `script.js`. Match each card’s gallery key and use one of the existing filter categories.
- Add certificate assets to `uploads/` and update the certificate list in `script.js`. Asset filenames are case-sensitive.
- Replace `uploads/Waleed_CV.pdf` with the latest public CV. Review it for private information before publishing.
- Keep the EmailJS owner and confirmation templates configured separately. The form treats an accepted owner message as a successful submission. Use the direct email link if the form is unavailable.

## Publish

Check the publishing source under **Settings → Pages**. Changes to the configured source are deployed by GitHub Pages. After publishing, open the live URL and check the CV, category filters, photo galleries, certificates, and contact options.
