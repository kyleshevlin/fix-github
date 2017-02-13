# Fix Github

This chrome extension will remove the `.header-dark` class from Github pages so you can have your light-colored header back.

I have not published this in the Chrome Web Store yet, so if you want this, I suggest cloning the repo, enable developer mode for Chrome Extensions, and load this extension. Works like a charm.

### Update

Within a few hours of making this, Github changed how they style their header. They removed the `.header-dark` class, and moved the styles directly on to several components (rather than cascading).

The fix for this would be to inject a stylesheet that overrides this. I don't think I want to be in a footrace with Github over their styles. For now, I already use an extension that allows me to inject custom JS and CSS on a per site basis and have done that to get the old styles back. I will assess whether updating this extension is worth it soon.
