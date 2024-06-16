// a simple alias for document.createElement() that also allows properties to be
// passed into the created-element:
const create = (tag, props) => Object.assign(document.createElement(tag), props);
// using an Arrow function to create the function as a const:
const altTextToImageCaption = () => {
  // using document.querySelectorAll() to retrieve only
  // <img> elements that have an 'alt'
  let images = document.querySelectorAll('img[alt].poke');

  // using NodeList.prototype.forEach() to iterate over the
  // NodeList of <img> element-nodes:
  images.forEach(
    // using an anonymous Arrow function:
    (img) => {
        // retrieving the content of the 'alt' attribute, removing leading
      // and trailing white-space with String.prototype.trim():
        let altText = img.getAttribute('alt').trim(),
            // creating a <figure> element:
            figure = create('div'),
          // creating a <figcaption> element, and passing in the
          // text of the 'alt' attribute as the text-content of
          // the created element:
            figCaption = create('p2',{textContent: altText});
      
      // using Element.append() to append the <figcaption> to the
      // <figure>:
      figure.append(figCaption);
      // using Element.before() to insert the created <figure>
      // element before the current <img>:
      img.before(figure);
      // using Element.prepend() to insert the <img> element to
      // the <figure> element, as its first-child (moving it from
      // its original position):
      figure.prepend(img);
    });
}

// binding the event-handling in JavaScript rather than inline
// event-binding; here we bind the altTextToImageCaption() function
// as the event-handler for the 'DOMContentLoaded' event:
window.addEventListener('DOMContentLoaded', altTextToImageCaption);
