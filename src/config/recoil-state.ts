import { atom, selector } from "recoil";

// TODO: set/get initial time value from LocalStroage / DB.
/**
 * Default to 30 minutes
 */
export const selectedViewState = atom({
  key: "selectedViewState",
  default: "Home"
});
// export const homeScrollPositionState = atom({
//   key: "homeScrollPositionState",
//   default: 0
// });
// export const newsScrollPositionState = atom({
//   key: "newsScrollPositionState",
//   default: 0
// });
// export const teamScrollPositionState = atom({
//   key: "teamScrollPositionState",
//   default: 0
// });
// export const contactScrollPositionState = atom({
//   key: "contactScrollPositionState",
//   default: 0
// });

// export const viewScrollPositionsState = selector({
//   key: "viewScrollPositionsState",
//   get: ({ get }) => {
//     return {
//       home: get(homeScrollPositionState),
//       news: get(newsScrollPositionState),
//       team: get(teamScrollPositionState),
//       contact: get(contactScrollPositionState)
//     };
//   }
// });
