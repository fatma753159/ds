document.addEventListener("DOMContentLoaded", () => {
    const videoPreview = document.querySelector(".project-video-preview");
    const modal = document.getElementById("videoModal");
    const modalVideo = document.getElementById("modalVideo");
    const closeModal = document.getElementById("closeModal");

    
    videoPreview.addEventListener("click", () => {
        modal.style.display = "flex";
        document.body.classList.add("modal-open");
        modalVideo.play(); 
    });

    
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        modalVideo.pause(); 
        modalVideo.currentTime = 0; 
    });

    
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            document.body.classList.remove("modal-open");
            modalVideo.pause();
            modalVideo.currentTime = 0;
        }
    });
});
