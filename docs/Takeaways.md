# Takeaways

Lessons learned during the development of Colonial Dice Game.

## SVGs with embedded images do not render in Safari on reload or dynamic styling changes

### Problem

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

## Javascript 'of' operator vs array.forEach()

### Problem

In one of the slices for Island 2, I was trying to find the first match in an
array and return the index. I tried to use an array.forEach with a callback to
evaluate the condition and return early. However, the forEach loop is not actually
a oop. Instead, the callback will be evaluated on each element.

```javascript
    function getFirstIndex(collection) {
        collection.forEach(item => {
            if (item meets condition) {
                return item // Will not return
            }
        })
    }
```

### Solution

A much better solution is to use the 'of' operator in a for loop, which is similar
to a foreach loop in C#.

```javascript
    function getFirstIndex(collection) {
        for(const item of collection) {
            if (item meets collection) {
                return item // Will return
            }
        }
    }
```
