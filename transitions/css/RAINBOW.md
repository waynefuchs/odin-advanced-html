# The Rainbow Effect Explanation

In the _"The Odin Project" > "Full Stack JavaScript" > "Advanced HTML and CSS" > "Transitions"_ lesson, the last paragraph of the lesson reads:

> "What’s important is that you have a solid understanding of these concepts and can apply them when necessary because hey, if you need to turn a button into a rainbow when it’s hovered over, you better be able to transition that rainbow!"

On the face of things, this effect seems simple. But, I ended up spending quite a few hours developing this effect. I've attempted to add the things that I learned to my `odin-notes` project.

The v1 effect itself isn't incredibly difficult. However, when you want various 'extras', things begin to snowball in complexity.

## v1

Version 1 uses a solid-color "curtain", where the alpha channel of said curtain transitions to 0 to reveal the "image" (gradient) in a container behind the button when the mouse is hovered over the curtain. This is slightly problematic. You can not change the opacity of the curtain container, because the button must be nested as a child, which causes the button itself to transition to a transparent state.

This means that you can not have an image or gradient set as the button background.

Another "issue", for me, in this effect was the convoluted HTML it required, and I like having a clean HTML document without many nested container elements for formatting. So when I finally got the effect working, it really bothered me that I hadn't come up with a 'cleaner' solution. So I kept at it for another few hours spread out over the course of a week or so as I had time, and "Rainbow v2" is the result.

## v2

I utilized ChatGPT a bit for the first time trying to get this to work. It turns out ChatGPT was very bad at coming up with a solution, but reading through the CSS "code" that it generated gave me some ideas that I hadn't thought of.

Some of the terminology that ChatGPT used made me realize that the `linear-gradient` is functionally equivalent to using an image as the background. I had been struggling to change the transparency of the colors in the gradient. Once I realized this wasn't possible, I started to think a bit differently about the problem. I decided to try and use a `::before` element, chaining it with `:hover`. It was very cool to see that was possible.

Because the `::before` element can be made completely opaque without affecting the button itself, this ends up removing the need for nested containers. The remaining issue is that the inner dimensions of the container extend to the inner dimensions, sitting between the point between the inner border and the start of the padding space. This means that the border-radius had to be adjusted. This is an easy enough change.

> TODO: Revisit in the future.
>
> There was some strange behavior involving the z-index that was a bit difficult to diagnose and debug. I still don't completely understand why setting the z-index to 2 and 1 does not work, while setting it to 1 and -1 does work.

## Conclusion

I spent way too much time on this. Going to leave it here in its present state unless otherwise needed in some future project. But I know that is unlikely, as the effect isn't even very glamorous.
