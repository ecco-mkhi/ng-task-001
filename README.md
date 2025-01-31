# Ng001

This simple Angular app shows a list of Youtube videos, their titles, channel name and thumbnail. The grid videos are made clickable so you can (ideally) start watching them without visiting Youtube. The app is working but you need to fix the following:
1. When a video is selected for playing only an image is shown.
2. If you click on a video, the page will not show you what clicked on in case you refreshed the page (so we need to persist the clicked video);
3. The data binding/template rendering and click hooks were written entirely in vanilla JS. Instead, you need to utilize the framework features.
4. Refactor the grid elements into a separate component called grid-item. The component is already created for you.
5. You need to keep track of the watch history for up to 10 videos.