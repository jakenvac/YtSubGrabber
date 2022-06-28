/// <reference types="./types.d.ts" />
import type channelInfo from "./channelInfo.ts";

const createCsv = (channelInfo: channelInfo[]) => {
  const buildLine = ({ id, name, url }: channelInfo) => `${id},${url},${name}`;
  const subLines = [
    "Channel ID,Channel URL,Channel title",
    ...(channelInfo.map(buildLine)),
  ];
  return subLines.join("\n");
};

type ytMessage = {
  type: "ytMessage";
  channelInfo: channelInfo[];
};

browser.runtime.onMessage.addListener(async (message: ytMessage) => {
  if (message.type !== "ytMessage") return;

  const csvText = createCsv(message.channelInfo);
  const csvBlob = new Blob([csvText], { type: "text/plain;charset=utf8" });

  const fileUrl = URL.createObjectURL(csvBlob);
  await browser.downloads.download({
    allowHttpErrors: true,
    filename: "sub_export.csv",
    url: fileUrl,
  });
});
