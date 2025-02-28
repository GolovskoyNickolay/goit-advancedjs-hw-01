import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new VimeoPlayer(iframe);

const STORAGE_KEY = 'videoplayer-current-time';
const THROTTLE_INTERVAL = 1000;

function setCurrentTime(timing) {
  try {
    localStorage.setItem(STORAGE_KEY, timing);
  } catch (error) {
    console.error(
      `Failed to save current time to localStorage: ${error.message}`
    );
  }
}

function getCurrentTime() {
  try {
    return Number(localStorage.getItem(STORAGE_KEY));
  } catch (error) {
    console.error(
      `Failed to retrieve current time from localStorage: ${error.message}`
    );
    return 0;
  }
}

const throttledSetCurrentTime = throttle(setCurrentTime, THROTTLE_INTERVAL, {
  trailing: true,
});

player.on('timeupdate', function (data) {
  throttledSetCurrentTime(data.seconds);
});

player.setCurrentTime(getCurrentTime()).catch(error => {
  console.error(`Failed to set current time on Vimeo player: ${error.message}`);
});
