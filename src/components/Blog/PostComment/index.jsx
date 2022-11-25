import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm/CommentForm";
import ListComments from "./ListComments";

PostComment.propTypes = {
  comments: PropTypes.object,
};

export const CommentContext = React.createContext(null);

function PostComment({ blogComments }) {
  const [postCommentState, setPostCommentState] = useState();

  useEffect(() => {
    if (blogComments?.comments) {
      setPostCommentState({ blogComments });
    } else {
      setPostCommentState({ blogComments: { ...blogComments, comments: [] } });
    }
  }, [blogComments]);

  const handleNewComment = (newComment) => {
    let newListComment = [...postCommentState.blogComments?.comments];
    newListComment.push(newComment);
    setPostCommentState({
      blogComments: { ...blogComments, comments: newListComment },
    });
  };

  return (
    <div className="w-full">
      <CommentContext.Provider value={postCommentState}>
        {postCommentState ? <ListComments /> : ""}

        <CommentForm
          blogId={blogComments?.id}
          handleNewComment={handleNewComment}
        />
      </CommentContext.Provider>
    </div>
  );
}

export default PostComment;
