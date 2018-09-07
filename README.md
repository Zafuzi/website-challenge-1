# Diurnum | Website-Challenge-1
[Live Version](https://zfoutz.com/projects/website-challenge-1)

## Technologies
- HTML5 for markup
- CSS3 using css-grid for layout and styles
- JavaScript for loading images
- [replicate.js](https://github.com/sleeplessinc/replicate) to make loading elements through JavaScript easier

## Summary
Initially I planned on creating something fairly complicated. It involved animation and placing images in a circle in the center of the screen. Overall it was somewhat successful, but in the end it had too many issues to overcome the design choices I made.

Instead of focusing on complicated design I decided to try something new. I have had extensive experience with flexbox, and despite it's failings I love to use it; however, this challenge is about creating something that isn't just a copy pasta of the last thing I did, so I opted to learn about css-grid and try putting it into practice.

There are many tutorials available for css-grid, so I won't get into that. Suffice it to say that after the initial shock of having to learn so many new terms and ideas, css-grid began to shine when I realized how simple mobile development with it was.

For example changing this:
```css
/* Mobile Layout is default */
body {
    display: grid;
    min-height: 100vh;
    min-width: 100%;
    grid-template-rows: 40px 1fr;
    grid-template-columns: 1fr;
    grid-template-areas: 
        "sidebar"
        "content";
}
```
into this...
```css
/* Desktop Layout for any screen larger than 600px */
@media only screen and (min-width: 600px) {
    body {
        grid-template-columns: 100px 1fr;
        grid-template-rows: 1fr;
        grid-template-areas:
            "sidebar  content";
    }
}
```

Gave me a perfect mobile and desktop layout without the normal headache and code involved with trying to use flexbox. Even though there is still plenty I could improve upon, it was a great learning experience and I can't wait for the next challenge.

## Images
### FIRST TRY
[First Try](https://zfoutz.com/projects/website-challenge-1/images/firsttry.png)

### FINAL DESKTOP
[Final Desktop](https://zfoutz.com/projects/website-challenge-1/images/final_desktop.png)

### FINAL MOBILE (S5)
[Final Mobile (S5)](https://zfoutz.com/projects/website-challenge-1/images/final_mobile.png)
