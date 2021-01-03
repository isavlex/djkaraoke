import 'lightgallery.js'
import 'lg-thumbnail.js'
import 'lg-video.js'
lightGallery(document.getElementById("lightgallery"), {
  mode: "lg-slide",
  thumbnail:true,
})

lightGallery(document.getElementById('video-gallery'), {
  thumbnail:true,
  subHtmlSelectorRelative: true,
})
lightGallery(document.getElementById('leadings-video'), {
  thumbnail:true,
  subHtmlSelectorRelative: true,
})