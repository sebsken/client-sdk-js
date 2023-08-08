"use strict";
var output_canvas_ctx, received_video;

function init_video_processing() {
    var output_canvas = document.getElementById("canvas-test");
    output_canvas_ctx = output_canvas.getContext('2d', {desynchronized: true});
    received_video = document.getElementById("video-test");
    requestAnimationFrame(compute_frame);
}

function compute_frame() {
    output_canvas_ctx.drawImage(received_video, 0, 0, received_video.videoWidth, received_video.videoHeight,
        0, 0, 1920, 1080);
    requestAnimationFrame(compute_frame);
}

export {init_video_processing};