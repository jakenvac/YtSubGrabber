/// <reference types="./types.d.ts" />

import channelInfo from "./channelInfo.ts";
// yt proper path ytInitialData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].shelfRenderer.content.expandedShelfContentsRenderer.items[0].channelRenderer.channelId
// var getSubs = (async () => {
//   const ytData = JSON.parse(JSON.stringify(window.wrappedJSObject.ytInitialData));
//   XPCNativeWrapper(window.wrappedJSObject.ytInitialData);
//   var subData = ytData.contents
//     .singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content
//     .sectionListRenderer.contents[0].itemSectionRenderer.contents.map(
//       (isr) => {
//         const data = isr.channelListItemRenderer;
//         return {
//           name: data.title.runs[0].text,
//           id: data.channelId,
//           url: `https://www.youtube.com/channel/${data.channelId}`
//         }
//       }
//     )

//   var buildLine = ({ id, name, url }) => `${id},${url},${name}`
//   var subLines = ['Channel ID,Channel URL,Channel title', ...(subData.map(buildLine))]
//   var csvData = subLines.join("\n");
//   browser.runtime.sendMessage({ ytSubs: csvData })
// });

const getSubData = (): channelInfo => {
  const ytData = JSON.parse(
    JSON.stringify(window.wrappedJSObject.ytInitialData),
  );
  return ytData.contents.twoColumnBrowseResultsRenderer.tabs[0]
    .tabRenderer.content
    .sectionListRenderer.contents
    .reduce(
      (
        acc: any,
        current: any,
      ) => [...acc, ...current.itemSectionRenderer.contents],
      [],
    )
    .reduce(
      (
        acc: any,
        current: any,
      ) => [
        ...acc,
        ...current.shelfRenderer.content.expandedShelfContentsRenderer.items
          .map((
            i: any,
          ) => ({
            name: i.channelRenderer.title.simpleText,
            id: i.channelRenderer.channelId,
            url:
              `https://www.youtube.com/channel/${i.channelRenderer.channelId}`,
          })),
      ],
      [],
    );
};

const onSubListChange = (
  callback: ((() => void) | (() => Promise<void>)),
): Promise<void> =>
  new Promise((resolve) => {
    const moreSubsToFetch = !!document.querySelector(
      "ytd-continuation-item-renderer",
    );
    if (!moreSubsToFetch) resolve();
    let previousSubCount =
      document.querySelectorAll("ytd-channel-renderer").length;
    const observer = new MutationObserver(async () => {
      const moreSubsToFetch = !!document.querySelector(
        "ytd-continuation-item-renderer",
      );
      const currentSubCount =
        document.querySelectorAll("ytd-channel-renderer").length;
      if (!moreSubsToFetch && currentSubCount > previousSubCount) {
        resolve();
      } else {
        await callback();
        previousSubCount = currentSubCount;
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  });

const scrollToBottom = () => {
  const scrollingElement = (document.scrollingElement || document.body);
  scrollingElement.scrollTop = scrollingElement.scrollHeight;
};

const scrollAllSubs = async () => {
  const onChangePromise = onSubListChange(() => {
    scrollToBottom();
  });
  scrollToBottom();
  await onChangePromise;
  scrollToBottom();
  const subs = getSubData();
  await browser.runtime.sendMessage({ type: "ytMessage", channelInfo: subs });
};

const x = new MutationObserver(() => {
  if (document.querySelector("#exportButton")) return;
  const searchButton = document.querySelector(
    false
      ? "button.icon-button.topbar-menu-button-avatar-button"
      : "ytd-expanded-shelf-contents-renderer",
  );

  console.log(searchButton);
  if (!searchButton) return;
  const exportButton = document.createElement("button");
  exportButton.style.fontSize = "16px";
  exportButton.id = "exportButton";
  exportButton.innerText = "Export Subs";
  exportButton.style.padding = "10px";
  exportButton.style.borderRadius = "5px";
  exportButton.style.color = "white";
  exportButton.style.display = "block";
  exportButton.style.background = "red";
  exportButton.style.marginLeft = "auto";
  exportButton.style.marginRight = "0";
  exportButton.style.outline = exportButton.style.border = "none";
  exportButton.onclick = async () => await scrollAllSubs();

  searchButton?.parentNode?.insertBefore(exportButton, searchButton);
});

x.observe(document.body, { childList: true, subtree: true });
