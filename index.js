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

const onSubListChange = (callback) => new Promise((resolve) => {
  const moreSubsToFetch = !!document.querySelector('ytd-continuation-item-renderer')
  if (!moreSubsToFetch) { resolve() };
  let previousSubCount = document.querySelectorAll('ytd-channel-renderer').length;
  const observer = new MutationObserver(async (_, obs) => {
    const moreSubsToFetch = !!document.querySelector('ytd-continuation-item-renderer');
    const currentSubCount = document.querySelectorAll('ytd-channel-renderer').length;
    if(!moreSubsToFetch && currentSubCount > previousSubCount) {
      resolve();
    } else {
      await callback();
      previousSubCount = currentSubCount;
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
});

const checkElementExists = (selector) => !!document.querySelector(selector)

const scrollToBottom = () => {
  const scrollingElement = (document.scrollingElement || document.body);
  scrollingElement.scrollTop = scrollingElement.scrollHeight;
}

const scrollAllSubs = async () => {
  const onChangePromise = onSubListChange(() => {scrollToBottom()});
  scrollToBottom();
  await onChangePromise;
  scrollToBottom();
  console.log('done loading all subs');
};

const x = new MutationObserver(() => {
  if (document.querySelector('#exportButton')) return;
  const searchButton = document.querySelector(
    false
      ? 'button.icon-button.topbar-menu-button-avatar-button'
      : 'ytd-expanded-shelf-contents-renderer'
  );
  console.log(searchButton);
  if (!searchButton) return;
  var exportButton = document.createElement('button');
  exportButton.id = "exportButton";
  exportButton.style.fontSize = "16px";
  exportButton.innerText = "Export Subs"
  exportButton.style.padding = "10px";
  exportButton.style.borderRadius = "5px";
  exportButton.style.color = "white";
  exportButton.style.display = 'block';
  exportButton.style.poition = 'fixed';
  exportButton.style.background = 'red';
  exportButton.style.marginLeft = 'auto';
  exportButton.style.marginRight = 0;
  exportButton.style.outline = exportButton.style.border = 'none';
  exportButton.onclick = async () => await scrollAllSubs();

  searchButton.parentNode.insertBefore(exportButton, searchButton);
});

setInterval(()=> {console.log('active')}, 1000)

x.observe(document.body, { childList: true, subtree: true })
window.history = null;
window.wrappedJSObject.history = null;
