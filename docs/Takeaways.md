# Takeaways

## SVGs with embedded raster images

### Problem: SVGs with embedded images do not render in Safari on reload or dynamic styling changes

In general, SVGs should be used over raster-based images so they can be scaled
appropriately without any loss in resolution. However, I was naive in thinking
you could simply pop a raster image into Figma, export as an SVG, and use that
asset as an SVG without any other work. Unfortunately, Figma exports an SVG
with an embedded image (that is ultimately still raster-based, so there is no
benefit to it being an svg).

```javascript

<svg>
    // Some vectors
    <image /> // Raster content embedded
</svg>

```

In most cases, you won't notice a difference. In some cases (as with Safari on mobile or desktop),
there will be issues on reload or dynamic styling changes.

### Solution

Pick one or the other. You cannot have it both ways. You can either switch to
using a pure vector SVG with no embedded images, or you can switch to using
a pure raster-based image format like a PNG or JPEG.
