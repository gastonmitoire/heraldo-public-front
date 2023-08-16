"use client";
import React from "react";
import { PostProps } from "@/types";

//use require since editorjs-html doesn't have types
import editorJsHtml from "editorjs-html";

function customIframeParser(block: any) {
  const iframeUrl = block.data?.iframe;

  return `<iframe src="${iframeUrl}" width="100%" height="280px" frameborder="0" allowfullscreen></iframe>`;
}

const EditorJsToHtml = editorJsHtml({
  customIframe: customIframeParser,
});

const PostContent = ({ data }: {
  data: any;
}) => {
    const html = EditorJsToHtml.parse(data);


  return (
    //✔️ It's important to add key={data.time} here to re-render based on the latest data.
    <div key={data.time} style={{ background: "FFF" }}>
      {html?.map((item, index) => {
        if (typeof item === "string") {
          return (
            <div dangerouslySetInnerHTML={{ __html: item }} key={index} className="py-2"></div>
          );
        }
        return item;
      })}
    </div>
  );
};

export default PostContent;