import userAvatar from "@public/images/official/avatar/user.png";
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { CommentContext } from "./../index";
import Comment from "./Comment";

function ListComments() {
  const { blogComments } = useContext(CommentContext);
  const { comments } = blogComments;

  const aboutAuthor = useSelector((state) => state.common.aboutAuthor);
  if (comments.length === 0) return null;
  return (
    <div id="comment-area" className="w-full">
      <div className="bg-secondary w-full flex justify-center items-center text-lg uppercase tracking-wide mb-8 px-4 h-11">
        {comments.length} BÌNH LUẬN
      </div>
      <div>
        {comments.map((e, index) => {
          const { content, repliedAt, reply, createdAt, name } = e;
          return (
            <div key={index}>
              <Comment
                type="user"
                content={content}
                name={name}
                time={createdAt}
                avatar={userAvatar}
              />
              {reply ? (
                <div className="ml-12">
                  <Comment
                    type="admin"
                    content={reply}
                    name={aboutAuthor?.name}
                    time={repliedAt}
                    avatar={aboutAuthor?.avatar}
                  />
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListComments;
