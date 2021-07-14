// selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .gallitem");

window.onload = () => {
  //once window loaded
  filterItem.onclick = (selectedItem) => {
    //when user clicked on filteritem div
    if (selectedItem.target.classList.contains("item")) {
      //if user click element has .item class
      filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in the first elemet
      selectedItem.target.classList.add("active"); //add that active class on the user selected element or item
      let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of the user selected item and storing in a filter name variable
      filterImg.forEach((image) => {
        let filterImages = image.getAttribute("data-name"); //getting image data-name value
        //if user selected item data-name value is equal to images data-name value
        //or user selected item data-name value is equal to "all"
        if (filterImages == filterName || filterName == "all") {
          image.classList.remove("hide");
          image.classList.add("show");
        } else {
          image.classList.add("hide");
          image.classList.remove("show");
        }
      });
    }
  };
  // for (let index = 0; index < filterImg.length; index++) {
  //   filterImg[index].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all avalilable images
  // }
};

// Popup Magnific Gallery image
// $(".gallimg").magnificPopup({
//   type: "image",
//   gallery: {
//     enabled: true,
//   },
// });

// Video;
// $(".gallvid").magnificPopup({
//   type: "iframe",
//   gallery: {
//     enabled: false,
//   },
// });
