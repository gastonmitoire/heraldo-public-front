"use client";

import dynamic from "next/dynamic";

const Output = dynamic(
  async () => (await import("editorjs-react-renderer")).default,
  { ssr: false }
);

const PostContent = ({ postContent }: { postContent: Object }) => {
  return (
    <div className="flex flex-col gap-5 mx-auto">
      <Output data={postContent} />
    </div>
  );
};

export default PostContent;
