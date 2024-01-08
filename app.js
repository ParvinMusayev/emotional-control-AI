const video = document.getElementById("video");


function startCamera() {
    //   return false;
    navigator.getUserMedia(
      {
        video: {}
      },
      stream => (video.srcObject = stream),
      err => console.log(err)
    );
  }

//   startCamera()