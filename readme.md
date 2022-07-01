# Yt Sub Grabber
Export a CSV of all your YouTube subscriptions for use in [NewPipe](https://newpipe.net/) and [FreeTube](https://freetubeapp.io/)

> ⚠️  This extension is to be considered buggy abandonware. Feel free to fork it and improve it. 
It has done what I need it to do so I probably won't work it on it any more.

## Why & What?
I got sick of having to use google takeout every time I wanted to update my subscriptions
in FreeTube and Newpipe. This extension adds a super simple button to your manage subscriptions
page that will save them as a CSV in the same format as Google Takeout.

## Installation
### Firefox prebuilt
Check the releases section for an installable firefox extension. It is unsigned which means you
will have to do one of the following:  
- [Temporarily install the extension via `about:debugging`](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox)
- [Sign it yourself](https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#web-ext-sign) 
- [Use a browser that allows the use of unsigned extensions](https://support.mozilla.org/en-US/kb/add-on-signing-in-firefox#w_what-are-my-options-if-i-want-to-use-an-unsigned-add-on-advanced-users)

### From source
Use the web-ext tool to run the source code in your browser of choice. See below for non-firefox browsers. 

### Other browsers
This extension was written following the web-ext spec so it *should* work on Chrome, Edge etc. however
I have not and do not plan to test it.

## Usage
The extension adds a button on to the [manage subscriptions](https://www.youtube.com/feed/channels) 
page of youtube. If you navigate there from a different youtube page, you may have to refresh to
force the button to show up. There is code to check when the page changes and reload the button, but
it obviously doesn't work.

After clicking the button, the page will begin to auto-scroll to the bottom to make sure that all
of your subscriptions have been loaded, so be patient. It will then download a CSV file with your subscriptions.

## Devloping
I used [Deno](https://deno.land/), 
[esbuild](https://esbuild.github.io/) 
& [Velociraptor](https://velociraptor.run/) to facilitate building the extension with typescript.  

Once you have those installed you can:
- Transpile the typescript to javascrip with `vr build`
- Wrap up the compiled javascript into a firefox extension with `vr dist` (only works on unix(like) OSes probably)

## Disclaimer
Use this extension at your own risk. The CSV is generated using undocumented data on the youtube
webpage. It could change or become unavailable at any time. There are other ways to generate this
data so if it stops working, let me know and I'll document what I found. (*Hint: re-implement the extension
for m.youtube.com*)
 
