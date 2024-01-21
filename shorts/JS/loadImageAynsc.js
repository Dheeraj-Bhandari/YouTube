/*
**Question:**

You have an array of URLs representing image resources to be loaded. 
Implement a function `loadImages` that takes an array of URLs and loads 
these images asynchronously. The function should return a Promise that
resolves with an array of image elements once all the images have been
successfully loaded.

For example:

```javascript
const imageUrls = [
  'url1.jpg',
  'url2.png',
  'url3.gif'
];

loadImages(imageUrls)
  .then(images => {
    console.log(images); // Output: [imgElement1, imgElement2, imgElement3]
  })
  .catch(error => {
    console.error(error);
  });
```

Your task is to create the `loadImages` function that loads each
image asynchronously and resolves with an array of HTML
image elements (`<img>`) once all images have been successfully loaded.
This challenge involves managing multiple asynchronous tasks (loading images)
and resolving them into an array.

*/

const imageUrls = [
    'url1.jpg',
    'url2.png',
    'url3.gif'
];

// function loadImages(imageUrls) {

//     return imageUrls.reduce((promiseChain, imgUrl) => {
//         // return PreviousImageElements.then((result) => {
//         return promiseChain.then((imageElements) => {
//             return new Promise((resolve) => {

//                 const imgEle = new Image();
//                 imgEle.onload(() => {
//                     const img = window.document.createElement('img')
//                     img.src = imgUrl;
//                     img.alt = imgUrl;
//                     resolve([...imageElements, img]);
//                 })
//                 imgEle.src = imgUrl
//             })
//         })

//         // })
//     }), Promise.resolve([])
// }

function loadImages(imageUrls) {
    return imageUrls.reduce((promiseChain, imageUrl) => {
        return promiseChain.then(imageElements => {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => {
                    const imgElement = window.document.createElement("img");
                    imgElement.src = imageUrl;
                    imgElement.alt = imageUrl;
                    resolve([...imageElements, imgElement]);
                };
                img.onerror = () => {
                    // Handle error if image fails to load
                    console.error(`Failed to load image: ${imageUrl}`);
                    resolve([...imageElements]); // Continue with other images
                };
                img.src = imageUrl;
            });
        });
    }, Promise.resolve([]));
}

loadImages(imageUrls)
    .then(images => {
        console.log(images); // Output: [imgElement1, imgElement2, imgElement3]
    })
    .catch(error => {
        console.error(error);
    });
