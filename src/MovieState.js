//Import Images
import initial_2048 from "./img/2048-initial.png";
import final_2048 from "./img/2048.png";
import music_app_layout from "./img/music-app-layout.png";
import music_app_library from "./img/music-app-library.png";
import pig from "./img/pig-total_image.png";
import tetris_initial from "./img/tetris-inital.png";
import tetris_final from "./img/tetris-final.png";

export const MovieState = () => {
  return [
    {
      title: "2048",
      mainImg: initial_2048,
      secondaryImg: final_2048,
      url: "/projects/2048",
      about: {
        title: "2048",
        description:
          "2048 - My attempt to recreate a popular game by the same name. you can slide the tiles in all four directions and add up the tiles that have all the same number on them to finally Make a single tile add up to 2048.",
        timePeriod: "2 Weeks",
        type: "personal",
        technologies: "HTML,CSS,JavaScript",
        git_link: "https://github.com/venkatkadiri/2048",
      },
    },
    {
      title: "Tetris",
      mainImg: tetris_final,
      secondaryImg: tetris_final,
      url: "/projects/Tetris",
      about: {
        title: "Tetris",
        description:
          "Tetris- it’s a game that all of us have tried to play on our Nokia phones Except this time it’s color… rules are pretty simple, you stack all the blocks of similar shapes so that they cancel out,Thereby increasing the points your only goal here is to stop the blocks from hitting the sealing and gain as many points as you can in the process...",
        timePeriod: "1 month",
        type: "personal",
        technologies: "HTML,CSS,JavaScript",
        git_link: "https://github.com/venkatkadiri/tetris-master",
      },
    },
    {
      title: "Dice Game",
      mainImg: pig,
      secondaryImg: pig,
      url: "/projects/Dice-game",
      about: {
        title: "Dice Game",
        description:
          "The Dice Game also called “The Pig Game” is the first game that I built using HTML, CSS and Javascript. Two players play this game…. Each player rolls the dice indefinitely and the player’s current score updates accordingly until he/she rolls a 1 on the dice at which point the current score resets to 0 to avoid this consequence the player can decide to hold his current score and hand the turn over to the other player. In this way whichever player reaches the goal of 100 points is the winner!!!!",
        timePeriod: "5 Days",
        type: "personal",
        technologies: "HTML,CSS,JavaScript",
        git_link: "https://github.com/venkatkadiri/piggame",
      },
    },

    {
      title: "Wave Music Player",
      mainImg: music_app_library,
      secondaryImg: music_app_layout,
      url: "/projects/Music-Player",
      about: {
        title: "Wave Music Player",
        description:
          "The Wave Music App is my music player that has been built using “React” I have made use of new technologies like saas framer motion and animations, I have taken great care regarding the user experience to make the app more pleasant for the user so that when the user opens the app he/she can listen to the pleasant chill-hop songs that are present in the music library of the app.",
        timePeriod: "2 months",
        type: "personal",
        technologies: "HTML,CSS,JavaScript,scss,React",
        git_link: "https://github.com/venkatkadiri/music_player",
      },
    },
  ];
};
