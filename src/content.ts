/// <reference types="./types.d.ts" />
import channelInfo from "./channelInfo.ts";

class SubExporter {
  private pageRegex =
    /^http[s]?:\/\/([w]{3}\.)?youtube\.com\/feed\/channels(\?.*)?$/;

  private get isSubscriptionPage() {
    return (this.pageRegex.test(globalThis.location.href));
  }

  private targetObserver?: MutationObserver;
  private subsObserver?: MutationObserver;

  private killObservers = () => {
    this.targetObserver?.disconnect();
    this.subsObserver?.disconnect();
    this.targetObserver = undefined;
    this.subsObserver = undefined;
  };

  private get hasLoadedAllSubs() {
    return !document.querySelector("ytd-continuation-item-renderer");
  }

  private get loadedSubCount() {
    return document.querySelectorAll("ytd-channel-renderer").length;
  }

  private onSubListChange = (callback: () => void): Promise<void> =>
    new Promise((resolve) => {
      const hasLoadedSubs = this.hasLoadedAllSubs;
      if (hasLoadedSubs) resolve();
      let previousSubCount = this.loadedSubCount;
      this.subsObserver = new MutationObserver((_, obs) => {
        const currentSubCount = this.loadedSubCount;
        const hasFinishedLoadingSubs = this.hasLoadedAllSubs &&
          currentSubCount > previousSubCount;
        if (hasFinishedLoadingSubs && currentSubCount > previousSubCount) {
          obs.disconnect();
          resolve();
        } else {
          callback();
          previousSubCount = currentSubCount;
        }
      });
      this.subsObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });
    });

  private getSubData = (): channelInfo => {
    const ytData = JSON.parse(
      JSON.stringify(window.wrappedJSObject.ytInitialData),
    );
    return ytData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer
      .content.sectionListRenderer.contents
      .reduce(
        (acc: any, current: any) => [
          ...acc,
          ...current.itemSectionRenderer.contents,
        ],
        [],
      )
      .reduce(
        (acc: any, current: any) => [
          ...acc,
          ...current.shelfRenderer.content.expandedShelfContentsRenderer.items
            .map(
              (i: any) => ({
                name: i.channelRenderer.title.simpleText,
                id: i.channelRenderer.channelId,
                url:
                  `https://www.youtube.com/channel/${i.channelRenderer.channelId}`,
              }),
            ),
        ],
        [],
      );
  };

  private scrollToBottom = () => {
    const scrollingElement = document.scrollingElement || document.body;
    scrollingElement.scrollTop = scrollingElement.scrollHeight;
  };

  private scrollAllSubs = async () => {
    const onChangePromise = this.onSubListChange(() => {
      this.scrollToBottom();
    });
    this.scrollToBottom();
    await onChangePromise;
    this.scrollToBottom();
    const subs = this.getSubData();
    alert(subs);
    await browser.runtime.sendMessage({ type: "ytMessage", channelInfo: subs });
  };

  private onSubscriptionPageLoaded = () => {
    this.targetObserver = new MutationObserver(() => {
      if (document.querySelector("#exportButton")) return;
      const target = document.querySelector(
        "ytd-expanded-shelf-contents-renderer",
      );

      if (!target || !target.parentNode) return;
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
      exportButton.onclick = async () => await this.scrollAllSubs();

      target.parentNode.insertBefore(exportButton, target);
    });

    this.targetObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });
  };

  constructor() {
    if (this.isSubscriptionPage) this.onSubscriptionPageLoaded();
    globalThis.addEventListener("popstate", () => {
      console.log(globalThis.location.href);
      if (this.isSubscriptionPage) {
        this.onSubscriptionPageLoaded();
      } else {
        this.killObservers();
      }
    });
  }
}

new SubExporter();
